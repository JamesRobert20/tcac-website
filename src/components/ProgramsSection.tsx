import Link from "next/link";
import Image from "next/image";

// Sample programs data
const programs = [
    {
        id: 1,
        title: "TCAC Insurance",
        description: "No-Cost Program for Accidental Death and Dismemberment provided by American Income Life Insurance Company for TCAC members.",
        icon: (
            <svg className="w-12 h-12 text-[#005A87]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        link: "/programs/insurance",
        members: "300+",
    },
    {
        id: 2,
        title: "SwahiliKIDS",
        description: "Free, fun and easy Swahili learning resources accessible online for children of Swahili speaking families.",
        icon: (
            <svg className="w-12 h-12 text-[#FF9D00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        link: "https://www.swahilikids.com/",
        isExternal: true,
        members: "120+",
    },
    {
        id: 3,
        title: "CAPT Professionals",
        description: "Series featuring Tanzanian professionals sharing their career journeys and experiences in various fields.",
        icon: (
            <svg className="w-12 h-12 text-[#219EBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        link: "/programs/capt",
        members: "50+",
    },
];

export default function ProgramsSection() {
    return (
        <section className="py-24 bg-white relative community-pattern overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#005A87]/5 animate-[float_10s_ease-in-out_infinite]"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-[#FF9D00]/5 animate-[float_8s_ease-in-out_infinite_2s]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto animate-[fadeIn_1s_ease-out]">
                    <div className="inline-block rounded-full bg-[#005A87]/10 px-4 py-1 mb-3">
                        <span className="text-[#005A87] font-medium text-sm">Community Programs</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Programs & Initiatives</h2>
                    <p className="text-xl text-gray-600">
                        Discover the various programs and initiatives that help strengthen our community and preserve our culture
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                    {programs.map((program) => (
                        <div
                            key={program.id}
                            className="relative animate-[fadeIn_1s_ease-out] group"
                            style={{ animationDelay: "200ms" }}
                        >
                            <div className="bg-white rounded-lg p-8 shadow-md transition-all hover:shadow-xl relative z-10 community-card overflow-hidden h-full flex flex-col">
                                {/* Decorative background shape */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -z-10 transform group-hover:scale-110 transition-transform"></div>

                                {/* Program content */}
                                <div className="flex items-start mb-6">
                                    <div className="p-3 rounded-lg bg-gray-50 mr-4 flex-shrink-0">
                                        {program.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                                            {program.title}
                                        </h3>
                                        <div className="flex items-center">
                                            <span className="inline-flex items-center text-xs text-gray-500">
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                                </svg>
                                                {program.members} participants
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-6 pl-16 flex-grow">
                                    {program.description}
                                </p>

                                <div className="mt-auto pl-16">
                                    {program.isExternal ? (
                                        <a
                                            href={program.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-[#005A87] font-medium hover:text-[#004166] animated-underline group"
                                        >
                                            Explore Program
                                            <svg className="ml-1 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    ) : (
                                        <Link
                                            href={program.link}
                                            className="inline-flex items-center text-[#005A87] font-medium hover:text-[#004166] animated-underline group"
                                        >
                                            Explore Program
                                            <svg className="ml-1 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    )}
                                </div>
                            </div>

                            {/* Community impact indicator */}
                            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#004166] to-[#005A87] text-white px-4 py-2 rounded-full shadow-md z-20 text-sm font-medium animate-[float_4s_ease-in-out_infinite] flex items-center">
                                <svg className="w-4 h-4 mr-1 text-[#FF9D00]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Community Impact
                            </div>
                        </div>
                    ))}
                </div>

                {/* Community engagement section */}
                <div className="mt-24 bg-gradient-to-r from-[#004166] to-[#005A87] rounded-xl overflow-hidden shadow-xl animate-[fadeIn_1s_ease-out_0.6s_both]">
                    <div className="px-8 py-12 md:p-12 text-white relative">
                        <div className="max-w-3xl">
                            <h3 className="text-2xl font-bold mb-4">Join Our Community Programs</h3>
                            <p className="text-white/80 mb-8">
                                Our programs are designed to strengthen our community, preserve our culture, and support each other.
                                Join us and be part of these transformative initiatives.
                            </p>
                            <Link
                                href="/programs"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#005A87] bg-white hover:bg-gray-100 shadow-md hover:shadow-lg transition-all group"
                            >
                                View All Programs
                                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>

                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
                        <div className="absolute bottom-0 right-32 w-40 h-40 bg-[#FF9D00] opacity-10 rounded-full transform translate-y-1/3"></div>
                    </div>
                </div>
            </div>
        </section>
    );
} 