"use client";
import React from 'react';

export default function MarketingResultsDeep() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6 bg-[#FFFEF9] text-black">
      <div className="max-w-6xl mx-auto">
        <nav className="mb-8 text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Consulting Services / Commercial</nav>
        
        <header className="mb-16">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight uppercase mb-8 hover:text-[#306CEC] transition-colors duration-500 cursor-default" style={{ fontFamily: 'League Spartan, sans-serif' }}>
            Marketing <br /> & Results
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-900 font-light max-w-4xl leading-tight border-l-8 border-[#306CEC] pl-8">
            We don't build brands; we build revenue engines. We merge data-backed narratives with advanced sales funnels.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y-2 border-black mb-20">
          <div className="p-10 border-r border-zinc-200"><span className="block text-6xl font-black text-[#306CEC] mb-2">120%</span><p className="text-xs font-black uppercase text-black">Avg. Revenue Lift</p></div>
          <div className="p-10 border-r border-zinc-200"><span className="block text-6xl font-black text-[#306CEC] mb-2">85%</span><p className="text-xs font-black uppercase text-black">Client Loyalty</p></div>
          <div className="p-10"><span className="block text-6xl font-black text-[#306CEC] mb-2">15+</span><p className="text-xs font-black uppercase text-black">Industry Awards</p></div>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-8 space-y-8 text-lg leading-relaxed text-zinc-900 font-medium">
            <h2 className="text-4xl font-black uppercase">The Commercial Impact Engine</h2>
            <p>
              In a fragmented media landscape, a brand is only as strong as its conversion rate. We help our clients capture market share by engineering brand narratives that resonate with the modern consumer while maintaining strict focus on ROI.
            </p>
            <p>
              Our <strong>Sales Transformation</strong> methodology focuses on every touchpoint of the customer journey. We optimize your commercial engine using predictive analytics, ensuring that your marketing spend is always an investment, never a cost.
            </p>
            <p className="p-8 bg-zinc-50 border-l-4 border-black">
              We help you identify and overcome the cultural and technological silos that derail marketing efforts, such as poor department alignment or fragmented data sets.
            </p>
          </div>
          <div className="lg:col-span-4">
             <div className="p-10 bg-[#306CEC] text-white shadow-xl">
               <h4 className="text-xs font-black tracking-[0.4em] uppercase mb-6">Expertise Focus</h4>
               <ul className="space-y-4 font-bold uppercase text-sm">
                 <li>• Consumer Behavior Analysis</li>
                 <li>• Performance Marketing</li>
                 <li>• Sales Force Effectiveness</li>
                 <li>• Brand Narrative Design</li>
               </ul>
             </div>
          </div>
        </section>
      </div>
    </main>
  );
}