import { FileText, Briefcase, FolderOpen, User, Mail } from 'lucide-react';
import { WindowId } from '@/types/os';
import { ResumeIcon } from './icons/ResumeIcon';
import { ExperienceIcon } from './icons/ExperienceIcon';
import { ProjectsIcon } from './icons/ProjectsIcon';
import { AboutIcon } from './icons/AboutIcon';
import { ContactIcon } from './icons/ContactIcon';

export const desktopIcons: { id: WindowId; label: string; icon: React.ReactNode }[] = [
  { 
    id: 'resume', 
    label: 'Resume', 
    icon: <ResumeIcon />
  },
  { 
    id: 'experience', 
    label: 'Experience', 
    icon: <ExperienceIcon />
  },
  { 
    id: 'projects', 
    label: 'Projects', 
    icon: <ProjectsIcon />
  },
  { 
    id: 'about', 
    label: 'About Me', 
    icon: <AboutIcon />
  },
  { 
    id: 'contact', 
    label: 'Contact', 
    icon: <ContactIcon />
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
