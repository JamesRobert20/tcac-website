"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const photos = [
    {
        id: 1,
        title: "Cultural Festival",
        description: "Annual celebration of Tanzanian culture with food, music, and dance",
        image: "/images/culturalfestival.png",
        date: "July 2023",
        category: "Event"
    },
    {
        id: 2,
        title: "Children Trips",
        description: "Mentoring session for young community members",
        image: "/images/childrentrip.png",
        date: "August 2023",
        category: "Trip"
    },
    {
        id: 3,
        title: "Community Picnic",
        description: "Summer gathering at Bowness Park",
        image: "/images/communityvolunteering.png",
        date: "June 2023",
        category: "Social"
    }
];

const categories = ["All", "Event", "Program", "Social", "Workshop", "Outreach"];

export default function CommunityShowcase() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [visiblePhotos, setVisiblePhotos] = useState(photos);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        // Simulate filtering delay for animation effect
        const timer = setTimeout(() => {
            if (activeCategory === "All") {
                setVisiblePhotos(photos);
            } else {
                setVisiblePhotos(photos.filter(photo => photo.category === activeCategory));
            }
            setIsLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [activeCategory]);

    return (
        <section className="py-24 bg-white relative overflow-hidden community-pattern">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#005A87]/5 animate-[float_15s_ease-in-out_infinite]"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-[#FF9D00]/5 animate-[float_12s_ease-in-out_infinite]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 animate-[fadeIn_1s_ease-out]">
                    <div className="inline-block rounded-full bg-[#005A87]/10 px-4 py-1 mb-3">
                        <span className="text-[#005A87] font-medium text-sm">Our Vibrant Community</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Community in Action</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore photos from our community events, programs, and activities that bring the Tanzanian diaspora in Calgary together
                    </p>
                </div>

                {/* Category filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                    ? "bg-[#005A87] text-white shadow-md"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Photos grid */}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
                    {visiblePhotos.map((photo, index) => (
                        <div
                            key={photo.id}
                            className="group relative overflow-hidden rounded-xl shadow-md animate-[fadeIn_0.6s_ease-out]"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Photo image */}
                            <div className="relative h-72 overflow-hidden">
                                <Image
                                    src={photo.image}
                                    alt={photo.title}
                                    width={500}
                                    height={350}
                                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Category badge */}
                                <div className="absolute top-4 right-4 bg-[#FF9D00] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                                    {photo.category}
                                </div>

                                {/* Date badge */}
                                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-[#004166] text-xs font-medium px-3 py-1 rounded-full z-10">
                                    {photo.date}
                                </div>

                                {/* Content that appears on hover */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                    <h3 className="text-xl font-bold text-white mb-2">{photo.title}</h3>
                                    <p className="text-white/80 mb-4">{photo.description}</p>
                                    <div className="flex space-x-2">
                                        <button className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full hover:bg-white/30 transition-colors">
                                            View Details
                                        </button>
                                        <button className="p-1 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                        <button className="p-1 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty state if no photos match the category */}
                {visiblePhotos.length === 0 && !isLoading && (
                    <div className="text-center py-12 bg-gray-50 rounded-lg animate-[fadeIn_0.5s_ease-out]">
                        <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <h3 className="text-xl font-medium text-gray-900 mb-2">No photos in this category</h3>
                        <p className="text-gray-600 mb-4">Try selecting a different category or check back later.</p>
                        <button
                            onClick={() => setActiveCategory("All")}
                            className="px-4 py-2 bg-[#005A87] text-white rounded-md hover:bg-[#004166] transition-colors"
                        >
                            View All Photos
                        </button>
                    </div>
                )}

                {/* Call to action */}
                <div className="mt-16 text-center animate-[fadeIn_1s_ease-out_0.8s_both]">
                    <div className="bg-gradient-to-r from-[#004166] to-[#005A87] rounded-xl overflow-hidden shadow-xl">
                        <div className="px-8 py-12 text-white relative">
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FF9D00]/10 rounded-full transform -translate-x-1/4 translate-y-1/4"></div>

                            <div className="relative z-10 max-w-2xl mx-auto">
                                <h3 className="text-2xl font-bold mb-4">Join Our Next Community Event</h3>
                                <p className="text-white/80 mb-8">
                                    We host regular events throughout the year to bring our community together. Stay connected and be part of our vibrant Tanzanian culture in Calgary.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link
                                        href="/events"
                                        className="px-6 py-3 bg-white text-[#005A87] font-medium rounded-md shadow-md hover:bg-gray-100 transition-colors w-full sm:w-auto"
                                    >
                                        View Upcoming Events
                                    </Link>
                                    <Link
                                        href="/gallery"
                                        className="px-6 py-3 bg-[#FF9D00] text-white font-medium rounded-md shadow-md hover:bg-[#FF7A00] transition-colors w-full sm:w-auto"
                                    >
                                        Explore Full Gallery
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 