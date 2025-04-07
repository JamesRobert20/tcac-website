import Image from "next/image";
import Link from "next/link";

const initiatives = [
    {
        id: 1,
        title: "Youth Mentorship",
        description: "Support educational programs and mentorship for Tanzanian youth in Calgary",
        goal: 5000,
        raised: 3250,
        image: "/placeholder-support-1.jpg",
    },
    {
        id: 2,
        title: "Cultural Events",
        description: "Help fund cultural celebrations that preserve our Tanzanian heritage",
        goal: 3000,
        raised: 2100,
        image: "/placeholder-support-2.jpg",
    },
    {
        id: 3,
        title: "Community Center",
        description: "Contribute to our long-term goal of establishing a Tanzanian community center",
        goal: 50000,
        raised: 12500,
        image: "/placeholder-support-3.jpg",
    }
];

const supporters = [
    {
        id: 1,
        name: "Calgary Foundation",
        logo: "/placeholder-logo-1.png",
        type: "foundation"
    },
    {
        id: 2,
        name: "Alberta Cultural Society",
        logo: "/placeholder-logo-2.png",
        type: "partner"
    },
    {
        id: 3,
        name: "Tanzanian Embassy",
        logo: "/placeholder-logo-3.png",
        type: "partner"
    },
    {
        id: 4,
        name: "Community Co-op",
        logo: "/placeholder-logo-4.png",
        type: "sponsor"
    }
];

export default function SupportSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 community-pattern opacity-5"></div>
            <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#005A87]/5 animate-[float_15s_ease-in-out_infinite]"></div>
            <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-[#FF9D00]/5 animate-[float_12s_ease-in-out_infinite_reverse]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-[fadeIn_1s_ease-out]">
                    <div className="inline-block rounded-full bg-[#FF9D00]/10 px-4 py-1 mb-3">
                        <span className="text-[#FF9D00] font-medium text-sm">Support Our Community</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Strengthening Our Community Together</h2>
                    <p className="text-xl text-gray-600">
                        Your contribution helps sustain our cultural programs, support community members, and build a stronger Tanzanian diaspora in Calgary
                    </p>
                </div>

                {/* Initiative cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {initiatives.map((initiative, index) => {
                        const percentRaised = (initiative.raised / initiative.goal) * 100;

                        return (
                            <div
                                key={initiative.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden group animate-[fadeIn_0.8s_ease-out] hover:shadow-xl transition-all duration-300"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                {/* Initiative image */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={initiative.image}
                                        alt={initiative.title}
                                        width={400}
                                        height={200}
                                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#004166]/80 to-transparent opacity-60"></div>

                                    {/* Title overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <h3 className="text-xl font-bold text-white">{initiative.title}</h3>
                                    </div>
                                </div>

                                {/* Initiative content */}
                                <div className="p-6">
                                    <p className="text-gray-600 mb-6">{initiative.description}</p>

                                    {/* Progress bar */}
                                    <div className="mb-3">
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="font-medium text-gray-700">
                                                ${initiative.raised.toLocaleString()} raised
                                            </span>
                                            <span className="text-gray-500">
                                                Goal: ${initiative.goal.toLocaleString()}
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                                            <div
                                                className="bg-gradient-to-r from-[#004166] to-[#005A87] h-2.5 rounded-full animate-[slideIn_1.5s_ease-out]"
                                                style={{ width: `${percentRaised}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    {/* Community supporters tag */}
                                    <div className="flex items-center text-sm text-[#005A87] mb-4">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                        </svg>
                                        <span>{Math.floor(initiative.raised / 50)} community supporters</span>
                                    </div>

                                    {/* Action buttons */}
                                    <div className="flex space-x-2">
                                        <button className="flex-1 px-4 py-2 bg-gradient-to-r from-[#004166] to-[#005A87] text-white font-medium rounded-md hover:shadow-md transition-all group">
                                            <span className="flex items-center justify-center">
                                                Donate Now
                                                <svg className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </span>
                                        </button>
                                        <button className="px-4 py-2 border border-[#005A87] text-[#005A87] font-medium rounded-md hover:bg-[#005A87]/5 transition-colors">
                                            Share
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Community impact section */}
                <div className="bg-gradient-to-r from-[#004166] to-[#005A87] rounded-xl overflow-hidden shadow-xl mb-16 animate-[fadeIn_1s_ease-out_0.6s_both]">
                    <div className="md:flex">
                        {/* Left column - image */}
                        <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                            <Image
                                src="/placeholder-community.jpg"
                                alt="Community Impact"
                                className="object-cover w-full h-full"
                                width={600}
                                height={800}
                            />
                            <div className="absolute inset-0 bg-[#004166]/30"></div>

                            {/* Floating achievement badges */}
                            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-[float_4s_ease-in-out_infinite]">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-[#004166]">15+</div>
                                    <div className="text-xs text-gray-600">Years Serving</div>
                                </div>
                            </div>

                            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-[float_4s_ease-in-out_infinite_1s]">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-[#FF9D00]">500+</div>
                                    <div className="text-xs text-gray-600">Members</div>
                                </div>
                            </div>
                        </div>

                        {/* Right column - content */}
                        <div className="md:w-3/5 p-8 md:p-12 text-white">
                            <h3 className="text-2xl font-bold mb-4">Our Community Impact</h3>
                            <p className="text-white/80 mb-6">
                                For over 15 years, the Tanzanian Community Association of Calgary has been supporting Tanzanians in Calgary through cultural preservation, community building, and economic empowerment initiatives.
                            </p>

                            {/* Impact stats */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                                <div>
                                    <div className="text-3xl font-bold text-white mb-1">20+</div>
                                    <div className="text-sm text-white/70">Annual Events</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white mb-1">$25K</div>
                                    <div className="text-sm text-white/70">Raised Annually</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white mb-1">100+</div>
                                    <div className="text-sm text-white/70">Volunteers</div>
                                </div>
                            </div>

                            <Link
                                href="/impact"
                                className="inline-flex items-center px-6 py-3 bg-white text-[#004166] font-medium rounded-md shadow-md hover:bg-gray-100 transition-colors group"
                            >
                                See Our Full Impact Report
                                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Ways to support */}
                <div className="mb-16 animate-[fadeIn_1s_ease-out_0.4s_both]">
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">Ways to Support Our Community</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#005A87]/5 rounded-xl p-6 text-center hover:shadow-md transition-all">
                            <div className="w-16 h-16 bg-[#005A87]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[#005A87]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Make a Donation</h4>
                            <p className="text-gray-600 mb-4">
                                Your financial support helps fund our community programs, events, and initiatives.
                            </p>
                            <button className="text-[#005A87] font-medium hover:underline inline-flex items-center">
                                Donate Now
                                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>

                        <div className="bg-[#FF9D00]/5 rounded-xl p-6 text-center hover:shadow-md transition-all">
                            <div className="w-16 h-16 bg-[#FF9D00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[#FF9D00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Volunteer Your Time</h4>
                            <p className="text-gray-600 mb-4">
                                Join our volunteer team and contribute your skills and time to our community projects.
                            </p>
                            <button className="text-[#FF9D00] font-medium hover:underline inline-flex items-center">
                                Join as Volunteer
                                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-all">
                            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Spread the Word</h4>
                            <p className="text-gray-600 mb-4">
                                Help us grow by sharing our mission and events with your network and community.
                            </p>
                            <button className="text-gray-700 font-medium hover:underline inline-flex items-center">
                                Share Our Message
                                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Community sponsors and partners */}
                <div className="animate-[fadeIn_1s_ease-out_0.2s_both]">
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Our Community Supporters</h3>
                    <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
                        {`We're grateful to these organizations and businesses that support our community initiatives and help us make a difference.`}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {supporters.map((supporter) => (
                            <div key={supporter.id} className="bg-white rounded-lg p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-all">
                                <Image
                                    src={supporter.logo}
                                    alt={supporter.name}
                                    width={160}
                                    height={80}
                                    className="max-h-16 w-auto"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            href="/sponsors"
                            className="inline-flex items-center text-[#005A87] font-medium hover:text-[#004166] animated-underline"
                        >
                            View All Partners & Sponsors
                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
} 