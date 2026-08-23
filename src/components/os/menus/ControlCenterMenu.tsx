import { MenuBarSection, MenuBarDivider } from '../MenuBarDropdown';
import { 
  Wifi, 
  Bluetooth, 
  Volume2, 
  Moon, 
  Sun, 
  Monitor,
  Airplay,
  Music2
} from 'lucide-react';
import { useState } from 'react';

export function ControlCenterMenu() {
  const [brightness, setBrightness] = useState(75);
  const [volume, setVolume] = useState(60);
  const [darkMode, setDarkMode] = useState(true);

  const ControlTile = ({ 
    icon: Icon, 
    label, 
    active, 
    onClick 
  }: { 
    icon: any; 
    label: string; 
    active?: boolean;
    onClick?: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all ${
        active 
          ? 'bg-blue-500 text-white' 
          : 'bg-foreground/5 hover:bg-foreground/10'
      }`}
    >
      <Icon className="w-5 h-5 mb-1" />
      <span className="text-xs">{label}</span>
    </button>
  );

  const Slider = ({ 
    icon: Icon, 
    value, 
    onChange 
  }: { 
    icon: any; 
    value: number; 
    onChange: (value: number) => void;
  }) => (
    <div className="flex items-center gap-3 px-3 py-2 bg-foreground/5 rounded-xl">
      <Icon className="w-4 h-4 flex-shrink-0" />
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="flex-1 h-1 bg-foreground/10 rounded-lg appearance-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:w-4
          [&::-webkit-slider-thumb]:h-4
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-white
          [&::-webkit-slider-thumb]:shadow-md
          [&::-webkit-slider-thumb]:cursor-pointer"
      />
      <span className="text-xs w-8 text-right">{value}%</span>
    </div>
  );

  return (
    <div className="py-2 min-w-[280px]">
      {/* Quick Controls Grid */}
      <div className="px-3 mb-2">
        <div className="grid grid-cols-2 gap-2 mb-3">
          <ControlTile icon={Wifi} label="Wi-Fi" active />
          <ControlTile icon={Bluetooth} label="Bluetooth" active />
          <ControlTile icon={Airplay} label="AirDrop" />
          <ControlTile icon={Music2} label="Music" />
        </div>

        {/* Brightness Slider */}
        <div className="mb-2">
          <Slider 
            icon={darkMode ? Moon : Sun} 
            value={brightness} 
            onChange={setBrightness} 
          />
        </div>

        {/* Volume Slider */}
        <div>
          <Slider 
            icon={Volume2} 
            value={volume} 
            onChange={setVolume} 
          />
        </div>
      </div>

      <MenuBarDivider />

      {/* Display */}
      <MenuBarSection>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-full px-3 py-2 flex items-center justify-between hover:bg-foreground/5 rounded transition-colors"
        >
          <div className="flex items-center gap-2">
            <Monitor className="w-4 h-4" />
            <span className="text-sm">Appearance</span>
          </div>
          <span className="text-xs text-foreground/60">
            {darkMode ? 'Dark' : 'Light'}
          </span>
        </button>
      </MenuBarSection>

      <MenuBarDivider />

      <MenuBarSection>
        <button className="w-full px-3 py-1.5 text-left text-[13px] hover:bg-blue-500 hover:text-white transition-colors">
          System Preferences...
        </button>
      </MenuBarSection>
    </div>
  );
}
