'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    serviceType: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show a success message
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        companyName: '',
        email: '',
        serviceType: '',
        description: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div 
      id='get-in-touch'
      className='py-20 md:py-32 relative'
      style={{
        backgroundImage: 'url(/images/contact.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-black/40' />
      
      <div className='max-w-6xl mx-auto px-6 md:px-12 relative z-10'>
        {/* Two Column Layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          {/* Left Side - Heading & Info */}
          <div>
            <h2 className='text-5xl md:text-6xl font-bold text-white mb-6' style={{ fontFamily: 'League Spartan, sans-serif' }}>
              Get In Touch
            </h2>
            <p className='text-lg text-gray-100 mb-8' style={{ fontFamily: 'DM Sans, sans-serif' }}>
              We'd love to hear about your project. Send us a message and we'll respond as soon as possible.
            </p>

            {/* Contact Info */}
            <div className='flex flex-col gap-4'>
              {/* Phone */}
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0' style={{ backgroundColor: '#306CEC' }}>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                  </svg>
                </div>
                <div>
                  <p className='text-sm text-gray-200' style={{ fontFamily: 'DM Sans, sans-serif' }}>Phone</p>
                  <a href='tel:+234800000000' className='text-base font-semibold text-white hover:text-gray-100' style={{ fontFamily: 'League Spartan, sans-serif' }}>+234 800 000 0000</a>
                </div>
              </div>

              {/* Email */}
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0' style={{ backgroundColor: '#306CEC' }}>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </svg>
                </div>
                <div>
                  <p className='text-sm text-gray-200' style={{ fontFamily: 'DM Sans, sans-serif' }}>Email</p>
                  <a href='mailto:hello@ogadimpact.com' className='text-base font-semibold text-white hover:text-gray-100' style={{ fontFamily: 'League Spartan, sans-serif' }}>hello@ogadimpact.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form Container */}
          <div className='max-w-3xl mx-auto w-full bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl border border-white/50'>
            {submitted && (
              <div className='mb-6 p-4 bg-green-50 border-l-4 rounded-lg' style={{ borderColor: '#306CEC' }}>
                <p className='text-green-700 font-semibold text-sm' style={{ fontFamily: 'League Spartan, sans-serif' }}>
                  ✓ Thank you! We'll be in touch shortly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Name and Email Row */}
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm font-semibold text-gray-800 mb-2' style={{ fontFamily: 'League Spartan, sans-serif' }}>
                    Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 bg-white/90 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all text-base placeholder-gray-700'
                    style={{ borderColor: '#E5E7EB', fontFamily: 'DM Sans, sans-serif' }}
                    onFocus={(e) => { e.target.style.borderColor = '#306CEC'; e.target.style.boxShadow = 'none'; }}
                    onBlur={(e) => { e.target.style.borderColor = '#E5E7EB'; }}
                    placeholder='Your name'
                  />
                </div>

                <div>
                  <label className='block text-sm font-semibold text-gray-800 mb-2' style={{ fontFamily: 'League Spartan, sans-serif' }}>
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 bg-white/90 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all text-base placeholder-gray-700'
                    style={{ borderColor: '#E5E7EB', fontFamily: 'DM Sans, sans-serif' }}
                    onFocus={(e) => { e.target.style.borderColor = '#306CEC'; }}
                    onBlur={(e) => { e.target.style.borderColor = '#E5E7EB'; }}
                    placeholder='your@email.com'
                  />
                </div>
              </div>

              {/* Company Field */}
              <div>
                <label className='block text-sm font-semibold text-gray-800 mb-2' style={{ fontFamily: 'League Spartan, sans-serif' }}>
                  Company
                </label>
                <input
                  type='text'
                  name='companyName'
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-white/90 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all text-base placeholder-gray-700'
                  style={{ borderColor: '#E5E7EB', fontFamily: 'DM Sans, sans-serif' }}
                  onFocus={(e) => { e.target.style.borderColor = '#306CEC'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#E5E7EB'; }}
                  placeholder='Your company'
                />
              </div>

              {/* Service Field */}
              <div>
                  <label className='block text-sm font-semibold text-gray-800 mb-2' style={{ fontFamily: 'League Spartan, sans-serif' }}>
                    Service
                  </label>
                  <select
                    name='serviceType'
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 bg-white/90 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all text-base'
                    style={{ borderColor: '#E5E7EB', fontFamily: 'DM Sans, sans-serif', color: formData.serviceType ? '#374151' : '#6B7280' }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = '#306CEC'; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = '#E5E7EB'; }}
                  >
                    <option value='' style={{ color: '#6B7280' }}>Select a service...</option>
                    <option value='business'>Business & Strategy Consultancy</option>
                    <option value='technology'>Technology & Digital Transformation</option>
                    <option value='legal'>Legal & Business Structuring</option>
                    <option value='marketing'>Marketing, Sales & Growth Advisory</option>
                    <option value='scaling'>Scaling & Expansion Support</option>
                  </select>
              </div>

              {/* Message Field */}
              <div>
                <label className='block text-sm font-semibold text-gray-800 mb-2' style={{ fontFamily: 'League Spartan, sans-serif' }}>
                  Message
                </label>
                <textarea
                  name='description'
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={3}
                  className='w-full px-4 py-3 bg-white/90 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all resize-none text-base placeholder-gray-700' 
                  style={{ borderColor: '#E5E7EB', fontFamily: 'DM Sans, sans-serif' }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#306CEC'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = '#E5E7EB'; }}
                  placeholder='Tell us more...'
                />
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                className='w-full px-6 py-3 rounded-xl font-semibold text-white text-base transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-95' 
                style={{ backgroundColor: '#306CEC', fontFamily: 'League Spartan, sans-serif' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
