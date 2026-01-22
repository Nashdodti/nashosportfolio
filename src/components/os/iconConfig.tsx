import { FileText, Briefcase, FolderOpen, User, Mail } from 'lucide-react';
import { WindowId } from '@/types/os';

// macOS-style app icon component
const AppIcon = ({ 
  gradient, 
  icon: Icon, 
  iconColor = 'white' 
}: { 
  gradient: string; 
  icon: React.FC<{ className?: string; style?: React.CSSProperties }>; 
  iconColor?: string;
}) => (
  <div 
    className={`w-full h-full rounded-xl flex items-center justify-center ${gradient}`}
    style={{ 
      boxShadow: 'inset 0 1px 0 hsl(0 0% 100% / 0.3), inset 0 -1px 0 hsl(0 0% 0% / 0.1), 0 4px 12px hsl(0 0% 0% / 0.15)' 
    }}
  >
    <Icon className="w-7 h-7" style={{ color: iconColor }} />
  </div>
);

export const desktopIcons: { id: WindowId; label: string; icon: React.ReactNode }[] = [
  { 
    id: 'resume', 
    label: 'Resume', 
    icon: <AppIcon gradient="bg-gradient-to-br from-red-400 to-red-600" icon={FileText} /> 
  },
  { 
    id: 'experience', 
    label: 'Experience', 
    icon: <AppIcon gradient="bg-gradient-to-br from-blue-400 to-blue-600" icon={Briefcase} /> 
  },
  { 
    id: 'projects', 
    label: 'Projects', 
    icon: <AppIcon gradient="bg-gradient-to-br from-cyan-400 to-cyan-600" icon={FolderOpen} /> 
  },
  { 
    id: 'about', 
    label: 'About Me', 
    icon: <AppIcon gradient="bg-gradient-to-br from-purple-400 to-purple-600" icon={User} /> 
  },
  { 
    id: 'contact', 
    label: 'Contact', 
    icon: <AppIcon gradient="bg-gradient-to-br from-green-400 to-green-600" icon={Mail} /> 
  },
];

export const windowIcons: Record<WindowId, React.ReactNode> = {
  resume: <FileText className="w-4 h-4 text-red-500" />,
  experience: <Briefcase className="w-4 h-4 text-blue-500" />,
  projects: <FolderOpen className="w-4 h-4 text-cyan-500" />,
  about: <User className="w-4 h-4 text-purple-500" />,
  contact: <Mail className="w-4 h-4 text-green-500" />,
};

export const windowTitles: Record<WindowId, string> = {
  resume: 'Resume',
  experience: 'Experience',
  projects: 'Projects',
  about: 'About Me',
  contact: 'Contact',
};
