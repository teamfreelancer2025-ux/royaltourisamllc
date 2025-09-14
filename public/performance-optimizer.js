// Performance Optimization Script for Dubai Car Rental Website

(function() {
  'use strict';

  // Lazy Loading Images
  function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // Preload Critical Resources
  function preloadCriticalResources() {
    const criticalResources = [
      '/src/assets/dubai-luxury-hero.jpg',
      '/src/assets/cars/mercedes-s-class.jpg',
      '/src/assets/cars/bmw-7-series.jpg',
      '/src/assets/logo-premium.png'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = resource;
      document.head.appendChild(link);
    });
  }

  // Critical CSS Inline Loader
  function loadNonCriticalCSS() {
    const nonCriticalCSS = [
      'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap'
    ];

    nonCriticalCSS.forEach(css => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = css;
      link.media = 'print';
      link.onload = function() { this.media = 'all'; };
      document.head.appendChild(link);
    });
  }

  // Service Worker Registration for Caching
  function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }

  // Web Vitals Monitoring
  function monitorWebVitals() {
    // Core Web Vitals tracking
    function sendToAnalytics(metric) {
      if (typeof gtag === 'function') {
        gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: metric.name,
          value: Math.round(metric.value),
          non_interaction: true
        });
      }
    }

    // Import web-vitals library dynamically
    import('https://unpkg.com/web-vitals@3/dist/web-vitals.js').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(sendToAnalytics);
      getFID(sendToAnalytics);
      getFCP(sendToAnalytics);
      getLCP(sendToAnalytics);
      getTTFB(sendToAnalytics);
    }).catch(err => console.log('Web Vitals library failed to load:', err));
  }

  // Resource Hints for External Domains
  function addResourceHints() {
    const hints = [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'dns-prefetch', href: 'https://api.whatsapp.com' },
      { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
      { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' }
    ];

    hints.forEach(hint => {
      const link = document.createElement('link');
      Object.keys(hint).forEach(key => {
        if (key === 'crossorigin') {
          link.crossOrigin = hint[key];
        } else {
          link[key] = hint[key];
        }
      });
      document.head.appendChild(link);
    });
  }

  // Image Format Detection and Optimization
  function optimizeImageFormats() {
    // Check for WebP support
    const webpSupported = document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0;
    
    if (webpSupported) {
      document.documentElement.classList.add('webp-supported');
    }

    // Check for AVIF support
    const avifSupported = new Promise(resolve => {
      const avif = new Image();
      avif.onload = avif.onerror = () => resolve(avif.height === 2);
      avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABoAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=';
    });

    avifSupported.then(supported => {
      if (supported) {
        document.documentElement.classList.add('avif-supported');
      }
    });
  }

  // Initialize all optimizations
  function initialize() {
    // Run immediately
    addResourceHints();
    optimizeImageFormats();
    
    // Run when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        lazyLoadImages();
        preloadCriticalResources();
      });
    } else {
      lazyLoadImages();
      preloadCriticalResources();
    }
    
    // Run when page is fully loaded
    window.addEventListener('load', () => {
      loadNonCriticalCSS();
      registerServiceWorker();
      monitorWebVitals();
    });
  }

  initialize();
})();