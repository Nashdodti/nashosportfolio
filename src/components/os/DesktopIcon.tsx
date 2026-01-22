import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { WindowId } from '@/types/os';

interface DesktopIconProps {
  id: WindowId;
  label: string;
  icon: React.ReactNode;
  isSelected: boolean;
  onSelect: () => void;
  onDoubleClick: () => void;
}

export function DesktopIcon({ 
  id, 
  label, 
  icon, 
  isSelected, 
  onSelect, 
  onDoubleClick 
}: DesktopIconProps) {
  const [lastClickTime, setLastClickTime] = useState(0);

  const handleClick = useCallback(() => {
    const now = Date.now();
    if (now - lastClickTime < 300) {
      // Double click
      onDoubleClick();
    } else {
      // Single click
      onSelect();
    }
    setLastClickTime(now);
  }, [lastClickTime, onSelect, onDoubleClick]);

  return (
    <motion.button
      className={`desktop-icon ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
      whileTap={{ scale: 0.95 }}
    >
      <div className="desktop-icon-image w-16 h-16 sm:w-20 sm:h-20">
        {icon}
      </div>
      <span className={`desktop-icon-label max-w-[80px] truncate`}>
        {label}
      </span>
    </motion.button>
  );
}
