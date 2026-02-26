'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id='our-company' className='pt-32 md:pt-48 pb-0 bg-gradient-to-b from-white to-gray-50'>
      <div className='max-w-7xl mx-auto px-6 md:px-12'>
        
        {/* Section Heading */}
        <div className='mb-16 md:mb-20 text-center'>
          <h2 className='text-5xl md:text-7xl font-bold text-gray-900' style={{ fontFamily: 'League Spartan, sans-serif' }}>
            Our Company
          </h2>
        </div>

        {/* Image + Text Section */}
        <div className='mb-20 md:mb-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          {/* Left: Single Image */}
          <div className='order-2 md:order-1'>
            <div className='rounded-xl shadow-2xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all'>
              <Image
                src='/images/our-company.jpg'
                alt='Our Company'
                width={450}
                height={400}
                className='w-full h-96 object-cover'
                unoptimized
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className='order-1 md:order-2'>
            <h2 className='text-4xl md:text-5xl font-semibold mb-8' style={{ fontFamily: 'League Spartan, sans-serif', color: 'black' }}>
              Our work goes beyond advisory. We design, build, and implement
            </h2>
            <p className='text-lg md:text-xl text-gray-700 leading-relaxed' style={{ fontFamily: 'DM Sans, sans-serif' }}>
              The O'Gad Impact Group is a multidisciplinary consultancy firm focused on building sustainable businesses, future-ready organizations, and high-impact entrepreneurial ecosystems across Africa. We work at the intersection of strategy, technology, law, and growth—helping founders, institutions, and enterprises move from ideas to execution, and from growth to scale.
            </p>
          </div>
        </div>

        {/* Services Heading */}
        <div className='mb-16 md:mb-20 text-center'>
          <h1 className='text-5xl md:text-6xl font-bold text-gray-900' style={{ fontFamily: 'League Spartan, sans-serif' }}>
            Our Services
          </h1>
        </div>

        {/* Services Cards - Modern Design */}
        <div className='mb-20 md:mb-32'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'>
            {[
              {
                title: 'Business & Strategy Consultancy',
                desc: 'We help organizations define clarity, direction, and execution plans.',
                gradient: 'from-blue-50 to-indigo-50',
                href: '/services/business-strategy',
                icon: (
                  <svg className='w-12 h-12' fill='none' stroke='#306CEC' strokeWidth='2' viewBox='0 0 24 24'>
                    <path d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                  </svg>
                )
              },
              {
                title: 'Technology & Digital Transformation',
                desc: 'We integrate technology as a growth and efficiency driver.',
                gradient: 'from-cyan-50 to-blue-50',
                href: '/services/technology',
                icon: (
                  <svg className='w-12 h-12' fill='none' stroke='#306CEC' strokeWidth='2' viewBox='0 0 24 24'>
                    <path d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                )
              },
              {
                title: 'Legal & Business Structuring',
                desc: 'We bridge the gap between legal compliance and business growth.',
                gradient: 'from-indigo-50 to-purple-50',
                href: '/services/legal',
                icon: (
                  <svg className='w-12 h-12' fill='none' stroke='#306CEC' strokeWidth='2' viewBox='0 0 24 24'>
                    <path d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                  </svg>
                )
              },
              {
                title: 'Marketing, Sales & Growth Advisory',
                desc: 'We help organizations find, convert, and retain customers.',
                gradient: 'from-purple-50 to-pink-50',
                href: '/services/marketing',
                icon: (
                  <svg className='w-12 h-12' fill='none' stroke='#306CEC' strokeWidth='2' viewBox='0 0 24 24'>
                    <path d='M13 7h8m0 0v8m0-8L5.257 19.257a2 2 0 00-.247 2.693l1.378 2.07a2 2 0 002.693.247L19 10.414V7z' />
                  </svg>
                )
              },
              {
                title: 'Scaling & Expansion Support',
                desc: 'We prepare businesses for regional and market expansion.',
                gradient: 'from-pink-50 to-red-50',
                href: '/services/scaling',
                icon: (
                  <svg className='w-12 h-12' fill='none' stroke='#306CEC' strokeWidth='2' viewBox='0 0 24 24'>
                    <path d='M13 10V3L4 14h7v7l9-11h-7z' />
                  </svg>
                )
              }
            ].map((service, idx) => (
              <Link key={idx} href={service.href}>
                <div className={`group bg-gradient-to-br ${service.gradient} backdrop-blur-sm p-5 rounded-2xl border-2 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer`} style={{ borderColor: '#306CEC' }}>
                  <div className='mb-4'>{service.icon}</div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2' style={{ fontFamily: 'League Spartan, sans-serif' }}>
                    {service.title}
                  </h3>
                  <p className='text-sm text-gray-700 leading-relaxed mb-3' style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {service.desc}
                  </p>
                  <button className='text-sm font-semibold transition-all group-hover:translate-x-2' style={{ color: '#306CEC' }}>
                    Learn more →
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Quote Section - Full Width */}
      <div className='relative py-20 md:py-32 text-center overflow-hidden' style={{ backgroundImage: 'url(/images/quote.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-black/50'></div>
        
        {/* Quote Text */}
        <div className='relative z-10'>
          <p className='text-4xl md:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight px-6' style={{ fontFamily: 'League Spartan, sans-serif' }}>
            "Our work goes beyond advisory. We design, build, and implement."
          </p>
        </div>
      </div>

      {/* How We Work Section */}
      <div className='py-20 md:py-32'>
        <div className='max-w-7xl mx-auto px-6 md:px-12'>
          {/* Heading */}
          <div className='mb-16 md:mb-20 text-center'>
            <h2 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6' style={{ fontFamily: 'League Spartan, sans-serif' }}>
              How We Work
            </h2>
            <p className='text-xl text-gray-700 max-w-3xl mx-auto' style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Our approach is practical, collaborative, and execution-focused.
            </p>
          </div>

          {/* Steps List */}
          <div className='max-w-3xl mx-auto space-y-12'>
            {[
              {
                number: '1',
                title: 'Diagnose',
                desc: 'We assess the real problem, not just the symptoms'
              },
              {
                number: '2',
                title: 'Design',
                desc: 'We co-create solutions tailored to context and capacity'
              },
              {
                number: '3',
                title: 'Build',
                desc: 'We implement systems, structures, and tools'
              },
              {
                number: '4',
                title: 'Execute',
                desc: 'We support rollout, adoption, and optimization'
              },
              {
                number: '5',
                title: 'Scale',
                desc: 'We prepare organizations for sustainable growth'
              }
            ].map((step, idx) => (
              <div key={idx} className='flex gap-8 items-start'>
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center h-14 w-14 rounded-full' style={{ backgroundColor: '#306CEC' }}>
                    <span className='text-white font-bold text-lg'>{step.number}</span>
                  </div>
                </div>
                <div className='flex-1'>
                  <h3 className='text-2xl font-bold text-gray-900 mb-2' style={{ fontFamily: 'League Spartan, sans-serif' }}>
                    {step.title}
                  </h3>
                  <p className='text-gray-700 text-lg leading-relaxed' style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
