import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgScience from "figma:asset/1642db49cda0faa316104887d8bf01b5a6975f0f.png";

const steps = [
  {
    id: "01",
    title: "Osmo-Interaction",
    description: "When body heat makes contact with the untreated wood, essential medicinal oils and resins are slowly released."
  },
  {
    id: "02",
    title: "Dermal Intake",
    description: "The skin—the body's largest organ—absorbs these natural therapeutic compounds during prolonged periods of rest."
  },
  {
    id: "03",
    title: "Energy Balancing",
    description: "Specific wood densities and grains are used to harmonize the body's magnetic field and nervous system."
  }
];

export const Science = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Left Image */}
          <div className="w-full lg:flex-1">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-[#2d4b2d]/5 rounded-[40px] rotate-3" />
              <div className="relative z-10 w-full h-full rounded-[30px] overflow-hidden shadow-xl">
                <ImageWithFallback 
                  src={imgScience} 
                  alt="Science of Absorption" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:flex-1 space-y-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2d4b2d]">
              The Science of Absorption
            </h2>
            
            <div className="space-y-10">
              {steps.map((step) => (
                <div key={step.id} className="flex gap-6">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#a3b18a] leading-none shrink-0">
                    {step.id}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-[#2d4b2d]">
                      {step.title}
                    </h3>
                    <p className="text-[#2d4b2d]/70 text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
