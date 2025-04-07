import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-[#004166] to-[#005A87] text-white pt-16 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#FF9D00]"></div>
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/5"></div>
            <div className="absolute bottom-40 right-10 w-60 h-60 rounded-full bg-white/5"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {/* Column 1: About & Newsletter */}
                    <div className="animate-[fadeIn_1s_ease-out]">
                        <div className="flex items-center mb-6">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden mr-3">
                                <span className="text-[#005A87] font-bold">TC</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">TCAC</h3>
                                <p className="text-sm text-gray-300">Tanzanian Community Association</p>
                            </div>
                        </div>

                        <p className="text-gray-300 mb-6">
                            Connecting and supporting Tanzanians in Calgary since 2002. Building a vibrant community through
                            unity, culture, and shared traditions.
                        </p>

                        {/* Newsletter signup */}
                        <div className="mt-8 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                            <h4 className="text-lg font-semibold mb-2">Join our newsletter</h4>
                            <p className="text-sm text-gray-300 mb-4">Stay updated with community events and news</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="px-4 py-2 rounded-l-md bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 flex-grow focus:outline-none focus:ring-1 focus:ring-[#FF9D00]"
                                />
                                <button className="bg-[#FF9D00] hover:bg-[#E68A00] text-white px-4 py-2 rounded-r-md transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        <div className="flex space-x-4 mt-6">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF9D00] transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF9D00] transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF9D00] transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="animate-[fadeIn_1s_ease-out_0.2s_both]">
                        <h3 className="text-xl font-bold mb-6 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-[#FF9D00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            <li className="transform hover:translate-x-2 transition-transform">
                                <Link href="/about" className="text-gray-300 hover:text-white flex items-center">
                                    <span className="w-2 h-2 bg-[#FF9D00] rounded-full mr-2"></span>
                                    About Us
                                </Link>
                            </li>
                            <li className="transform hover:translate-x-2 transition-transform">
                                <Link href="/membership" className="text-gray-300 hover:text-white flex items-center">
                                    <span className="w-2 h-2 bg-[#FF9D00] rounded-full mr-2"></span>
                                    Membership
                                </Link>
                            </li>
                            <li className="transform hover:translate-x-2 transition-transform">
                                <Link href="/business" className="text-gray-300 hover:text-white flex items-center">
                                    <span className="w-2 h-2 bg-[#FF9D00] rounded-full mr-2"></span>
                                    Business
                                </Link>
                            </li>
                            <li className="transform hover:translate-x-2 transition-transform">
                                <Link href="/gallery" className="text-gray-300 hover:text-white flex items-center">
                                    <span className="w-2 h-2 bg-[#FF9D00] rounded-full mr-2"></span>
                                    Gallery
                                </Link>
                            </li>
                            <li className="transform hover:translate-x-2 transition-transform">
                                <Link href="/archive/events" className="text-gray-300 hover:text-white flex items-center">
                                    <span className="w-2 h-2 bg-[#FF9D00] rounded-full mr-2"></span>
                                    Events
                                </Link>
                            </li>
                            <li className="transform hover:translate-x-2 transition-transform">
                                <Link href="/contact" className="text-gray-300 hover:text-white flex items-center">
                                    <span className="w-2 h-2 bg-[#FF9D00] rounded-full mr-2"></span>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>

                        <h3 className="text-xl font-bold mt-8 mb-4 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-[#FF9D00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Community
                        </h3>
                        <ul className="space-y-3">
                            <li className="transform hover:translate-x-2 transition-transform">
                                <Link href="/events" className="text-gray-300 hover:text-white flex items-center">
                                    <span className="w-2 h-2 bg-[#FF9D00] rounded-full mr-2"></span>
                                    Upcoming Events
                                </Link>
                            </li>
                            <li className="transform hover:translate-x-2 transition-transform">
                                <Link href="/volunteer" className="text-gray-300 hover:text-white flex items-center">
                                    <span className="w-2 h-2 bg-[#FF9D00] rounded-full mr-2"></span>
                                    Volunteer
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="animate-[fadeIn_1s_ease-out_0.4s_both]">
                        <h3 className="text-xl font-bold mb-6 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-[#FF9D00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Contact Us
                        </h3>
                        <div className="bg-white/10 rounded-lg p-5 backdrop-blur-sm">
                            <address className="not-italic text-gray-300 space-y-4">
                                <p className="flex items-center">
                                    <svg className="w-5 h-5 mr-3 text-[#FF9D00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Calgary, Alberta, Canada
                                </p>
                                <p className="flex items-center">
                                    <svg className="w-5 h-5 mr-3 text-[#FF9D00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <a href="mailto:tcacexecutive@gmail.com" className="hover:text-white">
                                        tcacexecutive@gmail.com
                                    </a>
                                </p>
                            </address>

                            <div className="mt-6">
                                <Link
                                    href="/donate"
                                    className="group w-full bg-gradient-to-r from-[#FF9D00] to-[#E68A00] text-white px-6 py-3 rounded-md hover:shadow-lg inline-flex items-center justify-center transition-all duration-300 hover:from-[#E68A00] hover:to-[#FF9D00]"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    <span className="relative">
                                        Support Our Community
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
                        © {new Date().getFullYear()} - Tanzanian Community Association of Calgary • All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
} 