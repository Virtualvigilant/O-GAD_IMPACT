"use client";
import React from 'react';
import Link from 'next/link';

const services = [
  { 
    title: "Corporate Strategy", 
    id: "01", 
    path: "/services/business-strategy", 
    desc: "We help the world’s most ambitious change-makers define the future. Corporate strategy is a proven way to transform your business, catalyze innovation, and accelerate profitable growth. We combine deep market insights with operational rigor to identify untapped value pools and establish sustainable competitive advantages in volatile emerging markets." 
  },
  { 
    title: "Capital & Scaling", 
    id: "02", 
    path: "/services/scaling-expansion", 
    desc: "Architecting the infrastructure for pan-African market leadership. True scaling requires more than just capital; it requires a repeatable, operational blueprint. We optimize your capital structure to support aggressive expansion while maintaining financial resilience, ensuring your organization has the internal engine to reach its destination." 
  },
  { 
    title: "Legal Governance", 
    id: "03", 
    path: "/services/legal-structuring", 
    desc: "Bridging the gap between complex regulatory mandates and commercial agility. We architect tax-efficient corporate structures that safeguard assets while enabling seamless cross-border capital flow. Our frameworks are built to withstand global scrutiny while supporting the rapid market penetration required for modern enterprise growth." 
  },
  { 
    title: "Marketing & Results", 
    id: "04", 
    path: "/services/marketing-sales", 
    desc: "Data-backed brand narratives and high-performance sales funnels engineered for impact. We don't just build brands; we build high-performance revenue engines. By merging consumer insights with advanced sales strategies, we help clients capture market share and drive long-term loyalty in fragmented landscapes." 
  },
  { 
    title: "Digital Engine", 
    id: "05", 
    path: "/services/tech-digital", 
    desc: "Digital is no longer a separate strategy; it is the core of modern business. We help clients move beyond legacy systems to architect digital engines powered by AI, cloud infrastructure, and proprietary data analytics. We reinvent how work gets done to unlock exponential productivity and ensure enduring results." 
  }
];

export default function ServiceHubDeep() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6 bg-[#FFFEF9] text-black">
      <div className="max-w-6xl mx-auto">
        
        {/* BREADCRUMB */}
        <nav className="mb-12 text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
          Impact360 / Our Expertise
        </nav>

        {/* HERO SECTION */}
        <section className="mb-20">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight uppercase mb-10 text-black leading-none" style={{ fontFamily: 'League Spartan, sans-serif' }}>
            Consulting <br /> Services
          </h1>
          <div className="max-w-4xl border-l-8 border-black pl-8">
            <p className="text-xl md:text-2xl leading-relaxed text-zinc-900 font-medium italic">
              "We work with ambitious leaders who want to define the future, not hide from it. Together, we achieve extraordinary outcomes."
            </p>
            <p className="mt-8 text-lg leading-relaxed text-zinc-800 font-medium">
              Our management consulting services focus on our clients' most critical issues and opportunities: strategy, marketing, organization, operations, technology, and digital transformation. We bring deep, functional expertise, but are known for our holistic perspective: we capture value across boundaries and between the silos of any organization.
            </p>
          </div>
        </section>

        {/* HOW WE HELP GRID */}
        <section className="mb-24">
          <h2 className="text-xs font-black tracking-[0.4em] uppercase text-zinc-400 mb-12 py-4 border-b-2 border-zinc-100">Our Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {services.map((s) => (
              <Link key={s.id} href={s.path} className="group block border-t-2 border-black pt-8 hover:bg-zinc-50 transition-all p-4">
                <div className="flex items-center mb-6">
                  <span className="text-xs font-black text-[#306CEC] mr-4">{s.id}</span>
                  <h3 className="text-2xl font-bold uppercase text-black group-hover:text-[#306CEC] transition-colors tracking-tighter">
                    {s.title}
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-zinc-900 font-medium">
                  {s.desc}
                </p>
                <div className="mt-8 flex items-center text-[10px] font-black tracking-widest uppercase text-[#306CEC]">
                  View Service Details <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}