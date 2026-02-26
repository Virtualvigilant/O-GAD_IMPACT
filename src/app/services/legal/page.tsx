'use client';

export default function LegalPage() {
  return (
    <main className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='pt-32 md:pt-48 pb-20 relative overflow-hidden' style={{
        backgroundImage: 'url(/images/hero_images/law-hero.jpg)',
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
              Legal & Business Structuring
            </h1>
            <p className='text-xl md:text-2xl text-white/90 max-w-3xl mx-auto'>
              Ensure your business is properly structured for growth while maintaining legal and regulatory compliance
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
                Compliance Meets Growth
              </h2>
              <p className='text-lg text-gray-700 mb-6 leading-relaxed' style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Legal and regulatory compliance shouldn't be a constraint on growth—it should be a foundation for it. We bridge the gap between legal protection and business strategy.
              </p>
              <p className='text-lg text-gray-700 mb-8 leading-relaxed' style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Our team ensures your organization is properly structured legally while remaining agile enough to scale. From entity setup to governance for multi-jurisdictional operations, we've got you covered.
              </p>
              <button className='px-8 py-3 bg-white text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors' style={{ backgroundColor: '#306CEC' }}>
                Get Started
              </button>
            </div>
            <div className='bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl h-96 flex items-center justify-center overflow-hidden'>
              <img src='/images/hero_images/law-hero.jpg' alt='Legal & Business Structuring' className='w-full h-full object-cover' />
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
                title: 'Business Entity Setup',
                desc: 'Proper structuring of your business entity across different jurisdictions with tax optimization.'
              },
              {
                title: 'Corporate Governance',
                desc: 'Governance frameworks and policies that protect the business while enabling growth and decision-making.'
              },
              {
                title: 'Contract Review & Drafting',
                desc: 'Review and creation of key commercial contracts that protect your interests and enable operations.'
              },
              {
                title: 'Regulatory Compliance',
                desc: 'Guidance on regulatory requirements across different jurisdictions and industries.'
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
              { num: '01', title: 'Current Structure Review', desc: 'We assess your current legal and corporate structure and identify areas of risk or improvement.' },
              { num: '02', title: 'Jurisdictional Analysis', desc: 'We identify requirements across jurisdictions where you operate or plan to expand.' },
              { num: '03', title: 'Restructuring Plan', desc: 'We develop a plan for restructuring your entity and governance to optimize for growth and compliance.' },
              { num: '04', title: 'Implementation Support', desc: 'We oversee the execution of restructuring with minimal operational disruption.' },
              { num: '05', title: 'Ongoing Compliance', desc: 'We establish systems and processes for ongoing compliance monitoring and reporting.' }
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
