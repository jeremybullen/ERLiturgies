import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, ArrowRight } from 'lucide-react';
import { searchLiturgicalTexts, SearchResult } from '../data/books';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (bookSlug: string, serviceSlug: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const res = searchLiturgicalTexts(query);
    setResults(res);
  }, [query]);

  // Handle ESC and Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0B1729]/60 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-[#FAF7F2] dark:bg-[#1C1B18] rounded-2xl shadow-2xl border border-[#D8CEBC] dark:border-[#2C2A25] overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#E4DDD0] dark:border-[#2C2A25] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#9A782D] dark:text-[#C5A04E] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search prayers, canticles, rubrics, collects (e.g. 'Peace', 'Chrysostom', 'Communion')..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent font-sans text-sm sm:text-base text-[#1C1917] dark:text-[#FAF7F0] placeholder:text-[#78716C] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#57534E] hover:text-[#11223B] dark:hover:text-[#FAF7F0] rounded cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-mono text-[#57534E] dark:text-[#A8A095] hover:text-[#11223B] dark:hover:text-[#FAF7F0] px-2 py-1 rounded bg-[#F3EFE6] dark:bg-[#2A2723] border border-[#D8CEBC] dark:border-[#38352F] cursor-pointer"
          >
            Esc
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {query.trim().length >= 2 && results.length === 0 && (
            <div className="text-center py-12 font-sans text-[#44403C] dark:text-[#D6CEBE] text-sm">
              <p>No matches found for &ldquo;{query}&rdquo;.</p>
              <p className="text-xs text-[#57534E] dark:text-[#A8A095] mt-1">Try another liturgical term like &ldquo;Almighty&rdquo;, &ldquo;Mercy&rdquo;, or &ldquo;Creed&rdquo;.</p>
            </div>
          )}

          {query.trim().length < 2 && (
            <div className="py-8 px-2 text-xs font-sans text-[#57534E] dark:text-[#A8A095]">
              <p className="font-semibold uppercase tracking-wider text-[10px] text-[#9A782D] dark:text-[#C5A04E] mb-2">Suggested Searches</p>
              <div className="flex flex-wrap gap-2">
                {['General Confession', 'Holy Communion', 'Te Deum', 'Ten Commandments', 'Collect for Peace', 'Burial of the Dead', 'Litany'].map(term => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-2.5 py-1 rounded-md bg-[#F3EFE6] dark:bg-[#2A2723] text-[#1C1917] dark:text-[#EDE7DD] border border-[#D8CEBC] dark:border-[#38352F] hover:bg-[#EAE3D5] dark:hover:bg-[#38352F] transition-colors cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {results.map((res, idx) => (
            <button
              key={idx}
              onClick={() => {
                onSelectResult(res.book.slug, res.service.slug);
                onClose();
              }}
              className="w-full text-left p-3.5 rounded-xl bg-[#F3EFE6]/60 dark:bg-[#22201C] border border-[#D8CEBC] dark:border-[#38352F] hover:border-[#9A782D] dark:hover:border-[#C5A04E] hover:bg-[#EAE3D5] dark:hover:bg-[#2A2723] transition-all group cursor-pointer"
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-mono font-medium uppercase tracking-wider text-[10px] text-[#9A782D] dark:text-[#C5A04E]">
                  {res.book.shortTitle} · {res.service.category}
                </span>
                <span className="text-[11px] font-sans capitalize text-[#57534E] dark:text-[#A8A095]">
                  {res.matchType} match
                </span>
              </div>

              <h4 className="font-serif text-base font-bold text-[#11223B] dark:text-[#FAF7F0] group-hover:text-[#1A3357] dark:group-hover:text-[#C5A04E] transition-colors">
                {res.service.title}
              </h4>

              <p className="font-serif text-xs text-[#44403C] dark:text-[#D6CEBE] mt-1 line-clamp-2 leading-relaxed">
                {res.snippet}
              </p>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};
