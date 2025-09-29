import { createRoot, hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx'
import './index.css'
import { SEOHead } from './components/SEOHead';
import { SEO_CONFIG } from './config/seo';

// Use hydrateRoot instead of createRoot for SSR hydration
hydrateRoot(document.getElementById("root")!, 
  <HelmetProvider>
    <SEOHead 
      title={SEO_CONFIG.defaultMeta.title}
      description={SEO_CONFIG.defaultMeta.description}
      keywords={SEO_CONFIG.defaultMeta.keywords}
      canonicalUrl={SEO_CONFIG.baseUrl}
      ogImage={`${SEO_CONFIG.baseUrl}/dubai-luxury-hero.webp`}
      ogType="website"
    >
      <App />
    </SEOHead>
  </HelmetProvider>
);
