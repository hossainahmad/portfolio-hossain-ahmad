"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Layers,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c1220] border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-400">
              Released {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Top Banner: Cover & Titles */}
          <div className="space-y-4">
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
              <Image
                src={project.cover}
                alt={project.title}
                fill
                sizes="(max-width: 900px) 100vw, 850px"
                className="object-cover object-top"
              />
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h2>
              <p className="text-sm font-mono text-cyan-400 mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-cyan-500/20 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Project Demo</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs sm:text-sm font-semibold transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Client Repository (GitHub)</span>
                </a>
              )}

              <Link
                href={`/projects/${project.slug}`}
                onClick={onClose}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-cyan-500/30 text-xs sm:text-sm font-medium transition-colors ml-auto"
              >
                <span>Full Page View</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Main Technology Stack Used */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              Main Technology Stack Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
              Project Description
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Key Features &amp; Capabilities
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges Faced While Developing The Project */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Challenges Faced While Developing The Project
            </h3>
            <div className="space-y-2.5">
              {project.challenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/20 text-xs sm:text-sm text-slate-300 leading-relaxed"
                >
                  <p>{challenge}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Potential Improvements and Future Plans */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              Potential Improvements and Future Plans
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.futurePlans.map((plan, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs sm:text-sm text-slate-300"
                >
                  <span className="font-mono text-cyan-400 text-xs font-bold mr-1.5">
                    0{idx + 1}.
                  </span>
                  {plan}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-900/90">
          <p className="text-xs font-mono text-slate-400">
            Project by {project.role}
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors cursor-pointer"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
