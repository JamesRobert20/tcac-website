import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="py-16 bg-white community-pattern">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="animate-[slideIn_1s_ease-out]">
                        <div className="inline-block rounded-full bg-[#005A87]/10 px-4 py-1 mb-3">
                            <span className="text-[#005A87] font-medium text-sm">Our Community</span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            <span className="block text-[#005A87] mb-1">About TCAC</span>
                            <span className="relative">
                                Believe You Can!
                                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-[#FF9D00]"></span>
                            </span>
                        </h2>
                        <div className="prose prose-lg text-gray-600 mb-8">
                            <p>
                                The Tanzanian Community Association of Calgary (TCAC) is dedicated to supporting
                                Tanzanians living in Calgary and preserving our rich cultural heritage.
                            </p>
                            <p className="flex items-center">
                                <span className="inline-block w-3 h-3 rounded-full bg-[#005A87] mr-2"></span>
                                Our mission is to foster unity, provide support to community members,
                                and promote Tanzanian culture through various activities and programs.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/about"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#005A87] hover:bg-[#004166] transition-all hover:scale-105"
                            >
                                Learn More About Us
                            </Link>
                            <Link
                                href="/membership"
                                className="inline-flex items-center px-6 py-3 border border-[#005A87] text-base font-medium rounded-md text-[#005A87] bg-white hover:bg-gray-50 transition-all hover:scale-105"
                            >
                                Become a Member
                            </Link>
                        </div>
                    </div>

                    <div className="mt-12 lg:mt-0 animate-[slideIn_1s_ease-out_0.3s_both]">
                        <div className="bg-white p-8 rounded-lg shadow-sm relative community-card">
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-[#FF9D00]/20 z-0"></div>
                            <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-[#005A87]/10 z-0"></div>

                            <div className="relative z-10">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 bg-[#005A87] rounded-full flex-shrink-0 mr-4 overflow-hidden">
                                        <Image
                                            src="/images/Zena-TCAC-President-2024-2026.jpeg"
                                            alt="Zena Said - TCAC President"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Zena Said</h3>
                                        <p className="text-gray-600">TCAC President</p>
                                    </div>
                                </div>

                                <blockquote className="text-gray-700 italic border-l-4 border-[#005A87] pl-4 mb-6 relative">
                                    <span className="text-4xl text-[#005A87]/20 absolute -top-2 -left-2">"</span>
                                    "As I enter my first year as President I want to express my heartfelt gratitude
                                    for the trust and confidence you have placed in me to lead this community."
                                    <span className="text-4xl text-[#005A87]/20 absolute -bottom-5 -right-2">"</span>
                                </blockquote>

                                <p className="text-gray-600 mb-4">
                                    Thank you members for your continued participation and enthusiasm in our TCAC,
                                    and sponsors for your incredible support and advice.
                                </p>

                                <p className="text-gray-600">
                                    I am excited about the journey ahead, and I am confident that if we believe
                                    together we can do it.
                                </p>

                                <div className="mt-4 text-right">
                                    <svg className="w-24 h-8 ml-auto" viewBox="0 0 100 30">
                                        <path d="M10 25 C20 5, 40 5, 90 15" stroke="#005A87" strokeWidth="1" fill="none" />
                                    </svg>
                                    <p className="text-gray-500">— Zena Said, TCAC President</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Community values section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-[fadeIn_1s_ease-out_0.6s_both]">
                    <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-center text-center border-t-4 border-[#005A87] community-card">
                        <div className="w-16 h-16 rounded-full bg-[#005A87]/10 flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-[#005A87]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Unity</h3>
                        <p className="text-gray-600">
                            Building connections between Tanzanians in Calgary and creating a sense of belonging.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-center text-center border-t-4 border-[#FF9D00] community-card">
                        <div className="w-16 h-16 rounded-full bg-[#FF9D00]/10 flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-[#FF9D00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Culture</h3>
                        <p className="text-gray-600">
                            Preserving and sharing Tanzanian heritage, traditions, and values.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-center text-center border-t-4 border-[#219EBC] community-card">
                        <div className="w-16 h-16 rounded-full bg-[#219EBC]/10 flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-[#219EBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Support</h3>
                        <p className="text-gray-600">
                            Providing resources and assistance to community members and newcomers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
} 