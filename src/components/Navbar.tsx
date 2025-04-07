"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Navigation links
    const navigationLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Events", href: "/events" },
        { name: "Community Leaders", href: "/leaders" },
        { name: "Contact", href: "/contact" },
        {
            name: "Archive", href: "#", isDropdown: true, dropdownItems: [
                { name: "Gallery", href: "/gallery" },
                { name: "News", href: "/news" },
                { name: "Past Events", href: "/past-events" },
            ]
        },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center group">
                            <div className="mr-3 transition-transform group-hover:scale-110">
                                <Image
                                    src="/images/logo.png"
                                    alt="TCAC Logo"
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                            </div>
                            <div>
                                <span className={`text-2xl font-bold transition-colors ${scrolled ? "text-[#005A87]" : "text-white"
                                    }`}>TCAC</span>
                                <span className={`block text-xs transition-colors ${scrolled ? "text-gray-600" : "text-white/80"
                                    }`}>Community Association</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navigationLinks.map((link, index) =>
                            link.isDropdown ? (
                                <div key={index} className="relative group">
                                    <button className={`px-3 py-2 text-sm font-medium flex items-center ${scrolled ? "text-gray-800 hover:text-[#005A87]" : "text-white hover:text-white"
                                        }`}>
                                        {link.name}
                                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block transform origin-top transition-transform duration-200 scale-y-0 group-hover:scale-y-100">
                                        {link.dropdownItems?.map((item, idx) => (
                                            <Link
                                                key={idx}
                                                href={item.href}
                                                className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#005A87] transition-colors"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className={`px-3 py-2 text-sm font-medium relative animated-underline ${scrolled ? "text-gray-800 hover:text-[#005A87]" : "text-white hover:text-white"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            )
                        )}
                        <Link
                            href="/donate"
                            className={`ml-2 px-4 py-2 text-sm font-medium rounded-full transition-all ${scrolled
                                    ? "text-white bg-[#005A87] hover:bg-[#004166] shadow-sm hover:shadow"
                                    : "text-[#005A87] bg-white hover:bg-gray-100 shadow-md hover:shadow-lg"
                                }`}
                        >
                            Donate
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${scrolled ? "text-gray-700 hover:text-[#005A87] hover:bg-gray-100" : "text-white hover:text-white hover:bg-white/10"
                                }`}
                        >
                            <svg
                                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`${isMenuOpen ? 'block animate-[slideIn_0.3s_ease-out]' : 'hidden'} md:hidden bg-white shadow-lg`}
            >
                <div className="pt-2 pb-3 space-y-1 px-4">
                    {navigationLinks.map((link, index) =>
                        link.isDropdown ? (
                            <div key={index} className="relative">
                                <button
                                    onClick={() => document.getElementById(`mobileDropdown-${index}`)?.classList.toggle('hidden')}
                                    className="w-full text-left px-3 py-2 text-base font-medium text-gray-800 hover:text-[#005A87] flex items-center justify-between border-l-4 border-transparent hover:border-[#005A87] transition-colors"
                                >
                                    {link.name}
                                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div id={`mobileDropdown-${index}`} className="hidden pl-4 border-l-2 border-gray-200 ml-3 mt-1 space-y-1">
                                    {link.dropdownItems?.map((item, idx) => (
                                        <Link
                                            key={idx}
                                            href={item.href}
                                            className="block px-3 py-2 text-sm text-gray-700 hover:text-[#005A87] transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={index}
                                href={link.href}
                                className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-[#005A87] border-l-4 border-transparent hover:border-[#005A87] transition-colors"
                            >
                                {link.name}
                            </Link>
                        )
                    )}
                    <Link href="/donate" className="block px-4 py-2 mt-2 text-base font-medium text-white bg-[#005A87] rounded-md hover:bg-[#004166] transition-colors text-center">Donate</Link>
                </div>
            </div>
        </nav>
    );
} 