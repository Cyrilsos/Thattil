import React from 'react';
import svgPaths from "../../imports/svg-vp5y7tg93s";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-[#2d4b2d]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-7 relative">
              <svg className="block w-full h-full" fill="none" viewBox="0 0 50.5997 35">
                <path d={svgPaths.p338de7f0} fill="#2D4B2D" />
                <path d={svgPaths.p1c2755f2} fill="#2D4B2D" />
                <path d={svgPaths.p1f352f00} fill="white" stroke="white" strokeWidth="0.0255102" />
                <path d={svgPaths.p2c36a500} fill="white" stroke="white" strokeWidth="0.0255102" />
                <path d={svgPaths.p2ae64e00} fill="#2D4B2D" />
              </svg>
            </div>
            <div className="font-extrabold text-[#2d4b2d] text-lg sm:text-xl tracking-tight uppercase">
              <span className="font-extrabold">Thattil </span>
              <span className="font-light">FURNITURE</span>
            </div>
          </div>

          {/* Contact Button */}
          <button className="bg-[#2d4b2d] text-white px-6 py-3 rounded-xl font-extrabold text-xs tracking-widest uppercase transition-transform hover:scale-105 active:scale-95">
            Contact us
          </button>
        </div>
      </div>
    </nav>
  );
};
