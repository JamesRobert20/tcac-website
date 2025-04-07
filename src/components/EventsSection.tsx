import Link from "next/link";
import Image from "next/image";

// Sample events data
const events = [
    {
        id: 1,
        title: "Urojo Party",
        date: "February 16, 2025",
        description: "Black History Month – Urojo Party Day Fundraiser. Join us for food, drinks, and games on Family Day!",
        image: "/images/Urojo TCAC_Black History Month - Fundraiser.jpeg",
        attendees: 120,
        isFree: false,
    },
    {
        id: 2,
        title: "CPSCC Event",
        date: "February 19, 2025",
        description: "Join us in support of the Calgary Police Service Community Connect (CPSCC) event with participation from our members.",
        image: "/images/Calgary Police Service Community Connect _ Flyer.jpeg",
        attendees: 85,
        isFree: true,
    },
    {
        id: 3,
        title: "Eid al-Fitr Celebration",
        date: "April 05, 2025",
        description: "Join us for a day of fun, food, and celebration as we come together to mark the end of Ramadan.",
        image: "/images/2cad6b18-880c-4de9-900b-21d31b7b6b59.JPG",
        attendees: 50,
        isFree: false,
    },
];

export default function EventsSection() {
    return (
        <section className="py-20 bg-gray-50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-20 bg-[#005A87]/5"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#FF9D00]/10 animate-[float_8s_ease-in-out_infinite]"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#005A87]/10 animate-[float_10s_ease-in-out_infinite_2s]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mt-8 text-center mb-16 animate-[fadeIn_1s_ease-out]">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Community Events</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Connect, celebrate, and build relationships with the Tanzanian community in Calgary
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <div
                            key={event.id}
                            className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl community-card group relative"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div className="h-48 w-full bg-[#005A87]/80 relative overflow-hidden">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 opacity-20 community-pattern"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-[#005A87]/60 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                                        <svg className="w-8 h-8 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="text-sm font-medium text-[#FF9D00]">
                                        {event.date}
                                    </div>
                                    <div className="flex items-center text-xs text-gray-500">
                                        <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        {event.attendees}+ attending
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#005A87] transition-colors">
                                    {event.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {event.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <Link
                                        href={`/events/${event.id}`}
                                        className="inline-flex items-center text-[#005A87] font-medium hover:text-[#004166] animated-underline"
                                    >
                                        Learn more
                                        <svg className="ml-1 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                    {event.isFree && (
                                        <span className="text-xs px-2 py-1 bg-[#005A87]/10 text-[#005A87] rounded-full">
                                            Free Event
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center animate-[fadeIn_1s_ease-out_0.8s_both]">
                    <Link
                        href="/events"
                        className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-[#005A87] hover:bg-[#004166] transition-all hover:scale-105 shadow-md hover:shadow-lg relative overflow-hidden group"
                    >
                        <span className="relative z-10">View All Community Events</span>
                        <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                    </Link>

                    <div className="flex flex-wrap justify-center mt-10 space-x-3">
                        <span className="text-sm text-gray-500 font-medium">Popular Tags:</span>
                        <span className="px-3 py-1 text-xs bg-[#005A87]/10 text-[#005A87] rounded-full">Cultural</span>
                        <span className="px-3 py-1 text-xs bg-[#FF9D00]/10 text-[#FF9D00] rounded-full">Food</span>
                        <span className="px-3 py-1 text-xs bg-[#219EBC]/10 text-[#219EBC] rounded-full">Networking</span>
                        <span className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded-full">Family</span>
                    </div>
                </div>
            </div>
        </section>
    );
} 