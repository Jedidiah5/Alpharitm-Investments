import React from 'react';

export default function CompanyLogos() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center gap-4 md:gap-8 w-full">
        {/* First Logo - Layers */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="relative w-[40px] md:w-[48px] h-[40px] md:h-[48px] bg-gray-200 rounded-full opacity-0 animate-fade-in" />
          <span className="text-sm md:text-base text-gray-900 font-medium opacity-0 animate-fade-in [animation-delay:100ms]">Layers</span>
        </div>

        {/* Second Logo - Sisyphus */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="relative w-[40px] md:w-[48px] h-[40px] md:h-[48px] bg-gray-200 rounded-full opacity-0 animate-fade-in [animation-delay:200ms]" />
          <span className="text-sm md:text-base text-gray-900 font-medium opacity-0 animate-fade-in [animation-delay:300ms]">Sisyphus</span>
        </div>

        {/* Third Logo - Circooles */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="relative w-[40px] md:w-[48px] h-[40px] md:h-[48px] bg-gray-200 rounded-full opacity-0 animate-fade-in [animation-delay:400ms]" />
          <span className="text-sm md:text-base text-gray-900 font-medium opacity-0 animate-fade-in [animation-delay:500ms]">Circooles</span>
        </div>

        {/* Fourth Logo - Catalog */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="relative w-[40px] md:w-[48px] h-[40px] md:h-[48px] bg-gray-200 rounded-full opacity-0 animate-fade-in [animation-delay:600ms]" />
          <span className="text-sm md:text-base text-gray-900 font-medium opacity-0 animate-fade-in [animation-delay:700ms]">Catalog</span>
        </div>

        {/* Fifth Logo - Quotient */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="relative w-[40px] md:w-[48px] h-[40px] md:h-[48px] bg-gray-200 rounded-full opacity-0 animate-fade-in [animation-delay:800ms]" />
          <span className="text-sm md:text-base text-gray-900 font-medium opacity-0 animate-fade-in [animation-delay:900ms]">Quotient</span>
        </div>
      </div>
    </div>
  );
} 