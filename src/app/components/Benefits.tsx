import React from 'react';
import svgPaths from "../../imports/svg-vp5y7tg93s";

const benefits = [
  {
    title: "Micro-Circulation",
    description: "Boosts peripheral blood flow through passive heat stimulation.",
    iconPath: svgPaths.p10fb9d70
  },
  {
    title: "Prana Flow",
    description: "Removes energetic blockages and restores natural vitality levels.",
    iconPath: svgPaths.p2e6ff490
  },
  {
    title: "Stress Reduction",
    description: "Natural aromatic compounds lower cortisol levels in the blood.",
    iconPath: svgPaths.pd299a00
  },
  {
    title: "Immune Boost",
    description: "Daily detoxification supports a robust lymphatic system response.",
    iconPath: svgPaths.p25107680
  }
];

export const Benefits = () => {
  return (
    <section className="bg-[#2d4b2d] py-20 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Biological Benefits</h2>
          <p className="text-[#a3b18a] text-sm sm:text-base font-medium">Proven results through consistent usage</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-12 h-16 mb-6 transform group-hover:scale-110 transition-transform">
                <svg className="w-full h-full" fill="none" viewBox="0 0 36 44">
                  <path d={benefit.iconPath} fill="#A3B18A" />
                </svg>
              </div>
              <h3 className="text-white text-lg font-bold mb-3">{benefit.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-[240px]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
