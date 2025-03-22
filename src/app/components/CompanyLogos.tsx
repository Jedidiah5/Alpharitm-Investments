import React from 'react';

export default function CompanyLogos() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 overflow-x-auto scrollbar-hide pb-0 md:overflow-x-visible">
      <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-between items-center gap-6 md:gap-8 w-full min-w-[600px] md:min-w-0">
        {/* First Logo - Layers */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <div className="relative w-[32px] md:w-[40px] h-[32px] md:h-[40px] bg-gray-200 rounded-full opacity-0 animate-fade-in" />
          <span className="text-xs md:text-sm text-gray-900 font-medium opacity-0 animate-fade-in [animation-delay:100ms] whitespace-nowrap">Layers</span>
        </div>

        {/* Second Logo - Sisyphus */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <div className="relative w-[32px] md:w-[40px] h-[32px] md:h-[40px] bg-gray-200 rounded-full opacity-0 animate-fade-in [animation-delay:200ms]" />
          <span className="text-xs md:text-sm text-gray-900 font-medium opacity-0 animate-fade-in [animation-delay:300ms] whitespace-nowrap">Sisyphus</span>
        </div>

        {/* Third Logo - Circooles */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <div className="relative w-[32px] md:w-[40px] h-[32px] md:h-[40px] bg-gray-200 rounded-full opacity-0 animate-fade-in [animation-delay:400ms]" />
          <span className="text-xs md:text-sm text-gray-900 font-medium opacity-0 animate-fade-in [animation-delay:500ms] whitespace-nowrap">Circooles</span>
        </div>

        {/* Fourth Logo - Catalog */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <div className="relative w-[32px] md:w-[40px] h-[32px] md:h-[40px] bg-gray-200 rounded-full opacity-0 animate-fade-in [animation-delay:600ms]" />
          <span className="text-xs md:text-sm text-gray-900 font-medium opacity-0 animate-fade-in [animation-delay:700ms] whitespace-nowrap">Catalog</span>
        </div>

        {/* Fifth Logo - Quotient */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <div className="relative w-[32px] md:w-[40px] h-[32px] md:h-[40px] bg-gray-200 rounded-full opacity-0 animate-fade-in [animation-delay:800ms]" />
          <span className="text-xs md:text-sm text-gray-900 font-medium opacity-0 animate-fade-in [animation-delay:900ms] whitespace-nowrap">Quotient</span>
        </div>
      </div>
    </div>
  );
} 