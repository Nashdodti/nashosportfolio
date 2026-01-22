import { useState, useCallback } from 'react';
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
    return { x: 10, y: 60 };
  }
  
  const offsets: Record<WindowId, { x: number; y: number }> = {
    resume: { x: 100, y: 80 },
    experience: { x: 150, y: 100 },
    projects: { x: 200, y: 60 },
    about: { x: 250, y: 120 },
    contact: { x: 180, y: 90 },
  };
  return offsets[id];
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
    focusWindow,
    updateWindowPosition,
  };
}
