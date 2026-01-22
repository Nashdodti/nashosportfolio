import { FileText, Briefcase, FolderOpen, User, Mail } from 'lucide-react';
import { ResumeIcon } from './icons/ResumeIcon';
import { ExperienceIcon } from './icons/ExperienceIcon';
import { ProjectsIcon } from './icons/ProjectsIcon';
import { AboutIcon } from './icons/AboutIcon';
import { ContactIcon } from './icons/ContactIcon';
import { WindowId } from '@/types/os';

export const desktopIcons: { id: WindowId; label: string; icon: React.ReactNode }[] = [
  { id: 'resume', label: 'Resume.pdf', icon: <ResumeIcon /> },
  { id: 'experience', label: 'Experience', icon: <ExperienceIcon /> },
  { id: 'projects', label: 'Projects', icon: <ProjectsIcon /> },
  { id: 'about', label: 'About Me', icon: <AboutIcon /> },
  { id: 'contact', label: 'Contact', icon: <ContactIcon /> },
];

export const windowIcons: Record<WindowId, React.ReactNode> = {
  resume: <FileText className="w-4 h-4" />,
  experience: <Briefcase className="w-4 h-4" />,
  projects: <FolderOpen className="w-4 h-4" />,
  about: <User className="w-4 h-4" />,
  contact: <Mail className="w-4 h-4" />,
};

export const windowTitles: Record<WindowId, string> = {
  resume: 'Resume.pdf',
  experience: 'Experience',
  projects: 'Projects',
  about: 'About Me',
  contact: 'Contact',
};
