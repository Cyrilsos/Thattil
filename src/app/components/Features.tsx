import React from 'react';
import svgPaths from "../../imports/svg-vp5y7tg93s";

const features = [
  {
    title: "Prescription Grade",
    description: "Woods chosen based on specific health requirements.",
    iconPath: svgPaths.p519fa00
  },
  {
    title: "Eco-Conscious",
    description: "Sustainably harvested from deep Kerala forests.",
    iconPath: svgPaths.p234d9b80
  },
  {
    title: "Handmade Legacy",
    description: "Crafted by master artisans using traditional tools.",
    iconPath: svgPaths.p29ba8200
  },
  {
    title: "Pure Treatment",
    description: "Zero synthetic varnishes; only natural oil finishes.",
    iconPath: svgPaths.pb83a8f0
  }
];

export const Features = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-[#2d4b2d]/5 flex flex-col items-start gap-4 transition-all hover:shadow-md hover:-translate-y-1">
            <div className="w-10 h-12 flex items-center justify-center">
              <svg className="w-full h-full" fill="none" viewBox="0 0 35 43">
                <path d={feature.iconPath} fill="#A3B18A" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#2d4b2d]">{feature.title}</h3>
            <p className="text-[#2d4b2d]/60 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
