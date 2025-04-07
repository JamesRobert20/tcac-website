import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative bg-white overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00486d]/80 to-[#00486d]/60 z-10" />
                <div className="h-full w-full relative">
                    <Image
                        src="/images/FrontBannerKilimanjaro.jpg"
                        alt="Mount Kilimanjaro in Tanzania"
                        layout="fill"
                        objectFit="cover"
                        priority
                        className="w-full h-full"
                    />
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-[#FF9D00]/20 animate-[float_6s_ease-in-out_infinite] hidden md:block"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-[#FF9D00]/10 animate-[float_8s_ease-in-out_infinite_1s] hidden md:block"></div>

            <div className="relative max-w-7xl mx-auto pt-40 pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-start z-20 min-h-[90vh] justify-center">
                <div className="animate-[fadeIn_1s_ease-in]">
                    <span className="inline-block px-4 py-1 rounded-full bg-[#FF9D00]/20 text-white text-sm font-medium mb-4 animate-[pulse_3s_ease-in-out_infinite]">
                        Welcome to our community
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight mb-6">
                        Tanzanian Community Association of Calgary
                    </h1>
                    <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mb-8">
                        Building a <span className="text-[#FF9D00] font-semibold">vibrant community</span> through unity, culture, and shared traditions.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 animate-[slideUp_0.5s_ease-out_0.5s_both]">
                    <Link
                        href="/membership"
                        className="bg-[#FF9D00] hover:bg-[#E68A00] text-white font-medium rounded-md px-6 py-3 text-lg shadow-lg transition-all hover:scale-105 group"
                    >
                        Join the Community
                        <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                    <Link
                        href="/events"
                        className="bg-white hover:bg-gray-100 text-[#005A87] font-medium rounded-md px-6 py-3 text-lg shadow-lg transition-all hover:scale-105"
                    >
                        Upcoming Events
                    </Link>
                </div>

                {/* Community statistics */}
                <div className="mt-12 grid grid-cols-3 gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 animate-[fadeIn_1s_ease-in_1s_both] max-w-lg">
                    <div className="text-center">
                        <div className="text-white text-2xl font-bold">150+</div>
                        <div className="text-white/80 text-sm">Members</div>
                    </div>
                    <div className="text-center">
                        <div className="text-white text-2xl font-bold">20+</div>
                        <div className="text-white/80 text-sm">Years</div>
                    </div>
                    <div className="text-center">
                        <div className="text-white text-2xl font-bold">30+</div>
                        <div className="text-white/80 text-sm">Events/Year</div>
                    </div>
                </div>
            </div>
        </div>
    );
} 