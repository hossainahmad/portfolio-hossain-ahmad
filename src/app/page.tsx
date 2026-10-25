"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ResumeModal } from "@/components/ResumeModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 flex flex-col justify-between">
      {/* 1. Responsive Navbar with Resume Download Trigger */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      <main className="flex-grow">
        {/* 2 & 3 & 4. Designation, Introduction, Hero, Photo, Resume Button, Social Links */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 5. About Me Section (Journey, Work enjoyed, Hobbies, Personality) */}
        <About />

        {/* 6. Skills Section (Graphical format, Categorized) */}
        <Skills />

        {/* 7. Educational Qualification (Completed education above HSC) */}
        <Education />

        {/* 8. Professional Experience (GCC Assistant Programmer & Independent Dev) */}
        <Experience />

        {/* 9. Projects Section (At least 3 projects, Cards, View More / Details) */}
        <Projects />

        {/* 10. Contact Information (Email, Phone, WhatsApp, Form) */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 3 & Resume Viewer/Downloader Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
