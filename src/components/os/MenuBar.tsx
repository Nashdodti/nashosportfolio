import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Wifi, Battery, Search, SlidersHorizontal, Signal } from 'lucide-react';
import { MenuBarDropdown } from './MenuBarDropdown';
import { FileMenu } from './menus/FileMenu';
import { EditMenu } from './menus/EditMenu';
import { ViewMenu } from './menus/ViewMenu';
import { WifiMenu } from './menus/WifiMenu';
import { BatteryMenu } from './menus/BatteryMenu';
import { CalendarMenu } from './menus/CalendarMenu';
import { ControlCenterMenu } from './menus/ControlCenterMenu';
import { MobileNetworkMenu } from './menus/MobileNetworkMenu';

interface BatteryManager extends EventTarget {
  level: number;
}

type NavigatorWithBattery = Navigator & {
  getBattery?: () => Promise<BatteryManager>;
};

export function MenuBar() {
  const [time, setTime] = useState(new Date());
  const [batteryLevel, setBatteryLevel] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const batteryNavigator = navigator as NavigatorWithBattery;
    if (!batteryNavigator.getBattery) return;

    let battery: BatteryManager | undefined;
    const updateBatteryLevel = () => {
      if (battery) setBatteryLevel(Math.round(battery.level * 100));
    };

    batteryNavigator.getBattery().then((manager) => {
      battery = manager;
      updateBatteryLevel();
      battery.addEventListener('levelchange', updateBatteryLevel);
    }).catch(() => undefined);

    return () => battery?.removeEventListener('levelchange', updateBatteryLevel);
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
      className="menu-bar z-50 flex items-center"
      initial={{ y: -28 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, duration: 0.3 }}
    >
      {/* Left: App menus (desktop) / Signal indicators (mobile) */}
      <div className="flex items-center gap-2 sm:gap-4 sm:flex-1">
        {/* Mobile: Signal indicators */}
        <div className="sm:hidden flex items-center gap-1.5">
          <MenuBarDropdown
            trigger={<Signal className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />}
          >
            <MobileNetworkMenu />
          </MenuBarDropdown>
        </div>

        {/* Desktop: App menus */}
        <div className="hidden sm:flex items-center gap-3 text-sm font-semibold">
          <span>Portfolio</span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-sm text-foreground/80">
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

      {/* Center: Time (mobile only) */}
      <span className="sm:hidden absolute left-1/2 -translate-x-1/2 text-[15px] font-semibold tabular-nums leading-none text-white">
        {formatTime(time).replace(' AM', '').replace(' PM', '')}
      </span>
      
      {/* Right: Status icons + clock */}
      <div className="flex items-center gap-2 sm:gap-3 text-sm ml-auto">
        {/* WiFi - both desktop and mobile with dropdowns */}
        <MenuBarDropdown 
          trigger={
            <Wifi 
              className="w-4 h-4 text-white sm:text-current" 
              strokeWidth={2.5}
            />
          }
          align="right"
        >
          <WifiMenu />
        </MenuBarDropdown>
        
        {/* Battery - both desktop and mobile with dropdowns */}
        <MenuBarDropdown 
          trigger={
            <div className="flex items-center gap-1">
              <span className="text-[15px] sm:text-[13px] font-medium text-white sm:text-current">
                {batteryLevel}%
              </span>
              <Battery 
                className="w-5 h-5 text-white sm:text-current sm:fill-transparent fill-white" 
                strokeWidth={2.5}
              />
            </div>
          }
          align="right"
        >
          <BatteryMenu />
        </MenuBarDropdown>
        
        {/* Desktop only items */}
        <Search className="hidden sm:block w-4 h-4 opacity-80 cursor-pointer hover:opacity-100 transition-opacity" />
        
        <div className="hidden sm:block">
          <MenuBarDropdown 
            trigger={<SlidersHorizontal className="w-4 h-4 opacity-80" />}
            align="right"
          >
            <ControlCenterMenu />
          </MenuBarDropdown>
        </div>
        
        <span className="hidden sm:inline opacity-90 cursor-default">{formatDate(time)}</span>
        
        <div className="hidden sm:block">
          <MenuBarDropdown 
            trigger={<span className="font-medium">{formatTime(time)}</span>}
            align="right"
          >
            <CalendarMenu />
          </MenuBarDropdown>
        </div>
      </div>
    </motion.div>
  );
}
