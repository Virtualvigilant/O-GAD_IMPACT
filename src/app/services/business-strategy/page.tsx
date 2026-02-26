'use client';

export default function BusinessStrategyPage() {
  return (
    <main className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='pt-32 md:pt-48 pb-20 relative overflow-hidden' style={{
        backgroundImage: 'url(/images/hero_images/business-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        minHeight: '550px'
      }}>
        <div className='absolute inset-0' style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)' }}></div>
        <div className='max-w-7xl mx-auto px-6 md:px-12 relative z-10'>
          <div className='text-center'>
            <a href='/services' className='text-white hover:text-gray-200 font-semibold mb-6 inline-block'>
              ← Back to Services
            </a>
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-6'>
              Business & Strategy Consultancy
            </h1>
            <p className='text-xl md:text-2xl text-white/90 max-w-3xl mx-auto'>
              Strategic clarity, organizational alignment, and execution excellence for sustainable business growth
            </p>
            <div className='mt-10'>
              <button className='px-10 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors' style={{ backgroundColor: '#306CEC', color: 'white' }}>
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
                The Strategic Clarity You Need
              </h2>
              <p className='text-lg text-gray-700 mb-6 leading-relaxed' style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Many organizations struggle with unclear strategy and fragmented execution. We help you define a clear strategic vision, align your organization around it, and execute with precision.
              </p>
              <p className='text-lg text-gray-700 mb-8 leading-relaxed' style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Our approach combines deep market analysis, competitive positioning, internal capabilities assessment, and operational excellence to create strategies that deliver measurable business impact.
              </p>
              <button className='px-8 py-3 bg-white text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors' style={{ backgroundColor: '#306CEC' }}>
                Get Started
              </button>
            </div>
            <div className='bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl h-96 flex items-center justify-center overflow-hidden'>
              <img src='/images/hero_images/business-hero.jpg' alt='Business Strategy' className='w-full h-full object-cover' />
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
                title: 'Strategic Planning & Roadmapping',
                desc: 'We develop 3-5 year strategic plans aligned with your vision, market opportunities, and organizational capabilities.'
              },
              {
                title: 'Business Model Innovation',
                desc: 'Explore new revenue streams, market segments, and operational models that drive growth and competitive advantage.'
              },
              {
                title: 'Organizational Restructuring',
                desc: 'Redesign your organizational structure, roles, and processes to support strategic execution and scale.'
              },
              {
                title: 'Performance Optimization',
                desc: 'Identify and implement operational improvements that enhance efficiency, reduce costs, and improve margins.'
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
              { num: '01', title: 'Discovery & Assessment', desc: 'We assess current state, market landscape, competitive positioning, and organizational capabilities.' },
              { num: '02', title: 'Strategy Development', desc: 'We develop a comprehensive strategy with clear vision, goals, and key initiatives.' },
              { num: '03', title: 'Organizational Alignment', desc: 'We align structure, processes, and culture to support strategic execution.' },
              { num: '04', title: 'Implementation Support', desc: 'We guide execution with detailed roadmaps, KPIs, and governance structures.' },
              { num: '05', title: 'Monitoring & Refinement', desc: 'We establish systems to track progress and refine strategy based on market changes.' }
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

    </main>
  );
}
