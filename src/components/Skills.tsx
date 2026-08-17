"use client";

import { useState } from "react";
import {
  Code2,
  Cpu,
  Database,
  Globe,
  Wrench,
  Sparkles,
  CheckCircle,
  Server,
  Layers,
  GitBranch,
  Smartphone,
  BrainCircuit,
  Languages as LanguagesIcon,
  Workflow,
  Network,
} from "lucide-react";
import {
  NextjsIcon,
  PostgresIcon,
  MongoIcon,
  SupabaseIcon,
  ReactIcon,
  VueIcon,
  AngularIcon,
  TailwindIcon,
  TypescriptIcon,
  JavascriptIcon,
  Html5Icon,
  Css3Icon,
  BootstrapIcon,
} from "@/components/TechIcons";
import MotionReveal from "@/components/MotionReveal";

interface SkillItem {
  name: string;
  category: "languages" | "frontend" | "backend" | "tools" | "spoken";
  level?: string;
  renderIcon: () => React.ReactNode;
  description: string;
}

const SKILLS_DATA: SkillItem[] = [
  // Full-Stack & Backend / Databases
  {
    name: "Full-Stack with Next.js",
    category: "backend",
    level: "Advanced",
    renderIcon: () => <NextjsIcon className="w-6 h-6 text-white" />,
    description:
      "End-to-end full-stack development with Next.js 15 App Router, React Server Components (RSC), Server Actions, and RESTful API endpoints.",
  },
  {
    name: "PostgreSQL",
    category: "backend",
    level: "Proficient",
    renderIcon: () => <PostgresIcon className="w-6 h-6 text-white" />,
    description:
      "Relational SQL database design, indexing, ACID transactions, complex joins, and query optimization for high concurrency.",
  },
  {
    name: "MongoDB",
    category: "backend",
    level: "Proficient",
    renderIcon: () => <MongoIcon className="w-6 h-6 text-white" />,
    description:
      "NoSQL document database, schema modeling with Mongoose, aggregation pipelines, and high-performance unstructured data storage.",
  },
  {
    name: "Supabase",
    category: "backend",
    level: "Proficient",
    renderIcon: () => <SupabaseIcon className="w-6 h-6 text-white" />,
    description:
      "Backend-as-a-Service (BaaS) utilizing hosted PostgreSQL, Row Level Security (RLS), real-time database listeners, and Auth management.",
  },
  {
    name: "Oracle SQL | PL SQL",
    category: "backend",
    level: "Intermediate",
    renderIcon: () => <Database className="w-6 h-6 text-white" />,
    description:
      "Database schema architecture, stored procedures, triggers, view creation, and relational queries.",
  },

  // Frontend Frameworks & Libraries
  {
    name: "React.js",
    category: "frontend",
    level: "Advanced",
    renderIcon: () => <ReactIcon className="w-6 h-6 text-white" />,
    description:
      "Component-driven architecture, custom hooks, context API, state management, and virtual DOM optimization.",
  },
  {
    name: "Vue.js",
    category: "frontend",
    level: "Proficient",
    renderIcon: () => <VueIcon className="w-6 h-6 text-white" />,
    description:
      "Progressive JavaScript framework featuring Vue 3 Composition API, reactive state management (Pinia/Vuex), and single-file components (SFC).",
  },
  {
    name: "Angular",
    category: "frontend",
    level: "Intermediate",
    renderIcon: () => <AngularIcon className="w-6 h-6 text-white" />,
    description:
      "TypeScript-based enterprise web architecture, dependency injection, RxJS observables, and modular components.",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: "Advanced",
    renderIcon: () => <TailwindIcon className="w-6 h-6 text-white" />,
    description:
      "Modern utility-first CSS, custom themes, dark luxury monochrome systems, and fluid responsive design.",
  },
  {
    name: "Bootstrap 5",
    category: "frontend",
    level: "Advanced",
    renderIcon: () => <BootstrapIcon className="w-6 h-6 text-white" />,
    description:
      "Rapid responsive layouts, flexbox grid system, and interactive modular components.",
  },

  // Core Languages
  {
    name: "TypeScript",
    category: "languages",
    level: "Proficient",
    renderIcon: () => <TypescriptIcon className="w-6 h-6 text-white" />,
    description:
      "Strong static typing across front-end and back-end, generic types, interfaces, and compile-time error prevention.",
  },
  {
    name: "JavaScript (ES6+)",
    category: "languages",
    level: "Advanced",
    renderIcon: () => <JavascriptIcon className="w-6 h-6 text-white" />,
    description:
      "Async/Await, Promises, Event Loop, closures, modern ESNext features, and browser/Node runtime APIs.",
  },
  {
    name: "HTML5",
    category: "languages",
    level: "Expert",
    renderIcon: () => <Html5Icon className="w-6 h-6 text-white" />,
    description:
      "Semantic elements, accessible web hierarchy (a11y), and search engine optimization (SEO) best practices.",
  },
  {
    name: "CSS3 / SASS",
    category: "languages",
    level: "Expert",
    renderIcon: () => <Css3Icon className="w-6 h-6 text-white" />,
    description:
      "CSS Grid, Flexbox, custom keyframe animations, responsive media queries, and glassmorphism styling.",
  },

  // Tools & Workflow
  {
    name: "Git & GitHub",
    category: "tools",
    level: "Proficient",
    renderIcon: () => <GitBranch className="w-6 h-6 text-white" />,
    description:
      "Feature branching workflows, pull requests, merge conflict resolution, and collaborative version control.",
  },
  {
    name: "REST APIs & Postman",
    category: "tools",
    level: "Advanced",
    renderIcon: () => <Network className="w-6 h-6 text-white" />,
    description:
      "Designing and consuming RESTful endpoints, async data fetching, error boundary handling, Postman testing, and API documentation.",
  },
  {
    name: "Responsive Design",
    category: "tools",
    level: "Expert",
    renderIcon: () => <Smartphone className="w-6 h-6 text-white" />,
    description:
      "Mobile-first responsive methodology, touch gesture handling, and cross-device interface consistency.",
  },
  {
    name: "Problem Solving",
    category: "tools",
    level: "Proficient",
    renderIcon: () => <BrainCircuit className="w-6 h-6 text-white" />,
    description:
      "Data structure manipulation, full-stack debugging, clean code refactoring, and algorithmic problem solving.",
  },

  // Spoken Languages
  {
    name: "Arabic",
    category: "spoken",
    level: "Native",
    renderIcon: () => <LanguagesIcon className="w-6 h-6 text-white" />,
    description:
      "Mother tongue (Native fluency in speaking, writing, and professional technical discussion)",
  },
  {
    name: "English",
    category: "spoken",
    level: "Very Good",
    renderIcon: () => <Globe className="w-6 h-6 text-white" />,
    description:
      "Professional working proficiency for reading documentation, writing clean code, and team collaboration",
  },
];

const TABS = [
  { id: "all", label: "All Skills", icon: Sparkles },
  { id: "backend", label: "Full-Stack & DBs", icon: Database },
  { id: "frontend", label: "Frontend UI", icon: Cpu },
  { id: "languages", label: "Languages", icon: Code2 },
  { id: "tools", label: "Tools", icon: Wrench },
  { id: "spoken", label: "Languages", icon: Globe },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredSkills =
    activeTab === "all"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Slide Down) */}
        <MotionReveal direction="down" className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-white/[0.1] text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-3 font-mono">
            <Layers className="w-3.5 h-3.5 text-zinc-400" />
            Technical Matrix
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-silver">Tech Stack</span>
          </h2>
          <div className="w-12 h-0.5 bg-white/40 rounded-full mt-4" />
        </MotionReveal>

        {/* Filter Tabs (Scale In) */}
        <MotionReveal direction="scale" delay={100} className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-white text-black font-semibold shadow-md scale-105"
                    : "bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/[0.06]"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </MotionReveal>

        {/* Skills Grid with Staggered Upward Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSkills.map((skill, index) => (
            <MotionReveal
              key={skill.name}
              direction="up"
              delay={(index % 4) * 80}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-white/[0.08] flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Distinct Official Vector Icon */}
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/[0.08] flex items-center justify-center group-hover:border-white/30 group-hover:bg-zinc-800 transition-all duration-300 shadow-sm">
                    {skill.renderIcon()}
                  </div>

                  {skill.level && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-zinc-900 border border-white/[0.08] text-zinc-300">
                      {skill.level}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-zinc-200 transition-colors mb-2">
                  {skill.name}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed mb-4 font-normal">
                  {skill.description}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono pt-3 border-t border-white/[0.06]">
                <CheckCircle className="w-3.5 h-3.5 text-zinc-400" />
                <span>Verified in Production</span>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
