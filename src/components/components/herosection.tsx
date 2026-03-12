'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroSlide {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    cta: string;
    category: string;
}

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    const slides: HeroSlide[] = [
        {
            id: 1,
            title: 'We champion the bold to achieve the extraordinary.',
            subtitle: 'Transforming ambition into tangible results through strategic consulting.',
            image: '/images/hero_images/business-hero (2).jpg',
            cta: 'Get Started',
            category: 'Business Strategy'
        },
        {
            id: 2,
            title: 'Building sustainable business growth across your organization today.',
            subtitle: 'Creating future-ready organizations across Africa and beyond always.',
            image: '/images/hero_images/scale-hero (2).jpg',
            cta: 'Get Started',
            category: 'Scale & Growth'
        },
        {
            id: 3,
            title: 'From idea to execution with precision and excellence.',
            subtitle: 'Moving your vision from concept to market leadership.',
            image: '/images/hero_images/technology-hero.jpg',
            cta: 'Get Started',
            category: 'Technology'
        },
        {
            id: 4,
            title: 'Strategic growth for your business objectives and goals.',
            subtitle: 'Unlocking potential through innovative marketing strategies now available.',
            image: '/images/hero_images/Home-hero.jpg',
            cta: 'Get Started',
            category: 'Marketing & Growth'
        },
        {
            id: 5,
            title: 'Legal expertise to guide your business forward.',
            subtitle: 'Navigating complex legal landscapes with strategic counsel.',
            image: '/images/hero_images/Law-hero (2).jpg',
            cta: 'Get Started',
            category: 'Law'
        }
    ];

    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [isAutoPlay, slides.length]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setIsAutoPlay(false);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAutoPlay(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsAutoPlay(false);
    };

    return (
        <section id='hero' className='relative w-full overflow-hidden' style={{ height: '100vh' }}>
            {/* Slides Container */}
            <div className='relative w-full h-full' style={{ height: '100vh' }}>
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        {/* Background Image */}
                        <div className='absolute inset-0 w-full h-full overflow-hidden'>
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                className={`object-cover w-full h-full ${index === currentSlide ? 'animate-zoomIn' : ''}`}
                                priority={index === currentSlide}
                                unoptimized
                            />
                            <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30'></div>
                        </div>

                        {/* Content Overlay */}
                        <div className='relative h-full flex flex-col justify-between items-start pt-32 pb-0 overflow-hidden'>
                            <div className='px-6 md:px-12 w-full max-w-2xl flex-1 flex flex-col justify-start'>
                                <div className='space-y-6 animate-fadeIn'>
                                    <h1 className='h1 text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-slideInLeft'>
                                        {slide.title}
                                    </h1>
                                    <p className='text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-2xl animate-slideInLeft font-medium' style={{ animationDelay: '0.2s', opacity: 0, animation: 'slideInLeft 0.8s ease-out 0.2s forwards', fontFamily: 'DM Sans, sans-serif' }}>
                                        {slide.subtitle}
                                    </p>
                                    <div className='flex gap-4 pt-4'>
                                        <button className='text-white px-8 py-3 rounded-md font-bold transition-all animate-slideInLeft' style={{ backgroundColor: '#306CEC', animationDelay: '0.4s', opacity: 0, animation: 'slideInLeft 0.8s ease-out 0.4s forwards' }}>
                                            {slide.cta}
                                        </button>
                                        <button className='bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-md font-bold transition-all border border-white/50 animate-slideInLeft' style={{ animationDelay: '0.6s', opacity: 0, animation: 'slideInLeft 0.8s ease-out 0.6s forwards' }}>
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}