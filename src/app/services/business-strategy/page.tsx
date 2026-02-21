"use client";
import React from 'react';

export default function BusinessStrategyFixed() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6 bg-[#FFFEF9] text-black">
      <div className="max-w-7xl mx-auto">
        
        {/* HERO SECTION - RESTRUCTURED */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-24">
          
          {/* LEFT: TEXT CONTENT (Clear and Unblocked) */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <nav className="mb-6 text-[10px] font-black tracking-[0.3em] uppercase text-[#306CEC]">
              Expertise // Strategy
            </nav>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight uppercase mb-8 leading-[0.9]" style={{ fontFamily: 'League Spartan, sans-serif' }}>
              Corporate <br /> Strategy
            </h1>
            <p className="text-xl md:text-2xl text-zinc-900 font-medium leading-snug mb-10 max-w-xl">
              We help the world’s most ambitious change-makers define the future through rigorous analysis and operational excellence.
            </p>
            
            {/* GET STARTED BUTTON */}
            <button className="group flex items-center bg-black text-white px-10 py-6 font-black uppercase tracking-widest text-xs hover:bg-[#306CEC] transition-all duration-300">
              Get Started with a Project 
              <span className="ml-4 group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>
          
          {/* RIGHT: IMAGE (Moved fully to the right) */}
          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-end">
            <div className="relative w-full max-w-[500px] h-[400px] md:h-[550px] overflow-hidden border-2 border-black shadow-[20px_20px_0px_0px_#306CEC]">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                alt="Corporate Strategy Professional"
              />
              {/* Subtle overlay to tie in the brand blue */}
              <div className="absolute inset-0 bg-[#306CEC]/5 pointer-events-none" />
            </div>
          </div>
        </section>

        {/* EXPERIENCE & IMPACT STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y-2 border-black mb-24 bg-white">
          <div className="p-12 border-r border-zinc-100 flex flex-col justify-center">
            <span className="block text-6xl font-black text-[#306CEC] mb-2 tracking-tighter">40%</span>
            <p className="text-[10px] font-black uppercase tracking-widest text-black">Avg. Revenue Growth</p>
          </div>
          <div className="p-12 border-r border-zinc-100 flex flex-col justify-center">
            <span className="block text-6xl font-black text-[#306CEC] mb-2 tracking-tighter">12+</span>
            <p className="text-[10px] font-black uppercase tracking-widest text-black">Key African Markets</p>
          </div>
          <div className="p-12 flex flex-col justify-center">
            <span className="block text-6xl font-black text-[#306CEC] mb-2 tracking-tighter">250</span>
            <p className="text-[10px] font-black uppercase tracking-widest text-black">Enterprises Transformed</p>
          </div>
        </div>

        {/* LONG FORM DEPTH SECTION */}
        <section className="max-w-4xl mb-24">
          <h2 className="text-xs font-black tracking-[0.4em] uppercase text-zinc-400 mb-8">The Methodology</h2>
          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-zinc-900 font-medium">
            <p>
              Corporate strategy is a proven way to transform your business, catalyze innovation, and accelerate profitable growth. We help you scale strategy across your entire organization to improve time-to-market, boost quality, and raise employee morale.
            </p>
            <p>
              Our approach begins with a <strong>Value Quotient</strong> diagnostic, assessing your maturity against global benchmarks. We don't just write reports; we build the frameworks that allow your leadership to move fast.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}