import { useEffect } from 'react';

// Technical SEO enhancements component
export const TechnicalSEO = () => {
  useEffect(() => {
    // The following scripts were commented out because they do not exist in the project.
    // This prevents 404 errors in the browser console.

    // // Performance optimization script loader
    // const script = document.createElement('script');
    // script.src = '/performance-optimizer.js';
    // script.async = true;
    // document.body.appendChild(script);

    // // Google Analytics script loader (already included in index.html)
    // const gaScript = document.createElement('script');
    // gaScript.src = '/google-analytics.js'; // Assuming this is a local script
    // gaScript.async = true;
    // document.head.appendChild(gaScript);

    const addStructuredData = (data: Record<string, unknown>, id: string) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      script.innerHTML = JSON.stringify(data);
      document.head.appendChild(script);
    };

    // Clean up function
    return () => {
      // Cleanup on unmount
      // const scripts = document.querySelectorAll('script[src*="performance-optimizer"], script[src*="google-analytics"]');
      // scripts.forEach(script => script.remove());
    };
  }, []);

  return null; // This component doesn't render anything
};

export default TechnicalSEO;