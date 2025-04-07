import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";
import ProgramsSection from "@/components/ProgramsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CommunityShowcase from "@/components/CommunityShowcase";
import SupportSection from "@/components/SupportSection";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <AboutSection />
            <ProgramsSection />
            <EventsSection />
            <CommunityShowcase />
            <TestimonialsSection />
            {/* <SupportSection /> */}
            <Footer />
        </main>
    );
}