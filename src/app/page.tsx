"use client";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { AboutSection } from "@/sections/About";
import { TestimonialsSection } from "@/sections/Testimonials";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import ContactButton from "@/components/ContactButton";
import ContactModal from "@/components/ContactModal";
import { ContactModalProvider } from "@/context/ContactModalProvider";

export default function Home() {
  return (
    <div>
      <ContactModalProvider>
        <ContactModal />
        <Header />
        <HeroSection />
        <ProjectsSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </ContactModalProvider>
    </div>
  );
}
