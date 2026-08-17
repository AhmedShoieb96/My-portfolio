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
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import MotionReveal from "@/components/MotionReveal";

const ROLES = [
  "Full-Stack Web Developer",
  "Next.js 15 & Server Actions Specialist",
  "React & Vue.js Frontend Engineer",
  "PostgreSQL, MongoDB & Supabase Backend",
  "TypeScript & Clean Architecture",
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

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

    const timer = setTimeout(
      handleTyping,
      isDeleting ? 45 : 90
    );

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs (Slide from Left) */}
          <MotionReveal
            direction="left"
            delay={100}
            className="lg:col-span-7 flex flex-col items-start text-left z-10"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/[0.12] text-zinc-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-xl shadow-sm shimmer-badge">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Available for Full-Stack Roles & High-Impact Projects
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.08]">
              Ahmed Shoieb
            </h1>

            {/* Dynamic Typewriter Title */}
            <div className="flex items-center gap-2 text-lg sm:text-2xl lg:text-3xl font-semibold text-zinc-300 mb-6 h-10">
              <span className="font-mono text-zinc-500 font-normal">&gt;</span>
              <span className="text-gradient-white">{displayText}</span>
              <span className="w-0.5 h-6 bg-white animate-pulse" />
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mb-10 leading-relaxed font-normal">
              Full-Stack Developer crafting high-performance, resilient web architectures. Specializing in{" "}
              <span className="text-zinc-200 font-medium">Next.js 15, React, Vue.js, TypeScript</span> on the frontend, powered by{" "}
              <span className="text-zinc-200 font-medium">PostgreSQL, MongoDB, and Supabase</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold shadow-lg transition-all duration-300 hover:scale-[1.03] text-sm sm:text-base w-full sm:w-auto"
              >
                Featured Works
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/Ahmed_Shoieb_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-medium border border-white/[0.1] hover:border-white/30 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto backdrop-blur-xl"
              >
                <Download className="w-4 h-4 text-zinc-300" />
                Download CV
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-transparent hover:bg-zinc-900/60 text-zinc-300 hover:text-white font-medium border border-zinc-800 hover:border-zinc-700 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
              >
                Get In Touch
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/[0.08] w-full">
              <span className="text-xs font-mono uppercase text-zinc-500 tracking-wider">
                Profiles:
              </span>
              <a
                href="https://github.com/AhmedShoieb96"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/30 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-shoieb-407909139"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/30 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:Ahmdshoiib@gmail.com"
                className="p-2.5 rounded-xl bg-zinc-900 border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/30 transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </MotionReveal>

          {/* Right Column: Minimalist Profile Card (Slide from Right & Float) */}
          <MotionReveal
            direction="right"
            delay={200}
            className="lg:col-span-5 flex flex-col items-center justify-center relative animate-float"
          >
            <div className="relative group w-full max-w-sm rounded-3xl p-[1px] bg-gradient-to-b from-white/20 via-white/[0.05] to-transparent shadow-2xl">
              <div className="relative rounded-[23px] bg-zinc-950/90 backdrop-blur-2xl p-6 border border-white/[0.08] overflow-hidden">
                {/* Top header bar */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white" />
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">
                    portfolio.ahmed.ts
                  </span>
                </div>

                {/* Profile Image with subtle monochrome border */}
                <div className="relative w-56 h-64 mx-auto mb-6 rounded-2xl overflow-hidden border border-white/[0.12] bg-zinc-900 shadow-2xl group-hover:border-white/30 transition-colors duration-500">
                  <Image
                    src="/images/profile_photo.jpg"
                    alt="Ahmed Shoieb"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>

                {/* Info Text */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Ahmed Shoieb
                  </h3>
                  <p className="text-xs font-mono text-zinc-400">
                    Full-Stack Web Developer
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">
                    Cairo, Egypt • Remote / On-site
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/[0.08]">
                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-white/[0.06] text-center">
                    <div className="text-base font-bold text-white">+3 Years</div>
                    <div className="text-[11px] text-zinc-400">Experience</div>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-white/[0.06] text-center">
                    <div className="text-base font-bold text-white">Full-Stack</div>
                    <div className="text-[11px] text-zinc-400">Next.js & SQL/NoSQL</div>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
