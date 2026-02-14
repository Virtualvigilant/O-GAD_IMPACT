import Link from 'next/link';
// Note: If you get an errror on these icons, run: npm install react-icons
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGlobe } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#0B1221] text-white pt-16 pb-8 px-6 md:px-20 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Column 1: Brand & Socials */}
                <div className="space-y-6">
                    <h2 className="text-xl font-bold tracking-tight">MyStartup</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Empowering entrepreneurs to build successful, sustainable businesses through expert guidance and proven strategies.
                    </p>
                    <div className="flex gap-4">
                        <Link  href="#" className="p-2 border border-gray-700 rounded-md hover:bg-white hover:text-black transition-all">
                        <FaFacebookF size={14}  />
                        </Link>
                        <Link href="#" className="p-2 border border-gray-700 rounded-md hover:bg-white hover:text-black transition-all">
                        <FaTwitter size={14}  />
                        </Link>
                        <Link href="#" className="p-2 border border-gray-700 rounded-md hover:bg-white hover:text-black transition-all">
                        <FaLinkedinIn size={14} />
                        </Link>
                        <Link href="#" className="p-2 border border-gray-700 rounded md hover:bg-white hover:text-black transition-all">
                        <FaInstagram size={14} />
                        </Link>
                        <Link href="#" className="p-2 border border-gray-700 rounded md hover:bg-white hover:text-black transition-all">
                        <FaGlobe size={14} />
                        </Link>
                    </div>
                </div>

                {/* Column 2: Service */}
                <div>
                    <h3 className="Font-semibold mb-6 text-sm uppercase tracking-wider">Services</h3>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li><Link href="#" className="hover:text-white">Business & Strategy Consultancy</Link></li>
                        <li><Link href="#" className="hover:text-white">Technology & Digital Transformation</Link></li>
                        <li><Link href="#" className="hover:text-white">Legal & Business Structuring</Link></li>
                        <li><Link href="#" className="hover:text-white">Marketing, Sales & Growth Advisory</Link></li>
                        <li><Link href="#" className="hover:text-white">Scaling & Expansion Support</Link></li>
                    </ul>
                </div>
                {/* Column 3: Company */}
                <div>
                    <h3 className="font-semibold mb-6 text-sm uppercase tracking wider">Company</h3>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li><Link href="#" className="hover:text-white">About Us</Link></li>
                        <li><Link href="#" className="hover:text-white">Case Studies</Link></li>
                        <li><Link href="#" className="hover:text-white">Blog</Link></li>
                        <li><Link href="#" className="hover:text-white">Careers</Link></li>
                        <li><Link href="#" className="hover:text-white">Contact</Link></li>
                        <li><Link href="#" className="hover:text-white">Partners</Link></li>
                        </ul>
                </div>

                {/* Column 4: Legal */}
                 <div>
                    <h3 className="font-semibold mb-6 text-sm uppercase tracking-wider">Legal</h3>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
                        <li><Link href="#" className="hover:text-white">Terms of Services</Link></li>
                        <li><Link href="#" className="hover:text-white">Cookie Policy</Link></li>
                        <li><Link href="#" className="hover:text-white">Disclamer</Link></li>
                        <li><Link href="#" className="hover:text-white">Refund Policy</Link></li>
                        <li><Link href="#" className="hover:text-white">Accessibilty</Link></li>
                    </ul>
                 </div>
                 </div>

                 {/* Bottom Copyright Section */}
                 <div className="border-t border-gray-800 mt-1 pt-8 flex flex-col md:row justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest">
                    <p> © 2026 THE O'GAD IMPACT GROUP.All rights reserved </p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white">Privacy</Link>
                        <Link href="#" className="hover:text-white">Terms</Link>
                        <Link href="#" className="hover:text-white">Sitemap</Link>
                        </div>
                         </div>
        </footer>

    );
};

export default Footer;