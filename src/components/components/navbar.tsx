'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeHash, setActiveHash] = useState("");
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const pathname = usePathname() || "";
    const isNavigating = useRef(false);

    useEffect(() => {
        // Enable smooth scrolling for anchor links
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    useEffect(() => {
        // Set initial hash - default to hero if no hash in URL
        const initialHash = window.location.hash || "#hero";
        setActiveHash(initialHash);

        // Listen for hash changes from link clicks
        const handleHashChange = () => {
            const newHash = window.location.hash;
            setActiveHash(newHash);
            isNavigating.current = true;
            
            // Reset navigation flag after a delay to allow scroll to complete
            setTimeout(() => {
                isNavigating.current = false;
            }, 1000);
        };

        window.addEventListener('hashchange', handleHashChange);

        // Intersection Observer to detect which section is in view
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -66% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            // Only update from observer if we're not actively navigating
            if (isNavigating.current) return;
            
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    if (id === 'hero' || id === 'our-company' || id === 'get-in-touch') {
                        setActiveHash(`#${id}`);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        
        // Only observe specific sections for navbar
        const hero = document.getElementById('hero');
        const about = document.getElementById('our-company');
        const contact = document.getElementById('get-in-touch');
        
        if (hero) observer.observe(hero);
        if (about) observer.observe(about);
        if (contact) observer.observe(contact);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
            observer.disconnect();
        };
    }, []);

    const navLinks = [
        { href: "/#hero", label: "Home" },
        { href: "/#our-company", label: "About" },
        { href: "/services", label: "Services", isDropdown: true },
        { href: "/programs", label: "Programs" },
        { href: "/#get-in-touch", label: "Contact" }
    ];

    const services = [
        { title: 'Business & Strategy Consultancy', href: '/services/business-strategy' },
        { title: 'Technology & Digital Transformation', href: '/services/technology' },
        { title: 'Legal & Business Structuring', href: '/services/legal' },
        { title: 'Marketing, Sales & Growth Advisory', href: '/services/marketing' },
        { title: 'Scaling & Expansion Support', href: '/services/scaling' }
    ];

    const handleNavClick = (href: string) => {
        if (href.startsWith("/#")) {
            const sectionId = href.slice(2); // Remove "/#" to get just the ID
            const hashValue = `#${sectionId}`; // Proper hash format
            
            // If not on homepage, navigate to homepage with the hash first
            if (pathname !== "/") {
                window.location.href = href;
                return;
            }
            
            isNavigating.current = true;
            
            // Find and scroll to the element on current page
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                // Update hash and state after scroll starts
                window.location.hash = hashValue;
                setActiveHash(hashValue);
            }
            
            // Reset navigation flag
            setTimeout(() => {
                isNavigating.current = false;
            }, 1000);
        }
    };

    const isActive = (href: string) => {
        if (href.startsWith("/#")) {
            const targetHash = href.slice(1); // "#hero", "#our-company", "#get-in-touch"
            // Home is active only on homepage with no hash or #hero hash
            if (targetHash === "#hero") {
                return pathname === "/" && (activeHash === "" || activeHash === "#hero");
            }
            // Other sections active when on homepage and hash matches
            return pathname === "/" && activeHash === targetHash;
        }
        // For Services, check if pathname starts with /services
        if (href === "/services") {
            return pathname.startsWith("/services");
        }
        // For other links like /programs
        return pathname === href;
    };

    const showNavbarGradient = () => {
        // Show gradient unless we're on homepage and in hero section
        if (pathname === "/" && (activeHash === "" || activeHash === "#hero")) {
            return false;
        }
        return true;
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
            showNavbarGradient() ? 'bg-gradient-to-b from-black/60 to-black/40' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 flex-shrink-0">
                        <span className="text-lg font-bold text-white" style={{ fontFamily: 'League Spartan, sans-serif', textTransform: 'uppercase', letterSpacing: '-0.01em' }}>
                            THE O'GAD <span className="font-light">IMPACT GROUP</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {navLinks.map((link) => 
                            link.isDropdown ? (
                                <div key={link.href} className="relative group">
                                    <Link
                                        href={link.href}
                                        onMouseEnter={() => setIsServicesOpen(true)}
                                        onMouseLeave={() => setIsServicesOpen(false)}
                                        className={`px-4 py-2 font-medium rounded-lg transition-colors flex items-center gap-2 ${
                                            pathname.startsWith(link.href)
                                                ? 'text-white'
                                                : 'text-white hover:text-white/80'
                                        }`}
                                        style={{
                                            backgroundColor: pathname.startsWith(link.href) ? '#306CEC' : 'transparent'
                                        }}
                                    >
                                        {link.label}
                                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7' />
                                        </svg>
                                    </Link>
                                    
                                    {/* Dropdown Menu */}
                                    {isServicesOpen && (
                                        <div
                                            onMouseEnter={() => setIsServicesOpen(true)}
                                            onMouseLeave={() => setIsServicesOpen(false)}
                                            className='absolute top-full left-0 mt-0 bg-gray-900 border border-gray-800 rounded-lg shadow-2xl min-w-max py-2 z-50'
                                        >
                                            {services.map((service, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={service.href}
                                                    className='block px-4 py-3 text-white hover:bg-gray-800 hover:text-blue-400 transition-colors text-sm'
                                                    onClick={() => setIsServicesOpen(false)}
                                                >
                                                    {service.title}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : link.href.startsWith("/#") ? (
                                <button
                                    key={link.href}
                                    onClick={() => handleNavClick(link.href)}
                                    className={`px-4 py-2 font-medium rounded-lg transition-colors ${
                                        isActive(link.href)
                                            ? 'text-white'
                                            : 'text-white hover:text-white/80'
                                    }`}
                                    style={{
                                        backgroundColor: isActive(link.href) ? '#306CEC' : 'transparent'
                                    }}
                                >
                                    {link.label}
                                </button>
                            ) : (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`px-4 py-2 font-medium rounded-lg transition-colors ${
                                        isActive(link.href)
                                            ? 'text-white'
                                            : 'text-white hover:text-white/80'
                                    }`}
                                    style={{
                                        backgroundColor: isActive(link.href) ? '#306CEC' : 'transparent'
                                    }}
                                >
                                    {link.label}
                                </Link>
                            )
                        )}
                    </div>

                    {/* CTA Button + Mobile Menu */}
                    <div className="flex items-center gap-4">
                        <button className="hidden md:block text-white px-6 py-2.5 rounded-lg font-semibold transition-all hover:shadow-lg" style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#306CEC' }}>
                            Get Started
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
                        >
                            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                {isOpen ? (
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                                ) : (
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className='md:hidden border-t border-white/10 py-4 space-y-2 bg-black/20 backdrop-blur-sm' style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {navLinks.map((link) =>
                            link.isDropdown ? (
                                <div key={link.href}>
                                    <button
                                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                        className='block w-full text-left px-4 py-2 font-medium rounded-lg transition-colors text-white hover:bg-white/10 flex items-center justify-between'
                                    >
                                        {link.label}
                                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7' />
                                        </svg>
                                    </button>
                                    {isMobileServicesOpen && (
                                        <div className='bg-gray-900/50 rounded-lg ml-4 mt-2 space-y-1'>
                                            {services.map((service, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={service.href}
                                                    className='block px-4 py-2 text-white text-sm hover:bg-gray-800 hover:text-blue-400 transition-colors rounded'
                                                    onClick={() => {
                                                        setIsOpen(false);
                                                        setIsMobileServicesOpen(false);
                                                    }}
                                                >
                                                    {service.title}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : link.href.startsWith("/#") ? (
                                <button
                                    key={link.href}
                                    onClick={() => {
                                        handleNavClick(link.href);
                                        setIsOpen(false);
                                    }}
                                    className={`block w-full text-left px-4 py-2 font-medium rounded-lg transition-colors ${
                                        isActive(link.href)
                                            ? 'text-white'
                                            : 'text-white hover:bg-white/10'
                                    }`}
                                    style={{
                                        backgroundColor: isActive(link.href) ? '#306CEC' : 'transparent'
                                    }}
                                >
                                    {link.label}
                                </button>
                            ) : (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`block px-4 py-2 font-medium rounded-lg transition-colors ${
                                        isActive(link.href)
                                            ? 'text-white'
                                            : 'text-white hover:bg-white/10'
                                    }`}
                                    style={{
                                        backgroundColor: isActive(link.href) ? '#306CEC' : 'transparent'
                                    }}
                                >
                                    {link.label}
                                </Link>
                            )
                        )}
                        <button className="w-full mt-4 text-white px-6 py-2.5 rounded-lg font-semibold transition-all" style={{ backgroundColor: '#306CEC' }}>
                            Get Started
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}