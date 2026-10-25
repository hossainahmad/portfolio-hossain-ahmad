"use client";

import {
  Compass,
  Code2,
  Heart,
  Coffee,
  BookOpen,
  Camera,
  Cpu,
  MapPin,
  Sparkles,
  Quote,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { PERSONAL_INFO, ABOUT_DETAILS } from "@/data/portfolioData";

export function About() {
  const hobbies = [
    {
      icon: Coffee,
      title: "Specialty Coffee ☕",
      desc: "Brewing artisanal pour-overs while untangling asynchronous logic and thinking through database schemas.",
      color: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30",
    },
    {
      icon: BookOpen,
      title: "Reading & Tech Books 📚",
      desc: "Continuously learning from architectural guides, software design literature, and system philosophy.",
      color: "from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30",
    },
    {
      icon: Camera,
      title: "Urban & Street Photography 📷",
      desc: "Capturing patterns, symmetry, and human moments across Gazipur and Dhaka through my camera lens.",
      color: "from-indigo-500/20 to-purple-500/20 text-indigo-400 border-indigo-500/30",
    },
    {
      icon: Cpu,
      title: "Building & Experimenting 💡",
      desc: "Tinkering with cutting-edge web frameworks, agentic workflows, and developer productivity tools.",
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-[#070a12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Compass className="w-3.5 h-3.5" />
            <span>Personnel Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text">Me</span>
          </h2>
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
            Get to know my journey, the problems I love solving, and what drives me as a software developer and public servant.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative (Journey + Work I Enjoy) */}
          <div className="lg:col-span-7 space-y-8">
            {/* The Programming Journey */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  My Programming Journey
                </h3>
              </div>
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  My fascination with coding started with a simple curiosity: how does a few lines of syntax translate into an interactive system that helps someone solve a concrete problem? Starting with the essentials—semantic HTML, modern CSS, and JavaScript (ES6+)—I immersed myself in creating accessible, clean web experiences.
                </p>
                <p>
                  As my curiosity grew, I transitioned into full-stack development with <strong className="text-cyan-400 font-semibold">React, TypeScript, Next.js, Node.js, and MongoDB</strong>. I believe true engineering skill comes not just from reading documentation, but from rolling up your sleeves and shipping production-ready applications.
                </p>
                <p>
                  Currently serving as an <strong className="text-white font-semibold">Assistant Programmer at Gazipur City Corporation</strong>, I build and maintain civic software systems serving over two million people. Developing for municipal infrastructure teaches you that software reliability is not optional—every button click and database query impacts real citizens.
                </p>
              </div>
            </div>

            {/* The Work I Enjoy */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  What I Love Building
                </h3>
              </div>
              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I love building full-stack applications where thoughtful architecture meets meticulous UI polish. Some of the challenges I find most rewarding include:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span><strong>Complex Data Sorting:</strong> Normalizing Bengali numerals (০-৯) with Western digits in BazarDor.</span>
                  </li>
                  <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                    <span><strong>SSR Hydration Resilience:</strong> Synchronizing localStorage state in Next.js without hydration flash.</span>
                  </li>
                  <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span><strong>Civic Digitization:</strong> Converting paper-bound municipal workflows into transparent digital portals.</span>
                  </li>
                  <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <span><strong>Component Architecture:</strong> Strict unidirectional state flow and TypeScript contract discipline.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Developer Philosophy Quote */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/40 border border-cyan-500/20 relative">
              <Quote className="w-8 h-8 text-cyan-400/20 absolute top-4 right-4" />
              <p className="text-slate-200 italic text-base sm:text-lg font-medium">
                &ldquo;{PERSONAL_INFO.philosophy}&rdquo;
              </p>
              <p className="mt-2 text-xs font-mono text-cyan-400">
                — Hossain Ahmad, Full-Stack Developer
              </p>
            </div>
          </div>

          {/* Right Column: Personnel Specs & Hobbies */}
          <div className="lg:col-span-5 space-y-8">
            {/* Personnel Specs Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  Personnel Sheet
                </span>
                <span className="text-[11px] font-mono text-slate-400">Gazipur City Corp</span>
              </div>

              <dl className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400 font-mono">Full Name</dt>
                  <dd className="font-semibold text-white">{PERSONAL_INFO.name}</dd>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400 font-mono">Primary Role</dt>
                  <dd className="font-semibold text-cyan-400">{PERSONAL_INFO.designation}</dd>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400 font-mono">Public Sector</dt>
                  <dd className="font-semibold text-slate-200">Assistant Programmer (GCC)</dd>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400 font-mono">Location</dt>
                  <dd className="font-medium text-slate-300">{PERSONAL_INFO.location}</dd>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400 font-mono">Geographic Coords</dt>
                  <dd className="font-mono text-xs text-slate-400">{PERSONAL_INFO.coords}</dd>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <dt className="text-slate-400 font-mono">Status</dt>
                  <dd className="flex items-center gap-1.5 font-medium text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available for Work
                  </dd>
                </div>
              </dl>
            </div>

            {/* Hobbies & Interests Outside Programming */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Hobbies & Life Outside Code
                </h4>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
                {hobbies.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex items-start gap-3.5 group hover:bg-slate-900"
                    >
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
