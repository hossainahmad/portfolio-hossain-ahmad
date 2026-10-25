import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { PERSONAL_INFO, EXPERIENCES, EDUCATIONS, PROJECTS } from "@/data/portfolioData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PrintButton } from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Resume — Hossain Ahmad | Full-Stack Web Developer",
  description:
    "Curriculum Vitae of Hossain Ahmad, Full-Stack Web Developer & Assistant Programmer at Gazipur City Corporation.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col justify-between selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />

      <main className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Bar */}
          <div className="flex items-center justify-between mb-8 print:hidden">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-colors bg-slate-900/80 px-3.5 py-1.5 rounded-xl border border-slate-800"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>

            <PrintButton />
          </div>

          {/* Printable Sheet */}
          <div className="glass-panel p-6 sm:p-12 rounded-2xl border border-slate-800 bg-slate-950 text-slate-200 print:bg-white print:text-black print:p-0 print:border-none print:shadow-none">
            {/* Header */}
            <div className="border-b border-slate-800 pb-6 mb-8 print:border-black/30">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white print:text-black tracking-tight">
                    {PERSONAL_INFO.name}
                  </h1>
                  <p className="text-base font-mono text-cyan-400 print:text-blue-700 font-semibold mt-1">
                    {PERSONAL_INFO.designation} &middot; {PERSONAL_INFO.currentRole}
                  </p>
                </div>

                <div className="space-y-1 text-xs font-mono text-slate-300 print:text-gray-700 sm:text-right">
                  <p className="flex items-center sm:justify-end gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400 print:text-blue-700" />
                    <span>{PERSONAL_INFO.email}</span>
                  </p>
                  <p className="flex items-center sm:justify-end gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-cyan-400 print:text-blue-700" />
                    <span>{PERSONAL_INFO.phone}</span>
                  </p>
                  <p className="flex items-center sm:justify-end gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 print:text-blue-700" />
                    <span>{PERSONAL_INFO.location}</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 print:text-gray-700 mt-4 pt-3 border-t border-slate-900 print:border-gray-200">
                <span className="text-cyan-400 print:text-blue-700">GitHub: {PERSONAL_INFO.github}</span>
                <span>&bull;</span>
                <span className="text-cyan-400 print:text-blue-700">LinkedIn: {PERSONAL_INFO.linkedin}</span>
              </div>
            </div>

            {/* Summary */}
            <section className="mb-8">
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-blue-700 font-bold mb-3">
                Professional Summary
              </h2>
              <p className="text-sm text-slate-300 print:text-gray-800 leading-relaxed">
                Full-Stack Web Developer and Assistant Programmer at Gazipur City Corporation with extensive experience building resilient, user-centric web applications and civic digital infrastructure. Proficient in React, Next.js (App Router), TypeScript, Node.js, and MongoDB. Strong focus on clean code, responsive design, and robust API development.
              </p>
            </section>

            {/* Technical Skills */}
            <section className="mb-8">
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-blue-700 font-bold mb-3">
                Technical Core Competencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs print:text-[11px] text-slate-300 print:text-gray-800">
                <div className="p-3 rounded-lg bg-slate-900/60 print:bg-gray-100 border border-slate-800 print:border-gray-300">
                  <span className="font-bold text-white print:text-black">Frontend: </span>
                  React.js, Next.js (App Router, Server Components), TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3 Grid/Flexbox.
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 print:bg-gray-100 border border-slate-800 print:border-gray-300">
                  <span className="font-bold text-white print:text-black">Backend &amp; Database: </span>
                  Node.js, Express, MongoDB (Atlas, native driver), RESTful APIs, Better Auth, Session Management.
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 print:bg-gray-100 border border-slate-800 print:border-gray-300">
                  <span className="font-bold text-white print:text-black">Tools &amp; DevOps: </span>
                  Git, GitHub, Vercel, Netlify, VS Code, ESLint, npm/pnpm, Figma UI Prototyping.
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 print:bg-gray-100 border border-slate-800 print:border-gray-300">
                  <span className="font-bold text-white print:text-black">Practices: </span>
                  Clean Code Architecture, Responsive Web Design, Core Web Vitals, Unidirectional State Flow, Accessibility.
                </div>
              </div>
            </section>

            {/* Professional Work Experience */}
            <section className="mb-8">
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-blue-700 font-bold mb-4">
                Professional Experience
              </h2>
              <div className="space-y-6">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="border-l-2 border-slate-800 print:border-gray-400 pl-4 space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-base font-bold text-white print:text-black">
                        {exp.role} &mdash; <span className="text-cyan-300 print:text-blue-700 font-medium">{exp.company}</span>
                      </h3>
                      <span className="text-xs font-mono text-slate-400 print:text-gray-600">
                        {exp.period} | {exp.location}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 print:text-gray-700 leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="list-disc list-inside text-xs sm:text-sm text-slate-400 print:text-gray-800 space-y-1 pt-1">
                      {exp.achievements.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Featured Projects */}
            <section className="mb-8">
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-blue-700 font-bold mb-4">
                Selected Featured Projects
              </h2>
              <div className="space-y-4">
                {PROJECTS.slice(0, 3).map((proj) => (
                  <div key={proj.slug} className="p-4 rounded-xl bg-slate-900/60 print:bg-gray-50 border border-slate-800 print:border-gray-200 space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-sm font-bold text-white print:text-black">
                        {proj.title} &mdash; <span className="font-normal text-slate-300 print:text-gray-700">{proj.subtitle}</span>
                      </h3>
                      <span className="text-xs font-mono text-cyan-400 print:text-blue-700">
                        {proj.stack.slice(0, 4).join(", ")}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 print:text-gray-700">
                      {proj.summary}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-blue-700 font-bold mb-4">
                Educational Qualifications
              </h2>
              <div className="space-y-4">
                {EDUCATIONS.map((edu) => (
                  <div key={edu.id} className="text-xs sm:text-sm space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-white print:text-black">
                        {edu.degree}
                      </h3>
                      <span className="font-mono text-slate-400 print:text-gray-600">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-slate-300 print:text-gray-700 font-medium">
                      {edu.institution} &middot; {edu.location}
                    </p>
                    <p className="text-xs font-mono text-slate-400 print:text-gray-600">
                      Key Focus: {edu.keyCourses.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
