import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Layers,
  ArrowRight,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { PROJECTS } from "@/data/portfolioData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Hossain Ahmad Portfolio`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[projectIndex];

  if (!project) {
    notFound();
  }

  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : null;
  const nextProject =
    projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col justify-between selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />

      <main className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button & Breadcrumbs */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-colors bg-slate-900/80 px-3.5 py-1.5 rounded-xl border border-slate-800"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </Link>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span>Projects</span>
              <span>/</span>
              <span className="text-slate-200">{project.title}</span>
            </div>
          </div>

          {/* Hero Header */}
          <div className="space-y-4 mb-8">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
                {project.category}
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                {project.year}
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                Role: {project.role}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg font-mono text-cyan-400/90">
              {project.subtitle}
            </p>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
              {project.summary}
            </p>
          </div>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-4 mb-10 pb-8 border-b border-slate-800">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit Live Website</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition-all transform hover:-translate-y-0.5"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Client Repository</span>
              </a>
            )}
          </div>

          {/* Project Cover Image Showcase */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-slate-800 mb-12 shadow-2xl bg-slate-950">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 960px"
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Main Body Grid */}
          <div className="space-y-12">
            {/* 1. Main Technology Stack Used */}
            <section className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Layers className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-white tracking-tight">
                  Main Technology Stack Used
                </h2>
              </div>

              <div className="flex flex-wrap gap-2.5 mb-6">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-xs sm:text-sm font-mono text-cyan-300 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Selected for optimal developer velocity, type-safe boundaries, and predictable production runtime performance.
              </p>
            </section>

            {/* 2. Detailed Description & Problem Overview */}
            <section className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800">
              <h2 className="text-xl font-bold text-white tracking-tight mb-4">
                Project Overview &amp; Core Mission
              </h2>
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>{project.description}</p>
              </div>
            </section>

            {/* 3. Key Features */}
            <section className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-white tracking-tight">
                  Key Features &amp; Capabilities
                </h2>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 4. Challenges Faced While Developing The Project */}
            <section className="glass-panel p-6 sm:p-8 rounded-2xl border border-amber-500/20 bg-amber-950/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">
                    Challenges Faced While Developing the Project
                  </h2>
                  <p className="text-xs font-mono text-amber-400/90 mt-0.5">
                    Engineering trade-offs and real-world problem solving
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {project.challenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/80 border border-amber-500/20 text-xs sm:text-sm text-slate-300 leading-relaxed"
                  >
                    <span className="font-mono text-amber-400 text-xs font-bold mr-2">
                      Challenge {idx + 1}:
                    </span>
                    {challenge}
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Potential Improvements and Future Plans */}
            <section className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/20 bg-cyan-950/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">
                    Potential Improvements and Future Plans
                  </h2>
                  <p className="text-xs font-mono text-cyan-400/90 mt-0.5">
                    Roadmap, optimizations, and next feature iterations
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.futurePlans.map((plan, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/20 text-xs sm:text-sm text-slate-300 flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{plan}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Next / Prev Project Navigation */}
            <div className="pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevProject ? (
                <Link
                  href={`/projects/${prevProject.slug}`}
                  className="p-5 rounded-2xl glass-panel border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-4 group"
                >
                  <ArrowLeft className="w-5 h-5 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase">
                      Previous Project
                    </span>
                    <p className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {prevProject.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextProject && (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="p-5 rounded-2xl glass-panel border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between group text-right"
                >
                  <div className="ml-auto">
                    <span className="text-[11px] font-mono text-slate-400 uppercase">
                      Next Project
                    </span>
                    <p className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {nextProject.title}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
