import { useRef, useEffect, useState } from 'react';
import { motion, useDragControls, PanInfo } from 'framer-motion';
import { WindowState, WindowId } from '@/types/os';

interface WindowProps {
  window: WindowState;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  onClose: () => void;
  onMinimize: () => void;
  onFocus: () => void;
  onPositionChange: (position: { x: number; y: number }) => void;
}

export function Window({
  window: windowState,
  title,
  icon,
  children,
  onClose,
  onMinimize,
  onFocus,
  onPositionChange,
}: WindowProps) {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (windowState.isMinimized) return null;

  return (
    <>
      {/* Invisible constraint boundary */}
      <div 
        ref={constraintsRef} 
        className="fixed inset-0 pointer-events-none"
        style={{ top: 28, left: 0, right: 0, bottom: 80 }}
      />
      
      <motion.div
        className="fixed os-window"
        style={{
          zIndex: windowState.zIndex,
          width: isMobile ? 'calc(100vw - 20px)' : windowState.size.width,
          height: isMobile ? 'calc(100vh - 140px)' : windowState.size.height,
          maxWidth: '100vw',
          maxHeight: 'calc(100vh - 120px)',
        }}
        initial={{ opacity: 0, scale: 0.95, x: windowState.position.x, y: windowState.position.y + 10 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          x: windowState.position.x,
          y: windowState.position.y,
        }}
        exit={{ opacity: 0, scale: 0.95, y: windowState.position.y + 10 }}
        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
        drag={!isMobile}
        dragControls={dragControls}
        dragMomentum={false}
        dragConstraints={constraintsRef}
        dragElastic={0}
        onDragEnd={(_, info: PanInfo) => {
          onPositionChange({
            x: windowState.position.x + info.offset.x,
            y: windowState.position.y + info.offset.y,
          });
        }}
        onMouseDown={onFocus}
        onTouchStart={onFocus}
      >
        {/* Window Header - macOS style */}
        <div 
          className="os-window-header cursor-move"
          onPointerDown={(e) => {
            if (!isMobile) dragControls.start(e);
          }}
        >
          {/* Traffic lights */}
          <div className="flex items-center gap-2">
            <button 
              onClick={(e) => { e.stopPropagation(); onClose(); }}
              className="window-control window-control-close hover:brightness-90 transition-all"
              aria-label="Close"
            />
            <button 
              onClick={(e) => { e.stopPropagation(); onMinimize(); }}
              className="window-control window-control-minimize hover:brightness-90 transition-all"
              aria-label="Minimize"
            />
            <button 
              className="window-control window-control-maximize hover:brightness-90 transition-all" 
              aria-label="Maximize"
            />
          </div>
          
          {/* Centered title with icon */}
          <div className="flex-1 flex items-center justify-center gap-2">
            <span className="w-4 h-4">{icon}</span>
            <span className="text-sm font-medium">{title}</span>
          </div>
          
          {/* Spacer for centering */}
          <div className="w-[52px]" />
        </div>
        
        {/* Window Content */}
        <div className="h-[calc(100%-48px)] overflow-auto os-scrollbar bg-card">
          {children}
        </div>
      </motion.div>
    </>
  );
}
