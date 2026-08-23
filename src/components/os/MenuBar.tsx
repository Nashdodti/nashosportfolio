import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Wifi, Battery, Search, SlidersHorizontal } from 'lucide-react';
import { MenuBarDropdown } from './MenuBarDropdown';
import { FileMenu } from './menus/FileMenu';
import { EditMenu } from './menus/EditMenu';
import { ViewMenu } from './menus/ViewMenu';
import { WifiMenu } from './menus/WifiMenu';
import { BatteryMenu } from './menus/BatteryMenu';
import { CalendarMenu } from './menus/CalendarMenu';
import { ControlCenterMenu } from './menus/ControlCenterMenu';

export function MenuBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <motion.div 
      className="menu-bar z-50 flex items-center justify-between"
      initial={{ y: -28 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, duration: 0.3 }}
    >
      {/* Left: App menus */}
      <div className="hidden sm:flex items-center gap-4">
        <div className="flex items-center gap-3 text-sm font-semibold">
          <span>Portfolio</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-foreground/80">
          <MenuBarDropdown trigger="File">
            <FileMenu />
          </MenuBarDropdown>
          
          <MenuBarDropdown trigger="Edit">
            <EditMenu />
          </MenuBarDropdown>
          
          <MenuBarDropdown trigger="View">
            <ViewMenu />
          </MenuBarDropdown>
          
          <button className="hover:bg-foreground/10 px-1.5 py-0.5 rounded transition-colors">
            Go
          </button>
          <button className="hover:bg-foreground/10 px-1.5 py-0.5 rounded transition-colors">
            Help
          </button>
        </div>
      </div>

      <span className="sm:hidden text-[15px] font-semibold tabular-nums leading-none">
        {formatTime(time).replace(' AM', '').replace(' PM', '')}
      </span>
      
      {/* Right: Status icons + clock */}
      <div className="flex items-center gap-2 sm:gap-3 text-sm">
        <MenuBarDropdown 
          trigger={<Wifi className="w-4 h-4" strokeWidth={2.25} />}
          align="right"
        >
          <WifiMenu />
        </MenuBarDropdown>
        
        <MenuBarDropdown 
          trigger={<Battery className="w-5 h-5" strokeWidth={2.25} />}
          align="right"
        >
          <BatteryMenu />
        </MenuBarDropdown>
        
        <Search className="hidden sm:block w-4 h-4 opacity-80 cursor-pointer hover:opacity-100 transition-opacity" />
        
        <MenuBarDropdown 
          trigger={<SlidersHorizontal className="hidden sm:block w-4 h-4 opacity-80" />}
          align="right"
        >
          <ControlCenterMenu />
        </MenuBarDropdown>
        
        <span className="hidden sm:inline opacity-90 cursor-default">{formatDate(time)}</span>
        
        <MenuBarDropdown 
          trigger={<span className="hidden sm:inline font-medium">{formatTime(time)}</span>}
          align="right"
        >
          <CalendarMenu />
        </MenuBarDropdown>
      </div>
    </motion.div>
  );
}
