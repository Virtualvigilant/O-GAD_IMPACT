'use client';
import { useState } from 'react';
import BookingModal from '@/components/BookingModal';

export default function ScalingPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='pt-20 md:pt-32 pb-20 relative overflow-hidden' style={{
        backgroundImage: 'url(/images/hero_images/scale-hero (2).jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        minHeight: '550px'
      }}>
        <div className='absolute inset-0' style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.7) 100%)' }}></div>
        <div className='max-w-7xl mx-auto px-6 md:px-12 relative z-10'>
          <div className='text-center'>
            <a href='/services' className='text-white hover:text-gray-200 font-semibold mb-6 inline-block'>
              ← Back to Services
            </a>
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-6'>
              Scaling & Expansion Support
            </h1>
            <p className='text-xl md:text-2xl text-white/90 max-w-3xl mx-auto'>
              Prepare your business for successful scaling and market expansion with comprehensive strategic support
            </p>
            <div className='mt-10'>
              <button onClick={() => setIsBookingOpen(true)} className='px-10 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors' style={{ backgroundColor: '#306CEC', color: 'white' }}>
                Book a Session
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className='py-20 md:py-32'>
        <div className='max-w-7xl mx-auto px-6 md:px-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-4xl font-bold text-gray-900 mb-6' style={{ fontFamily: 'League Spartan, sans-serif' }}>
                Scale Built on Foundation
              </h2>
              <p className='text-lg text-gray-700 mb-6 leading-relaxed' style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Scaling isn't just about growth—it's about sustainable growth on solid foundations. Many organizations stumble when growing because they lack the infrastructure, processes, or leadership depth to support expansion.
              </p>
              <p className='text-lg text-gray-700 mb-8 leading-relaxed' style={{ fontFamily: 'DM Sans, sans-serif' }}>
                We guide organizations through multiple growth stages—from startup formation through regional expansion to market leadership—ensuring that growth is profitable, sustainable, and aligned with your vision.
              </p>
              <button className='px-8 py-3 bg-white text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors' style={{ backgroundColor: '#306CEC' }}>
                Get Started
              </button>
            </div>
            <div className='bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl h-96 flex items-center justify-center overflow-hidden'>
              <img src='/images/hero_images/scale-hero (2).jpg' alt='Scaling & Expansion' className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className='py-20 md:py-32 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-6 md:px-12'>
          <h2 className='text-4xl font-bold text-gray-900 mb-12 text-center' style={{ fontFamily: 'League Spartan, sans-serif' }}>
            What We Offer
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {[
              {
                title: 'Expansion Strategy',
                desc: 'Market expansion and growth strategy that identifies opportunities and mitigates risks.'
              },
              {
                title: 'Market Entry Planning',
                desc: 'Comprehensive planning for entering new geographic markets or customer segments.'
              },
              {
                title: 'Operational Scaling',
                desc: 'Process design and infrastructure improvements to support 2x, 5x, or 10x growth.'
              },
              {
                title: 'Team & Leadership Scaling',
                desc: 'Organizational design and talent strategy to scale your leadership and operational team.'
              }
            ].map((item, idx) => (
              <div key={idx} className='bg-white rounded-xl p-8 border border-gray-200'>
                <h3 className='text-2xl font-bold text-gray-900 mb-4' style={{ fontFamily: 'League Spartan, sans-serif' }}>
                  {item.title}
                </h3>
                <p className='text-gray-700' style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className='py-20 md:py-32'>
        <div className='max-w-7xl mx-auto px-6 md:px-12'>
          <h2 className='text-4xl font-bold text-gray-900 mb-12 text-center' style={{ fontFamily: 'League Spartan, sans-serif' }}>
            Our Approach
          </h2>
          <div className='space-y-8'>
            {[
              { num: '01', title: 'Growth Stage Assessment', desc: 'We assess your current stage of maturity and identify the key constraints to growth.' },
              { num: '02', title: 'Expansion Opportunity Analysis', desc: 'We analyze expansion opportunities—new markets, segments, or products—and prioritize.' },
              { num: '03', title: 'Scaling Roadmap', desc: 'We develop a detailed roadmap for scaling operations, technology, team, and go-to-market.' },
              { num: '04', title: 'Execution Support', desc: 'We support execution of the scaling roadmap with milestones, metrics, and course corrections.' },
              { num: '05', title: 'Continuous Evolution', desc: 'We help organizations continuously evolve structure, processes, and strategy as they scale.' }
            ].map((step, idx) => (
              <div key={idx} className='flex gap-8 items-start'>
                <div className='flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl text-white' style={{ backgroundColor: '#306CEC' }}>
                  {step.num}
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-3' style={{ fontFamily: 'League Spartan, sans-serif' }}>
                    {step.title}
                  </h3>
                  <p className='text-lg text-gray-700' style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultService="scaling"
      />
    </main>
  );
}
