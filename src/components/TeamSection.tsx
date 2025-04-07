import Image from "next/image";

// Update social links type to make all properties optional
interface SocialLinks {
    email?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
}

interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio: string;
    image: string;
    socialLinks: SocialLinks;
}

// Sample team data
const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Zena Said",
        role: "President",
        bio: "Passionate community leader with over 10 years of experience in non-profit management and community building.",
        image: "/placeholder-woman-1.jpg",
        socialLinks: {
            email: "president@tanzanianscalgary.ca",
            linkedin: "https://linkedin.com/in/zenasaid",
        }
    },
    {
        id: 2,
        name: "Abdul Hussein",
        role: "Vice President",
        bio: "Community advocate focused on youth programs and cultural preservation initiatives within the Tanzanian diaspora.",
        image: "/placeholder-man-1.jpg",
        socialLinks: {
            email: "vicepresident@tanzanianscalgary.ca",
            twitter: "https://twitter.com/abdulhussein",
        }
    },
    {
        id: 3,
        name: "Mariamu John",
        role: "Secretary",
        bio: "Experienced administrator with a background in event planning and community outreach programs.",
        image: "/placeholder-woman-2.jpg",
        socialLinks: {
            email: "secretary@tanzanianscalgary.ca",
            instagram: "https://instagram.com/mariamujohn",
        }
    },
    {
        id: 4,
        name: "George Masanja",
        role: "Treasurer",
        bio: "Financial expert with a passion for transparent management of community resources and sustainable growth.",
        image: "/placeholder-man-2.jpg",
        socialLinks: {
            email: "treasurer@tanzanianscalgary.ca",
            linkedin: "https://linkedin.com/in/georgemasanja",
        }
    },
    {
        id: 5,
        name: "Grace Mazengo",
        role: "Events Coordinator",
        bio: "Creative event planner with experience in organizing cultural celebrations and community gatherings.",
        image: "/placeholder-woman-3.jpg",
        socialLinks: {
            email: "events@tanzanianscalgary.ca",
            instagram: "https://instagram.com/gracemazengo",
        }
    },
    {
        id: 6,
        name: "Mark Njau",
        role: "Communications Officer",
        bio: "Digital marketing specialist with expertise in community engagement through social media and online platforms.",
        image: "/placeholder-man-3.jpg",
        socialLinks: {
            email: "communications@tanzanianscalgary.ca",
            twitter: "https://twitter.com/marknjau",
        }
    },
];

interface TeamSectionProps {
    isEnhanced?: boolean;
}

export default function TeamSection({ isEnhanced = false }: TeamSectionProps) {
    return (
        <section className={`py-24 bg-white relative overflow-hidden ${isEnhanced ? 'bg-gray-50' : ''}`}>
            {/* Background pattern */}
            <div className="absolute inset-0 community-pattern opacity-10"></div>

            {/* Floating decorative elements */}
            <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-[#FF9D00]/10 animate-[float_15s_ease-in-out_infinite]"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-[#005A87]/10 animate-[float_12s_ease-in-out_infinite_reverse]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-[fadeIn_1s_ease-out]">
                    {isEnhanced ? (
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Leadership Team</h2>
                    ) : (
                        <>
                            <div className="inline-block rounded-full bg-[#FF9D00]/10 px-4 py-1 mb-3">
                                <span className="text-[#FF9D00] font-medium text-sm">Our Community Leaders</span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                        </>
                    )}
                    <p className="text-xl text-gray-600">
                        The dedicated individuals working together to serve our Tanzanian community in Calgary
                    </p>

                    {isEnhanced && (
                        <div className="mt-6 flex justify-center gap-2">
                            {['Board Members', 'Committees', 'Volunteers'].map((category, index) => (
                                <button
                                    key={index}
                                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${index === 0
                                            ? 'bg-[#005A87] text-white'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-2 ${isEnhanced ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-x-8 gap-y-16`}>
                    {teamMembers.map((member, index) => (
                        <div
                            key={member.id}
                            className="relative group animate-[fadeIn_1s_ease-out]"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-xl relative z-10 ${isEnhanced ? 'border border-gray-100' : ''
                                }`}>
                                {/* Member photo with overlay gradient on hover */}
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#004166]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>

                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        width={400}
                                        height={400}
                                    />

                                    {/* Social links that appear on hover */}
                                    <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
                                        {member.socialLinks.email && (
                                            <a
                                                href={`mailto:${member.socialLinks.email}`}
                                                className="bg-white p-2 rounded-full text-gray-800 hover:text-[#005A87] transition-colors"
                                                aria-label={`Email ${member.name}`}
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </a>
                                        )}
                                        {member.socialLinks.linkedin && (
                                            <a
                                                href={member.socialLinks.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white p-2 rounded-full text-gray-800 hover:text-[#0077B5] transition-colors"
                                                aria-label={`${member.name}'s LinkedIn profile`}
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                                                </svg>
                                            </a>
                                        )}
                                        {member.socialLinks.twitter && (
                                            <a
                                                href={member.socialLinks.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white p-2 rounded-full text-gray-800 hover:text-[#1DA1F2] transition-colors"
                                                aria-label={`${member.name}'s Twitter profile`}
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.097 10.097 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                                </svg>
                                            </a>
                                        )}
                                        {member.socialLinks.instagram && (
                                            <a
                                                href={member.socialLinks.instagram}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white p-2 rounded-full text-gray-800 hover:text-[#E4405F] transition-colors"
                                                aria-label={`${member.name}'s Instagram profile`}
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Member info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                    <div className="inline-block rounded-full bg-[#005A87]/10 px-3 py-1 text-xs font-medium text-[#005A87] my-2">
                                        {member.role}
                                    </div>
                                    <p className="text-gray-600 mt-2">{member.bio}</p>

                                    {/* Community impact tag */}
                                    <div className="mt-4 inline-flex items-center text-sm text-[#FF9D00]">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                                        </svg>
                                        Community Builder
                                    </div>

                                    {isEnhanced && (
                                        <div className="mt-4 pt-4 border-t border-gray-100">
                                            <a
                                                href={`/leaders/${member.id}`}
                                                className="text-[#005A87] hover:text-[#004166] text-sm font-medium flex items-center"
                                            >
                                                View full profile
                                                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Decorative element */}
                            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-[#FF9D00] to-[#005A87] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    ))}
                </div>

                {/* Call to action */}
                <div className={`mt-24 text-center animate-[fadeIn_1s_ease-out_0.8s_both] ${isEnhanced ? 'max-w-3xl mx-auto px-6 py-10 bg-white rounded-xl shadow-md' : ''}`}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Community Team</h3>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        Interested in volunteering and serving our community? We are always looking for passionate individuals to join our team.
                    </p>
                    <a
                        href="/join-team"
                        className={`inline-flex items-center px-8 py-4 ${isEnhanced
                                ? 'bg-[#FF9D00] hover:bg-[#E68A00]'
                                : 'bg-gradient-to-r from-[#004166] to-[#005A87]'
                            } text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all group`}
                    >
                        Volunteer With Us
                        <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
} 