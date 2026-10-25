"use client";

import Link from "next/link";
import {
  ArrowUp,
  Mail,
  Heart,
  Terminal,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon, WhatsAppIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Education", href: "/#education" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="bg-[#06080f] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/60 items-start">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 p-[1px]">
                <div className="w-full h-full bg-[#090d16] rounded-lg flex items-center justify-center">
                  <span className="font-mono font-bold text-sm text-cyan-400">
                    HA
                  </span>
                </div>
              </div>
              <span className="font-bold text-white text-base tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {PERSONAL_INFO.headline} Combining public sector civic responsibility at Gazipur City Corporation with modern web development.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 pt-1">
              <Terminal className="w-3.5 h-3.5" />
              <span>Gazipur, Bangladesh &middot; {PERSONAL_INFO.coords}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Social Links & Back to Top */}
          <div className="md:col-span-3 space-y-4 md:text-right">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
              Social Profiles
            </p>

            <div className="flex items-center md:justify-end gap-2.5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#0a66c2] hover:border-[#0a66c2]/50 transition-all"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all"
                title="Twitter / X"
                aria-label="Twitter / X"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                title="Email Hossain Ahmad"
                aria-label="Email Hossain Ahmad"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                title="WhatsApp Direct"
                aria-label="WhatsApp Direct"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 hover:border-cyan-400/50 transition-colors cursor-pointer"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>
            &copy; 2026 {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed &amp; built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> using Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
