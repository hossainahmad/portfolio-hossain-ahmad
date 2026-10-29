"use client";

import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, Terminal, ExternalLink } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text">Experience</span>
          </h2>
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
            Professional track record bridging public sector civic technology with independent full-stack product engineering.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:w-0.5 before:-ml-px before:bg-slate-800 before:hidden md:before:block">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all relative group"
            >
              {/* Header: Role & Organization */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 font-semibold">
                      {exp.type}
                    </span>
                    {exp.badge && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Building2 className="w-4 h-4 text-cyan-400" />
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-200 hover:text-cyan-400 font-medium text-sm sm:text-base transition-colors inline-flex items-center gap-1"
                      >
                        {exp.company}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-slate-200 font-medium text-sm sm:text-base">
                        {exp.company}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 text-xs font-mono text-slate-400 shrink-0">
                  <div className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1 rounded-md border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1 rounded-md border border-slate-800">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Achievements / Key Responsibilities */}
              <div className="mb-6 space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  Key Responsibilities & Impact
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((item, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-slate-800/60">
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
