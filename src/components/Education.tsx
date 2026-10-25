"use client";

import { GraduationCap, BookOpen, Award, CheckCircle2, Calendar, MapPin } from "lucide-react";
import { EDUCATIONS } from "@/data/portfolioData";

export function Education() {
  return (
    <section id="education" className="py-24 relative bg-[#070a12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Educational <span className="text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text">Qualification</span>
          </h2>
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
            Detailed formal academic qualifications above HSC, specialized coursework, and core computer science competencies.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {EDUCATIONS.map((edu, idx) => (
            <div
              key={edu.id}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all relative overflow-hidden group"
            >
              {/* Accent side border */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1.5 ${
                  idx === 0 ? "bg-gradient-to-b from-cyan-400 to-indigo-500" : "bg-slate-700"
                }`}
              />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                      {edu.major}
                    </span>
                    {idx === 0 && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                        Primary Degree
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-slate-300 font-medium text-sm sm:text-base mt-1">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-1 shrink-0 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {edu.description}
              </p>

              {/* Key Courses */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  Key Coursework & Domains
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.keyCourses.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-indigo-400" />
                  Academic Highlights
                </h4>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
