// Service Worker for Dubai Car Rental Website
// Enhanced caching strategy for better performance and offline functionality

const CACHE_NAME = 'royal-city-tourism-v1.2';
const STATIC_CACHE = 'static-v1.2';
const DYNAMIC_CACHE = 'dynamic-v1.2';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/src/assets/logo-premium.png',
  '/src/assets/dubai-luxury-hero.jpg',
  '/src/assets/cars/mercedes-s-class.jpg',
  '/src/assets/cars/bmw-7-series.jpg',
  '/src/assets/cars/toyota-hiace-13.jpg',
  '/favicon.png',
  '/robots.txt',
  '/sitemap.xml'
];

// Routes to cache dynamically
const DYNAMIC_ROUTES = [
  '/about',
  '/rent-a-car', 
  '/faq',
  '/reviews',
  '/contact',
  '/blog'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  console.log('[SW] Installing Service Worker');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activating Service Worker');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve cached content with network fallback
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip external requests (except fonts and APIs we control)
  if (!url.origin.includes(self.location.origin) && 
      !url.host.includes('fonts.googleapis.com') && 
      !url.host.includes('fonts.gstatic.com')) {
    return;
  }

  // Handle different types of requests
  if (request.destination === 'image') {
    event.respondWith(handleImageRequest(request));
  } else if (STATIC_ASSETS.some(asset => request.url.includes(asset))) {
    event.respondWith(handleStaticRequest(request));
  } else if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(handlePageRequest(request));
  } else {
    event.respondWith(handleOtherRequest(request));
  }
});

// Handle image requests with cache-first strategy
async function handleImageRequest(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('[SW] Image request failed:', error);
    // Return a placeholder image for offline scenarios
    return new Response(
      '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" fill="#f0f0f0"><rect width="100%" height="100%"/><text x="50%" y="50%" font-family="Arial" font-size="18" fill="#999" text-anchor="middle">Image Unavailable</text></svg>',
      { headers: { 'Content-Type': 'image/svg+xml' } }
    );
  }
}

// Handle static assets with cache-first strategy
async function handleStaticRequest(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

// Handle page requests with network-first, fallback to cache
async function handlePageRequest(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
      return networkResponse;
    }
    throw new Error('Network response not ok');
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', error);
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page for uncached routes
    return new Response(
      generateOfflinePage(),
      { 
        headers: { 'Content-Type': 'text/html' },
        status: 200 
      }
    );
  }
}

// Handle other requests (CSS, JS, etc.)
async function handleOtherRequest(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      // Serve from cache immediately, update in background
      fetch(request).then(networkResponse => {
        if (networkResponse.ok) {
          caches.open(DYNAMIC_CACHE).then(cache => {
            cache.put(request, networkResponse);
          });
        }
      }).catch(() => {}); // Ignore network failures for background updates
      
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

// Generate offline page HTML
function generateOfflinePage() {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Offline - Royal City Tourism Dubai</title>
      <style>
        body { 
          font-family: Arial, sans-serif; 
          text-align: center; 
          padding: 50px 20px; 
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: #d4af37;
          margin: 0;
        }
        .container { 
          max-width: 600px; 
          margin: 0 auto; 
          background: rgba(52, 58, 64, 0.9);
          padding: 40px;
          border-radius: 15px;
          border: 2px solid #d4af37;
        }
        h1 { 
          color: #d4af37; 
          margin-bottom: 20px; 
          font-size: 2.5em;
        }
        p { 
          font-size: 1.2em; 
          line-height: 1.6; 
          margin: 20px 0;
        }
        .contact-info {
          background: rgba(212, 175, 55, 0.1);
          padding: 20px;
          border-radius: 10px;
          margin: 30px 0;
        }
        .phone, .whatsapp {
          display: inline-block;
          margin: 10px;
          padding: 12px 24px;
          background: #d4af37;
          color: #1a1a2e;
          text-decoration: none;
          border-radius: 25px;
          font-weight: bold;
          transition: transform 0.3s ease;
        }
        .phone:hover, .whatsapp:hover {
          transform: scale(1.05);
        }
        .retry-btn {
          background: transparent;
          border: 2px solid #d4af37;
          color: #d4af37;
          padding: 12px 24px;
          border-radius: 25px;
          cursor: pointer;
          font-size: 1em;
          margin-top: 20px;
          transition: all 0.3s ease;
        }
        .retry-btn:hover {
          background: #d4af37;
          color: #1a1a2e;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚗 You're Offline</h1>
        <p>No internet connection detected. But don't worry, you can still reach Royal City Tourism Dubai!</p>
        
        <div class="contact-info">
          <h3>📱 Contact Us Directly:</h3>
          <a href="tel:+971503441993" class="phone">📞 Call Now</a>
          <a href="https://wa.me/971503441993" class="whatsapp">💬 WhatsApp</a>
        </div>
        
        <p>🌟 Dubai's Premier Luxury Car Rental Service</p>
        <p>Mercedes S-Class • BMW 7 Series • Toyota Hiace<br>
        24/7 Available • Professional Chauffeurs</p>
        
        <button class="retry-btn" onclick="window.location.reload()">
          🔄 Try Again
        </button>
      </div>
    </body>
    </html>
  `;
}

// Background sync for offline form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    console.log('[SW] Background sync triggered');
    event.waitUntil(
      // Handle any queued form submissions or booking requests
      handleBackgroundSync()
    );
  }
});

async function handleBackgroundSync() {
  // Implementation for handling offline form submissions
  // This would sync any stored booking requests when connection is restored
  console.log('[SW] Processing background sync tasks');
}

// Push notification handling for booking confirmations
self.addEventListener('push', event => {
  if (event.data) {
    const notificationData = event.data.json();
    
    const options = {
      body: notificationData.body || 'Your Dubai car rental booking has been confirmed!',
      icon: '/favicon.png',
      badge: '/favicon.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: notificationData.primaryKey || 1
      },
      actions: [
        {
          action: 'explore',
          title: 'View Booking',
          icon: '/favicon.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/favicon.png'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification('Royal City Tourism Dubai', options)
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});