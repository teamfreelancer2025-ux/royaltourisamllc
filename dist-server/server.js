var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import fs from 'node:fs/promises';
import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
// Get __dirname equivalent in ES modules
var __dirname = dirname(fileURLToPath(import.meta.url));
var isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD;
process.env.MY_CUSTOM_SECRET = '42'; // replace with your own secret
export function createServer() {
    return __awaiter(this, arguments, void 0, function (root, isProd, hmrPort) {
        var resolve, indexProd, _a, app, vite, _b, _c, _d, _e;
        var _this = this;
        if (root === void 0) { root = process.cwd(); }
        if (isProd === void 0) { isProd = process.env.NODE_ENV === 'production'; }
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    resolve = function (p) { return path.resolve(__dirname, p); };
                    if (!isProd) return [3 /*break*/, 2];
                    return [4 /*yield*/, fs.readFile(resolve('dist/client/index.html'), 'utf-8')];
                case 1:
                    _a = _f.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = '';
                    _f.label = 3;
                case 3:
                    indexProd = _a;
                    app = express();
                    if (!!isProd) return [3 /*break*/, 6];
                    return [4 /*yield*/, import('vite')];
                case 4: return [4 /*yield*/, (_f.sent()).createServer({
                        root: root,
                        logLevel: isTest ? 'error' : 'info',
                        server: {
                            middlewareMode: true,
                            watch: {
                                // During tests we don't want to catch file save events that would trigger
                                // a hot update. (on server side the client is not actually connected so
                                // it would crash with an error)
                                ignored: '!**/*',
                            },
                            hmr: { port: hmrPort },
                        },
                    })];
                case 5:
                    vite = _f.sent();
                    // use vite's connect instance as middleware
                    app.use(vite.middlewares);
                    return [3 /*break*/, 9];
                case 6:
                    _c = (_b = app).use;
                    return [4 /*yield*/, import('compression')];
                case 7:
                    _c.apply(_b, [(_f.sent()).default()]);
                    _e = (_d = app).use;
                    return [4 /*yield*/, import('serve-static')];
                case 8:
                    _e.apply(_d, [(_f.sent()).default(resolve('dist/client'), {
                            index: false,
                        })]);
                    _f.label = 9;
                case 9:
                    app.use('*', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                        var url, template, render, _a, appHtml, head, html, e_1;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _b.trys.push([0, 8, , 9]);
                                    url = req.originalUrl;
                                    template = void 0, render = void 0;
                                    if (!!isProd) return [3 /*break*/, 4];
                                    return [4 /*yield*/, fs.readFile(resolve('index.html'), 'utf-8')];
                                case 1:
                                    // always read fresh html in dev
                                    template = _b.sent();
                                    return [4 /*yield*/, vite.transformIndexHtml(url, template)];
                                case 2:
                                    template = _b.sent();
                                    return [4 /*yield*/, vite.ssrLoadModule('/src/entry-server.tsx')];
                                case 3:
                                    render = (_b.sent()).render;
                                    return [3 /*break*/, 6];
                                case 4:
                                    template = indexProd;
                                    return [4 /*yield*/, import(path.join(__dirname, '../dist/entry-server.js'))];
                                case 5:
                                    // The path is relative to the compiled server.js in dist-server/
                                    render = (_b.sent()).render;
                                    _b.label = 6;
                                case 6: return [4 /*yield*/, render(url)];
                                case 7:
                                    _a = _b.sent(), appHtml = _a.appHtml, head = _a.head;
                                    html = template
                                        .replace('<!--app-head-->', head)
                                        .replace('<!--app-html-->', appHtml);
                                    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
                                    return [3 /*break*/, 9];
                                case 8:
                                    e_1 = _b.sent();
                                    vite === null || vite === void 0 ? void 0 : vite.ssrFixStacktrace(e_1);
                                    console.log(e_1.stack);
                                    res.status(500).end(e_1.stack);
                                    return [3 /*break*/, 9];
                                case 9: return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/, { app: app, vite: vite }];
            }
        });
    });
}
// Export the app for Vercel serverless functions
// This is the key change: export the app so Vercel can use it
export default (function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var app;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, createServer(undefined, true)];
            case 1:
                app = (_a.sent()).app;
                return [2 /*return*/, app(req, res)];
        }
    });
}); });
