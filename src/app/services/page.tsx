'use client';

import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Business & Strategy Consultancy',
      shortDesc: 'Strategic clarity and execution plans for sustainable growth',
      fullDesc: 'We help organizations define clarity, direction, and execution plans. Our approach combines market analysis, competitive positioning, and operational excellence to create strategies that deliver real business impact.',
      image: '/images/hero_images/business-hero.jpg',
      href: '/services/business-strategy',
      benefits: [
        'Strategic planning and roadmapping',
        'Business model innovation',
        'Organizational restructuring',
        'Performance optimization'
      ]
    },
    {
      id: 2,
      title: 'Technology & Digital Transformation',
      shortDesc: 'Technology as a growth and efficiency driver',
      fullDesc: 'We integrate technology strategically to unlock growth and enhance operational efficiency. From digital transformation roadmaps to custom solutions, we help organizations leverage technology as a competitive advantage.',
      image: '/images/hero_images/tech-hero.jpg',
      href: '/services/technology',
      benefits: [
        'Digital transformation strategy',
        'Technology stack evaluation',
        'Software development oversight',
        'Digital innovation programs'
      ]
    },
    {
      id: 3,
      title: 'Legal & Business Structuring',
      shortDesc: 'Bridging legal compliance and business growth',
      fullDesc: 'We bridge the gap between legal compliance and business growth. Our team ensures your organization is structured for scale while maintaining legal and regulatory compliance across all jurisdictions.',
      image: '/images/hero_images/law-hero.jpg',
      href: '/services/legal',
      benefits: [
        'Business entity setup',
        'Corporate governance',
        'Contract review and drafting',
        'Regulatory compliance'
      ]
    },
    {
      id: 4,
      title: 'Marketing, Sales & Growth Advisory',
      shortDesc: 'Finding, converting, and retaining customers',
      fullDesc: 'We develop comprehensive go-to-market strategies that help organizations find, convert, and retain customers. Our approach combines brand strategy, sales enablement, and growth marketing for sustainable revenue growth.',
      image: '/images/hero_images/marketing-hero.jpg',
      href: '/services/marketing',
      benefits: [
        'Go-to-market strategy',
        'Brand positioning',
        'Sales process optimization',
        'Growth marketing programs'
      ]
    },
    {
      id: 5,
      title: 'Scaling & Expansion Support',
      shortDesc: 'Preparing businesses for regional and market expansion',
      fullDesc: 'We prepare businesses for successful scaling and expansion. Whether entering new markets or scaling within existing ones, we provide comprehensive support across operations, structure, and strategy.',
      image: '/images/hero_images/scale-hero.jpg',
      href: '/services/scaling',
      benefits: [
        'Expansion strategy',
        'Market entry planning',
        'Operational scaling',
        'Team and leadership scaling'
      ]
    }
  ];

  return (
    <main className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='pt-32 md:pt-48 pb-20 relative overflow-hidden' style={{
        backgroundImage: 'url(/images/service-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        minHeight: '550px'
      }}>
        <div className='absolute inset-0' style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)' }}></div>
        <div className='max-w-7xl mx-auto px-6 md:px-12 relative z-10'>
          <div className='text-center'>
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-6'>
              Our Services
            </h1>
            <p className='text-xl md:text-2xl text-white/90 max-w-3xl mx-auto'>
              Comprehensive consulting across strategy, technology, law, and growth to transform your business
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-20 md:py-32'>
        <div className='max-w-7xl mx-auto px-6 md:px-12'>
          <div className='space-y-20 md:space-y-32'>
            {services.map((service, idx) => (
              <div key={service.id} className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'md:flex md:flex-row-reverse' : ''}`}>
                {/* Description */}
                <div className='space-y-6'>
                  <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
                    {service.title}
                  </h2>
                  <p className='text-lg text-gray-700 leading-relaxed line-clamp-6'>
                    {service.fullDesc}
                  </p>
                  <div>
                    <Link href={service.href} className='inline-block px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm' style={{ backgroundColor: '#306CEC' }}>
                      Learn More
                    </Link>
                  </div>
                </div>

                {/* Service Visual */}
                <div className='rounded-2xl overflow-hidden h-96 shadow-lg'>
                  <img src={service.image} alt={service.title} className='w-full h-full object-cover' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
