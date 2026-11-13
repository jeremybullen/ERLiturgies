import React, { useState } from 'react';
import { LiturgicalBook, LiturgicalService } from '../types/liturgy';
import { BookOpen, Search, CheckCircle2, Clock } from 'lucide-react';

interface BookTableOfContentsProps {
  book: LiturgicalBook;
  activeServiceSlug?: string;
  onSelectService: (serviceSlug: string) => void;
  onSelectBookOverview: () => void;
}

export const BookTableOfContents: React.FC<BookTableOfContentsProps> = ({
  book,
  activeServiceSlug,
  onSelectService,
  onSelectBookOverview
}) => {
  const [filterQuery, setFilterQuery] = useState('');

  // Group services by category
  const categories = Array.from(new Set(book.services.map(s => s.category)));

  const filteredServices = book.services.filter(s =>
    s.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
    (s.traditionalTitle && s.traditionalTitle.toLowerCase().includes(filterQuery.toLowerCase())) ||
    (s.subtitle && s.subtitle.toLowerCase().includes(filterQuery.toLowerCase()))
  );

  return (
    <aside className="w-full lg:w-72 xl:w-80 shrink-0 border-b lg:border-b-0 lg:border-r border-[#E4DDD0] dark:border-[#2C2A25] bg-[#FAF7F2]/90 dark:bg-[#1C1B18]/80 p-4 lg:p-6 lg:min-h-[calc(100vh-4rem)] lg:sticky lg:top-16 self-start overflow-y-auto max-h-[85vh] lg:max-h-[calc(100vh-4rem)]">
      
      {/* Book Title & Overview Link */}
      <div className="mb-4 pb-4 border-b border-[#E4DDD0] dark:border-[#2C2A25]">
        <button
          onClick={onSelectBookOverview}
          className="w-full text-left group focus-visible:outline-none cursor-pointer"
        >
          <span className="text-[11px] font-mono font-medium uppercase tracking-widest text-[#9A782D] dark:text-[#C5A04E] block mb-1">
            Liturgical Book · <span className="tabular-nums">{book.year}</span>
          </span>
          <h2 className="font-serif text-xl font-bold text-[#11223B] dark:text-[#FAF7F0] group-hover:text-[#1A3357] dark:group-hover:text-[#C5A04E] transition-colors">
            {book.title}
          </h2>
          <span className="text-xs font-sans text-[#57534E] dark:text-[#A8A095] block mt-1">
            Table of Contents & Overview →
          </span>
        </button>
      </div>

      {/* In-Book Quick Search Filter */}
      <div className="relative mb-5">
        <Search className="w-3.5 h-3.5 text-[#78716C] absolute left-2.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Filter services..."
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
          className="w-full font-sans text-xs pl-8 pr-3 py-1.5 rounded-md border border-[#D8CEBC] dark:border-[#38352F] bg-[#F3EFE6] dark:bg-[#22201C] text-[#1C1917] dark:text-[#FAF7F0] placeholder:text-[#78716C] focus:outline-none focus:ring-1 focus:ring-[#9A782D] dark:focus:ring-[#C5A04E]"
        />
      </div>

      {/* Service Categories List */}
      <div className="space-y-6">
        {categories.map((cat) => {
          const catServices = filteredServices.filter(s => s.category === cat);
          if (catServices.length === 0) return null;

          return (
            <div key={cat}>
              <h3 className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#9A782D] dark:text-[#C5A04E] mb-2 px-2">
                {cat}
              </h3>
              <ul className="space-y-1">
                {catServices.map((service) => {
                  const isActive = activeServiceSlug === service.slug;
                  return (
                    <li key={service.id}>
                      <button
                        onClick={() => onSelectService(service.slug)}
                        className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-colors flex items-center justify-between group cursor-pointer ${
                          isActive
                            ? 'bg-[#EAE3D5] dark:bg-[#2A2723] text-[#11223B] dark:text-[#FAF7F0] font-semibold border border-[#9A782D]/60 dark:border-[#C5A04E]/60'
                            : 'text-[#44403C] dark:text-[#D6CEBE] hover:bg-[#EAE3D5]/70 dark:hover:bg-[#2A2723]/70 hover:text-[#11223B] dark:hover:text-[#FAF7F0]'
                        }`}
                      >
                        <span className="truncate pr-2 font-serif text-[14px]">
                          {service.title}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#9A782D] dark:bg-[#C5A04E] shrink-0" />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Book Status Note */}
      <div className="mt-8 pt-4 border-t border-[#E4DDD0] dark:border-[#2C2A25] text-[11px] font-sans text-[#57534E] dark:text-[#A8A095]">
        <p className="italic">
          {book.status === 'available' ? 'Complete statutory text available.' : 'Awaiting text submission.'}
        </p>
      </div>

    </aside>
  );
};
