import React from "react";
import svgPaths from "../../imports/svg-vp5y7tg93s";
import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#2d4b2d] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-6 relative">
                <svg
                  className="block w-full h-full"
                  fill="none"
                  viewBox="0 0 50.5997 35"
                >
                  <path d={svgPaths.p338de7f0} fill="white" />
                  <path d={svgPaths.p1c2755f2} fill="white" />
                  <path d={svgPaths.p2ae64e00} fill="white" />
                </svg>
              </div>
              <div className="font-extrabold text-white text-lg tracking-tight uppercase">
                Thattil{" "}
                <span className="font-light">FURNITURE</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Crafting medicinal furniture since 1720. Bringing
              the healing power of Ayurveda to your living
              space.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#a3b18a]/20 hover:text-[#a3b18a] transition-all"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#a3b18a]/20 hover:text-[#a3b18a] transition-all"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#a3b18a]/20 hover:text-[#a3b18a] transition-all"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div className="space-y-6">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase">
              Company
            </h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Our History
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Craftsmanship
                </a>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="space-y-6">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase">
              Collection
            </h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Medicinal Cots
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Healing Chairs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Study Desks
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Dining Sets
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase">
              Contact
            </h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li>Kerala, India</li>
              <li>+91 9847 000 000</li>
              <li>hello@thattil.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-[10px] tracking-wider uppercase">
            © 2026 Thattil Furniture. All rights reserved.
          </p>
          <div className="flex gap-8 text-white/30 text-[10px] tracking-wider uppercase">
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};