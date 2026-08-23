import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Wifi, Battery, Search, SlidersHorizontal } from 'lucide-react';

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
          <span>Finder</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-foreground/80">
          <button className="hover:bg-foreground/10 px-1.5 py-0.5 rounded transition-colors">File</button>
          <button className="hover:bg-foreground/10 px-1.5 py-0.5 rounded transition-colors">Edit</button>
          <button className="hover:bg-foreground/10 px-1.5 py-0.5 rounded transition-colors">View</button>
          <button className="hover:bg-foreground/10 px-1.5 py-0.5 rounded transition-colors">Go</button>
          <button className="hover:bg-foreground/10 px-1.5 py-0.5 rounded transition-colors">Help</button>
        </div>
      </div>

      <span className="sm:hidden text-[15px] font-semibold tabular-nums leading-none">
        {formatTime(time).replace(' AM', '').replace(' PM', '')}
      </span>
      
      {/* Right: Status icons + clock */}
      <div className="flex items-center gap-2 sm:gap-3 text-sm">
        <Wifi className="w-4 h-4" strokeWidth={2.25} />
        <Battery className="w-5 h-5" strokeWidth={2.25} />
        <Search className="hidden sm:block w-4 h-4 opacity-80" />
        <SlidersHorizontal className="hidden sm:block w-4 h-4 opacity-80" />
        <span className="hidden sm:inline opacity-90">{formatDate(time)}</span>
        <span className="hidden sm:inline font-medium">{formatTime(time)}</span>
      </div>
    </motion.div>
  );
}
