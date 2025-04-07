import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            <Navbar />

            <main>
                {/* Page header */}
                <div className="bg-[#005A87] pt-32 pb-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">About TCAC</h1>
                            <p className="text-xl text-white/90 max-w-2xl">
                                Learn about our mission, vision, and the leadership team behind the Tanzanian Community Association of Calgary.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mission and Vision Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    <span className="block text-[#005A87] mb-1">Our Mission</span>
                                    Unity, Culture & Community
                                </h2>
                                <div className="prose prose-lg text-gray-600 mb-8">
                                    <p>
                                        The Tanzanian Community Association of Calgary (TCAC) was established in 2002
                                        to connect and support Tanzanians living in Calgary, Alberta.
                                    </p>
                                    <p>
                                        Our mission is to foster unity, provide support to community members,
                                        promote Tanzanian culture, and create a sense of belonging through:
                                    </p>
                                    <ul>
                                        <li>Cultural preservation and celebration</li>
                                        <li>Community support for new immigrants</li>
                                        <li>Networking and professional development</li>
                                        <li>Youth programs and education initiatives</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-12 lg:mt-0">
                                <div className="bg-gray-50 rounded-lg overflow-hidden">
                                    {/* Placeholder for an actual image */}
                                    <div className="h-64 bg-[#005A87]/20 flex items-center justify-center">
                                        <p className="text-[#005A87] font-medium">Community Image</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Leadership Team Section */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                {`Meet the dedicated individuals who volunteer their time to lead and serve our community`}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Leadership Card - President */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                <div className="h-48 bg-[#005A87]/20 relative">
                                    {/* Placeholder for actual photo */}
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">Zena Said</h3>
                                    <p className="text-[#005A87] font-medium mb-4">President</p>
                                    <p className="text-gray-600 mb-4">
                                        {`"I am excited about the journey ahead, and I am confident that if we believe
                                        together we can do it."`}
                                    </p>
                                </div>
                            </div>

                            {/* More leadership cards would go here */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                <div className="h-48 bg-[#005A87]/20 relative">
                                    {/* Placeholder for actual photo */}
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">Leadership Member</h3>
                                    <p className="text-[#005A87] font-medium mb-4">Vice President</p>
                                    <p className="text-gray-600 mb-4">
                                        {`Brief description or quote from this leadership team member would go here.`}
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                <div className="h-48 bg-[#005A87]/20 relative">
                                    {/* Placeholder for actual photo */}
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">Leadership Member</h3>
                                    <p className="text-[#005A87] font-medium mb-4">Secretary</p>
                                    <p className="text-gray-600 mb-4">
                                        {`Brief description or quote from this leadership team member would go here.`}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* History Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our History</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                The journey of TCAC since its founding in 2002
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="border-l-4 border-[#005A87] pl-8 space-y-12">
                                <div>
                                    <span className="text-[#005A87] font-bold">2002</span>
                                    <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">TCAC is Founded</h3>
                                    <p className="text-gray-600">
                                        {`The Tanzanian Community Association of Calgary is established
                                        to connect Tanzanians living in Calgary.`}
                                    </p>
                                </div>

                                <div>
                                    <span className="text-[#005A87] font-bold">2010</span>
                                    <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">Growth and Expansion</h3>
                                    <p className="text-gray-600">
                                        TCAC expands its programs and reaches more community members
                                        through cultural events and support initiatives.
                                    </p>
                                </div>

                                <div>
                                    <span className="text-[#005A87] font-bold">2020</span>
                                    <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">Digital Transformation</h3>
                                    <p className="text-gray-600">
                                        TCAC adapts to the changing environment by enhancing its online
                                        presence and virtual community support.
                                    </p>
                                </div>

                                <div>
                                    <span className="text-[#005A87] font-bold">Today</span>
                                    <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">Building for the Future</h3>
                                    <p className="text-gray-600">
                                        TCAC continues to grow and evolve, focusing on youth engagement,
                                        cultural preservation, and community support.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Community</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            Become a member of TCAC and be part of our vibrant community
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/membership"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#005A87] hover:bg-[#004166]"
                            >
                                Become a Member
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center px-6 py-3 border border-[#005A87] text-base font-medium rounded-md text-[#005A87] bg-transparent hover:bg-gray-100"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
} 