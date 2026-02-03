'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function HeroSection() {
    const router = useRouter();

    return (
        <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-50 overflow-hidden">
            <div className="absolute top-20 right-20 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-50"></div>
            {/*text*/}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-purple-900 mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                        O'GAD CLASS
                    </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Your all-in-one platform for learning and collaboration.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => router.push('/login')}
                        className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                    >
                        Get Started
                    </button>
                    <button
                        onClick={() => router.push('/about')}
                        className="px-8 py-3 bg-white text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-medium"
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}
