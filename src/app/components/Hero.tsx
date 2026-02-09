import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import svgPaths from "../../imports/svg-vp5y7tg93s";
import imgHero from "figma:asset/a5a7e98c99927f6838ad5d9639df6efe796b7bf9.png";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#a3b18a]/10">
              <span className="text-[10px] font-extrabold text-[#2d4b2d] tracking-[1.5px] uppercase">
                Healing Through Nature
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-[#2d4b2d] leading-[1.1]">
              Furniture that<br />
              <span className="font-extrabold">Restores Vitality</span>
            </h1>
            
            <p className="max-w-md mx-auto lg:mx-0 text-[#2d4b2d]/70 text-base sm:text-lg leading-relaxed">
              Crafted from 40+ rare medicinal woods, our furniture isn't just
              for living—it's for healing. Experience centuries-old Ayurvedic
              wisdom in your modern home.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto bg-[#2d4b2d] text-white px-8 py-4 rounded-[20px] font-bold text-sm flex items-center justify-center gap-3 transition-all hover:bg-[#2d4b2d]/90">
                Explore Collection
                <svg className="w-5 h-6" fill="none" viewBox="0 0 18.015 21">
                  <path d={svgPaths.p737ad00} fill="white" />
                </svg>
              </button>
              <button className="w-full sm:w-auto border border-[#2d4b2d]/20 px-8 py-4 rounded-[20px] font-bold text-sm text-[#2d4b2d] hover:bg-[#2d4b2d]/5 transition-all">
                Learn the Science
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-[#a3b18a]/10 blur-3xl rounded-full" />
              <div className="relative z-10 w-full h-full rounded-[30px] overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src={imgHero} 
                  alt="Ayurvedic Healing Furniture" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
