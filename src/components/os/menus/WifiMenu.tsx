import { MenuBarSection, MenuBarItem, MenuBarDivider } from '../MenuBarDropdown';
import { Wifi, WifiOff, Lock, Signal } from 'lucide-react';
import { useState } from 'react';

export function WifiMenu() {
  const [wifiEnabled, setWifiEnabled] = useState(true);

  const networks = [
    { name: 'Home Network', signal: 3, secured: true, connected: true },
    { name: 'Guest WiFi', signal: 2, secured: false, connected: false },
    { name: 'Neighbor_2.4G', signal: 1, secured: true, connected: false },
    { name: 'Coffee Shop WiFi', signal: 2, secured: false, connected: false },
  ];

  const getSignalBars = (strength: number) => {
    return (
      <div className="flex items-end gap-0.5 h-3">
        {[1, 2, 3].map((bar) => (
          <div
            key={bar}
            className={`w-1 rounded-sm ${
              bar <= strength ? 'bg-current' : 'bg-current/20'
            }`}
            style={{ height: `${bar * 33}%` }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="py-1 min-w-[280px]">
      <MenuBarSection>
        <MenuBarItem 
          icon={wifiEnabled ? <Wifi className="w-4 h-4" /> : <WifiOff className="w-4 h-4" />}
          onClick={() => setWifiEnabled(!wifiEnabled)}
        >
          <div className="flex items-center justify-between w-full">
            <span>Wi-Fi</span>
            <span className={`text-xs ${wifiEnabled ? 'text-blue-400' : 'text-foreground/50'}`}>
              {wifiEnabled ? 'On' : 'Off'}
            </span>
          </div>
        </MenuBarItem>
      </MenuBarSection>

      {wifiEnabled && (
        <>
          <MenuBarDivider />
          <MenuBarSection title="Networks">
            {networks.map((network) => (
              <MenuBarItem key={network.name}>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    {network.connected && (
                      <span className="text-blue-400">✓</span>
                    )}
                    <span className={network.connected ? 'font-medium' : ''}>
                      {network.name}
                    </span>
                    {network.secured && <Lock className="w-3 h-3 opacity-50" />}
                  </div>
                  <div className="opacity-60">{getSignalBars(network.signal)}</div>
                </div>
              </MenuBarItem>
            ))}
          </MenuBarSection>
          <MenuBarDivider />
          <MenuBarSection>
            <MenuBarItem>Network Preferences...</MenuBarItem>
          </MenuBarSection>
        </>
      )}
    </div>
  );
}
