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
  Terminal,
  Zap,
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
  category: "languages" | "frontend" | "backend" | "tools";
  level: "Expert" | "Advanced" | "Proficient";
  renderIcon: () => React.ReactNode;
  description: string;
  glowColor: string;
}

const SKILLS_DATA: SkillItem[] = [
  // Backend & Databases
  {
    name: "Next.js 15 (Full-Stack)",
    category: "backend",
    level: "Advanced",
    renderIcon: () => <NextjsIcon className="w-6 h-6 text-white" />,
    description:
      "Full-Stack development with App Router, React Server Components (RSC), Server Actions, and REST API endpoints.",
    glowColor: "group-hover:border-white/40 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]",
  },
  {
    name: "PostgreSQL",
    category: "backend",
    level: "Proficient",
    renderIcon: () => <PostgresIcon className="w-6 h-6 text-[#336791]" />,
    description:
      "Relational database design, indexes, ACID transactions, complex joins, and query optimization for high concurrency.",
    glowColor: "group-hover:border-[#336791]/50 group-hover:shadow-[0_0_25px_rgba(51,103,145,0.3)]",
  },
  {
    name: "MongoDB",
    category: "backend",
    level: "Proficient",
    renderIcon: () => <MongoIcon className="w-6 h-6 text-[#00ed64]" />,
    description:
      "NoSQL document database, schema modeling with Mongoose, aggregation pipelines, and high-performance data storage.",
    glowColor: "group-hover:border-[#00ed64]/50 group-hover:shadow-[0_0_25px_rgba(0,237,100,0.3)]",
  },
  {
    name: "Supabase",
    category: "backend",
    level: "Proficient",
    renderIcon: () => <SupabaseIcon className="w-6 h-6 text-[#3ecf8e]" />,
    description:
      "Hosted PostgreSQL backend, Row Level Security (RLS), real-time database listeners, and Auth management.",
    glowColor: "group-hover:border-[#3ecf8e]/50 group-hover:shadow-[0_0_25px_rgba(62,207,142,0.3)]",
  },
  {
    name: "Oracle SQL | PL SQL",
    category: "backend",
    level: "Proficient",
    renderIcon: () => <Database className="w-6 h-6 text-amber-400" />,
    description:
      "Database schema architecture, stored procedures, triggers, view creation, and relational queries.",
    glowColor: "group-hover:border-amber-400/50 group-hover:shadow-[0_0_25px_rgba(251,191,36,0.3)]",
  },

  // Frontend
  {
    name: "React.js",
    category: "frontend",
    level: "Advanced",
    renderIcon: () => <ReactIcon className="w-6 h-6 text-[#00d8ff]" />,
    description:
      "Component-driven architecture, custom hooks, context API, state management, and virtual DOM optimization.",
    glowColor: "group-hover:border-[#00d8ff]/50 group-hover:shadow-[0_0_25px_rgba(0,216,255,0.3)]",
  },
  {
    name: "Vue.js (Vue 3)",
    category: "frontend",
    level: "Proficient",
    renderIcon: () => <VueIcon className="w-6 h-6 text-[#42b883]" />,
    description:
      "Composition API, Pinia state management, Vue Router, reactive systems, and single-file component architecture.",
    glowColor: "group-hover:border-[#42b883]/50 group-hover:shadow-[0_0_25px_rgba(66,184,131,0.3)]",
  },
  {
    name: "TypeScript",
    category: "languages",
    level: "Advanced",
    renderIcon: () => <TypescriptIcon className="w-6 h-6 text-[#3178c6]" />,
    description:
      "Strict type definitions, generics, utility types, interface contracts, and full type safety across apps.",
    glowColor: "group-hover:border-[#3178c6]/50 group-hover:shadow-[0_0_25px_rgba(49,120,198,0.3)]",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: "Expert",
    renderIcon: () => <TailwindIcon className="w-6 h-6 text-[#38bdf8]" />,
    description:
      "Utility-first styling, dark/light themes, responsive design systems, animations, and zero runtime CSS overhead.",
    glowColor: "group-hover:border-[#38bdf8]/50 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]",
  },
  {
    name: "Redux Toolkit",
    category: "frontend",
    level: "Advanced",
    renderIcon: () => <Layers className="w-6 h-6 text-purple-400" />,
    description:
      "Predictable global state container, RTK Query caching, slice reducers, and seamless async data fetching.",
    glowColor: "group-hover:border-purple-400/50 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]",
  },
  {
    name: "JavaScript (ES6+)",
    category: "languages",
    level: "Expert",
    renderIcon: () => <JavascriptIcon className="w-6 h-6 text-[#f7df1e]" />,
    description:
      "Modern ECMAScript features, closures, promises, async/await, event loop, and functional programming.",
    glowColor: "group-hover:border-[#f7df1e]/50 group-hover:shadow-[0_0_25px_rgba(247,223,30,0.3)]",
  },

  // Tools & Architecture
  {
    name: "Git & GitHub",
    category: "tools",
    level: "Advanced",
    renderIcon: () => <GitBranch className="w-6 h-6 text-orange-400" />,
    description:
      "Version control, branch management, pull requests, merge conflict resolution, and CI/CD automated actions.",
    glowColor: "group-hover:border-orange-400/50 group-hover:shadow-[0_0_25px_rgba(249,115,22,0.3)]",
  },
  {
    name: "REST APIs & Postman",
    category: "tools",
    level: "Advanced",
    renderIcon: () => <Globe className="w-6 h-6 text-indigo-400" />,
    description:
      "API design, endpoint documentation, status code standards, automated testing with Postman collections.",
    glowColor: "group-hover:border-indigo-400/50 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.3)]",
  },
  {
    name: "Payment Gateways",
    category: "tools",
    level: "Advanced",
    renderIcon: () => <Zap className="w-6 h-6 text-amber-300" />,
    description:
      "Commercial integrations with Tamara, Apple Pay, MyFatoorah, Al Rajhi, and Visa/Mastercard processing.",
    glowColor: "group-hover:border-amber-300/50 group-hover:shadow-[0_0_25px_rgba(252,211,77,0.3)]",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Arsenal" },
  { id: "backend", label: "Backend & Databases" },
  { id: "frontend", label: "Frontend Frameworks" },
  { id: "languages", label: "Languages" },
  { id: "tools", label: "Tools & Integrations" },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills =
    activeCategory === "all"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionReveal direction="down" className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3 font-mono shadow-[0_0_15px_rgba(99,102,241,0.15)]">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Technical <span className="text-gradient-cyan">Arsenal</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4 mb-8" />

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </MotionReveal>

        {/* Skills Grid with Glowing Brand Hover Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => (
            <MotionReveal
              key={skill.name}
              direction="up"
              delay={idx * 50}
              className={`glass-card p-6 rounded-2xl border border-slate-800/80 bg-slate-950/60 hover:bg-slate-900/80 transition-all duration-300 group flex flex-col justify-between ${skill.glowColor}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    {skill.renderIcon()}
                  </div>
                  <span
                    className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${
                      skill.level === "Expert"
                        ? "bg-emerald-950/60 border-emerald-500/40 text-emerald-300"
                        : skill.level === "Advanced"
                        ? "bg-indigo-950/60 border-indigo-500/40 text-indigo-300"
                        : "bg-blue-950/60 border-blue-500/40 text-blue-300"
                    }`}
                  >
                    ● {skill.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {skill.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="capitalize">{skill.category}</span>
                <span className="text-indigo-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                  Verified ✓
                </span>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
