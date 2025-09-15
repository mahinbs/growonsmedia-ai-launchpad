import { useState, useEffect } from 'react';

export function useMobileDevice() {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    const checkMobileDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      
      // Check for mobile devices
      const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      
      // Also check for touch capability
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      // Check viewport width
      const isSmallScreen = window.innerWidth < 768;
      
      setIsMobileDevice(isMobile || (isTouch && isSmallScreen));
    };

    checkMobileDevice();

    // Listen for orientation changes and resize events
    const handleResize = () => {
      checkMobileDevice();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return isMobileDevice;
}

export function useTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || 
                    navigator.maxTouchPoints > 0;
    
    setIsTouchDevice(isTouch);
  }, []);

  return isTouchDevice;
}