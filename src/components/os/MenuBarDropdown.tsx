import { ReactNode, useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuBarDropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  align?: 'left' | 'right';
}

export function MenuBarDropdown({ trigger, children, align = 'left' }: MenuBarDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`hover:bg-foreground/10 px-1.5 py-0.5 rounded transition-colors ${
          isOpen ? 'bg-foreground/10' : ''
        }`}
      >
        {trigger}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute top-full mt-1 ${
              align === 'right' ? 'right-0' : 'left-0'
            } min-w-[220px] bg-[hsl(var(--window-bg)/0.96)] backdrop-blur-xl rounded-lg shadow-xl border border-white/10 overflow-hidden z-[100]`}
            onClick={() => setIsOpen(false)}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function MenuBarItem({ children, onClick, disabled = false, icon }: { 
  children: ReactNode; 
  onClick?: () => void; 
  disabled?: boolean;
  icon?: ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full px-3 py-1.5 text-left text-[13px] flex items-center gap-2.5 transition-colors ${
        disabled 
          ? 'text-foreground/30 cursor-not-allowed' 
          : 'hover:bg-blue-500 hover:text-white'
      }`}
    >
      {icon && <span className="w-4 h-4 flex items-center justify-center">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}

export function MenuBarDivider() {
  return <div className="h-px bg-white/10 my-1" />;
}

export function MenuBarSection({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="py-1">
      {title && (
        <div className="px-3 py-1 text-[11px] font-semibold text-foreground/50 uppercase tracking-wider">
          {title}
        </div>
      )}
      {children}
    </div>
  );
}
