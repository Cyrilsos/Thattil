import React from 'react';

const steps = [
  {
    number: "1",
    title: "Activation",
    description: "Wipe the furniture with a slightly warm damp cloth to open the wood pores and release medicinal resins."
  },
  {
    number: "2",
    title: "Direct Contact",
    description: "Use the piece directly or with thin organic cotton sheets to ensure maximum dermal absorption of oils."
  },
  {
    number: "3",
    title: "Oil Ritual",
    description: "Once every six months, apply our proprietary herbal oil to nourish the wood and maintain its therapeutic potency."
  }
];

export const Journey = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2d4b2d] text-center mb-16">
          How to Begin Your Journey
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[24px] left-[20%] right-[20%] h-[1px] bg-[#2d4b2d]/5 z-0" />
          
          {features()}
        </div>
      </div>
    </section>
  );

  function features() {
    return steps.map((step, index) => (
      <div key={index} className="flex flex-col items-center text-center space-y-6 relative z-10">
        <div className="w-12 h-12 bg-[#2d4b2d] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-white">
          {step.number}
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#2d4b2d]">{step.title}</h3>
          <p className="text-[#2d4b2d]/60 text-sm leading-relaxed max-w-[280px]">
            {step.description}
          </p>
        </div>
      </div>
    ));
  }
};
