"use client";
import React from 'react';

export default function AboutInstitutional() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-[#FFFEF9] text-black">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. TOP HERO: High-End Boardroom Vibe */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-32">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <nav className="mb-6 text-[10px] font-black tracking-[0.3em] uppercase text-[#306CEC]">Our Firm // Legacy</nav>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight uppercase mb-8 leading-[0.9]" style={{ fontFamily: 'League Spartan, sans-serif' }}>
              Ambitious <br /> Outcomes.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-900 font-medium leading-snug mb-10 max-w-xl">
              We work with leaders who want to define the future, not hide from it. We help our clients achieve extraordinary outcomes.
            </p>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-end">
            <div className="relative w-full max-w-[550px] h-[450px] md:h-[600px] overflow-hidden border-2 border-black shadow-[20px_20px_0px_0px_#306CEC]">
              {/* Image: Modern professional boardroom session */}
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                alt="Strategy Consultation"
              />
            </div>
          </div>
        </section>

        {/* 2. THREE PILLARS (Clean Bento Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y-2 border-black mb-32 bg-white">
          <div className="p-12 border-r border-zinc-100 group hover:bg-zinc-50 transition-all">
            <h3 className="text-xl font-black uppercase mb-6 group-hover:text-[#306CEC]">What We Do</h3>
            <p className="text-sm leading-relaxed text-zinc-600 font-medium">Management consulting across strategy, operations, and digital transformation with deep functional expertise.</p>
          </div>
          <div className="p-12 border-r border-zinc-100 group hover:bg-zinc-50 transition-all">
            <h3 className="text-xl font-black uppercase mb-6 group-hover:text-[#306CEC]">What We Believe</h3>
            <p className="text-sm leading-relaxed text-zinc-600 font-medium">Success is not just about the plan; it's about implementation. We believe in side-by-side partnership.</p>
          </div>
          <div className="p-12 group hover:bg-zinc-50 transition-all">
            <h3 className="text-xl font-black uppercase mb-6 group-hover:text-[#306CEC]">Our Impact</h3>
            <p className="text-sm leading-relaxed text-zinc-600 font-medium">We have helped hundreds of organizations scale their footprint and increase their enterprise value globally.</p>
          </div>
        </div>

        {/* 3. DEPTH SECTION: Collaborative Team Vibe */}
        <section className="flex flex-col lg:flex-row gap-20 mb-24 items-start">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-xs font-black tracking-[0.4em] uppercase text-zinc-400">The Impact360 Way</h2>
            <div className="space-y-8 text-lg md:text-xl leading-relaxed text-zinc-900 font-medium">
              <p>
                Impact360 was founded on a simple but radical premise: that consulting should be judged by results, not reports. We broke the traditional model by tying our success to the success of our clients.
              </p>
              <p>
                Our proprietary frameworks—from the <strong>Value Quotient</strong> to our <strong>Digital Maturity Diagnostic</strong>—have become the benchmark for excellence in emerging markets. 
              </p>
              <button className="bg-black text-white px-10 py-6 font-black uppercase tracking-widest text-xs hover:bg-[#306CEC] transition-all flex items-center group">
                Join Our Global Team <span className="ml-4 group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative w-full h-[350px] overflow-hidden border-2 border-black shadow-[-15px_15px_0px_0px_#306CEC]">
              {/* Image: Diverse team working at a whiteboard/strategy table */}
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                alt="Collaborative Consultancy Team"
              />
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}