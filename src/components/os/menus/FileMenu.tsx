import { MenuBarSection, MenuBarItem, MenuBarDivider } from '../MenuBarDropdown';
import { 
  FilePlus, 
  FolderPlus, 
  FileText, 
  Share2, 
  Trash2,
  Info
} from 'lucide-react';

export function FileMenu() {
  return (
    <div className="py-1">
      <MenuBarSection>
        <MenuBarItem icon={<FilePlus className="w-4 h-4" />}>
          New File
          <span className="ml-auto text-foreground/40 text-xs">⌘N</span>
        </MenuBarItem>
        <MenuBarItem icon={<FolderPlus className="w-4 h-4" />}>
          New Folder
          <span className="ml-auto text-foreground/40 text-xs">⇧⌘N</span>
        </MenuBarItem>
        <MenuBarItem icon={<FileText className="w-4 h-4" />}>
          Open...
          <span className="ml-auto text-foreground/40 text-xs">⌘O</span>
        </MenuBarItem>
      </MenuBarSection>

      <MenuBarDivider />

      <MenuBarSection>
        <MenuBarItem disabled>
          Close Window
          <span className="ml-auto text-foreground/40 text-xs">⌘W</span>
        </MenuBarItem>
      </MenuBarSection>

      <MenuBarDivider />

      <MenuBarSection>
        <MenuBarItem icon={<Info className="w-4 h-4" />}>
          Get Info
          <span className="ml-auto text-foreground/40 text-xs">⌘I</span>
        </MenuBarItem>
        <MenuBarItem icon={<Share2 className="w-4 h-4" />}>
          Share...
        </MenuBarItem>
      </MenuBarSection>

      <MenuBarDivider />

      <MenuBarSection>
        <MenuBarItem icon={<Trash2 className="w-4 h-4" />}>
          Move to Trash
          <span className="ml-auto text-foreground/40 text-xs">⌘⌫</span>
        </MenuBarItem>
      </MenuBarSection>
    </div>
  );
}
