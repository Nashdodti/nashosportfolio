import { MenuBarSection, MenuBarItem, MenuBarDivider } from '../MenuBarDropdown';
import { Battery, BatteryCharging, Zap, Power } from 'lucide-react';
import { useState, useEffect } from 'react';

export function BatteryMenu() {
  const [batteryLevel, setBatteryLevel] = useState(85);
  const [isCharging, setIsCharging] = useState(false);
  const [powerMode, setPowerMode] = useState<'low' | 'normal' | 'high'>('normal');

  useEffect(() => {
    // Try to get actual battery info if available
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        setBatteryLevel(Math.round(battery.level * 100));
        setIsCharging(battery.charging);

        battery.addEventListener('levelchange', () => {
          setBatteryLevel(Math.round(battery.level * 100));
        });

        battery.addEventListener('chargingchange', () => {
          setIsCharging(battery.charging);
        });
      });
    }
  }, []);

  const getTimeRemaining = () => {
    if (isCharging) {
      return 'Calculating...';
    }
    const hours = Math.floor((batteryLevel / 100) * 8);
    const minutes = Math.round(((batteryLevel / 100) * 8 - hours) * 60);
    return `${hours}:${minutes.toString().padStart(2, '0')} remaining`;
  };

  return (
    <div className="py-1 min-w-[260px]">
      <MenuBarSection>
        <div className="px-3 py-2">
          <div className="flex items-center gap-3">
            {isCharging ? (
              <BatteryCharging className="w-8 h-8 text-green-400" />
            ) : (
              <Battery className="w-8 h-8" />
            )}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">{batteryLevel}%</span>
                <span className="text-xs text-foreground/60">
                  {isCharging ? 'Charging' : 'Battery'}
                </span>
              </div>
              <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    isCharging
                      ? 'bg-green-400'
                      : batteryLevel > 20
                      ? 'bg-foreground'
                      : 'bg-red-500'
                  }`}
                  style={{ width: `${batteryLevel}%` }}
                />
              </div>
            </div>
          </div>
          <div className="mt-2 text-xs text-foreground/60">
            {getTimeRemaining()}
          </div>
        </div>
      </MenuBarSection>

      <MenuBarDivider />

      <MenuBarSection title="Power Mode">
        <MenuBarItem onClick={() => setPowerMode('low')}>
          <div className="flex items-center justify-between w-full">
            <span>Low Power Mode</span>
            {powerMode === 'low' && <span className="text-blue-400">✓</span>}
          </div>
        </MenuBarItem>
        <MenuBarItem onClick={() => setPowerMode('normal')}>
          <div className="flex items-center justify-between w-full">
            <span>Normal</span>
            {powerMode === 'normal' && <span className="text-blue-400">✓</span>}
          </div>
        </MenuBarItem>
        <MenuBarItem onClick={() => setPowerMode('high')}>
          <div className="flex items-center justify-between w-full">
            <span>High Performance</span>
            {powerMode === 'high' && <span className="text-blue-400">✓</span>}
          </div>
        </MenuBarItem>
      </MenuBarSection>

      <MenuBarDivider />

      <MenuBarSection>
        <MenuBarItem icon={<Zap className="w-4 h-4" />}>
          Battery Preferences...
        </MenuBarItem>
      </MenuBarSection>
    </div>
  );
}
