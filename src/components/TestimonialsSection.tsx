"use client"

import Image from "next/image";
import { useState } from "react";

// Sample testimonials data with community focus
const testimonials = [
    {
        id: 1,
        content: "TCAC has been a great platform for me to connect with other Tanzanians in Calgary. The events and activities have helped me feel more at home here.",
        author: "Zena Said",
        role: "Community Member for 5 years",
        image: "/images/Zena-TCAC-President-2024-2026.jpeg",
    },
    {
        id: 2,
        content: "Being part of the Tanzanian community in Calgary has given my family a sense of belonging. The cultural events remind my children of their heritage, and the support system is incredible.",
        author: "Maria Mbogo",
        role: "Community Member for 5 years",
        image: "/images/testm-1.png",
    },
    {
        id: 3,
        content: "I moved to Calgary for work and didn't know anyone. TCAC welcomed me with open arms, helped me find housing, and introduced me to other Tanzanians. Now I volunteer to help newcomers too!",
        author: "Emmanuel Tarimo",
        role: "Member & Volunteer",
        image: "/images/testm-4.png",
    },
    {
        id: 4,
        content: "The Swahili language program has been wonderful for my children. They're now able to communicate with their grandparents back home, which has strengthened our family bonds across continents.",
        author: "Jenifer Mwakasege",
        role: "Parent & Cultural Advocate",
        image: "/images/testm-5.png",
    },
];

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#004166]/5 to-white">
            {/* Decorative elements */}
            <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-[#005A87]/5 animate-[float_15s_ease-in-out_infinite]"></div>
            <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-[#FF9D00]/5 animate-[float_12s_ease-in-out_infinite_reverse]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-[fadeIn_1s_ease-out]">
                    <div className="inline-block rounded-full bg-[#FF9D00]/10 px-4 py-1 mb-3">
                        <span className="text-[#FF9D00] font-medium text-sm">Community Voices</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Community Says</h2>
                    <p className="text-xl text-gray-600">
                        Real stories from members of our Tanzanian community in Calgary
                    </p>
                </div>

                <div className="relative">
                    {/* Main testimonial */}
                    <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto transition-all duration-500 animate-[fadeIn_0.5s_ease-out]">
                        <div className="md:flex">
                            {/* Image column */}
                            <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#004166]/80 to-transparent opacity-40 z-10"></div>
                                <Image
                                    src={testimonials[currentIndex].image}
                                    alt={testimonials[currentIndex].author}
                                    className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                                    width={400}
                                    height={600}
                                />

                                {/* Decorative pattern overlay */}
                                <div className="absolute inset-0 opacity-20 community-pattern"></div>

                                {/* Quote icon */}
                                <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md z-20">
                                    <svg className="w-8 h-8 text-[#005A87]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Content column */}
                            <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-between relative">
                                {/* Community pattern decoration */}
                                <div className="absolute top-0 right-0 w-40 h-40 opacity-5 rounded-bl-full bg-[#005A87]"></div>

                                <div className="mb-8">
                                    <p className="text-xl text-gray-700 italic mb-6 relative">
                                        {`"${testimonials[currentIndex].content}"`}
                                    </p>

                                    {/* Small decorative line */}
                                    <div className="w-16 h-1 bg-gradient-to-r from-[#005A87] to-[#FF9D00] mb-6 rounded-full"></div>

                                    <div className="flex items-center">
                                        <h3 className="text-lg font-bold text-gray-900">{testimonials[currentIndex].author}</h3>
                                        <span className="mx-2">•</span>
                                        <span className="text-sm text-gray-600">{testimonials[currentIndex].role}</span>
                                    </div>
                                </div>

                                {/* Community tag */}
                                <div className="inline-flex items-center justify-center px-4 py-1 bg-[#004166]/10 text-[#004166] text-sm font-medium rounded-full animate-[pulse_3s_ease-in-out_infinite]">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                    </svg>
                                    Strong Community Bonds
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation buttons */}
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4">
                        <button
                            onClick={prev}
                            className="bg-white rounded-full p-3 shadow-lg text-gray-800 hover:text-[#005A87] transition-colors pointer-events-auto focus:outline-none focus:ring-2 focus:ring-[#005A87] focus:ring-offset-2"
                            aria-label="Previous testimonial"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={next}
                            className="bg-white rounded-full p-3 shadow-lg text-gray-800 hover:text-[#005A87] transition-colors pointer-events-auto focus:outline-none focus:ring-2 focus:ring-[#005A87] focus:ring-offset-2"
                            aria-label="Next testimonial"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Indicators */}
                <div className="flex justify-center mt-8 space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? "bg-[#005A87] w-10"
                                    : "bg-gray-300 hover:bg-gray-400"
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Community call to action */}
                <div className="mt-16 text-center animate-[fadeIn_1s_ease-out_0.6s_both]">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Share Your Story</h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        {`Are you part of our Tanzanian community in Calgary? We'd love to hear about your experiences and feature your story!`}
                    </p>
                    <a
                        href="/share-story"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FF9D00] to-[#FF7A00] text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all group"
                    >
                        Share Your Community Story
                        <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
} 