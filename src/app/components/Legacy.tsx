import React from 'react';
import svgPaths from "../../imports/svg-vp5y7tg93s";

export const Legacy = () => {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2d4b2d]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-18">
            <svg className="w-full h-full" fill="none" viewBox="0 0 45 54">
              <path d={svgPaths.pcd96c80} fill="#A3B18A" />
            </svg>
          </div>
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2d4b2d] mb-8">
          The 300-Year Legacy
        </h2>
        
        <p className="text-[#2d4b2d]/80 text-base sm:text-lg font-light leading-relaxed mb-16">
          Born in the heart of Kerala, the land of Ayurveda, Thattil began as a small guild of royal
          carpenters. Today, we are the custodians of secret wood-treatment techniques that
          have remained unchanged since 1720. Every curve is carved with respect for the tree
          it came from.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-24">
          <div className="space-y-2">
            <p className="text-4xl sm:text-5xl font-extrabold text-[#2d4b2d]">1720</p>
            <p className="text-[10px] font-bold text-[#2d4b2d] tracking-[1.5px] uppercase">Founded</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl sm:text-5xl font-extrabold text-[#2d4b2d]">12+</p>
            <p className="text-[10px] font-bold text-[#2d4b2d] tracking-[1.5px] uppercase">Generations</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl sm:text-5xl font-extrabold text-[#2d4b2d]">100%</p>
            <p className="text-[10px] font-bold text-[#2d4b2d] tracking-[1.5px] uppercase">Authentic</p>
          </div>
        </div>
      </div>
    </section>
  );
};
