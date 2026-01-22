import { motion } from 'framer-motion';
import { WindowState, WindowId } from '@/types/os';
import { 
  FileText, 
  Briefcase, 
  FolderOpen, 
  User, 
  Mail,
  Clock
} from 'lucide-react';
import { useState, useEffect } from 'react';

interface TaskbarProps {
  windows: WindowState[];
  onWindowClick: (id: WindowId) => void;
}

const iconMap: Record<WindowId, React.ReactNode> = {
  resume: <FileText className="w-4 h-4" />,
  experience: <Briefcase className="w-4 h-4" />,
  projects: <FolderOpen className="w-4 h-4" />,
  about: <User className="w-4 h-4" />,
  contact: <Mail className="w-4 h-4" />,
};

const labelMap: Record<WindowId, string> = {
  resume: 'Resume',
  experience: 'Experience',
  projects: 'Projects',
  about: 'About',
  contact: 'Contact',
};

export function Taskbar({ windows, onWindowClick }: TaskbarProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 h-12 taskbar flex items-center justify-between px-4"
      initial={{ y: 48 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.3, duration: 0.3 }}
    >
      {/* Left: Logo/Brand */}
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">N</span>
        </div>
        <span className="text-sm font-medium hidden sm:block">Nash Dodti</span>
      </div>
      
      {/* Center: Open Windows */}
      <div className="flex items-center gap-1">
        {windows.filter(w => w.isOpen).map(w => (
          <motion.button
            key={w.id}
            className={`
              flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors
              ${w.isMinimized 
                ? 'bg-taskbar-foreground/10 hover:bg-taskbar-foreground/20' 
                : 'bg-taskbar-foreground/20 hover:bg-taskbar-foreground/30'
              }
            `}
            onClick={() => onWindowClick(w.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {iconMap[w.id]}
            <span className="text-xs font-medium hidden sm:block">{labelMap[w.id]}</span>
          </motion.button>
        ))}
      </div>
      
      {/* Right: Clock */}
      <div className="flex items-center gap-2 text-sm">
        <Clock className="w-4 h-4 opacity-60" />
        <span className="font-mono">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </motion.div>
  );
}
