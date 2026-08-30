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
  onToggleMaximize: () => void;
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
  onToggleMaximize,
  onFocus,
  onPositionChange,
}: WindowProps) {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();
  const [isMobile, setIsMobile] = useState(false);
  const [minimizeTarget, setMinimizeTarget] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const sync = () => setIsMobile(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  const handleMinimize = () => {
    const dockIcon = document.querySelector<HTMLElement>(`[data-dock-icon="${windowState.id}"]`);
    const dockBounds = dockIcon?.getBoundingClientRect();

    setMinimizeTarget({
      x: dockBounds ? dockBounds.left + dockBounds.width / 2 : window.innerWidth / 2,
      y: dockBounds ? dockBounds.top + dockBounds.height / 2 : window.innerHeight - 44,
    });
    onMinimize();
  };

  const minimizedX = minimizeTarget.x - windowState.size.width / 2;
  const minimizedY = minimizeTarget.y - windowState.size.height;

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
          top: isMobile ? 'var(--menubar-h)' : undefined,
          left: isMobile ? 0 : undefined,
          maxWidth: '100vw',
          maxHeight: isMobile ? 'calc(100dvh - var(--menubar-h) - var(--dock-h) + 1.1rem)' : 'calc(100vh - 120px)',
          transformOrigin: '50% 100%',
          pointerEvents: windowState.isMinimized ? 'none' : 'auto',
        }}
        initial={{
          opacity: 0,
          scaleX: 0.95,
          scaleY: 0.95,
          x: windowState.position.x,
          y: windowState.position.y + 10,
          width: isMobile ? '100vw' : windowState.size.width,
          height: isMobile ? 'calc(100dvh - var(--menubar-h) - var(--dock-h) + 1.1rem)' : windowState.size.height,
        }}
        animate={{ 
          opacity: windowState.isMinimized ? 0 : 1,
          scaleX: windowState.isMinimized ? 0.08 : 1,
          scaleY: windowState.isMinimized ? 0.02 : 1,
          x: windowState.isMinimized ? minimizedX : isMobile ? 0 : windowState.position.x,
          y: windowState.isMinimized ? minimizedY : isMobile ? 0 : windowState.position.y,
          width: isMobile ? '100vw' : windowState.size.width,
          height: isMobile ? 'calc(100dvh - var(--menubar-h) - var(--dock-h) + 1.1rem)' : windowState.size.height,
        }}
        exit={{ opacity: 0, scale: 0.95, y: windowState.position.y + 10 }}
        transition={windowState.isMinimized
          ? { duration: 0.42, ease: [0.5, 0, 0.85, 0.35] }
          : { duration: 0.24, ease: [0.23, 1, 0.32, 1] }
        }
        drag={!isMobile && !windowState.isMaximized && !windowState.isMinimized}
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
          className={`os-window-header ${windowState.isMaximized ? 'cursor-default' : 'cursor-move'}`}
          onPointerDown={(e) => {
            if (!isMobile && !windowState.isMaximized) dragControls.start(e);
          }}
          onDoubleClick={() => !isMobile && onToggleMaximize()}
        >
          {/* Traffic lights */}
          <div className="flex items-center gap-2">
            <button 
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => { e.stopPropagation(); onClose(); }}
              className="window-control window-control-close hover:brightness-90 transition-all"
              aria-label="Close"
            />
            <button 
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => { e.stopPropagation(); handleMinimize(); }}
              className="window-control window-control-minimize hover:brightness-90 transition-all"
              aria-label="Minimize"
            />
            <button 
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => { e.stopPropagation(); onToggleMaximize(); }}
              className="window-control window-control-maximize hover:brightness-90 transition-all" 
              aria-label={windowState.isMaximized ? 'Restore window' : 'Maximize'}
              aria-pressed={windowState.isMaximized}
            />
          </div>
          
          {/* Centered title with icon */}
          <div className="flex-1 flex items-center justify-center gap-2">
            <span className="w-4 h-4">{icon}</span>
            <span className="text-sm font-medium">{title}</span>
          </div>
          
          {/* Spacer for centering */}
          <div className={isMobile ? 'w-8' : 'w-[52px]'} />
        </div>
        
        {/* Window Content */}
        <div className="os-window-body h-[calc(100%-48px)] overflow-auto os-scrollbar bg-card pb-safe">
          {children}
        </div>
      </motion.div>
    </>
  );
}
