import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Community Leaders | Tanzanian Community Association of Calgary',
    description: 'Meet the dedicated leaders of the Tanzanian Community Association of Calgary (TCAC) who serve our community.',
};

export default function LeadersPage() {
    return (
        <div className="min-h-screen">
            <Navbar />

            <main>
                {/* Hero section */}
                <div className="relative bg-gradient-to-r from-[#004166] to-[#005A87] pt-32 pb-16 overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white/5 animate-[float_15s_ease-in-out_infinite]"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white/5 animate-[float_12s_ease-in-out_infinite_reverse]"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl font-bold text-white mb-6 animate-[fadeIn_1s_ease-out]">
                                Our Community Leaders
                            </h1>
                            <p className="text-xl text-white/90 mb-6 animate-[fadeIn_1s_ease-out_0.2s_both]">
                                Meet the dedicated individuals who serve our Tanzanian community in Calgary with passion and commitment
                            </p>

                            <div className="inline-flex items-center text-white/70 text-sm animate-[fadeIn_1s_ease-out_0.4s_both]">
                                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                                <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                                <span>Community Leaders</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Leadership mission statement */}
                <div className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-gradient-to-r from-[#004166]/5 to-[#005A87]/5 rounded-xl p-8 md:p-12 relative overflow-hidden animate-[fadeIn_1s_ease-out]">
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF9D00]/10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#005A87]/10 rounded-full transform -translate-x-1/4 translate-y-1/4"></div>

                            <div className="relative z-10 max-w-3xl mx-auto text-center">
                                <div className="w-20 h-1 bg-gradient-to-r from-[#004166] to-[#005A87] mx-auto mb-6"></div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Leadership Mission Statement</h2>
                                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                    Our leadership team is committed to fostering unity, preserving Tanzanian culture, and empowering our community members to thrive in Calgary. We work collaboratively to develop programs and initiatives that address the needs of our diverse community while promoting cultural exchange and integration.
                                </p>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    Each leader brings unique skills, perspectives, and experiences to strengthen our community association and enhance the quality of life for Tanzanians in Calgary.
                                </p>
                                <div className="w-20 h-1 bg-gradient-to-r from-[#004166] to-[#005A87] mx-auto mt-6"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team section (enhanced) */}
                <TeamSection isEnhanced={true} />

                {/* Leadership values */}
                <div className="py-16 bg-gray-50 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute inset-0 community-pattern opacity-5"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-12 animate-[fadeIn_1s_ease-out]">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Values</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                The core principles that guide our community leaders in serving the Tanzanian community
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg p-8 shadow-md animate-[fadeIn_1s_ease-out_0.2s_both] border-t-4 border-[#005A87]">
                                <div className="w-16 h-16 bg-[#005A87]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <svg className="w-8 h-8 text-[#005A87]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Integrity</h3>
                                <p className="text-gray-600 text-center">
                                    We lead with honesty, transparency, and ethical decision-making in all our community initiatives and relationships.
                                </p>
                            </div>

                            <div className="bg-white rounded-lg p-8 shadow-md animate-[fadeIn_1s_ease-out_0.4s_both] border-t-4 border-[#FF9D00]">
                                <div className="w-16 h-16 bg-[#FF9D00]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <svg className="w-8 h-8 text-[#FF9D00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Inclusivity</h3>
                                <p className="text-gray-600 text-center">
                                    We embrace diversity and ensure all community members feel welcomed, valued, and represented in our activities.
                                </p>
                            </div>

                            <div className="bg-white rounded-lg p-8 shadow-md animate-[fadeIn_1s_ease-out_0.6s_both] border-t-4 border-[#219EBC]">
                                <div className="w-16 h-16 bg-[#219EBC]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <svg className="w-8 h-8 text-[#219EBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Empowerment</h3>
                                <p className="text-gray-600 text-center">
                                    We foster leadership development and create opportunities for community members to develop skills and reach their potential.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Join leadership CTA */}
                <div className="bg-gradient-to-r from-[#004166] to-[#005A87] py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="animate-[fadeIn_1s_ease-out]">
                            <h2 className="text-3xl font-bold text-white mb-6">Join Our Leadership Team</h2>
                            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                                Interested in making a difference in our community? We're always looking for passionate individuals to join our team and help shape the future of TCAC.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/volunteer"
                                    className="inline-flex items-center px-8 py-4 bg-white text-[#005A87] font-medium rounded-md shadow-lg hover:bg-gray-100 transition-colors group"
                                >
                                    Volunteer Opportunities
                                    <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center px-8 py-4 bg-[#FF9D00] text-white font-medium rounded-md shadow-lg hover:bg-[#E68A00] transition-colors group"
                                >
                                    Contact Leadership
                                    <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
} 