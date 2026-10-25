"use client";

import { useEffect } from "react";
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO, EXPERIENCES, EDUCATIONS, PROJECTS } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 print:static print:inset-auto print:z-auto print:block print:p-0 print:m-0 print:bg-white print:overflow-visible print:h-auto print:w-full print:max-h-none print:shadow-none">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c1220] border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden print:static print:w-full print:max-w-none print:max-h-none print:overflow-visible print:border-none print:shadow-none print:bg-white print:p-0 print:m-0 print:rounded-none">
        {/* Top Control Bar (Hidden when printing) */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-slate-800 bg-slate-900/90 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 font-semibold">
              Curriculum Vitae
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              {PERSONAL_INFO.name} — 2026
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct PDF File Download */}
            <a
              href="/Hossain-Ahmad-Resume.pdf"
              download="Hossain-Ahmad-Resume.pdf"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
              title="Download clean 1-page PDF file"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download PDF</span>
            </a>

            {/* Print / Save via Browser */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
              title="Print or Save via Browser"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div
          id="printable-resume"
          className="overflow-y-auto p-6 sm:p-10 bg-slate-950 text-slate-200 print:bg-white print:text-black print:p-0 print:m-0 print:overflow-visible print:max-h-none print:w-full printable-resume-sheet"
        >
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

            {/* Social Links Row */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 print:text-slate-600 mt-3 pt-2.5 border-t border-slate-900 print:border-slate-200 print:text-[10px]">
              <span className="text-cyan-400 print:text-sky-700">GitHub: {PERSONAL_INFO.github}</span>
              <span>&bull;</span>
              <span className="text-cyan-400 print:text-sky-700">LinkedIn: {PERSONAL_INFO.linkedin}</span>
            </div>
          </div>

          {/* 1. Professional Summary */}
          <section className="resume-section mb-5 print:mb-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-sky-700 font-bold mb-1.5 print:text-[11px] print:border-b print:border-slate-300 print:pb-0.5">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed print:text-[10px] print:leading-normal">
              Results-oriented Full-Stack Web Developer and Assistant Programmer at Gazipur City Corporation with a proven record of engineering resilient, high-performance web systems for civic operations and independent platforms. Proficient in React, Next.js (App Router), TypeScript, Node.js, and MongoDB. Adept at turning complex requirements into elegant, accessible user interfaces and type-safe server architectures.
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
                React 19, Next.js 16 (App Router, SSR/SSG), TypeScript, JavaScript (ES6+), Tailwind CSS v4, HTML5, Modern CSS3 Grid/Flexbox.
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 print:bg-slate-50 border border-slate-800 print:border-slate-200 print:p-1.5">
                <span className="font-bold text-white print:text-slate-900">Backend &amp; Database: </span>
                Node.js, Express, MongoDB (Atlas, native driver), RESTful APIs, Better Auth, JWT &amp; Session Management.
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 print:bg-slate-50 border border-slate-800 print:border-slate-200 print:p-1.5">
                <span className="font-bold text-white print:text-slate-900">Tools &amp; DevOps: </span>
                Git, GitHub, Vercel, Netlify, VS Code, ESLint, npm/pnpm, Postman, Figma UI Wireframing.
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 print:bg-slate-50 border border-slate-800 print:border-slate-200 print:p-1.5">
                <span className="font-bold text-white print:text-slate-900">Practices: </span>
                Clean Code Architecture, Responsive Web Design, SEO Optimization, Unidirectional State Flow, Accessibility.
              </div>
            </div>
          </section>

          {/* 3. Professional Work Experience */}
          <section className="resume-section mb-5 print:mb-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-sky-700 font-bold mb-2.5 print:text-[11px] print:border-b print:border-slate-300 print:pb-0.5">
              Professional Work Experience
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
              Key Production Projects
            </h2>
            <div className="space-y-2.5 print:space-y-1.5">
              {PROJECTS.slice(0, 3).map((proj) => (
                <div key={proj.slug} className="p-2.5 rounded-lg bg-slate-900/60 print:bg-slate-50 border border-slate-800 print:border-slate-200 print:p-1.5 space-y-0.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-white print:text-slate-900 print:text-[10px]">
                      {proj.title} &mdash; <span className="font-normal text-slate-300 print:text-slate-700">{proj.subtitle}</span>
                    </h3>
                    <span className="text-[11px] font-mono text-cyan-400 print:text-sky-700 print:text-[9px]">
                      {proj.stack.slice(0, 3).join(", ")}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-slate-700 print:text-[9px]">
                    {proj.summary}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Educational Qualification */}
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
                    Key Focus: {edu.keyCourses.slice(0, 4).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
