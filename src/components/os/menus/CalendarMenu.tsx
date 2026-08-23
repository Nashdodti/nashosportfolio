import { MenuBarSection, MenuBarDivider } from '../MenuBarDropdown';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function CalendarMenu() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);
  const today = new Date();
  const isCurrentMonth = 
    currentDate.getMonth() === today.getMonth() && 
    currentDate.getFullYear() === today.getFullYear();

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="py-2 min-w-[280px]">
      {/* Current Date Display */}
      <div className="px-3 pb-2">
        <div className="text-2xl font-semibold">
          {today.toLocaleDateString('en-US', { weekday: 'long' })}
        </div>
        <div className="text-sm text-foreground/60">
          {today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </div>
      </div>

      <MenuBarDivider />

      {/* Calendar */}
      <div className="px-3 py-2">
        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={previousMonth}
            className="p-1 hover:bg-foreground/10 rounded transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-sm font-medium">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </span>
          <button
            onClick={nextMonth}
            className="p-1 hover:bg-foreground/10 rounded transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-1 mb-1">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
            <div key={i} className="text-center text-xs text-foreground/50 font-medium">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {/* Empty cells for days before month starts */}
          {Array.from({ length: startingDayOfWeek }).map((_, i) => (
            <div key={`empty-${i}`} className="aspect-square" />
          ))}
          
          {/* Days of the month */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const isToday = isCurrentMonth && day === today.getDate();
            
            return (
              <button
                key={day}
                className={`aspect-square flex items-center justify-center text-xs rounded transition-colors ${
                  isToday
                    ? 'bg-blue-500 text-white font-semibold'
                    : 'hover:bg-foreground/10'
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      <MenuBarDivider />

      <MenuBarSection>
        <button className="w-full px-3 py-1.5 text-left text-[13px] hover:bg-blue-500 hover:text-white transition-colors">
          Open Calendar...
        </button>
      </MenuBarSection>
    </div>
  );
}
