"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { Project } from "@/data/portfolioData";

interface ProjectCardProps {
  project: Project;
  onOpenModal?: (project: Project) => void;
}

export function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  return (
    <div className="glass-panel glass-panel-hover rounded-2xl border border-slate-800/90 overflow-hidden flex flex-col justify-between group transition-all duration-300">
      <div>
        {/* Project Image Preview */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80" />

          {/* Category Badge & Year */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
            <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-cyan-400 shadow-md">
              {project.category}
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-900/90 backdrop-blur-md border border-slate-800 text-slate-300">
              {project.year}
            </span>
          </div>

          {/* Quick Action Overlay Links */}
          <div className="absolute bottom-3 right-3 flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900/90 hover:bg-cyan-500 text-slate-300 hover:text-slate-950 border border-slate-700/80 transition-all shadow-md"
                title="Live Demo"
                aria-label={`Live demo of ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-all shadow-md"
                title="GitHub Client Repository"
                aria-label={`GitHub Client Repository of ${project.title}`}
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-cyan-400/90 mt-1 mb-2.5">
            {project.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed mb-4">
            {project.summary}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.stack.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900/60 border border-slate-800/60 text-slate-400">
                +{project.stack.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer / Buttons */}
      <div className="p-6 pt-0 border-t border-slate-800/60 mt-2 flex items-center justify-between gap-3">
        {/* View More / Details button */}
        <Link
          href={`/projects/${project.slug}`}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 text-xs sm:text-sm font-semibold transition-all shadow-sm"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        {/* Quick View Modal Trigger */}
        {onOpenModal && (
          <button
            onClick={() => onOpenModal(project)}
            className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono transition-colors cursor-pointer"
            title="Quick Preview"
          >
            Quick View
          </button>
        )}
      </div>
    </div>
  );
}
