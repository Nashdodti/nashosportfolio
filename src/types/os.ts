export type WindowId = 'resume' | 'experience' | 'projects' | 'about' | 'contact';

export interface WindowState {
  id: WindowId;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
  restoreBounds?: {
    position: { x: number; y: number };
    size: { width: number; height: number };
  };
}

export interface DesktopIcon {
  id: WindowId;
  label: string;
  color: string;
}
