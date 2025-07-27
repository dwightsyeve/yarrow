// Image optimization and caching utilities
const CACHE_NAME = 'yarrow-images-v1';
const CACHE_EXPIRY = 7 * 24 * 60 * 60 * 1000; // 7 days

export const preloadCriticalImages = (imageUrls: string[]) => {
  imageUrls.forEach((url, index) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    if (index === 0) {
      link.fetchPriority = 'high';
    }
    // Add crossorigin for remote images
    if (url.startsWith('http')) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};

export const createOptimizedImageElement = (
  src: string, 
  alt: string, 
  priority: 'high' | 'low' = 'low'
) => {
  const img = new Image();
  img.src = src;
  img.alt = alt;
  img.loading = priority === 'high' ? 'eager' : 'lazy';
  img.decoding = 'async';
  img.fetchPriority = priority;
  
  // Add crossorigin for remote images
  if (src.startsWith('http')) {
    img.crossOrigin = 'anonymous';
  }
  
  return img;
};

// Enhanced cache management for both local and remote images
export const cacheImages = async (imageUrls: string[]) => {
  if (!('caches' in window)) {
    console.warn('Cache API not supported');
    return;
  }

  try {
    const cache = await caches.open(CACHE_NAME);
    
    // Add timestamp for cache validation
    const cacheData = {
      timestamp: Date.now(),
      urls: imageUrls,
      type: imageUrls[0]?.startsWith('http') ? 'remote' : 'local'
    };
    
    // Store cache metadata
    localStorage.setItem('yarrow-image-cache', JSON.stringify(cacheData));
    
    // Cache all images with proper error handling for remote images
    const cachePromises = imageUrls.map(async (url) => {
      try {
        // For remote images, we need to handle CORS properly
        if (url.startsWith('http')) {
          const response = await fetch(url, {
            mode: 'cors',
            credentials: 'omit'
          });
          if (response.ok) {
            await cache.put(url, response);
          }
        } else {
          await cache.add(url);
        }
      } catch (error) {
        console.warn(`Failed to cache image: ${url}`, error);
      }
    });
    
    await Promise.all(cachePromises);
    console.log(`${imageUrls.length} images cached successfully`);
  } catch (error) {
    console.error('Failed to cache images:', error);
  }
};

// Check if cache is valid and fresh
export const isCacheValid = (): boolean => {
  try {
    const cacheData = localStorage.getItem('yarrow-image-cache');
    if (!cacheData) return false;
    
    const { timestamp } = JSON.parse(cacheData);
    return Date.now() - timestamp < CACHE_EXPIRY;
  } catch {
    return false;
  }
};

// Clear expired cache
export const clearExpiredCache = async () => {
  if (!isCacheValid()) {
    try {
      await caches.delete(CACHE_NAME);
      localStorage.removeItem('yarrow-image-cache');
      console.log('Expired cache cleared');
    } catch (error) {
      console.error('Failed to clear cache:', error);
    }
  }
};

// Preload images with caching
export const preloadAndCacheImages = async (imageUrls: string[]) => {
  // Clear expired cache first
  await clearExpiredCache();
  
  // Check if images are already cached
  if (isCacheValid()) {
    console.log('Images already cached');
    return;
  }
  
  // Preload critical images immediately
  preloadCriticalImages(imageUrls.slice(0, 2));
  
  // Cache all images
  await cacheImages(imageUrls);
  
  // Preload remaining images
  imageUrls.slice(2).forEach((url, index) => {
    setTimeout(() => {
      const img = new Image();
      img.src = url;
    }, (index + 1) * 100); // Stagger loading
  });
};
