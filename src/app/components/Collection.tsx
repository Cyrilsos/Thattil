import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgCot from "figma:asset/a5a7e98c99927f6838ad5d9639df6efe796b7bf9.png";
import imgChair from "figma:asset/a6b6fe6514798e0aeb7126f24ed27dfed1705fea.png";

export const Collection = () => {
  return (
    <section className="bg-[#fefae0]/50 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2d4b2d]">Our Healing Collection</h2>
            <div className="h-1 w-16 bg-[#a3b18a]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback 
                  src={imgCot} 
                  alt="Ayurvedic Medicinal Cot" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 sm:p-10 space-y-4">
                <h3 className="text-2xl font-bold text-[#2d4b2d]">Ayurvedic Medicinal Cot</h3>
                <p className="text-[#2d4b2d]/60 text-sm sm:text-base leading-relaxed">
                  The centerpiece of healing furniture. Constructed from specific woods like Bijasal, 
                  designed for spinal alignment and overnight detoxification.
                </p>
                <button className="bg-[#2d4b2d] text-white px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#2d4b2d]/90 transition-all">
                  Explore Piece
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback 
                  src={imgChair} 
                  alt="The Healing Chair" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 sm:p-10 space-y-4">
                <h3 className="text-2xl font-bold text-[#2d4b2d]">The Healing Chair</h3>
                <p className="text-[#2d4b2d]/60 text-sm sm:text-base leading-relaxed">
                  Perfect for daily meditation or office use. Its ergonomic design encourages 
                  active posture while releasing soothing medicinal scents.
                </p>
                <button className="bg-[#2d4b2d] text-white px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#2d4b2d]/90 transition-all">
                  Explore Piece
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
