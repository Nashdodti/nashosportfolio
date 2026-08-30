import { useState, useCallback, useEffect } from 'react';
import { WindowId, WindowState } from '@/types/os';

const defaultWindowSizes: Record<WindowId, { width: number; height: number }> = {
  resume: { width: 600, height: 500 },
  experience: { width: 700, height: 520 },
  projects: { width: 750, height: 500 },
  about: { width: 550, height: 450 },
  contact: { width: 500, height: 420 },
};

const getInitialPosition = (id: WindowId, isMobile: boolean) => {
  if (isMobile) {
    return { x: 0, y: 32 };
  }
  
  // Offset from menu bar (28px)
  const offsets: Record<WindowId, { x: number; y: number }> = {
    resume: { x: 150, y: 60 },
    experience: { x: 200, y: 80 },
    projects: { x: 250, y: 50 },
    about: { x: 300, y: 100 },
    contact: { x: 220, y: 70 },
  };
  return offsets[id];
};

const getMaximizedBounds = () => {
  const inset = 12;
  const top = 36;
  const bottom = 84;

  return {
    position: { x: inset, y: top },
    size: {
      width: Math.max(320, window.innerWidth - inset * 2),
      height: Math.max(200, window.innerHeight - top - bottom),
    },
  };
};

export function useWindowManager() {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [highestZIndex, setHighestZIndex] = useState(10);

  const openWindow = useCallback((id: WindowId) => {
    const isMobile = window.innerWidth < 768;
    
    setWindows(prev => {
      const existing = prev.find(w => w.id === id);
      if (existing) {
        // Bring to front if already open
        return prev.map(w => 
          w.id === id 
            ? { ...w, isMinimized: false, zIndex: highestZIndex + 1 }
            : w
        );
      }
      
      const size = isMobile 
        ? { width: window.innerWidth - 20, height: window.innerHeight - 120 }
        : defaultWindowSizes[id];
      
      return [...prev, {
        id,
        isOpen: true,
        isMinimized: false,
        isMaximized: false,
        zIndex: highestZIndex + 1,
        position: getInitialPosition(id, isMobile),
        size,
      }];
    });
    setHighestZIndex(prev => prev + 1);
  }, [highestZIndex]);

  const closeWindow = useCallback((id: WindowId) => {
    setWindows(prev => prev.filter(w => w.id !== id));
  }, []);

  const minimizeWindow = useCallback((id: WindowId) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, isMinimized: true } : w
    ));
  }, []);

  const toggleMaximizeWindow = useCallback((id: WindowId) => {
    setWindows(prev => prev.map(w => {
      if (w.id !== id) return w;

      if (w.isMaximized && w.restoreBounds) {
        return {
          ...w,
          isMaximized: false,
          position: w.restoreBounds.position,
          size: w.restoreBounds.size,
          restoreBounds: undefined,
        };
      }

      const maximizedBounds = getMaximizedBounds();
      return {
        ...w,
        isMaximized: true,
        restoreBounds: { position: w.position, size: w.size },
        ...maximizedBounds,
      };
    }));
  }, []);

  useEffect(() => {
    const syncMaximizedWindows = () => {
      setWindows(prev => prev.map(w => (
        w.isMaximized ? { ...w, ...getMaximizedBounds() } : w
      )));
    };

    window.addEventListener('resize', syncMaximizedWindows);
    return () => window.removeEventListener('resize', syncMaximizedWindows);
  }, []);

  const focusWindow = useCallback((id: WindowId) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, zIndex: highestZIndex + 1 } : w
    ));
    setHighestZIndex(prev => prev + 1);
  }, [highestZIndex]);

  const updateWindowPosition = useCallback((id: WindowId, position: { x: number; y: number }) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, position } : w
    ));
  }, []);

  return {
    windows,
    openWindow,
    closeWindow,
    minimizeWindow,
    toggleMaximizeWindow,
    focusWindow,
    updateWindowPosition,
  };
}
