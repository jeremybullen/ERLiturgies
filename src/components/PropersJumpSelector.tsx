import React, { useState, useMemo, useEffect, useRef } from 'react';
import { PROPERS_1928_INDEX, ProperDayItem } from '../services/bcp1928/propersIndex';
import { PROPERS_1662_INDEX } from '../services/propersIndex1662';

interface PropersJumpSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTarget: (targetId: string, label: string) => void;
  bookId?: string;
}

export function PropersJumpSelector({ isOpen, onClose, onSelectTarget, bookId = '1662' }: PropersJumpSelectorProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const activeIndex = useMemo(() => {
    return bookId === '1928' ? PROPERS_1928_INDEX : PROPERS_1662_INDEX;
  }, [bookId]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return activeIndex;
    return activeIndex.filter((p: ProperDayItem) => {
      if (p.title.toLowerCase().includes(q)) return true;
      if (p.shortTitle.toLowerCase().includes(q)) return true;
      if (p.season.toLowerCase().includes(q)) return true;
      if (p.date && p.date.toLowerCase().includes(q)) return true;
      if (p.citation && p.citation.toLowerCase().includes(q)) return true;
      return false;
    });
  }, [query, activeIndex]);

  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-0 sm:left-auto sm:right-0 mt-1 w-72 sm:w-84 bg-[#FAF7F2] dark:bg-[#1E1D1A] border border-[#D8CEBC] dark:border-[#38352F] rounded-md shadow-xl py-1 z-50 animate-in fade-in zoom-in-95 duration-100 flex flex-col max-h-[70vh] font-sans"
      role="listbox"
    >
      {/* Search Input */}
      <div className="p-2 border-b border-[#E4DDD0] dark:border-[#33302A] shrink-0">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && filtered.length > 0) {
              const p = filtered[0];
              onSelectTarget(p.id, p.shortTitle);
            }
          }}
          placeholder="Filter Sunday, Feast, or Season..."
          className="w-full px-2.5 py-1.5 text-xs bg-white dark:bg-[#161513] border border-[#D8CEBC] dark:border-[#38352F] rounded text-[#1C1917] dark:text-[#EDE7DD] placeholder-[#78716C] focus:outline-none focus:ring-1 focus:ring-[#9A782D] dark:focus:ring-[#C5A04E]"
        />
      </div>

      {/* Results List */}
      <div className="overflow-y-auto divide-y divide-[#E4DDD0]/70 dark:divide-[#33302A]/50 py-1">
        {filtered.length === 0 ? (
          <div className="px-3 py-4 text-xs text-[#57534E] text-center italic">
            No days matching &ldquo;{query}&rdquo;
          </div>
        ) : (
          filtered.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectTarget(item.id, item.shortTitle)}
              className="w-full text-left px-3 py-2 text-xs hover:bg-[#F3EFE6] dark:hover:bg-[#282622] transition-colors cursor-pointer flex flex-col gap-0.5 group"
              role="option"
            >
              <div className="flex items-center justify-between gap-1.5">
                <span className="font-serif font-semibold text-sm text-[#11223B] dark:text-[#FAF7F0] group-hover:text-[#9A782D] dark:group-hover:text-[#C5A04E] transition-colors">
                  {item.shortTitle}
                </span>
                {item.date && (
                  <span className="text-[10px] font-mono tracking-wider text-[#9A782D] dark:text-[#C5A04E] tabular-nums font-medium shrink-0">
                    {item.date}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between gap-2 text-[11px] text-[#57534E] dark:text-[#D6CEBE]">
                <span className="truncate">{item.season}</span>
                {item.citation && (
                  <span className="truncate text-[#78716C] dark:text-stone-400 font-serif italic max-w-[150px]">
                    {item.citation}
                  </span>
                )}
              </div>
            </button>
          ))
        )}
      </div>

      {/* Footer count indicator */}
      <div className="px-3 py-1 bg-[#F3EFE6]/70 dark:bg-[#181715]/60 border-t border-[#E4DDD0] dark:border-[#33302A] text-[10px] font-mono tabular-nums text-[#57534E] dark:text-stone-400 text-right shrink-0">
        Showing {filtered.length} of {activeIndex.length} days
      </div>
    </div>
  );
}
