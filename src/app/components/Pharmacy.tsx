import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgVenga from "figma:asset/1642db49cda0faa316104887d8bf01b5a6975f0f.png";
import imgSandalwood from "figma:asset/a6b6fe6514798e0aeb7126f24ed27dfed1705fea.png";
import imgTeak from "figma:asset/f8bbd1eab0e471351cd3438be6279f5e76bea363.png";

const woods = [
  {
    name: "Bijasal (Venga)",
    description: "Known for its anti-diabetic and skin-healing properties. The primary choice for medicinal cots.",
    tag: "Rare Quality",
    image: imgVenga
  },
  {
    name: "Red Sandalwood",
    description: "Highly aromatic and cooling. Excellent for calming the Pitta dosha and reducing mental stress.",
    tag: "Premium Choice",
    image: imgSandalwood
  },
  {
    name: "Medicinal Teak",
    description: "Selected from specific old-growth forests for maximum structural stability and resin content.",
    tag: "Foundational",
    image: imgTeak
  }
];

export const Pharmacy = () => {
  return (
    <section className="bg-[#fefae0]/30 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2d4b2d] text-center mb-16">
          Nature's Pharmacy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {woods.map((wood, index) => (
            <div key={index} className="bg-white rounded-3xl p-5 border border-[#2d4b2d]/5 shadow-sm group hover:shadow-xl transition-all duration-300">
              <div className="aspect-square rounded-2xl overflow-hidden mb-6">
                <ImageWithFallback 
                  src={wood.image} 
                  alt={wood.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-[#2d4b2d]">{wood.name}</h3>
                <p className="text-[#2d4b2d]/60 text-xs sm:text-sm leading-relaxed min-h-[48px]">
                  {wood.description}
                </p>
                <p className="text-[10px] font-extrabold text-[#a3b18a] tracking-wider uppercase pt-2 border-t border-[#2d4b2d]/5">
                  {wood.tag}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
