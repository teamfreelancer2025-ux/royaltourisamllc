// Google Analytics 4 Configuration
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

// Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics 4 Measurement ID
gtag('config', 'GA_MEASUREMENT_ID', {
  // Enhanced ecommerce and conversion tracking
  send_page_view: true,
  anonymize_ip: true,
  allow_google_signals: true,
  allow_ad_personalization_signals: true,
  
  // Custom dimensions for Dubai car rental business
  custom_map: {
    'car_type': 'dimension1',
    'service_area': 'dimension2', 
    'booking_source': 'dimension3',
    'customer_type': 'dimension4'
  }
});

// Enhanced ecommerce events for car rental bookings
function trackCarView(carName, carType, price) {
  gtag('event', 'view_item', {
    currency: 'AED',
    value: price,
    items: [{
      item_id: carName.toLowerCase().replace(/\s+/g, '_'),
      item_name: carName,
      item_category: carType,
      item_variant: 'with_chauffeur',
      price: price,
      quantity: 1
    }]
  });
}

function trackQuoteRequest(carName, serviceArea) {
  gtag('event', 'generate_lead', {
    currency: 'AED',
    value: 0,
    car_type: carName,
    service_area: serviceArea,
    lead_source: 'website'
  });
}

function trackWhatsAppClick(carName) {
  gtag('event', 'contact', {
    method: 'whatsapp',
    car_type: carName,
    contact_source: 'car_listing'
  });
}

function trackPhoneCall(source) {
  gtag('event', 'contact', {
    method: 'phone',
    contact_source: source
  });
}

// Scroll tracking for engagement
let scrollThresholds = [25, 50, 75, 90];
let scrollTracked = new Set();

function trackScroll() {
  const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
  
  scrollThresholds.forEach(threshold => {
    if (scrollPercent >= threshold && !scrollTracked.has(threshold)) {
      gtag('event', 'scroll', {
        scroll_depth: threshold,
        page_title: document.title
      });
      scrollTracked.add(threshold);
    }
  });
}

window.addEventListener('scroll', trackScroll);

// Page engagement time tracking
let startTime = Date.now();
let engaged = false;

function trackEngagement() {
  if (!engaged) {
    engaged = true;
    
    // Track when user becomes engaged (mouse movement, scroll, click)
    gtag('event', 'user_engagement', {
      engagement_time_msec: Date.now() - startTime
    });
  }
}

['mousedown', 'scroll', 'keydown', 'touchstart'].forEach(event => {
  document.addEventListener(event, trackEngagement, { once: true });
});

// Track page visibility for accurate session duration
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'hidden') {
    const sessionDuration = Date.now() - startTime;
    gtag('event', 'page_view_duration', {
      session_duration: sessionDuration,
      page_url: window.location.href
    });
  }
});