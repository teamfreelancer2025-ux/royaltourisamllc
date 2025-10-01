import { Helmet } from 'react-helmet-async';
import { SEO_CONFIG } from '../config/seo';
import { generateLocalBusinessSchema, generateCarRentalServiceSchema, generateWebsiteSchema } from '../utils/seo';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  schemas?: Array<Record<string, any>>;
  structuredData?: any[];
  hreflangs?: Array<{ lang: string; url: string }>;
  noIndex?: boolean;
  children?: React.ReactNode;
  ogImages?: { url: string; width: string; height: string; alt: string; }[];
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
}

export const SEOHead = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage,
  ogType = "website",
  structuredData = [],
  hreflangs = [],
  noIndex = false,
  children,
  twitterCard = "summary_large_image"
}: SEOHeadProps) => {
  const finalTitle = title || SEO_CONFIG.defaultMeta.title;
  const finalDescription = description || SEO_CONFIG.defaultMeta.description;
  const finalKeywords = keywords.length > 0 ? keywords.join(', ') : SEO_CONFIG.defaultMeta.keywords.join(', ');
  const finalCanonicalUrl = canonicalUrl || SEO_CONFIG.baseUrl;
  const finalOgImage = ogImage ? 
    (ogImage.startsWith('http') ? ogImage : `${SEO_CONFIG.baseUrl}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`) : 
    `${SEO_CONFIG.baseUrl}/dubai-luxury-hero.webp`;

  const fullTitle = finalTitle.includes(SEO_CONFIG.siteName) ? finalTitle : `${finalTitle} | ${SEO_CONFIG.siteName}`;
  
  // Default structured data
  const defaultStructuredData = [
    generateWebsiteSchema(),
    generateLocalBusinessSchema(),
    generateCarRentalServiceSchema(),
    ...structuredData
  ];

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{fullTitle}</title>
        <meta name="description" content={finalDescription} />
        <meta name="keywords" content={finalKeywords} />
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
        <link rel="canonical" href={finalCanonicalUrl} />
        
        {/* Hreflang Tags */}
        {hreflangs.map(({ lang, url }) => (
          <link key={lang} rel="alternate" hrefLang={lang} href={url} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={SEO_CONFIG.baseUrl} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:site_name" content={SEO_CONFIG.siteName} />
        <meta property="og:title" content={fullTitle.length > 60 ? fullTitle.substring(0, 57) + '...' : fullTitle} />
        <meta property="og:description" content={finalDescription.length > 130 ? finalDescription.substring(0, 127) + '...' : finalDescription} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={finalCanonicalUrl} />
        <meta property="og:image" content={finalOgImage} />
        <meta property="og:image:secure_url" content={finalOgImage} />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${finalTitle} - Luxury Car Rental Dubai`} />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:updated_time" content={new Date().toISOString()} />
        
        {/* Schema.org Structured Data */}
        {defaultStructuredData.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
        
        {/* Preload Hero Image */}
        <link rel="preload" as="image" href={`${SEO_CONFIG.baseUrl}/dubai-luxury-hero.webp`} />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </Helmet>
      {children}
    </>
  );
};

export default SEOHead;
