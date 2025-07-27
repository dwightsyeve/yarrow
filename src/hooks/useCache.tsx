import { useState, useEffect } from 'react';

interface CacheStatus {
  isSupported: boolean;
  cacheSize: number;
  lastUpdate: string | null;
}

export const useCacheStatus = () => {
  const [status, setStatus] = useState<CacheStatus>({
    isSupported: false,
    cacheSize: 0,
    lastUpdate: null
  });

  useEffect(() => {
    const checkCacheStatus = async () => {
      if ('caches' in window) {
        try {
          const cache = await caches.open('yarrow-images-v1');
          const keys = await cache.keys();
          
          // Get cache metadata from localStorage
          const cacheData = localStorage.getItem('yarrow-image-cache');
          const lastUpdate = cacheData ? 
            new Date(JSON.parse(cacheData).timestamp).toLocaleString() : 
            null;

          setStatus({
            isSupported: true,
            cacheSize: keys.length,
            lastUpdate
          });
        } catch (error) {
          console.error('Failed to check cache status:', error);
        }
      }
    };

    checkCacheStatus();
  }, []);

  return status;
};

// Optional: Cache status component for development/debugging
export const CacheStatusIndicator = () => {
  const status = useCacheStatus();

  if (!status.isSupported || process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white text-xs p-2 rounded z-50">
      <div>Cache: {status.cacheSize} images</div>
      {status.lastUpdate && <div>Updated: {status.lastUpdate}</div>}
    </div>
  );
};
