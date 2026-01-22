import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowManager } from '@/hooks/useWindowManager';
import { DesktopIcon } from '@/components/os/DesktopIcon';
import { Window } from '@/components/os/Window';
import { Dock } from '@/components/os/Dock';
import { MenuBar } from '@/components/os/MenuBar';
import { desktopIcons, windowIcons, windowTitles } from '@/components/os/iconConfig';
import { ResumeContent } from '@/components/windows/ResumeContent';
import { ExperienceContent } from '@/components/windows/ExperienceContent';
import { ProjectsContent } from '@/components/windows/ProjectsContent';
import { AboutContent } from '@/components/windows/AboutContent';
import { ContactContent } from '@/components/windows/ContactContent';
import { WindowId } from '@/types/os';

const windowContent: Record<WindowId, React.ReactNode> = {
  resume: <ResumeContent />,
  experience: <ExperienceContent />,
  projects: <ProjectsContent />,
  about: <AboutContent />,
  contact: <ContactContent />,
};

export default function Desktop() {
  const [selectedIcon, setSelectedIcon] = useState<WindowId | null>(null);
  const { 
    windows, 
    openWindow, 
    closeWindow, 
    minimizeWindow, 
    focusWindow, 
    updateWindowPosition 
  } = useWindowManager();

  const handleDesktopClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedIcon(null);
    }
  };

  const handleDockClick = (id: WindowId) => {
    const window = windows.find(w => w.id === id);
    if (window?.isMinimized) {
      openWindow(id);
    } else if (window?.isOpen) {
      focusWindow(id);
    } else {
      openWindow(id);
    }
  };

  return (
    <div 
      className="h-screen w-screen desktop-bg overflow-hidden relative"
      onClick={handleDesktopClick}
    >
      {/* Menu Bar */}
      <MenuBar />

      {/* Desktop Icons */}
      <motion.div 
        className="absolute top-10 left-4 flex flex-col gap-1 z-0 pt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {desktopIcons.map((icon, index) => (
          <motion.div
            key={icon.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.06 }}
          >
            <DesktopIcon
              id={icon.id}
              label={icon.label}
              icon={icon.icon}
              isSelected={selectedIcon === icon.id}
              onSelect={() => setSelectedIcon(icon.id)}
              onDoubleClick={() => openWindow(icon.id)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Welcome Message */}
      <motion.div 
        className="absolute bottom-24 right-8 max-w-sm text-right hidden lg:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
          Hi, I'm <span className="text-gradient">Nash</span>
        </h1>
        <p className="text-white/90 drop-shadow-md">
          Data Analyst & Product Builder
        </p>
        <p className="text-sm text-white/70 mt-2 drop-shadow-sm">
          Double-click an icon to explore →
        </p>
      </motion.div>

      {/* Windows */}
      <AnimatePresence>
        {windows.map((window) => (
          <Window
            key={window.id}
            window={window}
            title={windowTitles[window.id]}
            icon={windowIcons[window.id]}
            onClose={() => closeWindow(window.id)}
            onMinimize={() => minimizeWindow(window.id)}
            onFocus={() => focusWindow(window.id)}
            onPositionChange={(pos) => updateWindowPosition(window.id, pos)}
          >
            {windowContent[window.id]}
          </Window>
        ))}
      </AnimatePresence>

      {/* macOS Dock */}
      <Dock windows={windows} onIconClick={handleDockClick} />
    </div>
  );
}
