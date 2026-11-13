import React from 'react';
import { Search, SlidersHorizontal, BookOpen } from 'lucide-react';
import { allBooks } from '../data/books';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
  onToggleSettings: () => void;
  isSettingsOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenSearch,
  onToggleSettings,
  isSettingsOpen
}) => {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-md bg-[#FAF7F2]/95 dark:bg-[#161513]/95 border-b border-[#E4DDD0] dark:border-[#2C2A25] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => onNavigate('/')}
          className="flex items-center gap-2.5 text-left text-[#11223B] dark:text-[#FAF7F0] hover:opacity-85 transition-opacity whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9A782D] rounded cursor-pointer"
        >
          <BookOpen className="w-5 h-5 text-[#9A782D] dark:text-[#C5A04E] transition-transform group-hover:scale-105" />
          <span className="font-serif text-xl font-bold tracking-tight">
            Liturgical Library
          </span>
        </button>

        {/* Zone 2: Navigation Links (Single-Line) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-sans font-medium text-[#57534E] dark:text-[#A8A095]">
          <button
            onClick={() => onNavigate('/')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors hover:text-[#11223B] dark:hover:text-[#FAF7F0] cursor-pointer ${
              currentPath === '/' ? 'text-[#11223B] dark:text-[#C5A04E] font-semibold border-b-2 border-[#9A782D] dark:border-[#C5A04E]' : ''
            }`}
          >
            All Books
          </button>

          {allBooks.map((book) => {
            const isActive = currentPath.startsWith(`/${book.slug}`);
            return (
              <button
                key={book.id}
                onClick={() => onNavigate(`/${book.slug}`)}
                className={`whitespace-nowrap shrink-0 py-1 transition-colors hover:text-[#11223B] dark:hover:text-[#FAF7F0] cursor-pointer ${
                  isActive ? 'text-[#11223B] dark:text-[#C5A04E] font-semibold border-b-2 border-[#9A782D] dark:border-[#C5A04E]' : ''
                }`}
              >
                {book.shortTitle}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action / Utilities */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-sans font-medium text-[#1C1917] dark:text-[#EDE7DD] bg-[#F3EFE6] dark:bg-[#1E1C19] hover:bg-[#EAE3D5] dark:hover:bg-[#2A2723] rounded-lg transition-colors border border-[#D8CEBC] dark:border-[#38352F] cursor-pointer"
            title="Search liturgical texts (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5 text-[#57534E] dark:text-[#A8A095]" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] bg-[#EAE3D5] dark:bg-[#2A2723] text-[#57534E] dark:text-[#A8A095] rounded font-mono">⌘K</kbd>
          </button>

          <button
            onClick={onToggleSettings}
            className={`p-2 rounded-lg transition-colors border cursor-pointer ${
              isSettingsOpen 
                ? 'bg-[#11223B] border-[#11223B] text-[#FAF7F2] dark:bg-[#C5A04E] dark:border-[#C5A04E] dark:text-[#0B1729]' 
                : 'bg-[#F3EFE6] dark:bg-[#1E1C19] border-[#D8CEBC] dark:border-[#38352F] text-[#1C1917] dark:text-[#EDE7DD] hover:bg-[#EAE3D5] dark:hover:bg-[#2A2723]'
            }`}
            title="Reading Preferences"
            aria-label="Reading Preferences"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>

      </div>
    </header>
  );
};
