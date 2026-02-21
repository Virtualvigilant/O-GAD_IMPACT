"use client";
import React from 'react';

export default function DigitalDeep() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6 bg-[#FFFEF9] text-black">
      <div className="max-w-7xl mx-auto">
        <section className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-24">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <nav className="mb-6 text-[10px] font-black tracking-[0.3em] uppercase text-[#306CEC]">Frontier // Technology</nav>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight uppercase mb-8 leading-[0.9]" style={{ fontFamily: 'League Spartan, sans-serif' }}>Digital <br /> Engine</h1>
            <p className="text-xl md:text-2xl text-zinc-900 font-medium leading-snug mb-10 max-w-xl">Integrating frontier technology and AI into the core of modern enterprise operations.</p>
            <button className="bg-black text-white px-10 py-6 font-black uppercase tracking-widest text-xs hover:bg-[#306CEC] transition-all duration-300">Modernize Now →</button>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-end">
            <div className="relative w-full max-w-[500px] h-[400px] md:h-[550px] overflow-hidden border-2 border-black shadow-[20px_20px_0px_0px_#306CEC]">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Technology Circuit" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}