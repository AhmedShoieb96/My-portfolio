"use client";

import { useState } from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ExternalLink,
  Building2,
  CreditCard,
  Code2,
  ChevronRight,
  Sparkles,
  Zap,
  Layers,
} from "lucide-react";
import MotionReveal from "@/components/MotionReveal";

interface TechRole {
  company: string;
  role: string;
  period: string;
  location?: string;
  isCurrent?: boolean;
  projects?: Array<{
    name: string;
    url?: string;
    bulletPoints: string[];
  }>;
  bulletPoints?: string[];
  techStack: string[];
}

interface BankingRole {
  company: string;
  role: string;
  period: string;
  bulletPoints: string[];
}

const TECH_EXPERIENCES: TechRole[] = [
  {
    company: "Creative Mind Company",
    role: "Software Developer",
    period: "Aug 2024 – Present",
    location: "Cairo, Egypt",
    isCurrent: true,
    projects: [
      {
        name: "Golden Host Platform",
        url: "https://goldenhost.co/",
        bulletPoints: [
          "Built high-performance frontend using Next.js, TypeScript, Tailwind CSS, and Redux Toolkit for complex global state management.",
          "Engineered the complete multi-step Visas (التأشيرات) service portal with dynamic applicant data collection and document processing.",
          "Implemented multi-method secure Payment Gateway integration supporting Tamara, Apple Pay, Digital Wallet, WalaaOne, and Visa / Mastercard.",
          "Developed core features within the Admin / Vendor Dashboard for booking oversight, financial ledger tracking, and analytics.",
        ],
      },
      {
        name: "Golden4tic Platform",
        url: "https://golden4tic.com/",
        bulletPoints: [
          "Implemented multi-provider payment gateway integrations with Apple Pay, MyFatoorah, and Al Rajhi Bank.",
          "Developed high-security vendor wallet system for balance tracking and transaction management.",
          "Built user profile management system with comprehensive account settings and security preferences.",
          "Designed and implemented responsive homepage showcasing dynamic products and promotional campaigns.",
          "Created dedicated contact page with inquiry dispatch form and direct customer support integration.",
          "Developed admin dashboard with real-time analytics and platform management controls.",
        ],
      },
      {
        name: "TikEvent Platform",
        url: "https://v2.tikevent.com/",
        bulletPoints: [
          "Rebuilt authentication and login architecture with enhanced token security and session management.",
          "Redesigned homepage UI/UX with improved event discovery, filtering, and ticket purchasing flow.",
          "Implemented interactive contact page with live support ticket dispatch system.",
          "Developed user profile section with booking history, past events, and user preferences.",
          "Created comprehensive FAQ and knowledge-base section for common customer inquiries.",
          "Refactored and optimized multi-page performance, reducing load latency and asset payloads.",
        ],
      },
    ],
    techStack: [
      "Next.js 15",
      "Redux Toolkit",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Payment Gateways (Tamara, Apple Pay, WalaaOne)",
      "REST APIs",
      "Git & GitLab",
      "Admin Dashboards",
    ],
  },
  {
    company: "ITC Tanta",
    role: "Front-End Developer (Part-Time)",
    period: "Jan 2024 – Jan 2025",
    location: "Tanta, Egypt",
    projects: [
      {
        name: "Design Hub Website",
        url: "https://designhub.uno/",
        bulletPoints: [
          "Developed modern, responsive web application using React.js and modern component patterns.",
          "Built reusable, modular UI components ensuring maintainability and clean design hierarchy.",
          "Implemented reactive state management using React Hooks for smooth client interactions.",
          "Configured multi-page client routing via react-router-dom for seamless navigation.",
          "Optimized runtime performance through dynamic code splitting and lazy loading assets.",
        ],
      },
    ],
    bulletPoints: [
      "Collaborated closely with UX/UI designers to build a full-featured E-Commerce web platform using Angular 17.",
      "Engineered an interactive banking simulator system for account management and transaction handling using HTML, CSS, and modern JavaScript.",
      "Created a fully responsive Hospital management website using Bootstrap 5 with ES6 JavaScript functionality.",
      "Developed a corporate landing page showcasing company services, mission, vision, and client contact channels.",
    ],
    techStack: [
      "React.js",
      "Angular 17",
      "JavaScript ES6+",
      "TypeScript",
      "HTML5 / CSS3",
      "Bootstrap 5",
      "Responsive UI",
      "Git & GitHub",
    ],
  },
];

const BANKING_EXPERIENCES: BankingRole[] = [
  {
    company: "CIB — Commercial International Bank",
    role: "Growth Banker",
    period: "Oct 2023 – Jun 2025",
    bulletPoints: [
      "Served as the primary relationship point for corporate clients, handling complex inquiries and delivering tailored financial solutions.",
      "Proactively identified cross-selling and upselling opportunities for corporate banking products and digital services.",
      "Managed onboarding of new corporate clients, ensuring smooth and compliant account-opening workflows.",
      "Monitored client portfolios and provided regular performance reviews and financial insights.",
      "Coordinated with internal credit, operations, and compliance departments to fulfill corporate client needs.",
    ],
  },
  {
    company: "CIB — Commercial International Bank",
    role: "Senior Teller",
    period: "Dec 2020 – Oct 2023",
    bulletPoints: [
      "Handled complex customer inquiries and complaints, delivering expert guidance on banking products and services.",
      "Processed high-volume cash and transfer transactions with precision and operational efficiency.",
      "Approved transactions and overrides within designated authority limits, ensuring compliance and risk mitigation.",
      "Trained and supervised junior tellers, mentoring them on bank operating procedures and service standards.",
    ],
  },
  {
    company: "Yathrib For Construction & Buildings",
    role: "Receivable & Procurement Accountant",
    period: "Jan 2020 – Dec 2020",
    bulletPoints: [
      "Generated and issued accurate invoices, ensuring timely delivery to clients and suppliers.",
      "Tracked outstanding receivables and followed up on overdue accounts to maintain healthy cash flow.",
      "Managed collections process, resolving payment discrepancies and vendor account reconciliations.",
    ],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"tech" | "banking">("tech");

  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionReveal direction="down" className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3 font-mono shadow-[0_0_15px_rgba(99,102,241,0.15)]">
            <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
            Verified Career Record
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Professional <span className="text-gradient-cyan">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4 mb-8" />

          {/* Tab Switcher */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl">
            <button
              onClick={() => setActiveTab("tech")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "tech"
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Code2 className="w-4 h-4" />
              Software Engineering ({TECH_EXPERIENCES.length})
            </button>
            <button
              onClick={() => setActiveTab("banking")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "banking"
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Building2 className="w-4 h-4" />
              Corporate Banking & Finance ({BANKING_EXPERIENCES.length})
            </button>
          </div>
        </MotionReveal>

        {/* Timeline Content */}
        <div className="relative">
          {/* Laser Circuit Line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-500 to-purple-500/20" />

          {activeTab === "tech" ? (
            <div className="space-y-8">
              {TECH_EXPERIENCES.map((exp, idx) => (
                <MotionReveal
                  key={idx}
                  direction="up"
                  delay={idx * 120}
                  className="relative md:pl-20"
                >
                  {/* Timeline Circuit Node */}
                  <div className="hidden md:flex absolute left-[26px] top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-950 shadow-[0_0_15px_rgba(99,102,241,0.8)] items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  </div>

                  <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 shadow-xl">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl sm:text-2xl font-black text-white">
                            {exp.role}
                          </h3>
                          {exp.isCurrent && (
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-950/80 border border-emerald-500/40 text-emerald-400">
                              Current Role
                            </span>
                          )}
                        </div>
                        <div className="text-sm font-semibold text-indigo-400 mt-1">
                          {exp.company} • <span className="text-slate-400 font-normal">{exp.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Projects Inside This Role */}
                    {exp.projects && exp.projects.length > 0 && (
                      <div className="space-y-4 my-6">
                        <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                          <Zap className="w-3.5 h-3.5 text-indigo-400" />
                          Key Commercial Platforms Engineered:
                        </div>
                        <div className="grid grid-cols-1 gap-3.5">
                          {exp.projects.map((proj, pIdx) => (
                            <div
                              key={pIdx}
                              className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800/90 hover:border-indigo-500/30 transition-colors"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                                  <span>{proj.name}</span>
                                </h4>
                                {proj.url && (
                                  <a
                                    href={proj.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 font-mono"
                                  >
                                    <span>Live</span>
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                )}
                              </div>
                              <ul className="space-y-1.5">
                                {proj.bulletPoints.map((bp, bpIdx) => (
                                  <li
                                    key={bpIdx}
                                    className="flex items-start gap-2 text-xs sm:text-sm text-slate-300"
                                  >
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>{bp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Additional Bullet Points */}
                    {exp.bulletPoints && (
                      <ul className="space-y-2 my-4">
                        {exp.bulletPoints.map((bp, bpIdx) => (
                          <li
                            key={bpIdx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-slate-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{bp}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-900 text-indigo-300 border border-indigo-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </MotionReveal>
              ))}
            </div>
          ) : (
            /* Banking & Finance Experience */
            <div className="space-y-8">
              {BANKING_EXPERIENCES.map((exp, idx) => (
                <MotionReveal
                  key={idx}
                  direction="up"
                  delay={idx * 120}
                  className="relative md:pl-20"
                >
                  <div className="hidden md:flex absolute left-[26px] top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.8)] items-center justify-center" />

                  <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 shadow-xl">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-black text-white">
                          {exp.role}
                        </h3>
                        <div className="text-sm font-semibold text-cyan-400 mt-1">
                          {exp.company}
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-2 mt-4">
                      {exp.bulletPoints.map((bp, bpIdx) => (
                        <li
                          key={bpIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </MotionReveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
