"use client";

import { useEffect } from "react";
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  MapPin,
  Globe,
  Briefcase,
  GraduationCap,
  Code2,
  CheckCircle2,
  ExternalLink,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c1220] border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 font-semibold">
              Curriculum Vitae
            </span>
            <span className="text-xs font-mono text-slate-400">
              {PERSONAL_INFO.name} — 2026
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md transition-all cursor-pointer"
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
        <div className="overflow-y-auto p-6 sm:p-10 bg-slate-950 text-slate-200 print:bg-white print:text-black print:p-0 print:overflow-visible">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 mb-6 print:border-black/30">
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

            {/* Social Links Row */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 print:text-gray-700 mt-4 pt-3 border-t border-slate-900 print:border-gray-200">
              <span className="text-cyan-400 print:text-blue-700">GitHub: {PERSONAL_INFO.github}</span>
              <span>&bull;</span>
              <span className="text-cyan-400 print:text-blue-700">LinkedIn: {PERSONAL_INFO.linkedin}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-blue-700 font-bold mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
              Full-Stack Web Developer and Assistant Programmer at Gazipur City Corporation with a proven record of engineering resilient, high-performance web systems for civic operations and independent platforms. Proficient in React, Next.js (App Router), TypeScript, Node.js, and MongoDB. Adept at turning complex requirements into elegant, accessible user interfaces and type-safe server architectures.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-blue-700 font-bold mb-2">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs print:text-[11px] text-slate-300 print:text-gray-800">
              <div className="p-2.5 rounded-lg bg-slate-900/60 print:bg-gray-100 border border-slate-800 print:border-gray-300">
                <span className="font-bold text-white print:text-black">Frontend: </span>
                React.js, Next.js (App Router, SSR/SSG), TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3 Grid/Flexbox.
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 print:bg-gray-100 border border-slate-800 print:border-gray-300">
                <span className="font-bold text-white print:text-black">Backend &amp; Database: </span>
                Node.js, Express, MongoDB (Atlas, native driver), RESTful APIs, Better Auth, JWT, Session Management.
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 print:bg-gray-100 border border-slate-800 print:border-gray-300">
                <span className="font-bold text-white print:text-black">Tools &amp; DevOps: </span>
                Git, GitHub, Vercel, Netlify, VS Code, ESLint, npm/pnpm, Figma UI Prototyping.
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 print:bg-gray-100 border border-slate-800 print:border-gray-300">
                <span className="font-bold text-white print:text-black">Practices: </span>
                Clean Code Architecture, Responsive Web Design, SEO Optimization, Unidirectional State Flow, Accessibility.
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-blue-700 font-bold mb-3">
              Professional Work Experience
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="border-l-2 border-slate-800 print:border-gray-400 pl-4 space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-sm font-bold text-white print:text-black">
                      {exp.role} &mdash; <span className="text-cyan-300 print:text-blue-700 font-medium">{exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-400 print:text-gray-600">
                      {exp.period} | {exp.location}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-gray-700 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="list-disc list-inside text-xs text-slate-400 print:text-gray-800 space-y-0.5 pt-1">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Projects */}
          <section className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-blue-700 font-bold mb-3">
              Key Production Projects
            </h2>
            <div className="space-y-3">
              {PROJECTS.slice(0, 3).map((proj) => (
                <div key={proj.slug} className="p-3 rounded-lg bg-slate-900/60 print:bg-gray-50 border border-slate-800 print:border-gray-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-white print:text-black">
                      {proj.title} &mdash; <span className="font-normal text-slate-300 print:text-gray-700">{proj.subtitle}</span>
                    </h3>
                    <span className="text-[11px] font-mono text-cyan-400 print:text-blue-700">
                      {proj.stack.slice(0, 3).join(", ")}
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
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-blue-700 font-bold mb-3">
              Educational Qualifications
            </h2>
            <div className="space-y-3">
              {EDUCATIONS.map((edu) => (
                <div key={edu.id} className="text-xs space-y-1">
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
                  <p className="text-[11px] font-mono text-slate-400 print:text-gray-600">
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
