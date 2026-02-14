'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
    const router = useRouter();

    return (
        <section className='bg-white pl-6 flex items-center' style={{ height: 'calc(100vh - 4rem)' }}>
            <div className='max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full'>
                {/*text*/}
                <div className='space-y-8 max-w-2xl'>
                    <h1 className='text-4xl md:text-[3.25rem] font-black text-black leading-[1.1] tracking-tight uppercase'>
                        Building Sustainable Business
                        and Future Ready Organizations
                        Across Africa
                    </h1>
                    <p className='text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed' style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        we are a multidisciplinary consultancy helping founders, institutions,
                        and enterprises move from idea to execution and from growth to scale
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-9 py-3.5 rounded-md font-bold text-sm tracking-wider transition-all hover:shadow-lg uppercase">
                            Work with us
                        </button>
                        <button className="bg-white hover:bg-gray-50 text-gray-900 px-9 py-3.5 rounded-md border-2 border-gray-900 font-bold text-sm tracking-wider transition-all hover:shadow-md uppercase">
                            Explore service
                        </button>
                    </div>
                </div>

                {/* illustration*/}
                <div className='flex justify-center lg:justify-end items-start pt-8'>
                    <Image
                        src="/images/hero.png"
                        alt="Growth and Strategy Illustration"
                        width={650}
                        height={550}
                        className='object-contain max-h-[60vh]'
                        priority
                    />
                </div>
            </div>
        </section>

    )
}