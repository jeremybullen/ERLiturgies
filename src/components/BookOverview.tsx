import React from 'react';
import { LiturgicalBook } from '../types/liturgy';
import { BookOpen, Calendar, MapPin, Feather, ArrowRight, Clock, AlertCircle } from 'lucide-react';

interface BookOverviewProps {
  book: LiturgicalBook;
  onSelectService: (serviceSlug: string) => void;
  onNavigate: (path: string) => void;
}

export const BookOverview: React.FC<BookOverviewProps> = ({
  book,
  onSelectService,
  onNavigate
}) => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      
      {/* Book Cover Banner Card */}
      <div className="relative rounded-2xl p-6 sm:p-10 bg-[#F3EFE6] dark:bg-[#1C1B18] border border-[#D8CEBC] dark:border-[#2C2A25] mb-10 overflow-hidden">
        
        {/* Subtle decorative gold watermark */}
        <div className="absolute right-0 top-0 -translate-y-6 translate-x-6 w-48 h-48 bg-[#9A782D]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#57534E] dark:text-[#A8A095] mb-3">
            <span className="font-semibold uppercase tracking-wider text-[#9A782D] dark:text-[#C5A04E] tabular-nums">
              {book.year} Edition
            </span>
            <span>·</span>
            <span className="font-sans">{book.tradition}</span>
            <span>·</span>
            <span className="font-sans">{book.jurisdiction}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#11223B] dark:text-[#FAF7F0] tracking-tight mb-3">
            {book.title}
          </h1>

          <p className="font-serif italic text-base sm:text-lg text-[#44403C] dark:text-[#D6CEBE] mb-6 max-w-2xl">
            {book.formalTitle}
          </p>

          <p className="font-sans text-sm sm:text-base text-[#44403C] dark:text-[#D6CEBE] leading-relaxed mb-6">
            {book.historicalContext}
          </p>

          <div className="text-xs font-sans text-[#57534E] dark:text-[#A8A095] pt-4 border-t border-[#D8CEBC] dark:border-[#2C2A25]">
            <strong className="text-[#1C1917] dark:text-[#FAF7F0]">Source & Authority:</strong> {book.sourceNote}
          </div>
        </div>

      </div>

      {/* Awaiting Text Notice (if not yet imported) */}
      {book.status === 'awaiting_text' && (
        <div className="mb-10 p-5 rounded-xl border border-[#9A782D]/50 dark:border-[#C5A04E]/40 bg-[#F3EFE6] dark:bg-[#1E1C19] flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#9A782D] dark:text-[#C5A04E] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm font-sans text-[#1C1917] dark:text-[#EDE7DD]">
            <h3 className="font-semibold mb-1">Awaiting Text Submission</h3>
            <p className="leading-relaxed text-[#44403C] dark:text-[#D6CEBE]">
              The structure and service canon for this volume are configured and ready. Public domain liturgical text for this edition may be submitted to immediately populate the services below.
            </p>
          </div>
        </div>
      )}

      {/* Services Index List */}
      <div>
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#E4DDD0] dark:border-[#2C2A25]">
          <h2 className="font-serif text-2xl font-bold text-[#11223B] dark:text-[#FAF7F0]">
            Order of Services & Offices
          </h2>
          <span className="text-xs font-mono tabular-nums text-[#57534E] dark:text-[#A8A095]">
            {book.services.length} services
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {book.services.map((service, idx) => (
            <button
              key={service.id}
              onClick={() => onSelectService(service.slug)}
              className="text-left p-5 rounded-xl border border-[#D8CEBC] dark:border-[#38352F] bg-[#F3EFE6] dark:bg-[#1C1B18] hover:border-[#9A782D] dark:hover:border-[#C5A04E] hover:bg-[#EAE3D5] dark:hover:bg-[#22201C] transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9A782D] cursor-pointer"
            >
              <div className="flex items-center justify-between text-xs text-[#57534E] dark:text-[#A8A095] mb-2">
                <span className="font-sans font-semibold uppercase tracking-wider text-[11px] text-[#9A782D] dark:text-[#C5A04E]">
                  {service.category}
                </span>
                <span className="font-mono text-[11px] tabular-nums">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="font-serif text-lg font-bold text-[#11223B] dark:text-[#FAF7F0] group-hover:text-[#1A3357] dark:group-hover:text-[#C5A04E] transition-colors mb-1.5">
                {service.title}
              </h3>

              {service.subtitle && (
                <p className="font-serif italic text-xs text-[#44403C] dark:text-[#D6CEBE] mb-2">
                  {service.subtitle}
                </p>
              )}

              <p className="font-sans text-xs text-[#57534E] dark:text-[#A8A095] line-clamp-2 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-3 flex items-center text-xs font-sans font-medium text-[#11223B] dark:text-[#C5A04E] group-hover:translate-x-1 transition-transform">
                <span>Read office</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};
