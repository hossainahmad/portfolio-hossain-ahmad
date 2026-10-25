"use client";

import { useState } from "react";
import {
  Wrench,
  Code2,
  Server,
  Database,
  Terminal,
  Layers,
  Search,
  Sparkles,
  CheckCircle,
  Cpu,
  Globe,
  Palette,
  FileCode,
  ShieldCheck,
  Network,
  GitBranch,
  Cloud,
  Smartphone,
  Atom,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...SKILL_CATEGORIES.map((c) => c.name)];

  const allSkills = SKILL_CATEGORIES.flatMap((category) =>
    category.skills.map((skill) => ({
      ...skill,
      categoryName: category.name,
    }))
  );

  const filteredSkills = allSkills.filter((skill) => {
    const matchesCategory =
      selectedCategory === "All" || skill.categoryName === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text">Tech Stack</span>
          </h2>
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
            A comprehensive, graphical overview of the modern technologies, frameworks, and engineering methodologies I use to construct web platforms.
          </p>
        </div>

        {/* Featured Tech Stack Badges Strip */}
        <div className="mb-12 p-4 sm:p-6 rounded-2xl glass-panel border border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Core Daily Driver Technologies
            </span>
            <span className="text-xs font-mono text-cyan-400">Production Ready</span>
          </div>

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {[
              { name: "React 19", color: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30" },
              { name: "Next.js 15/16 (App Router)", color: "bg-slate-800 text-white border-slate-700" },
              { name: "TypeScript", color: "bg-blue-500/10 text-blue-300 border-blue-500/30" },
              { name: "JavaScript ES6+", color: "bg-amber-500/10 text-amber-300 border-amber-500/30" },
              { name: "Tailwind CSS v4", color: "bg-teal-500/10 text-teal-300 border-teal-500/30" },
              { name: "Node.js & Express", color: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30" },
              { name: "MongoDB & Atlas", color: "bg-green-500/10 text-green-300 border-green-500/30" },
              { name: "Better Auth", color: "bg-purple-500/10 text-purple-300 border-purple-500/30" },
              { name: "REST APIs", color: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30" },
              { name: "Git & GitHub", color: "bg-orange-500/10 text-orange-300 border-orange-500/30" },
            ].map((badge, i) => (
              <span
                key={i}
                className={`px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-mono font-medium shadow-sm flex items-center gap-1.5 ${badge.color}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                {badge.name}
              </span>
            ))}
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                    : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter skills by keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 focus:border-cyan-500 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-slate-200 placeholder-slate-500 outline-none transition-colors"
            />
          </div>
        </div>

        {/* Skills Graphical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-5 rounded-2xl border border-slate-800 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Name, Status, Level */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-[10px] font-mono text-slate-400">
                        {skill.categoryName}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-cyan-300">
                    {skill.status}
                  </span>
                </div>

                {/* Graphical Progress Bar */}
                <div className="space-y-1.5 mb-3.5">
                  <div className="flex justify-between text-[11px] font-mono">
                    <span className="text-slate-400">Proficiency</span>
                    <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800/90 overflow-hidden p-[1px]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 transition-all duration-700 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
                {skill.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="p-12 text-center glass-panel rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">
              No skills found matching &ldquo;{searchQuery}&rdquo;. Try another keyword or clear the search.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
