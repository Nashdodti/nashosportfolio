import { Check, Signal } from 'lucide-react';
import { MenuBarDivider, MenuBarItem, MenuBarSection } from '../MenuBarDropdown';

const carriers = [
  { name: 'Airtel', detail: '5G · Primary SIM', active: true },
  { name: 'Jio', detail: '5G · Secondary SIM', active: false },
];

export function MobileNetworkMenu() {
  return (
    <div className="min-w-[220px] py-1">
      <MenuBarSection title="Dual SIM">
        {carriers.map((carrier) => (
          <MenuBarItem key={carrier.name} icon={<Signal className="h-4 w-4" />}>
            <div className="flex w-full items-center justify-between gap-4">
              <div>
                <div className={carrier.active ? 'font-medium' : ''}>{carrier.name}</div>
                <div className="text-[11px] opacity-60">{carrier.detail}</div>
              </div>
              {carrier.active && <Check className="h-4 w-4" />}
            </div>
          </MenuBarItem>
        ))}
      </MenuBarSection>
      <MenuBarDivider />
      <MenuBarSection>
        <MenuBarItem>Cellular Settings...</MenuBarItem>
      </MenuBarSection>
    </div>
  );
}
