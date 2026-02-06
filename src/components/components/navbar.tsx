'use client';

import { useEffect } from "react";
import Link from "next/link";

export default function Navbar() {

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/*logosec*/}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="text-purple-600">

                        </div>
                        <span className="text-xl font-bold text-black">
                            THE O'GAD <span className="text-black font-thin">IMPACT GROUP</span>
                        </span>
                    </Link>

                    {/*Navigation links*/}
                    <div className="hidden md:flex items-center gap-8 lg:gap-12">
                        <Link href="/" className="text-black font-medium hover:text-purple-600 transition">
                            Home
                        </Link>
                        <Link href="/" className="text-black font-medium hover:text-purple-600 transition">
                            About us
                        </Link>
                        <Link href="/" className="text-black font-medium hover:text-purple-600 transition">
                            Services
                        </Link>
                        <Link href="/" className="text-black font-medium hover:text-purple-600 transition">
                            Program
                        </Link>
                        <Link href="/" className="text-black font-medium hover:text-purple-600 transition">
                            Contacts
                        </Link>
                    </div>



                </div>
            </div>

        </nav>
    )
}