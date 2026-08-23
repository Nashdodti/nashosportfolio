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
      type="button"
      className={`desktop-icon touch-manipulation ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
      onDoubleClick={onDoubleClick}
      aria-label={`Open ${label}`}
      whileTap={{ scale: 0.92 }}
    >
      <div className="desktop-icon-image">
        {icon}
      </div>
      <span className="desktop-icon-label">
        {label}
      </span>
    </motion.button>
  );
}
