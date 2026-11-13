import React from 'react';
import { Info, Sun, Moon } from 'lucide-react';

interface HomePageProps {
  onNavigate: (bookId: '1662' | '1928' | '1947' | '1917', slug: string) => void;
  onOpenAbout: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenAbout,
  isDarkMode,
  onToggleDarkMode,
}) => {
  return (
    <div className="py-6 sm:py-10 px-4 max-w-5xl mx-auto">
      
      {/* Top Utility Controls */}
      <div className="flex justify-end items-center gap-1 mb-8 sm:mb-12 text-[#57534E] dark:text-[#D6CEBE] font-sans">
        <button
          onClick={onToggleDarkMode}
          className="p-2 rounded hover:bg-[#EAE3D5] dark:hover:bg-[#282622] hover:text-[#11223B] dark:hover:text-[#FAF7F0] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A782D]"
          title="Toggle dark mode (d)"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Sun className="w-4 h-4 text-[#C5A04E]" /> : <Moon className="w-4 h-4" />}
        </button>

        <button
          onClick={onOpenAbout}
          className="p-2 rounded hover:bg-[#EAE3D5] dark:hover:bg-[#282622] hover:text-[#11223B] dark:hover:text-[#FAF7F0] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A782D]"
          title="About & Sources"
          aria-label="About & Sources"
        >
          <Info className="w-4 h-4" />
        </button>
      </div>

      {/* Main Header */}
      <header className="text-center mb-10 sm:mb-14 flex flex-col items-center">
        <div className="mb-4 sm:mb-5">
          <img
            src="/assets/aistudio/image_ed0917a1.png"
            alt="Evangelical and Reformed Synod Seal"
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain dark:invert transition-all select-none"
            loading="eager"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#11223B] dark:text-[#FAF7F0] tracking-tight mb-3 text-balance">
          Liturgies
        </h1>
        <div className="flex items-center justify-center gap-3 my-3">
          <div className="w-8 sm:w-14 border-t border-[#D8CEBC] dark:border-[#38352F]" />
          <span className="text-[#9A782D] dark:text-[#C5A04E] text-base sm:text-lg select-none leading-none font-serif" aria-hidden="true">
            ✠
          </span>
          <div className="w-8 sm:w-14 border-t border-[#D8CEBC] dark:border-[#38352F]" />
        </div>
        <p className="text-base sm:text-lg font-serif italic text-[#57534E] dark:text-[#D6CEBE]">
          as approved for use in the Evangelical &amp; Reformed Synod
        </p>
      </header>

      {/* The Four Books in Chronological Order */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-4 sm:mb-8">
        
        {/* 1662 */}
        <div className="bg-[#F3EFE6] dark:bg-[#1C1B18] border border-[#D8CEBC] dark:border-[#38352F] rounded-lg p-6 flex flex-col justify-between hover:border-[#9A782D] dark:hover:border-[#C5A04E] transition-colors">
          <div>
            <button
              onClick={() => onNavigate('1662', 'morning-prayer')}
              className="w-full text-center group cursor-pointer pb-3.5 border-b border-[#D8CEBC] dark:border-[#2E2B25] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A782D] rounded-sm"
            >
              <span className="block font-mono text-xs font-medium tracking-wider text-[#9A782D] dark:text-[#C5A04E] tabular-nums mb-1">
                1662
              </span>
              <h2 className="text-xl sm:text-[1.35rem] font-serif font-bold text-[#11223B] dark:text-[#FAF7F0] group-hover:text-[#1A3357] dark:group-hover:text-[#C5A04E] transition-colors leading-snug">
                <span className="block">Book of</span>
                <span className="block">Common Prayer</span>
              </h2>
            </button>

            <div className="pt-3.5 space-y-1 text-sm font-sans">
              {[
                { title: 'Morning Prayer', slug: 'morning-prayer' },
                { title: 'Evening Prayer', slug: 'evening-prayer' },
                { title: 'Holy Communion', slug: 'holy-communion' },
                { title: 'The Litany', slug: 'litany' },
                { title: 'The Psalter', slug: 'the-psalter' }
              ].map((s) => (
                <button
                  key={s.slug}
                  onClick={() => onNavigate('1662', s.slug)}
                  className="block w-full py-1.5 px-2.5 rounded hover:bg-[#EAE3D5] dark:hover:bg-[#282622] text-[#44403C] dark:text-[#D6CEBE] hover:text-[#11223B] dark:hover:text-[#FAF7F0] transition-colors cursor-pointer text-center font-medium"
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 1917 */}
        <div className="bg-[#F3EFE6] dark:bg-[#1C1B18] border border-[#D8CEBC] dark:border-[#38352F] rounded-lg p-6 flex flex-col justify-between hover:border-[#9A782D] dark:hover:border-[#C5A04E] transition-colors">
          <div>
            <button
              onClick={() => onNavigate('1917', 'the-service')}
              className="w-full text-center group cursor-pointer pb-3.5 border-b border-[#D8CEBC] dark:border-[#2E2B25] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A782D] rounded-sm"
            >
              <span className="block font-mono text-xs font-medium tracking-wider text-[#9A782D] dark:text-[#C5A04E] tabular-nums mb-1">
                1917
              </span>
              <h2 className="text-xl sm:text-[1.35rem] font-serif font-bold text-[#11223B] dark:text-[#FAF7F0] group-hover:text-[#1A3357] dark:group-hover:text-[#C5A04E] transition-colors leading-snug">
                <span className="block">Common</span>
                <span className="block">Service Book</span>
              </h2>
            </button>

            <div className="pt-3.5 space-y-1 text-sm font-sans">
              {[
                { title: 'The Service', slug: 'the-service' },
                { title: 'Matins', slug: 'matins' },
                { title: 'Vespers', slug: 'vespers' },
                { title: 'The Litany', slug: 'the-litany' },
                { title: 'Small Catechism', slug: 'small-catechism' }
              ].map((s) => (
                <button
                  key={s.slug}
                  onClick={() => onNavigate('1917', s.slug)}
                  className="block w-full py-1.5 px-2.5 rounded hover:bg-[#EAE3D5] dark:hover:bg-[#282622] text-[#44403C] dark:text-[#D6CEBE] hover:text-[#11223B] dark:hover:text-[#FAF7F0] transition-colors cursor-pointer text-center font-medium"
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 1928 */}
        <div className="bg-[#F3EFE6] dark:bg-[#1C1B18] border border-[#D8CEBC] dark:border-[#38352F] rounded-lg p-6 flex flex-col justify-between hover:border-[#9A782D] dark:hover:border-[#C5A04E] transition-colors">
          <div>
            <button
              onClick={() => onNavigate('1928', 'morning-prayer')}
              className="w-full text-center group cursor-pointer pb-3.5 border-b border-[#D8CEBC] dark:border-[#2E2B25] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A782D] rounded-sm"
            >
              <span className="block font-mono text-xs font-medium tracking-wider text-[#9A782D] dark:text-[#C5A04E] tabular-nums mb-1">
                1928
              </span>
              <h2 className="text-xl sm:text-[1.35rem] font-serif font-bold text-[#11223B] dark:text-[#FAF7F0] group-hover:text-[#1A3357] dark:group-hover:text-[#C5A04E] transition-colors leading-snug">
                <span className="block">Book of</span>
                <span className="block">Common Prayer</span>
              </h2>
            </button>

            <div className="pt-3.5 space-y-1 text-sm font-sans">
              {[
                { title: 'Morning Prayer', slug: 'morning-prayer' },
                { title: 'Evening Prayer', slug: 'evening-prayer' },
                { title: 'Holy Communion', slug: 'holy-communion' },
                { title: 'The Litany', slug: 'litany' },
                { title: 'The Psalter', slug: 'the-psalter' }
              ].map((s) => (
                <button
                  key={s.slug}
                  onClick={() => onNavigate('1928', s.slug)}
                  className="block w-full py-1.5 px-2.5 rounded hover:bg-[#EAE3D5] dark:hover:bg-[#282622] text-[#44403C] dark:text-[#D6CEBE] hover:text-[#11223B] dark:hover:text-[#FAF7F0] transition-colors cursor-pointer text-center font-medium"
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 1947 */}
        <div className="bg-[#F3EFE6] dark:bg-[#1C1B18] border border-[#D8CEBC] dark:border-[#38352F] rounded-lg p-6 flex flex-col justify-between hover:border-[#9A782D] dark:hover:border-[#C5A04E] transition-colors">
          <div>
            <button
              onClick={() => onNavigate('1947', 'order-of-worship')}
              className="w-full text-center group cursor-pointer pb-3.5 border-b border-[#D8CEBC] dark:border-[#2E2B25] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A782D] rounded-sm"
            >
              <span className="block font-mono text-xs font-medium tracking-wider text-[#9A782D] dark:text-[#C5A04E] tabular-nums mb-1">
                1947
              </span>
              <h2 className="text-xl sm:text-[1.35rem] font-serif font-bold text-[#11223B] dark:text-[#FAF7F0] group-hover:text-[#1A3357] dark:group-hover:text-[#C5A04E] transition-colors leading-snug">
                <span className="block">Book of</span>
                <span className="block">Worship</span>
              </h2>
            </button>

            <div className="pt-3.5 space-y-1 text-sm font-sans">
              {[
                { title: 'The Order of Worship', slug: 'order-of-worship' },
                { title: 'Holy Communion', slug: 'holy-communion' },
                { title: 'The Preparatory Service', slug: 'preparatory-service' },
                { title: 'The Evening Service', slug: 'evening-service' },
                { title: 'The Litany', slug: 'the-litany' }
              ].map((s) => (
                <button
                  key={s.slug}
                  onClick={() => onNavigate('1947', s.slug)}
                  className="block w-full py-1.5 px-2.5 rounded hover:bg-[#EAE3D5] dark:hover:bg-[#282622] text-[#44403C] dark:text-[#D6CEBE] hover:text-[#11223B] dark:hover:text-[#FAF7F0] transition-colors cursor-pointer text-center font-medium"
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};



