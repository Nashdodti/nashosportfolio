import { MenuBarSection, MenuBarItem, MenuBarDivider } from '../MenuBarDropdown';
import { 
  Undo2, 
  Redo2, 
  Copy, 
  Clipboard,
  Scissors,
  ClipboardPaste
} from 'lucide-react';

export function EditMenu() {
  return (
    <div className="py-1">
      <MenuBarSection>
        <MenuBarItem icon={<Undo2 className="w-4 h-4" />} disabled>
          Undo
          <span className="ml-auto text-foreground/40 text-xs">⌘Z</span>
        </MenuBarItem>
        <MenuBarItem icon={<Redo2 className="w-4 h-4" />} disabled>
          Redo
          <span className="ml-auto text-foreground/40 text-xs">⇧⌘Z</span>
        </MenuBarItem>
      </MenuBarSection>

      <MenuBarDivider />

      <MenuBarSection>
        <MenuBarItem icon={<Scissors className="w-4 h-4" />} disabled>
          Cut
          <span className="ml-auto text-foreground/40 text-xs">⌘X</span>
        </MenuBarItem>
        <MenuBarItem icon={<Copy className="w-4 h-4" />} disabled>
          Copy
          <span className="ml-auto text-foreground/40 text-xs">⌘C</span>
        </MenuBarItem>
        <MenuBarItem icon={<ClipboardPaste className="w-4 h-4" />} disabled>
          Paste
          <span className="ml-auto text-foreground/40 text-xs">⌘V</span>
        </MenuBarItem>
      </MenuBarSection>

      <MenuBarDivider />

      <MenuBarSection>
        <MenuBarItem disabled>
          Select All
          <span className="ml-auto text-foreground/40 text-xs">⌘A</span>
        </MenuBarItem>
      </MenuBarSection>
    </div>
  );
}
