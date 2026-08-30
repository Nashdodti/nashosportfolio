import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { WindowState, WindowId } from '@/types/os';
import { desktopIcons } from './iconConfig';

interface DockProps {
  windows: WindowState[];
  onIconClick: (id: WindowId) => void;
}

export function Dock({ windows, onIconClick }: DockProps) {
  const openWindowIds = windows.filter(w => w.isOpen).map(w => w.id);
  const [canHover, setCanHover] = useState(false);
  const [cursorX, setCursorX] = useState<number | null>(null);
  const iconRefs = useRef<Array<HTMLButtonElement | null>>([]);

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
        onPointerMove={(event) => {
          if (canHover) {
            const dockBounds = event.currentTarget.getBoundingClientRect();
            setCursorX(event.clientX - dockBounds.left);
          }
        }}
        onPointerLeave={() => setCursorX(null)}
        initial={{ y: 36, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
      >
        {desktopIcons.map((icon, index) => {
          const isOpen = openWindowIds.includes(icon.id);
          const dockIcon = iconRefs.current[index];
          const iconCenter = dockIcon ? dockIcon.offsetLeft + dockIcon.offsetWidth / 2 : 0;
          const distance = cursorX === null ? Infinity : Math.abs(cursorX - iconCenter);
          const proximity = Math.max(0, 1 - distance / 120);
          const magnification = proximity * proximity;
          const direction = cursorX === null ? 0 : Math.sign(iconCenter - cursorX);
          
          return (
            <motion.button
              key={icon.id}
              ref={(element) => { iconRefs.current[index] = element; }}
              data-dock-icon={icon.id}
              type="button"
              className="dock-icon group touch-manipulation"
              onClick={() => onIconClick(icon.id)}
              aria-label={icon.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{
                opacity: 1,
                y: canHover ? -18 * magnification : 0,
                x: canHover ? direction * 7 * magnification : 0,
                scale: canHover ? 1 + 0.32 * magnification : 1,
              }}
              transition={{
                opacity: { delay: 0.2 + index * 0.03 },
                x: { type: 'spring', stiffness: 380, damping: 28 },
                y: { type: 'spring', stiffness: 380, damping: 28 },
                scale: { type: 'spring', stiffness: 380, damping: 28 },
              }}
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
