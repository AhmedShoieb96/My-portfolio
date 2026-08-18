"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Mail,
  ArrowRight,
  Download,
  Code2,
  Sparkles,
  Layers,
  CheckCircle2,
  Database,
  Terminal,
  Cpu,
  Zap,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import MotionReveal from "@/components/MotionReveal";

const ROLES = [
  "Full-Stack Web Developer",
  "Next.js 15 & Server Actions Specialist",
  "React & Vue.js Frontend Engineer",
  "PostgreSQL, MongoDB & Supabase Backend",
  "TypeScript & Scalable Architecture",
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState<"card" | "code">("card");

  useEffect(() => {
    const currentRole = ROLES[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 40 : 80);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <MotionReveal
            direction="left"
            delay={100}
            className="lg:col-span-7 flex flex-col items-start text-left z-10"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-indigo-500/30 text-slate-200 text-xs sm:text-sm font-medium mb-6 backdrop-blur-xl shadow-[0_0_20px_rgba(99,102,241,0.2)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>Available for Full-Stack Roles & High-Impact Projects</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white mb-4 leading-[1.08]">
              Hi, I&apos;m <span className="text-gradient-accent">Ahmed Shoieb</span>
            </h1>

            {/* Dynamic Typewriter Title */}
            <div className="flex items-center gap-2 text-lg sm:text-2xl lg:text-3xl font-semibold text-slate-300 mb-6 h-10">
              <span className="font-mono text-indigo-400 font-bold">&gt;</span>
              <span className="text-gradient-cyan">{displayText}</span>
              <span className="w-0.5 h-6 bg-indigo-400 animate-pulse" />
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-10 leading-relaxed font-normal">
              Full-Stack Developer crafting high-performance, resilient web architectures. Specializing in{" "}
              <span className="text-indigo-300 font-semibold underline decoration-indigo-500/40 underline-offset-4">
                Next.js 15, React, Vue.js, TypeScript
              </span>{" "}
              on the frontend, powered by{" "}
              <span className="text-cyan-300 font-semibold underline decoration-cyan-500/40 underline-offset-4">
                PostgreSQL, MongoDB, and Supabase
              </span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="relative group overflow-hidden flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_40px_rgba(99,102,241,0.7)] transition-all duration-300 hover:scale-[1.03] text-sm sm:text-base w-full sm:w-auto"
              >
                <span>Featured Works</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/Ahmed_Shoieb_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-semibold border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto backdrop-blur-xl shadow-sm hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                Download CV
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950/60 hover:bg-slate-900 text-slate-300 hover:text-white font-semibold border border-slate-800 hover:border-slate-700 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
              >
                Get In Touch
              </a>
            </div>

            {/* Social links & quick stats */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-800/80 w-full">
              <span className="text-xs font-mono uppercase text-indigo-400 font-semibold tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://github.com/AhmedShoieb96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-950/30 transition-all shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmed-shoieb-407909139"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-950/30 transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:Ahmdshoiib@gmail.com"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-950/30 transition-all shadow-sm"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-3 ml-auto text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-950/40 border border-indigo-500/30 text-indigo-300">
                  <Zap className="w-3.5 h-3.5 text-indigo-400" />
                  Full-Stack Architecture
                </span>
              </div>
            </div>
          </MotionReveal>

          {/* Right Column: Interactive Profile Card / Live IDE Switcher */}
          <MotionReveal
            direction="right"
            delay={200}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Ambient Background Glow behind Card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-75 animate-pulse-glow" />

            <div className="relative w-full max-w-md rounded-3xl bg-slate-950/90 border border-indigo-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-2xl">
              {/* Window Header with Tabs */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1 bg-slate-950 px-1.5 py-0.5 rounded-lg border border-slate-800 text-xs">
                  <button
                    onClick={() => setActiveTab("card")}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      activeTab === "card"
                        ? "bg-indigo-600 text-white font-medium shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 ${
                      activeTab === "code"
                        ? "bg-indigo-600 text-white font-medium shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Code2 className="w-3 h-3" />
                    developer.ts
                  </button>
                </div>
                <span className="text-[11px] font-mono text-indigo-400/80">
                  v3.2.0
                </span>
              </div>

              {/* Tab 1: Profile Card */}
              {activeTab === "card" ? (
                <div className="p-6">
                  {/* Avatar Frame with animated conic ring */}
                  <div className="relative w-48 h-56 mx-auto mb-5 rounded-2xl p-[2px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 shadow-[0_0_30px_rgba(99,102,241,0.3)] group">
                    <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-slate-900">
                      <Image
                        src="/images/profile_photo.jpg"
                        alt="Ahmed Shoieb"
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        priority
                      />
                    </div>
                  </div>

                  {/* Profile info */}
                  <div className="text-center mb-5">
                    <h3 className="text-xl font-black text-white mb-0.5">
                      Ahmed Shoieb
                    </h3>
                    <p className="text-xs font-mono text-indigo-300 font-medium">
                      Full-Stack Web Developer
                    </p>
                    <p className="text-xs text-slate-400 mt-1 flex items-center justify-center gap-1">
                      <span>Cairo, Egypt</span>
                      <span className="text-indigo-400">•</span>
                      <span>Remote / On-site</span>
                    </p>
                  </div>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-indigo-500/20 text-center hover:border-indigo-500/40 transition-colors">
                      <div className="text-lg font-black text-white bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                        +3 Years
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium">Experience</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-indigo-500/20 text-center hover:border-indigo-500/40 transition-colors">
                      <div className="text-lg font-black text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Full-Stack
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium">Next.js & SQL/NoSQL</div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Tab 2: Live Code IDE Simulator */
                <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto bg-slate-950 text-slate-300 min-h-[360px] flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="text-slate-500">// TypeScript Full-Stack Dev Definition</div>
                    <div>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-yellow-300">developer</span>:{" "}
                      <span className="text-cyan-400">DeveloperProfile</span> = &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-indigo-300">name</span>: <span className="text-emerald-300">&quot;Ahmed Shoieb&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-indigo-300">role</span>: <span className="text-emerald-300">&quot;Full-Stack Engineer&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-indigo-300">frontend</span>: [<span className="text-emerald-300">&quot;Next.js 15&quot;</span>, <span className="text-emerald-300">&quot;React&quot;</span>, <span className="text-emerald-300">&quot;Vue.js&quot;</span>, <span className="text-emerald-300">&quot;TypeScript&quot;</span>],
                    </div>
                    <div className="pl-4">
                      <span className="text-indigo-300">backend</span>: [<span className="text-emerald-300">&quot;PostgreSQL&quot;</span>, <span className="text-emerald-300">&quot;MongoDB&quot;</span>, <span className="text-emerald-300">&quot;Supabase&quot;</span>, <span className="text-emerald-300">&quot;REST APIs&quot;</span>],
                    </div>
                    <div className="pl-4">
                      <span className="text-indigo-300">status</span>: <span className="text-emerald-300">&quot;Ready for Impact 🚀&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-indigo-300">hireable</span>: <span className="text-amber-400">true</span>,
                    </div>
                    <div>&#125;;</div>
                    <div className="pt-2 text-indigo-400">
                      developer.<span className="text-yellow-300">deployHighPerformanceApp</span>();
                    </div>
                  </div>
                  <div className="mt-4 p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-[11px] text-indigo-200 flex items-center justify-between">
                    <span>⚡ Build: Next.js 15 (Turbopack)</span>
                    <span className="text-emerald-400 font-bold">✓ Ready</span>
                  </div>
                </div>
              )}
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
