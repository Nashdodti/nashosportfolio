import { useCallback } from 'react';
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
  const handleClick = useCallback(() => {
    if (window.matchMedia('(max-width: 767px)').matches) {
      onDoubleClick();
      return;
    }
    onSelect();
  }, [onSelect, onDoubleClick]);

  return (
    <motion.button
      className={`desktop-icon ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
      onDoubleClick={onDoubleClick}
      aria-label={`Open ${label}`}
      whileTap={{ scale: 0.95 }}
    >
      <div className="desktop-icon-image w-16 h-16">
        {icon}
      </div>
      <span className={`desktop-icon-label max-w-[80px] truncate`}>
        {label}
      </span>
    </motion.button>
  );
}
