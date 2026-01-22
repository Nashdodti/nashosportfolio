import { useRef, useEffect, useState } from 'react';
import { motion, useDragControls, PanInfo } from 'framer-motion';
import { X, Minus, Maximize2 } from 'lucide-react';
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
        style={{ top: 0, left: 0, right: 0, bottom: 48 }}
      />
      
      <motion.div
        className="fixed os-window"
      style={{
        zIndex: windowState.zIndex,
        width: isMobile ? 'calc(100vw - 20px)' : windowState.size.width,
        height: isMobile ? 'calc(100vh - 120px)' : windowState.size.height,
        maxWidth: '100vw',
        maxHeight: 'calc(100vh - 60px)',
      }}
      initial={{ opacity: 0, scale: 0.95, x: windowState.position.x, y: windowState.position.y + 10 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        x: windowState.position.x,
        y: windowState.position.y,
      }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
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
        {/* Window Header */}
        <div 
          className="os-window-header cursor-move"
          onPointerDown={(e) => {
            if (!isMobile) dragControls.start(e);
          }}
        >
          <div className="flex items-center gap-1.5">
            <button 
              onClick={onClose}
              className="window-control window-control-close hover:brightness-90 transition-all"
            />
            <button 
              onClick={onMinimize}
              className="window-control window-control-minimize hover:brightness-90 transition-all"
            />
            <button className="window-control window-control-maximize hover:brightness-90 transition-all" />
          </div>
          
          <div className="flex-1 flex items-center justify-center gap-2">
            <span className="w-4 h-4">{icon}</span>
            <span className="text-sm font-medium">{title}</span>
          </div>
          
          <div className="w-[52px]" /> {/* Spacer for centering */}
        </div>
        
        {/* Window Content */}
        <div className="h-[calc(100%-40px)] overflow-auto os-scrollbar bg-card">
          {children}
        </div>
      </motion.div>
    </>
  );
}
