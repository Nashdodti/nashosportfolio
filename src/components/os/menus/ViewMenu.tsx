import { MenuBarSection, MenuBarItem, MenuBarDivider } from '../MenuBarDropdown';
import { 
  Grid3x3, 
  List, 
  Columns, 
  Image,
  Eye,
  EyeOff
} from 'lucide-react';
import { useState } from 'react';

export function ViewMenu() {
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'columns'>('grid');
  const [showHidden, setShowHidden] = useState(false);

  return (
    <div className="py-1">
      <MenuBarSection title="View As">
        <MenuBarItem 
          icon={<Grid3x3 className="w-4 h-4" />}
          onClick={() => setViewMode('grid')}
        >
          <div className="flex items-center justify-between w-full">
            <span>as Icons</span>
            {viewMode === 'grid' && <span className="text-blue-400">✓</span>}
          </div>
        </MenuBarItem>
        <MenuBarItem 
          icon={<List className="w-4 h-4" />}
          onClick={() => setViewMode('list')}
        >
          <div className="flex items-center justify-between w-full">
            <span>as List</span>
            {viewMode === 'list' && <span className="text-blue-400">✓</span>}
          </div>
        </MenuBarItem>
        <MenuBarItem 
          icon={<Columns className="w-4 h-4" />}
          onClick={() => setViewMode('columns')}
        >
          <div className="flex items-center justify-between w-full">
            <span>as Columns</span>
            {viewMode === 'columns' && <span className="text-blue-400">✓</span>}
          </div>
        </MenuBarItem>
        <MenuBarItem icon={<Image className="w-4 h-4" />}>
          as Gallery
        </MenuBarItem>
      </MenuBarSection>

      <MenuBarDivider />

      <MenuBarSection>
        <MenuBarItem>
          Sort By
        </MenuBarItem>
        <MenuBarItem>
          Clean Up
        </MenuBarItem>
      </MenuBarSection>

      <MenuBarDivider />

      <MenuBarSection>
        <MenuBarItem 
          icon={showHidden ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          onClick={() => setShowHidden(!showHidden)}
        >
          <div className="flex items-center justify-between w-full">
            <span>Show Hidden Files</span>
            {showHidden && <span className="text-blue-400">✓</span>}
          </div>
        </MenuBarItem>
        <MenuBarItem>
          Show Path Bar
        </MenuBarItem>
        <MenuBarItem>
          Show Status Bar
        </MenuBarItem>
      </MenuBarSection>

      <MenuBarDivider />

      <MenuBarSection>
        <MenuBarItem>
          Show View Options
          <span className="ml-auto text-foreground/40 text-xs">⌘J</span>
        </MenuBarItem>
      </MenuBarSection>
    </div>
  );
}
