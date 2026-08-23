import { motion } from 'framer-motion';
import { WindowState, WindowId } from '@/types/os';
import { desktopIcons } from './iconConfig';

interface DockProps {
  windows: WindowState[];
  onIconClick: (id: WindowId) => void;
}

export function Dock({ windows, onIconClick }: DockProps) {
  const openWindowIds = windows.filter(w => w.isOpen).map(w => w.id);

  return (
    <motion.div 
      className="fixed bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="dock rounded-[22px] sm:rounded-2xl px-2 py-2 flex items-end gap-1">
        {desktopIcons.map((icon, index) => {
          const isOpen = openWindowIds.includes(icon.id);
          
          return (
            <motion.button
              key={icon.id}
              className="dock-icon group"
              onClick={() => onIconClick(icon.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              whileHover={{ y: -8, scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  {icon.icon}
                </div>
              </div>
              
              {/* Active indicator */}
              {isOpen && (
                <motion.div 
                  className="dock-icon-indicator"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-foreground/90 text-background text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {icon.label}
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
