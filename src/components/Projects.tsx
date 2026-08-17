"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FolderGit2,
  ExternalLink,
  Layers,
  Sparkles,
  Eye,
  Maximize2,
  X,
  Code2,
  Star,
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import MotionReveal from "@/components/MotionReveal";

interface Project {
  id: string;
  title: string;
  description: string;
  category: "all" | "fullstack" | "enterprise" | "creative";
  image: string;
  demoUrl: string;
  githubUrl: string;
  tags: string[];
  features: string[];
  featured?: boolean;
}

const PROJECTS_DATA: Project[] = [
  {
    id: "warda-toba",
    title: "Warda & Toba Egypt (Export Platform)",
    description:
      "Enterprise full-stack agricultural export platform featuring multi-language internationalization (Arabic, English, French), comprehensive product taxonomy, export quote dispatch system, and luxury dark/light theme.",
    category: "fullstack",
    image: "/images/wardatoba_live.png",
    demoUrl: "https://wardaandtoba.com",
    githubUrl: "https://github.com/AhmedShoieb96",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "i18n Localization", "PostgreSQL", "Full-Stack"],
    featured: true,
    features: [
      "Tri-lingual localization (Arabic, English, French)",
      "Interactive product catalog with categorization (Pulses, Seeds, Spices, Coffee)",
      "Live export inquiry and quote request engine",
      "Modern luxury aesthetic with gold accents & dark mode toggle",
      "Dynamic video promo hero and SEO structured Schema.org data",
    ],
  },
  {
    id: "design-hub",
    title: "Design Hub Studio (designhub.uno)",
    description:
      "Modern architecture and interior design studio platform (Tanta, Gharbia) showcasing contemporary design systems, client works, architecture portfolios, and interactive workflows.",
    category: "fullstack",
    image: "/images/designhub_uno_live.png",
    demoUrl: "https://designhub.uno/",
    githubUrl: "https://github.com/AhmedShoieb96",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Architecture UI", "Interactive Platform"],
    featured: true,
    features: [
      "Architecture & Interior design studio portfolio",
      "Interactive layout with responsive design",
      "EST. 2020 • Tanta, Gharbia branding & services",
      "Direct client inquiry & project access",
    ],
  },
  {
    id: "el-araby",
    title: "El Araby Corporate Landing",
    description:
      "A high-impact company landing page showcasing business services, product portfolios, customer reviews, and contact channels.",
    category: "enterprise",
    image: "/images/Araby.PNG",
    demoUrl: "https://ahmedshoieb96.github.io/company-landing-1/",
    githubUrl: "https://github.com/AhmedShoieb96/company-landing-1",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "Corporate"],
    features: [
      "Product showcase slider and interactive galleries",
      "Optimized layout across mobile and desktop",
      "Modern corporate color palette and typography",
      "Contact and quote inquiry forms",
    ],
  },
  {
    id: "devfolio",
    title: "DevFolio Portfolio Template",
    description:
      "A responsive developer portfolio template with smooth transitions, interactive typing effects, and modern card layouts for personal branding.",
    category: "creative",
    image: "/images/DevFolio.PNG",
    demoUrl: "https://ahmedshoieb96.github.io/DefFolio-Template/",
    githubUrl: "https://github.com/AhmedShoieb96/DefFolio-Template",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Typewriter UI"],
    features: [
      "Responsive navigation with mobile drawer",
      "Dynamic typewriter header animation",
      "Filterable work gallery & client testimonials",
      "Clean semantic markup for SEO",
    ],
  },
  {
    id: "kasper",
    title: "Kasper Creative Agency",
    description:
      "A creative agency web design template loaded with responsive cards, portfolio filtering, animated counters, and pricing plans.",
    category: "creative",
    image: "/images/kasper.PNG",
    demoUrl: "https://ahmedshoieb96.github.io/MySocendProject/",
    githubUrl: "https://github.com/AhmedShoieb96/MySocendProject",
    tags: ["HTML5", "CSS3 Grid", "Flexbox", "JavaScript", "Creative UI"],
    features: [
      "Multi-column portfolio filter grid",
      "Interactive statistics and skill progress bars",
      "Responsive pricing tables and team cards",
      "Fluid CSS animations and hover overlays",
    ],
  },
];

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full-Stack & Web Apps" },
  { id: "enterprise", label: "Enterprise" },
  { id: "creative", label: "Creative & Landing" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Slide Down) */}
        <MotionReveal direction="down" className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-white/[0.1] text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-3 font-mono">
            <FolderGit2 className="w-3.5 h-3.5 text-zinc-400" />
            Selected Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-silver">Projects</span>
          </h2>
          <div className="w-12 h-0.5 bg-white/40 rounded-full mt-4" />
        </MotionReveal>

        {/* Filter categories (Scale In) */}
        <MotionReveal direction="scale" delay={100} className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-white text-black font-semibold shadow-md scale-105"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/[0.06]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </MotionReveal>

        {/* Projects Grid with Staggered Upward Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <MotionReveal
              key={project.id}
              direction="up"
              delay={(idx % 3) * 120}
              className={`glass-card glass-card-hover rounded-3xl overflow-hidden border flex flex-col justify-between group transition-all duration-300 ${
                project.featured
                  ? "border-white/[0.2] shadow-2xl"
                  : "border-white/[0.08]"
              }`}
            >
              {/* Image Preview Container */}
              <div className="relative h-56 w-full bg-zinc-900 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/90 border border-white/[0.2] text-white text-xs font-semibold backdrop-blur-xl shadow-md">
                    <Star className="w-3 h-3 fill-white text-white" />
                    Featured
                  </div>
                )}

                {/* Quick Action Overlay Buttons */}
                <div className="absolute top-3 right-3 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-2 rounded-xl bg-black/80 backdrop-blur-xl text-zinc-300 hover:text-white border border-white/[0.1] transition-colors cursor-pointer"
                    title="View Details"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-zinc-200 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed mb-4 font-normal">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-zinc-900 text-zinc-300 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white hover:bg-zinc-200 text-black text-xs sm:text-sm font-bold shadow-md transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/[0.08] hover:border-white/20 text-xs sm:text-sm font-medium transition-all"
                    title="Source Code"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span className="hidden sm:inline">Code</span>
                  </a>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-zinc-950 border border-white/[0.12] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white transition-colors cursor-pointer border border-white/[0.08]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 bg-zinc-900">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="flex items-center gap-2 mb-2">
              {selectedProject.featured && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-zinc-900 border border-white/[0.2] text-white">
                  Featured Project
                </span>
              )}
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              {selectedProject.title}
            </h3>

            <p className="text-sm sm:text-base text-zinc-300 mb-6 leading-relaxed font-normal">
              {selectedProject.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono mb-3">
                Key Features & Capabilities:
              </h4>
              <ul className="space-y-2">
                {selectedProject.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-zinc-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono mb-2">
                Technologies & Tools:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-zinc-900 text-zinc-300 border border-white/[0.08]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={selectedProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white text-black font-bold shadow-lg hover:bg-zinc-200 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                Open Live Preview
              </a>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-medium border border-white/[0.1] transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                Repository
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
