"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const services = [
    { name: "Business & Strategy", href: "/services/business-strategy" },
    { name: "Technology & Digital", href: "/services/tech-digital" },
    { name: "Legal & Business Structuring", href: "/services/legal-structuring" },
    { name: "Marketing, Sales & Growth", href: "/services/marketing-sales" },
    { name: "Scaling & Expansion", href: "/services/scaling-expansion" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto pl-6 pr-6">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-black uppercase" style={{ fontFamily: 'League Spartan, sans-serif' }}>
              THE O'GAD <span className="text-black font-light">IMPACT GROUP</span>
            </span>
          </Link>

          {/* Navigation links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            <Link href="/" className="text-black font-medium hover:text-purple-600 transition">
              Home
            </Link>
            
            <Link href="/about" className="text-black font-medium hover:text-purple-600 transition">
              About us
            </Link>

            {/* Dropdown for Services - Now Clickable to /services */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              {/* WE WRAPPED THIS IN A LINK */}
              <Link href="/services" className="flex items-center text-black font-medium hover:text-purple-600 transition outline-none h-16">
                Services
                <svg className={`ml-1 w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute left-0 mt-0 w-64 bg-white border border-gray-100 shadow-lg rounded-md overflow-hidden py-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/program" className="text-black font-medium hover:text-purple-600 transition">
              Program
            </Link>
            
            <Link href="/contacts" className="text-black font-medium hover:text-purple-600 transition">
              Contacts
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}