"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileDown,
  ArrowRight,
  Mail,
  MapPin,
  CheckCircle2,
  Code2,
  Terminal,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface HeroProps {
  onOpenResume?: () => void;
}

const ROLES = [
  "Full-Stack Web Developer",
  "Assistant Programmer at GCC",
  "React & Next.js Specialist",
];

export function Hero({ onOpenResume }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedRole === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedRole === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }, 30);
    } else {
      const speed = isDeleting ? 30 : 70;
      timeout = setTimeout(() => {
        setDisplayedRole(
          isDeleting
            ? current.substring(0, displayedRole.length - 1)
            : current.substring(0, displayedRole.length + 1),
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern bg-radial-gradient">
      {/* Decorative ambient blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-400 shadow-sm shadow-cyan-950/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I&apos;m{" "}
                <span className="bg-linear-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </h1>

              {/* Typewriter Designation */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 font-mono">
                  {displayedRole}
                  <span className="inline-block w-2.5 h-6 ml-1 bg-cyan-400 animate-pulse align-middle" />
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="max-w-2xl mx-auto lg:mx-0 text-slate-300 text-base sm:text-lg leading-relaxed">
              {PERSONAL_INFO.shortBio}
            </p>

            {/* Location & Public Role tag */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-md border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-md border border-slate-800">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                <span>{PERSONAL_INFO.currentRole}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3">
              {/* Direct PDF Download Button */}
              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 font-semibold text-sm transition-all shadow-md cursor-pointer"
                  title="Preview & Print Curriculum Vitae"
                >
                  <FileDown className="w-4 h-4" />
                  <span>View / Print CV</span>
                </button>
              )}

              {/* Projects Button */}
              <Link
                href="#projects"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/40 font-semibold text-sm transition-all shadow-md hover:shadow-cyan-950/20 transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </Link>

              {/* Contact Button */}
              <Link
                href="#contact"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/50 hover:bg-slate-800/60 text-slate-400 hover:text-white border border-slate-800/80 text-sm font-medium transition-colors"
              >
                <span>Get In Touch</span>
              </Link>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 border-t border-slate-800/70">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                  Connect &amp; Socials:
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800/90 transition-all shadow-sm"
                    title="GitHub Profile"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-[#0a66c2] hover:border-[#0a66c2]/50 hover:bg-slate-800/90 transition-all shadow-sm"
                    title="LinkedIn Profile"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={PERSONAL_INFO.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-slate-800/90 transition-all shadow-sm"
                    title="Twitter / X"
                    aria-label="Twitter / X"
                  >
                    <TwitterXIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-slate-800/90 transition-all shadow-sm"
                    title="Direct Email"
                    aria-label="Direct Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Photo & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 sm:w-80 md:w-96 aspect-square">
              {/* Outer Glow Halo */}
              <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl transform scale-105" />

              {/* Main Photo Card Frame */}
              <div className="relative w-full h-full rounded-3xl bg-slate-900 p-3 border border-slate-700/80 shadow-2xl shadow-cyan-950/30 overflow-hidden group">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-linear-to-b from-slate-800 to-slate-950">
                  <Image
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    fill
                    sizes="(max-width: 768px) 320px, 400px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority
                  />

                  {/* Gradient overlay at bottom of photo */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#090d16] via-transparent to-transparent opacity-80" />

                  {/* Identification ribbon at bottom */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-white tracking-wide">
                          {PERSONAL_INFO.name}
                        </p>
                        <p className="text-[11px] font-mono text-cyan-400">
                          {PERSONAL_INFO.designation}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badge 1: React / Next.js */}
              <div className="absolute -top-4 -left-4 sm:-left-6 p-2.5 sm:p-3 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-slate-700 shadow-xl flex items-center gap-2.5 text-xs font-mono text-slate-200 animate-bounce duration-1000">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-white text-xs">
                    Next.js &amp; React
                  </p>
                  {/* <p className="text-[10px] text-slate-400">Full-Stack SSR</p> */}
                </div>
              </div>

              {/* Floating Tech Badge 2: Civic Tech / Gazipur */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 p-2.5 sm:p-3 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-slate-700 shadow-xl flex items-center gap-2.5 text-xs font-mono text-slate-200">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-white text-xs">
                    Gazipur City Corp
                  </p>
                  <p className="text-[10px] text-slate-400">
                    Assistant Programmer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Stats Strip */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="glass-panel p-5 rounded-2xl border border-slate-800/90 text-center sm:text-left">
            <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-linear-to-r from-cyan-400 to-sky-300 bg-clip-text font-mono">
              {PERSONAL_INFO.experienceYears}
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
              Years Experience
            </p>
            <p className="text-[11px] text-slate-400 font-mono mt-0.5">
              Govt &amp; Independent Dev
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800/90 text-center sm:text-left">
            <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-linear-to-r from-emerald-400 to-teal-300 bg-clip-text font-mono">
              {PERSONAL_INFO.projectsCompleted}
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
              Projects Shipped
            </p>
            <p className="text-[11px] text-slate-400 font-mono mt-0.5">
              Production &amp; Open Source
            </p>
          </div>

          {/* <div className="glass-panel p-5 rounded-2xl border border-slate-800/90 text-center sm:text-left">
            <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-linear-to-r from-indigo-400 to-purple-300 bg-clip-text font-mono">
              {PERSONAL_INFO.citizensServed}
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
              Citizens Impacted
            </p>
            <p className="text-[11px] text-slate-400 font-mono mt-0.5">
              Gazipur City Corporation
            </p>
          </div> */}

          <div className="glass-panel p-5 rounded-2xl border border-slate-800/90 text-center sm:text-left">
            <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-linear-to-r from-amber-400 to-orange-300 bg-clip-text font-mono">
              100%
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
              Clean Code Focus
            </p>
            <p className="text-[11px] text-slate-400 font-mono mt-0.5">
              Type-Safe &amp; Scalable
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
