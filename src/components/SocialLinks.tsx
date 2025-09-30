import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { SEO_CONFIG } from '../config/seo';

const SocialLinks = () => {
  const { socialMedia } = SEO_CONFIG;

  return (
    <div className="flex items-center gap-4">
      <a
        href={socialMedia.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label="Follow us on Facebook"
      >
        <Facebook className="w-5 h-5" />
      </a>
      <a
        href={socialMedia.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label="Follow us on Instagram"
      >
        <Instagram className="w-5 h-5" />
      </a>
      <a
        href={socialMedia.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label="Follow us on Twitter"
      >
        <Twitter className="w-5 h-5" />
      </a>
      <a
        href={socialMedia.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label="Follow us on LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <a
        href={socialMedia.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label="Subscribe to our YouTube channel"
      >
        <Youtube className="w-5 h-5" />
      </a>
    </div>
  );
};

export default SocialLinks;