"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileDown, ExternalLink, Code2, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface NavbarProps {
  onOpenResume?: () => void;
}

export function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current visible section
      const sections = ["about", "skills", "education", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 160;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/#about", id: "about" },
    { label: "Skills", href: "/#skills", id: "skills" },
    { label: "Education", href: "/#education", id: "education" },
    { label: "Experience", href: "/#experience", id: "experience" },
    { label: "Projects", href: "/#projects", id: "projects" },
    { label: "Contact", href: "/#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <Link
            href="/"
            className="group flex items-center gap-3 transition-transform hover:scale-[1.02]"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-600 p-[1px] shadow-md shadow-cyan-500/20">
              <div className="w-full h-full bg-[#090d16] rounded-xl flex items-center justify-center">
                <span className="font-mono font-bold text-lg bg-gradient-to-r from-cyan-400 to-indigo-300 bg-clip-text text-transparent">
                  HA
                </span>
              </div>
            </div>
            <div>
              <span className="font-semibold text-slate-100 tracking-tight group-hover:text-cyan-400 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Full-Stack Dev
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-cyan-500/15 text-cyan-400 shadow-sm border border-cyan-500/30"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Resume & CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {onOpenResume ? (
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-cyan-400 border border-cyan-500/30 transition-all hover:border-cyan-400 shadow-sm hover:shadow-cyan-500/10 cursor-pointer"
              >
                <FileDown className="w-4 h-4" />
                <span>Resume</span>
              </button>
            ) : (
              <a
                href="#resume"
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-cyan-400 border border-cyan-500/30 transition-all hover:border-cyan-400 shadow-sm hover:shadow-cyan-500/10"
              >
                <FileDown className="w-4 h-4" />
                <span>Resume</span>
              </a>
            )}

            <Link
              href="/#contact"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-medium transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>Hire Me</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c1220] border-b border-slate-800/90 px-6 pt-4 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-semibold"
                    : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            {onOpenResume && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-800 text-cyan-400 border border-cyan-500/30 text-sm font-medium"
              >
                <FileDown className="w-4 h-4" />
                <span>View & Download Resume</span>
              </button>
            )}
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-semibold text-sm shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Let&apos;s Connect</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
