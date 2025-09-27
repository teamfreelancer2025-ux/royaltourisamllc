import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { constants } from 'fs';

const IMAGE_PATHS = [
    'public/carousel-images',
    'public/cars',
    'public', // For dubai-luxury-hero.jpg
    'src/assets',
];

const BACKUP_REMOVED_JPGS_DIR = 'backup_removed_jpgs';
const BACKUP_ORIGINAL_IMAGES_DIR = 'backup_original_images';

const REPORT = {
    moved_jpgs: [],
    created_webps: [],
    html_css_js_changes: [],
    diffs: [],
};

async function ensureDirectoryExists(dir) {
    await fs.mkdir(dir, { recursive: true });
}

async function getJpgFiles(dir) {
    let jpgFiles = [];
    try {
        const files = await fs.readdir(dir, { withFileTypes: true });
        for (const file of files) {
            if (file.isDirectory()) {
                jpgFiles = jpgFiles.concat(await getJpgFiles(path.join(dir, file.name)));
            } else if (file.isFile() && (file.name.endsWith('.jpg') || file.name.endsWith('.jpeg'))) {
                jpgFiles.push(path.join(dir, file.name));
            }
        }
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log(`Directory not found: ${dir}. Skipping.`);
        } else {
            throw error;
        }
    }
    return jpgFiles;
}

async function fileExists(filePath) {
    try {
        await fs.access(filePath, constants.F_OK);
        return true;
    } catch (e) {
        return false;
    }
}

async function optimizeImage(filePath) {
    const parsedPath = path.parse(filePath);
    const baseName = parsedPath.name;
    const dir = parsedPath.dir;
    const webpPath = path.join(dir, `${baseName}.webp`);

    console.log(`Checking for WEBP counterpart for: ${filePath}`);
    const webpExists = await fileExists(webpPath);
    console.log(`WEBP counterpart exists: ${webpExists} for ${webpPath}`);

    if (webpExists) {
        // a) If a same-base-name .webp already exists, move the original .jpg/.jpeg into backup_removed_jpgs
        const backupDir = path.join(BACKUP_REMOVED_JPGS_DIR, dir);
        await ensureDirectoryExists(backupDir);
        const newPath = path.join(backupDir, parsedPath.base);
        console.log(`Attempting to move ${filePath} to ${newPath}`);
        const jpgStillExists = await fileExists(filePath);
        if (jpgStillExists) {
            await fs.rename(filePath, newPath);
            REPORT.moved_jpgs.push({ original: filePath, moved_to: newPath });
            console.log(`Moved ${filePath} to ${newPath}`);
        } else {
            console.log(`Skipping move: ${filePath} no longer exists.`);
        }
    } else {
        // b) If no .webp exists, convert the .jpg/.jpeg into optimized .webp variants
        const backupDir = path.join(BACKUP_ORIGINAL_IMAGES_DIR, dir);
        await ensureDirectoryExists(backupDir);
        const originalBackupPath = path.join(backupDir, parsedPath.base);
        console.log(`Attempting to copy original ${filePath} to ${originalBackupPath}`);
        const jpgStillExistsForCopy = await fileExists(filePath);
        if (jpgStillExistsForCopy) {
            await fs.copyFile(filePath, originalBackupPath); // Copy original to backup first
            console.log(`Copied original ${filePath} to ${originalBackupPath}`);
        } else {
            console.log(`Skipping copy: ${filePath} no longer exists for backup.`);
            return; // Skip optimization if original is already gone
        }

        const image = sharp(filePath);
        const metadata = await image.metadata();
        const originalWidth = metadata.width;

        const sizes = [
            { width: 480, suffix: '-480' },
            { width: 768, suffix: '-768' },
            { width: 1200, suffix: '' } // 1200 or original
        ];

        for (const size of sizes) {
            const outputWidth = size.width < originalWidth ? size.width : originalWidth;
            const outputFileName = `${baseName}${size.suffix}.webp`;
            const outputPath = path.join(dir, outputFileName);
            await image
                .clone()
                .resize(outputWidth)
                .webp({ quality: 80 })
                .toFile(outputPath);
            REPORT.created_webps.push({ original_jpg: filePath, created_webp: outputPath, size: `${outputWidth}w` });
            console.log(`Created ${outputPath}`);
        }

        // c) For very large images (>1MB), generate lower-size webp and ensure the large original is backed up and removed
        const stats = await fs.stat(filePath);
        if (stats.size > 1024 * 1024) { // > 1MB
            console.log(`Attempting to remove large original JPG: ${filePath}`);
            const jpgExistsForUnlink = await fileExists(filePath);
            if (jpgExistsForUnlink) {
                await fs.unlink(filePath); // Remove original large JPG
                console.log(`Removed large original JPG: ${filePath}`);
            } else {
                console.log(`Skipping unlink: ${filePath} no longer exists (already removed).`);
            }
        } else {
            // If not a very large image, the original JPG is not needed in the public folder after WEBP conversion
            // It has already been backed up by fs.copyFile above
            console.log(`Attempting to remove original JPG after conversion: ${filePath}`);
            const jpgExistsForUnlink = await fileExists(filePath);
            if (jpgExistsForUnlink) {
                await fs.unlink(filePath);
                console.log(`Removed original JPG after conversion: ${filePath}`);
            } else {
                console.log(`Skipping unlink: ${filePath} no longer exists (already removed).`);
            }
        }
    }
}

async function main() {
    await ensureDirectoryExists(BACKUP_REMOVED_JPGS_DIR);
    await ensureDirectoryExists(BACKUP_ORIGINAL_IMAGES_DIR);

    const allJpgFiles = [];
    for (const p of IMAGE_PATHS) {
        allJpgFiles.push(...await getJpgFiles(p));
    }

    for (const jpgFile of allJpgFiles) {
        await optimizeImage(jpgFile);
    }

    await fs.writeFile('image_optimization_report.json', JSON.stringify(REPORT, null, 2));
    console.log('Image optimization report generated: image_optimization_report.json');
}

main().catch(console.error);
