import React, { useState } from 'react';
import { LiturgicalBook, LiturgicalService, ReadingSettings, LiturgicalBlock } from '../types/liturgy';
import { Check, Share2, ArrowLeft, ArrowRight, ChevronRight, BookOpen } from 'lucide-react';

interface ServiceViewerProps {
  book: LiturgicalBook;
  service: LiturgicalService;
  settings: ReadingSettings;
  onNavigate: (path: string) => void;
}

export const ServiceViewer: React.FC<ServiceViewerProps> = ({
  book,
  service,
  settings,
  onNavigate
}) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const copyPageUrl = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    showToast('Service link copied to clipboard');
  };

  // Determine prev and next services
  const currentIndex = book.services.findIndex(s => s.id === service.id);
  const prevService = currentIndex > 0 ? book.services[currentIndex - 1] : null;
  const nextService = currentIndex < book.services.length - 1 ? book.services[currentIndex + 1] : null;

  // Font size mapping
  const fontSizeClass = {
    small: 'text-[15px] leading-relaxed',
    medium: 'text-[17px] leading-relaxed',
    large: 'text-[19px] leading-loose',
    xlarge: 'text-[21px] leading-loose'
  }[settings.fontSize];

  // Rubric style
  const rubricColorClass = settings.rubricColor === 'crimson'
    ? 'text-[#991B1B] dark:text-[#E86558]'
    : 'text-[#57534E] dark:text-[#A8A095]';

  // Measure constraint
  const measureClass = settings.measureWidth === 'standard' ? 'max-w-[70ch]' : 'max-w-4xl';

  return (
    <article className={`print-book-content mx-auto ${measureClass} pb-24 pt-6 px-4 sm:px-6`}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#14532D] text-[#FAF7F2] text-xs font-sans px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 border border-[#14532D] animate-in fade-in duration-200">
          <Check className="w-3.5 h-3.5 text-[#C5A04E]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Breadcrumb Trail */}
      <nav className="no-print flex items-center gap-1.5 text-xs font-sans text-[#57534E] dark:text-[#A8A095] mb-6">
        <button
          onClick={() => onNavigate('/')}
          className="hover:text-[#11223B] dark:hover:text-[#FAF7F0] transition-colors cursor-pointer"
        >
          Library
        </button>
        <ChevronRight className="w-3.5 h-3.5" />
        <button
          onClick={() => onNavigate(`/${book.slug}`)}
          className="hover:text-[#11223B] dark:hover:text-[#FAF7F0] transition-colors cursor-pointer"
        >
          {book.shortTitle}
        </button>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[#1C1917] dark:text-[#FAF7F0] font-medium truncate">
          {service.title}
        </span>
      </nav>

      {/* Service Header */}
      <header className="mb-10 pb-6 border-b border-[#E4DDD0] dark:border-[#2C2A25] text-center">
        {service.traditionalTitle && (
          <p className="text-xs font-mono tracking-widest uppercase text-[#9A782D] dark:text-[#C5A04E] mb-2">
            {service.traditionalTitle}
          </p>
        )}
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#11223B] dark:text-[#FAF7F0]">
          {service.title}
        </h1>
        {service.subtitle && (
          <p className="font-serif text-lg sm:text-xl italic text-[#44403C] dark:text-[#D6CEBE] mt-2">
            {service.subtitle}
          </p>
        )}

        {/* Toolbar: Share Link */}
        <div className="no-print flex items-center justify-center gap-3 mt-6">
          <button
            onClick={copyPageUrl}
            className="flex items-center gap-1.5 text-xs font-sans px-3 py-1.5 rounded bg-[#F3EFE6] dark:bg-[#1E1C19] text-[#44403C] dark:text-[#D6CEBE] hover:bg-[#EAE3D5] dark:hover:bg-[#2A2723] hover:text-[#11223B] dark:hover:text-[#FAF7F0] transition-colors border border-[#D8CEBC] dark:border-[#38352F] cursor-pointer"
            title="Copy service link"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Link</span>
          </button>
        </div>
      </header>

      {/* Liturgical Blocks */}
      <div className={`space-y-6 ${fontSizeClass}`}>
        {service.blocks.map((block, idx) => (
          <BlockRenderer
            key={idx}
            block={block}
            idx={idx}
            rubricColorClass={rubricColorClass}
          />
        ))}
      </div>

      {/* Footer Navigation */}
      <footer className="no-print mt-16 pt-8 border-t border-[#E4DDD0] dark:border-[#2C2A25] flex flex-col sm:flex-row items-center justify-between gap-4">
        {prevService ? (
          <button
            onClick={() => onNavigate(`/${book.slug}/${prevService.slug}`)}
            className="w-full sm:w-auto flex items-center gap-2 px-4 py-2 rounded-lg border border-[#D8CEBC] dark:border-[#38352F] bg-[#F3EFE6] dark:bg-[#1E1C19] hover:bg-[#EAE3D5] dark:hover:bg-[#2A2723] text-[#1C1917] dark:text-[#EDE7DD] text-xs font-sans font-medium transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#9A782D] dark:text-[#C5A04E]" />
            <div className="text-left">
              <span className="block text-[10px] font-mono uppercase text-[#57534E] dark:text-[#A8A095]">Previous Service</span>
              <span className="font-serif text-sm font-semibold text-[#11223B] dark:text-[#FAF7F0]">{prevService.title}</span>
            </div>
          </button>
        ) : <div />}

        {nextService && (
          <button
            onClick={() => onNavigate(`/${book.slug}/${nextService.slug}`)}
            className="w-full sm:w-auto flex items-center gap-2 px-4 py-2 rounded-lg border border-[#D8CEBC] dark:border-[#38352F] bg-[#F3EFE6] dark:bg-[#1E1C19] hover:bg-[#EAE3D5] dark:hover:bg-[#2A2723] text-[#1C1917] dark:text-[#EDE7DD] text-xs font-sans font-medium transition-colors self-end cursor-pointer"
          >
            <div className="text-right">
              <span className="block text-[10px] font-mono uppercase text-[#57534E] dark:text-[#A8A095]">Next Service</span>
              <span className="font-serif text-sm font-semibold text-[#11223B] dark:text-[#FAF7F0]">{nextService.title}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#9A782D] dark:text-[#C5A04E]" />
          </button>
        )}
      </footer>

    </article>
  );
};

interface BlockRendererProps {
  block: LiturgicalBlock;
  idx: number;
  rubricColorClass: string;
}

const BlockRenderer: React.FC<BlockRendererProps> = ({
  block,
  idx,
  rubricColorClass
}) => {
  switch (block.type) {
    case 'heading':
      return (
        <div className="pt-8 pb-3 border-b border-[#E4DDD0] dark:border-[#2C2A25] text-left">
          <h2 className="font-serif text-2xl font-bold tracking-wide text-[#11223B] dark:text-[#FAF7F0]">
            {block.title}
          </h2>
        </div>
      );

    case 'subheading':
      return (
        <div className="pt-6 pb-2 text-left">
          <h3 className="font-serif text-xl font-semibold text-[#1C1917] dark:text-[#FAF7F0]">
            {block.title}
          </h3>
        </div>
      );

    case 'rubric':
      return (
        <div className={`rubric-text ${rubricColorClass} italic font-serif text-[0.92em] py-1 my-3`}>
          <p className="whitespace-pre-line leading-relaxed">
            {block.text}
          </p>
        </div>
      );

    case 'scripture_sentence':
      return (
        <div className="my-3 pl-2 sm:pl-4">
          {block.speaker && (
            <p className="text-xs font-sans uppercase tracking-wider text-[#57534E] dark:text-[#A8A095] mb-0.5">
              {block.speaker}
            </p>
          )}
          <p className="font-serif text-[#1C1917] dark:text-[#EDE7DD]">
            {block.text}
            {block.citation && (
              <span className="block sm:inline sm:ml-2 text-xs font-serif text-[#991B1B] dark:text-[#E86558] italic">
                — {block.citation}
              </span>
            )}
          </p>
        </div>
      );

    case 'prayer':
      return (
        <div className="relative group my-5 p-4 rounded-lg bg-[#F3EFE6]/70 dark:bg-[#1E1C19]/70 border border-[#D8CEBC] dark:border-[#38352F]">

          {block.title && (
            <h4 className="font-serif text-lg font-medium italic text-left text-[#11223B] dark:text-[#FAF7F0] mb-2">
              {block.title}
            </h4>
          )}
          {block.rubricNote && (
            <p className={`rubric-text text-xs italic ${rubricColorClass} mb-2`}>
              {block.rubricNote}
            </p>
          )}
          <p className="font-serif text-[#1C1917] dark:text-[#EDE7DD] whitespace-pre-line leading-relaxed">
            {block.text}
          </p>
          {block.citation && (
            <p className="text-xs font-serif text-[#57534E] dark:text-[#A8A095] italic mt-2 text-right">
              {block.citation}
            </p>
          )}
        </div>
      );

    case 'dialogue':
      return (
        <div className="my-4 space-y-2 pl-2">
          {block.dialogue?.map((line, dIdx) => {
            const isResponse = /^(?:Answer|Response|Resp|People|The People|Congregation|[℟R])\b/i.test(line.speaker);
            return (
              <div key={dIdx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                <span className={`shrink-0 w-24 text-xs font-serif font-bold tracking-wider ${
                  isResponse ? 'text-[#991B1B] dark:text-[#E86558]' : 'text-[#991B1B] dark:text-[#E86558] italic'
                }`}>
                  {line.speaker}
                </span>
                <span className={`font-serif text-[#1C1917] dark:text-[#EDE7DD] whitespace-pre-line ${isResponse ? 'italic' : ''}`}>
                  {line.text}
                </span>
              </div>
            );
          })}
        </div>
      );

    case 'canticle':
      return (
        <div className="my-6">
          {block.title && (
            <div className="text-left mb-4">
              <h3 className="font-serif text-xl font-semibold tracking-wide text-[#11223B] dark:text-[#FAF7F0]">
                {block.title}
              </h3>
              {block.citation && (
                <p className="text-xs font-sans text-[#57534E] dark:text-[#A8A095] italic mt-0.5">
                  {block.citation}
                </p>
              )}
            </div>
          )}

          {block.verses ? (
            <div className="space-y-2">
              {block.verses.map((verse, vIdx) => {
                const parts = verse.text.split(' : ');
                return (
                  <div key={vIdx} className="font-serif text-[#1C1917] dark:text-[#EDE7DD] flex flex-col sm:flex-row sm:items-baseline pl-4">
                    <span className="flex-1">{parts[0]}</span>
                    {parts[1] && (
                      <span className="sm:text-right text-[#44403C] dark:text-[#D6CEBE] sm:w-1/2 italic pl-4 sm:pl-6">
                        : {parts[1]}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="font-serif text-[#1C1917] dark:text-[#EDE7DD] whitespace-pre-line leading-relaxed pl-4">
              {block.text}
            </p>
          )}
        </div>
      );

    case 'creed':
      return (
        <div className="my-6 p-5 rounded-lg bg-[#F3EFE6] dark:bg-[#1E1C19] border border-[#D8CEBC] dark:border-[#38352F]">
          {block.title && (
            <h3 className="font-serif text-xl font-semibold text-[#11223B] dark:text-[#FAF7F0] mb-3 text-left">
              {block.title}
            </h3>
          )}
          <p className="font-serif text-[#1C1917] dark:text-[#EDE7DD] whitespace-pre-line leading-relaxed">
            {block.text}
          </p>
        </div>
      );

    case 'exhortation':
      return (
        <div className="my-5 p-4 rounded-lg bg-[#F3EFE6]/60 dark:bg-[#1E1C19]/60 border border-[#D8CEBC] dark:border-[#38352F]">
          {block.title && (
            <h4 className="font-serif text-lg font-medium italic text-left text-[#11223B] dark:text-[#FAF7F0] mb-2">
              {block.title}
            </h4>
          )}
          <p className="font-serif text-[#1C1917] dark:text-[#EDE7DD] whitespace-pre-line leading-relaxed">
            {block.text}
          </p>
        </div>
      );

    case 'catechism_qa':
      return (
        <div className="my-4 p-4 rounded-md bg-[#F3EFE6] dark:bg-[#1E1C19] border border-[#D8CEBC] dark:border-[#38352F]">
          <div className="mb-2">
            <span className="text-xs font-serif font-bold uppercase tracking-wider text-[#991B1B] dark:text-[#E86558] mr-2">
              Question.
            </span>
            <span className="font-serif italic font-medium text-[#1C1917] dark:text-[#EDE7DD]">
              {block.question}
            </span>
          </div>
          <div>
            <span className="text-xs font-serif font-bold uppercase tracking-wider text-[#991B1B] dark:text-[#E86558] mr-2">
              Answer.
            </span>
            <span className="font-serif text-[#1C1917] dark:text-[#EDE7DD] whitespace-pre-line">
              {block.answer}
            </span>
          </div>
        </div>
      );

    default:
      return (
        <p className="font-serif text-[#1C1917] dark:text-[#EDE7DD] whitespace-pre-line leading-relaxed">
          {block.text}
        </p>
      );
  }
};
