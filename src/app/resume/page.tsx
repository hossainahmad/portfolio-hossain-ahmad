import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin, Download } from "lucide-react";
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
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col justify-between selection:bg-cyan-500 selection:text-slate-950 print:bg-white print:text-black">
      {/* Navbar hidden in print */}
      <div className="print:hidden">
        <Navbar />
      </div>

      <main className="pt-28 pb-20 md:pt-36 md:pb-28 print:p-0 print:m-0 flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 print:p-0 print:max-w-none">
          {/* Header Bar (Hidden when printing) */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8 print:hidden">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-colors bg-slate-900/80 px-3.5 py-1.5 rounded-xl border border-slate-800"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>

            <div className="flex items-center gap-2.5">
              <a
                href="/Hossain-Ahmad-Resume.pdf"
                download="Hossain-Ahmad-Resume.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs shadow-md transition-all cursor-pointer"
                title="Download single-page clean PDF"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>Download PDF</span>
              </a>

              <PrintButton />
            </div>
          </div>

          {/* Printable Sheet */}
          <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-slate-800 bg-slate-950 text-slate-200 print:bg-white print:text-black print:p-0 print:m-0 print:border-none print:shadow-none printable-resume-sheet">
            {/* Header */}
            <div className="border-b border-slate-800 pb-5 mb-5 print:border-slate-300 print:pb-3 print:mb-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white print:text-slate-900 tracking-tight print:text-2xl">
                    {PERSONAL_INFO.name}
                  </h1>
                  <p className="text-sm sm:text-base font-mono text-cyan-400 print:text-sky-700 font-semibold mt-1 print:text-xs">
                    {PERSONAL_INFO.designation} &middot; {PERSONAL_INFO.currentRole}
                  </p>
                </div>

                <div className="space-y-1 text-xs font-mono text-slate-300 print:text-slate-700 sm:text-right print:text-[10px]">
                  <p className="flex items-center sm:justify-end gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400 print:text-sky-700" />
                    <span>{PERSONAL_INFO.email}</span>
                  </p>
                  <p className="flex items-center sm:justify-end gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-cyan-400 print:text-sky-700" />
                    <span>{PERSONAL_INFO.phone}</span>
                  </p>
                  <p className="flex items-center sm:justify-end gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 print:text-sky-700" />
                    <span>{PERSONAL_INFO.location}</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 print:text-slate-600 mt-3 pt-2.5 border-t border-slate-900 print:border-slate-200 print:text-[10px]">
                <span className="text-cyan-400 print:text-sky-700">GitHub: {PERSONAL_INFO.github}</span>
                <span>&bull;</span>
                <span className="text-cyan-400 print:text-sky-700">LinkedIn: {PERSONAL_INFO.linkedin}</span>
              </div>
            </div>

            {/* 1. Summary */}
            <section className="resume-section mb-5 print:mb-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-sky-700 font-bold mb-1.5 print:text-[11px] print:border-b print:border-slate-300 print:pb-0.5">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed print:text-[10px] print:leading-normal">
                Results-oriented Full-Stack Web Developer and Assistant Programmer at Gazipur City Corporation with extensive experience building resilient, user-centric web applications and civic digital infrastructure. Proficient in React, Next.js (App Router), TypeScript, Node.js, and MongoDB. Strong focus on clean code, responsive design, and robust API development.
              </p>
            </section>

            {/* 2. Technical Skills */}
            <section className="resume-section mb-5 print:mb-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-sky-700 font-bold mb-2 print:text-[11px] print:border-b print:border-slate-300 print:pb-0.5">
                Core Technical Competencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs print:text-[9.5px] text-slate-300 print:text-slate-800 print:gap-1.5">
                <div className="p-2.5 rounded-lg bg-slate-900/60 print:bg-slate-50 border border-slate-800 print:border-slate-200 print:p-1.5">
                  <span className="font-bold text-white print:text-slate-900">Frontend: </span>
                  React 19, Next.js 16 (App Router, Server Components), TypeScript, JavaScript (ES6+), Tailwind CSS v4, HTML5, CSS3 Grid/Flexbox.
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/60 print:bg-slate-50 border border-slate-800 print:border-slate-200 print:p-1.5">
                  <span className="font-bold text-white print:text-slate-900">Backend &amp; Database: </span>
                  Node.js, Express, MongoDB (Atlas, native driver), RESTful APIs, Better Auth, JWT &amp; Session Management.
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/60 print:bg-slate-50 border border-slate-800 print:border-slate-200 print:p-1.5">
                  <span className="font-bold text-white print:text-slate-900">Tools &amp; DevOps: </span>
                  Git, GitHub, Vercel, Netlify, VS Code, ESLint, npm/pnpm, Postman, Figma UI Prototyping.
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/60 print:bg-slate-50 border border-slate-800 print:border-slate-200 print:p-1.5">
                  <span className="font-bold text-white print:text-slate-900">Practices: </span>
                  Clean Code Architecture, Responsive Web Design, Core Web Vitals, Unidirectional State Flow, Accessibility.
                </div>
              </div>
            </section>

            {/* 3. Professional Work Experience */}
            <section className="resume-section mb-5 print:mb-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-sky-700 font-bold mb-2.5 print:text-[11px] print:border-b print:border-slate-300 print:pb-0.5">
                Professional Experience
              </h2>
              <div className="space-y-3.5 print:space-y-2">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="border-l-2 border-slate-800 print:border-sky-600 pl-3.5 print:pl-2.5 space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-sm font-bold text-white print:text-slate-900 print:text-[11px]">
                        {exp.role} &mdash; <span className="text-cyan-300 print:text-sky-700 font-medium">{exp.company}</span>
                      </h3>
                      <span className="text-xs font-mono text-slate-400 print:text-slate-600 print:text-[9.5px]">
                        {exp.period} | {exp.location}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 print:text-slate-700 leading-relaxed print:text-[9.5px]">
                      {exp.description}
                    </p>
                    <ul className="list-disc list-inside text-xs text-slate-400 print:text-slate-700 space-y-0.5 pt-0.5 print:text-[9px]">
                      {exp.achievements.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Featured Projects */}
            <section className="resume-section mb-5 print:mb-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-sky-700 font-bold mb-2.5 print:text-[11px] print:border-b print:border-slate-300 print:pb-0.5">
                Selected Featured Projects
              </h2>
              <div className="space-y-2.5 print:space-y-1.5">
                {PROJECTS.slice(0, 3).map((proj) => (
                  <div key={proj.slug} className="p-2.5 rounded-lg bg-slate-900/60 print:bg-slate-50 border border-slate-800 print:border-slate-200 print:p-1.5 space-y-0.5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-xs font-bold text-white print:text-slate-900 print:text-[10px]">
                        {proj.title} &mdash; <span className="font-normal text-slate-300 print:text-slate-700">{proj.subtitle}</span>
                      </h3>
                      <span className="text-[11px] font-mono text-cyan-400 print:text-sky-700 print:text-[9px]">
                        {proj.stack.slice(0, 4).join(", ")}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 print:text-slate-700 print:text-[9px]">
                      {proj.summary}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Education */}
            <section className="resume-section">
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-sky-700 font-bold mb-2 print:text-[11px] print:border-b print:border-slate-300 print:pb-0.5">
                Educational Qualifications
              </h2>
              <div className="space-y-2.5 print:space-y-1.5">
                {EDUCATIONS.map((edu) => (
                  <div key={edu.id} className="text-xs print:text-[9.5px] space-y-0.5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-white print:text-slate-900 print:text-[10px]">
                        {edu.degree}
                      </h3>
                      <span className="font-mono text-slate-400 print:text-slate-600 print:text-[9px]">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-slate-300 print:text-slate-700 font-medium">
                      {edu.institution} &middot; {edu.location}
                    </p>
                    <p className="text-[11px] font-mono text-slate-400 print:text-slate-600 print:text-[8.5px]">
                      Key Focus: {edu.keyCourses.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer hidden in print */}
      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
