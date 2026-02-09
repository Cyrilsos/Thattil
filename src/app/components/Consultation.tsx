import React from 'react';
import { Mail, Phone, ChevronDown } from 'lucide-react';

export const Consultation = () => {
  return (
    <section className="bg-[#603808] rounded-t-[40px] sm:rounded-t-[60px] py-20 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          {/* Left Content */}
          <div className="lg:flex-1 space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Begin Your Healing<br />Consultation
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
              Every individual has unique health needs. Share your wellness goals, and
              our experts will suggest the ideal wood combinations for your custom
              furniture.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 text-white">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone size={20} className="text-[#a3b18a]" />
                </div>
                <span className="font-bold">+91 9847 000 000</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail size={20} className="text-[#a3b18a]" />
                </div>
                <span className="font-bold">healing@thattilwellness.com</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:flex-1">
            <div className="bg-white p-8 sm:p-10 rounded-[32px] shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#2d4b2d]/50 tracking-wider uppercase">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-[#f5ebe0]/20 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-[#2d4b2d]/10 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#2d4b2d]/50 tracking-wider uppercase">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-[#f5ebe0]/20 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-[#2d4b2d]/10 outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#2d4b2d]/50 tracking-wider uppercase">Primary Health Concern</label>
                  <div className="relative">
                    <select className="w-full bg-[#f5ebe0]/20 border-none rounded-2xl px-5 py-4 text-sm appearance-none focus:ring-2 focus:ring-[#2d4b2d]/10 outline-none pr-12">
                      <option>Back Pain / Spinal Issues</option>
                      <option>Insomnia / Sleep Disorders</option>
                      <option>Stress & Anxiety</option>
                      <option>General Rejuvenation</option>
                    </select>
                    <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-[#2d4b2d]/40 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#2d4b2d]/50 tracking-wider uppercase">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full bg-[#f5ebe0]/20 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-[#2d4b2d]/10 outline-none resize-none"
                  />
                </div>

                <button className="w-full bg-[#2d4b2d] text-white py-5 rounded-2xl font-extrabold text-sm tracking-widest uppercase transition-all hover:bg-[#2d4b2d]/90 active:scale-[0.98]">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
