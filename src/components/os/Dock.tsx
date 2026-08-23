import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { WindowState, WindowId } from '@/types/os';
import { desktopIcons } from './iconConfig';

interface DockProps {
  windows: WindowState[];
  onIconClick: (id: WindowId) => void;
}

export function Dock({ windows, onIconClick }: DockProps) {
  const openWindowIds = windows.filter(w => w.isOpen).map(w => w.id);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)');
    const sync = () => setCanHover(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  return (
    <div className="dock-wrap">
      <motion.div 
        className="dock"
        initial={{ y: 36, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
      >
        {desktopIcons.map((icon, index) => {
          const isOpen = openWindowIds.includes(icon.id);
          
          return (
            <motion.button
              key={icon.id}
              type="button"
              className="dock-icon group touch-manipulation"
              onClick={() => onIconClick(icon.id)}
              aria-label={icon.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.03 }}
              whileHover={canHover ? { y: -8, scale: 1.12 } : undefined}
              whileTap={{ scale: 0.94 }}
            >
              <div className="dock-icon-image">
                {icon.icon}
              </div>
              
              {isOpen && (
                <motion.div 
                  className="dock-icon-indicator"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              
              <div className="dock-tooltip">
                {icon.label}
              </div>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
