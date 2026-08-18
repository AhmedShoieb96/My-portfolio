"use client";

import {
  ArrowUp,
  Mail,
  Heart,
  Code2,
  FileText,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#030712] border-t border-indigo-500/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 text-lg font-bold tracking-tight mb-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full blur-sm opacity-60" />
                <div className="relative">
                  <BrandLogo size={36} />
                </div>
              </div>
              <span className="font-bold text-white text-lg">
                Ahmed Shoieb
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6 font-normal">
              Full-Stack Web Developer dedicated to engineering high-performance, resilient web applications and database systems.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/AhmedShoieb96"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-950/30 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-shoieb-407909139"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-950/30 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:Ahmdshoiib@gmail.com"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-950/30 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="/Ahmed_Shoieb_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-950/30 transition-all"
                aria-label="Resume"
                title="Download Resume"
              >
                <FileText className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <div className="text-xs font-mono font-bold uppercase text-indigo-400 tracking-wider mb-4">
                Navigation
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-white transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-white transition-colors">
                    Experience
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-mono font-bold uppercase text-indigo-400 tracking-wider mb-4">
                Showcase
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
                <li>
                  <a href="#education" className="hover:text-white transition-colors">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/Ahmed_Shoieb_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 hover:underline transition-all font-medium"
                  >
                    Download CV
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Status & Scroll to top */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold uppercase text-indigo-400 tracking-wider mb-4">
                Status
              </div>
              <div className="text-xs sm:text-sm text-slate-400 space-y-1.5">
                <p>Cairo, Egypt (UTC+2)</p>
                <p className="text-emerald-400 flex items-center gap-2 text-xs font-medium pt-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  Open to Full-Stack Opportunities
                </p>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer group"
            >
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-indigo-500/40 transition-colors">
                <ArrowUp className="w-4 h-4 text-indigo-400" />
              </div>
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Ahmed Shoieb. All rights reserved.
          </div>
          <div className="flex items-center gap-1 font-mono text-slate-400">
            Crafted with Next.js 15, TypeScript & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
