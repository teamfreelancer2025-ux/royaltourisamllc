import { Helmet } from 'react-helmet-async';
import { SEO_CONFIG, generateLocalBusinessSchema, generateCarRentalServiceSchema } from '@/utils/seo';

interface SEOOptimizerProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: any[];
  hreflangs?: Array<{ lang: string; url: string }>;
  noIndex?: boolean;
}

export const SEOOptimizer = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = `${SEO_CONFIG.siteUrl}/src/assets/dubai-luxury-hero.webp`,
  ogType = "website",
  structuredData = [],
  hreflangs = [],
  noIndex = false
}: SEOOptimizerProps) => {
  const fullTitle = title.includes(SEO_CONFIG.siteName) ? title : `${title} | ${SEO_CONFIG.siteName}`;
  const keywordsString = keywords.join(', ');
  
  // Default structured data
  const defaultStructuredData = [
    generateLocalBusinessSchema(),
    generateCarRentalServiceSchema(),
    ...structuredData
  ];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywordsString} />}
      <meta name="author" content={SEO_CONFIG.siteName} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      <meta name="googlebot" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Language and Region */}
      <html lang="en" />
      <meta httpEquiv="content-language" content="en-AE" />
      <meta name="geo.region" content="AE-DU" />
      <meta name="geo.placename" content="Dubai" />
      <meta name="geo.position" content="25.276987;55.296249" />
      <meta name="ICBM" content="25.276987, 55.296249" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Hreflang Tags */}
      {hreflangs.map(({ lang, url }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={SEO_CONFIG.siteUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl || SEO_CONFIG.siteUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} - Dubai luxury car rental service`} />
      <meta property="og:locale" content="en_AE" />
      <meta property="og:site_name" content={SEO_CONFIG.siteName} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${title} - Dubai luxury car rental`} />
      <meta name="twitter:creator" content="@royalcitytourism" />
      <meta name="twitter:site" content="@royalcitytourism" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#D4AF37" />
      <meta name="msapplication-TileColor" content="#D4AF37" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=yes" />
      
      {/* Performance and Security */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Structured Data */}
      {defaultStructuredData.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
      
      {/* Preconnect to External Resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://api.whatsapp.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
    </Helmet>
  );
};

export default SEOOptimizer;