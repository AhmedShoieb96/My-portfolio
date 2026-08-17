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
      "Next.js",
      "Redux Toolkit",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Payment Gateways (Tamara, Apple Pay, WalaaOne, Visa)",
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
        {/* Section Header (Slide Down) */}
        <MotionReveal direction="down" className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-white/[0.1] text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-3 font-mono">
            <Briefcase className="w-3.5 h-3.5 text-zinc-400" />
            Verified Career Record
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient-silver">Experience</span>
          </h2>
          <div className="w-12 h-0.5 bg-white/40 rounded-full mt-4" />
        </MotionReveal>

        {/* Tab Toggle (Scale In) */}
        <MotionReveal direction="scale" delay={100} className="flex items-center justify-center mb-14">
          <div className="inline-flex p-1 rounded-2xl bg-zinc-900 border border-white/[0.08]">
            <button
              onClick={() => setActiveTab("tech")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "tech"
                  ? "bg-white text-black shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Code2 className="w-4 h-4" />
              Software Engineering ({TECH_EXPERIENCES.length})
            </button>
            <button
              onClick={() => setActiveTab("banking")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "banking"
                  ? "bg-white text-black shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Building2 className="w-4 h-4" />
              Banking & Finance ({BANKING_EXPERIENCES.length})
            </button>
          </div>
        </MotionReveal>

        {/* Tech Experience Timeline */}
        {activeTab === "tech" && (
          <div className="relative max-w-5xl mx-auto space-y-12">
            <div className="absolute left-4 sm:left-8 top-6 bottom-6 w-[1px] bg-gradient-to-b from-white/40 via-white/10 to-transparent" />

            {TECH_EXPERIENCES.map((exp, idx) => (
              <MotionReveal
                key={idx}
                direction={idx % 2 === 0 ? "left" : "right"}
                delay={idx * 150}
                className="relative pl-12 sm:pl-20"
              >
                {/* Timeline Node */}
                <div className="absolute left-2 sm:left-6 top-1.5 -translate-x-1/2 w-8 h-8 rounded-full bg-black border border-white/40 flex items-center justify-center text-white shadow-lg">
                  <Code2 className="w-3.5 h-3.5" />
                </div>

                {/* Card */}
                <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-white/[0.08]">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/[0.08]">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        {exp.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-white/[0.15] text-white text-xs font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            Current Role
                          </span>
                        )}
                        <span className="text-xs font-mono text-zinc-400">
                          {exp.location}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <div className="text-base font-semibold text-zinc-300 mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 bg-zinc-900 px-3.5 py-1.5 rounded-xl border border-white/[0.08] text-zinc-300 text-xs font-mono self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-white" />
                      {exp.period}
                    </div>
                  </div>

                  {/* If projects breakdown (like Creative Mind) */}
                  {exp.projects && (
                    <div className="space-y-6 mb-8">
                      {exp.projects.map((proj, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-5 rounded-2xl bg-zinc-900/60 border border-white/[0.06]"
                        >
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <h4 className="text-base font-bold text-white flex items-center gap-2">
                              <span>{proj.name}</span>
                            </h4>
                            {proj.url && (
                              <a
                                href={proj.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                              >
                                <span>Live App</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>

                          <ul className="space-y-2">
                            {proj.bulletPoints.map((pt, ptIdx) => (
                              <li
                                key={ptIdx}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-1" />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bullet points for single role (ITC Tanta) */}
                  {exp.bulletPoints && (
                    <div className="mb-8">
                      <ul className="space-y-2.5">
                        {exp.bulletPoints.map((pt, ptIdx) => (
                          <li
                            key={ptIdx}
                            className="flex items-start gap-2.5 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal"
                          >
                            <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-1" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="pt-4 border-t border-white/[0.06]">
                    <div className="text-xs font-mono uppercase text-zinc-400 mb-3 tracking-wider">
                      Technologies & Tools:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-zinc-900 text-zinc-300 border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        )}

        {/* Banking Experience Timeline */}
        {activeTab === "banking" && (
          <div className="relative max-w-5xl mx-auto space-y-8">
            <div className="absolute left-4 sm:left-8 top-6 bottom-6 w-[1px] bg-gradient-to-b from-white/40 via-white/10 to-transparent" />

            {BANKING_EXPERIENCES.map((exp, idx) => (
              <MotionReveal
                key={idx}
                direction={idx % 2 === 0 ? "left" : "right"}
                delay={idx * 120}
                className="relative pl-12 sm:pl-20"
              >
                {/* Timeline Node */}
                <div className="absolute left-2 sm:left-6 top-1.5 -translate-x-1/2 w-8 h-8 rounded-full bg-black border border-white/40 flex items-center justify-center text-white shadow-lg">
                  <Building2 className="w-3.5 h-3.5" />
                </div>

                <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-white/[0.08]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/[0.08]">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-zinc-300 mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 bg-zinc-900 px-3.5 py-1.5 rounded-xl border border-white/[0.08] text-zinc-300 text-xs font-mono self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-white" />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.bulletPoints.map((pt, ptIdx) => (
                      <li
                        key={ptIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
