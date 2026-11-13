import React from 'react';
import { ReadingSettings } from '../types/liturgy';
import { X, Check } from 'lucide-react';

interface ReadingControlsProps {
  settings: ReadingSettings;
  onUpdateSettings: (newSettings: Partial<ReadingSettings>) => void;
  onClose: () => void;
}

export const ReadingControls: React.FC<ReadingControlsProps> = ({
  settings,
  onUpdateSettings,
  onClose
}) => {
  return (
    <div className="border-b border-[#E4DDD0] dark:border-[#2C2A25] bg-[#F3EFE6]/95 dark:bg-[#1C1B18]/95 backdrop-blur-md px-4 py-4 sm:px-6 transition-colors animate-in fade-in slide-in-from-top-2 duration-150">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        {/* Left: Settings grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto font-sans">
          
          {/* Theme Option */}
          <div>
            <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-[#57534E] dark:text-[#A8A095] mb-1.5">
              Paper / Theme
            </label>
            <div className="flex rounded-md shadow-xs border border-[#D8CEBC] dark:border-[#38352F] p-0.5 bg-[#FAF7F2] dark:bg-[#22201C]">
              <button
                onClick={() => onUpdateSettings({ theme: 'parchment' })}
                className={`flex-1 px-2.5 py-1 text-xs rounded transition-colors cursor-pointer ${
                  settings.theme === 'parchment' 
                    ? 'bg-[#11223B] text-[#FAF7F2] font-medium shadow-xs' 
                    : 'text-[#44403C] dark:text-[#D6CEBE] hover:text-[#11223B]'
                }`}
              >
                Parchment
              </button>
              <button
                onClick={() => onUpdateSettings({ theme: 'alabaster' })}
                className={`flex-1 px-2.5 py-1 text-xs rounded transition-colors cursor-pointer ${
                  settings.theme === 'alabaster' 
                    ? 'bg-[#11223B] text-[#FAF7F2] font-medium shadow-xs' 
                    : 'text-[#44403C] dark:text-[#D6CEBE] hover:text-[#11223B]'
                }`}
              >
                White
              </button>
              <button
                onClick={() => onUpdateSettings({ theme: 'night' })}
                className={`flex-1 px-2.5 py-1 text-xs rounded transition-colors cursor-pointer ${
                  settings.theme === 'night' 
                    ? 'bg-[#0B1729] text-[#FAF7F2] font-medium shadow-xs' 
                    : 'text-[#44403C] dark:text-[#D6CEBE] hover:text-[#11223B]'
                }`}
              >
                Night
              </button>
            </div>
          </div>

          {/* Type Size */}
          <div>
            <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-[#57534E] dark:text-[#A8A095] mb-1.5">
              Type Size
            </label>
            <div className="flex rounded-md shadow-xs border border-[#D8CEBC] dark:border-[#38352F] p-0.5 bg-[#FAF7F2] dark:bg-[#22201C]">
              {(['small', 'medium', 'large', 'xlarge'] as const).map((sz) => (
                <button
                  key={sz}
                  onClick={() => onUpdateSettings({ fontSize: sz })}
                  className={`flex-1 py-1 text-xs font-mono capitalize rounded transition-colors cursor-pointer ${
                    settings.fontSize === sz 
                      ? 'bg-[#EAE3D5] dark:bg-[#38352F] text-[#11223B] dark:text-[#FAF7F0] font-medium' 
                      : 'text-[#57534E] dark:text-[#A8A095] hover:text-[#11223B]'
                  }`}
                  title={`${sz} text`}
                >
                  {sz === 'small' ? 'S' : sz === 'medium' ? 'M' : sz === 'large' ? 'L' : 'XL'}
                </button>
              ))}
            </div>
          </div>

          {/* Rubric Styling */}
          <div>
            <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-[#57534E] dark:text-[#A8A095] mb-1.5">
              Rubric Color
            </label>
            <div className="flex rounded-md shadow-xs border border-[#D8CEBC] dark:border-[#38352F] p-0.5 bg-[#FAF7F2] dark:bg-[#22201C]">
              <button
                onClick={() => onUpdateSettings({ rubricColor: 'crimson' })}
                className={`flex-1 px-2 py-1 text-xs rounded flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  settings.rubricColor === 'crimson' 
                    ? 'bg-[#991B1B]/10 text-[#991B1B] dark:bg-[#E86558]/15 dark:text-[#E86558] font-medium' 
                    : 'text-[#44403C] dark:text-[#D6CEBE]'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#991B1B] inline-block" />
                Crimson
              </button>
              <button
                onClick={() => onUpdateSettings({ rubricColor: 'charcoal' })}
                className={`flex-1 px-2 py-1 text-xs rounded flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  settings.rubricColor === 'charcoal' 
                    ? 'bg-[#EAE3D5] dark:bg-[#38352F] text-[#1C1917] dark:text-[#FAF7F0] font-medium' 
                    : 'text-[#44403C] dark:text-[#D6CEBE]'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#57534E] inline-block" />
                Charcoal
              </button>
            </div>
          </div>

          {/* Column Measure */}
          <div>
            <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-[#57534E] dark:text-[#A8A095] mb-1.5">
              Page Width
            </label>
            <div className="flex rounded-md shadow-xs border border-[#D8CEBC] dark:border-[#38352F] p-0.5 bg-[#FAF7F2] dark:bg-[#22201C]">
              <button
                onClick={() => onUpdateSettings({ measureWidth: 'standard' })}
                className={`flex-1 px-2.5 py-1 text-xs rounded transition-colors cursor-pointer ${
                  settings.measureWidth === 'standard' 
                    ? 'bg-[#EAE3D5] dark:bg-[#38352F] text-[#11223B] dark:text-[#FAF7F0] font-medium' 
                    : 'text-[#44403C] dark:text-[#D6CEBE]'
                }`}
              >
                Standard
              </button>
              <button
                onClick={() => onUpdateSettings({ measureWidth: 'wide' })}
                className={`flex-1 px-2.5 py-1 text-xs rounded transition-colors cursor-pointer ${
                  settings.measureWidth === 'wide' 
                    ? 'bg-[#EAE3D5] dark:bg-[#38352F] text-[#11223B] dark:text-[#FAF7F0] font-medium' 
                    : 'text-[#44403C] dark:text-[#D6CEBE]'
                }`}
              >
                Wide
              </button>
            </div>
          </div>

        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="self-end md:self-center p-1.5 text-[#57534E] hover:text-[#11223B] dark:hover:text-[#FAF7F0] rounded-md transition-colors cursor-pointer"
          title="Close Settings"
        >
          <X className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};
