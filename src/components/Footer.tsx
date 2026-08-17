"use client";

import {
  ArrowUp,
  Mail,
  Heart,
  Code2,
  FileText,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 text-lg font-bold tracking-tight mb-4">
              <BrandLogo size={36} />
              <span className="font-mono text-white">
                Ahmed Shoieb
              </span>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-6 font-normal">
              Full-Stack Web Developer dedicated to engineering high-performance web applications and resilient database systems.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/AhmedShoieb96"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/30 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-shoieb-407909139"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/30 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:Ahmdshoiib@gmail.com"
                className="p-2.5 rounded-xl bg-zinc-900 border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/30 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="/Ahmed_Shoieb_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/30 transition-all"
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
              <div className="text-xs font-mono font-bold uppercase text-zinc-400 tracking-wider mb-4">
                Navigation
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
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
              <div className="text-xs font-mono font-bold uppercase text-zinc-400 tracking-wider mb-4">
                Showcase
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
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
                    className="text-white hover:underline transition-all font-medium"
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
              <div className="text-xs font-mono font-bold uppercase text-zinc-400 tracking-wider mb-4">
                Status
              </div>
              <div className="text-xs sm:text-sm text-zinc-400 space-y-1.5">
                <p>Cairo, Egypt</p>
                <p className="text-white flex items-center gap-1.5 text-xs font-medium pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Open to Full-Stack Opportunities
                </p>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer group"
            >
              <div className="p-2 rounded-lg bg-zinc-900 border border-white/[0.08] group-hover:border-white/20 transition-colors">
                <ArrowUp className="w-4 h-4" />
              </div>
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} Ahmed Shoieb. All rights reserved.
          </div>
          <div className="flex items-center gap-1 font-mono">
            Crafted with Next.js 15, TypeScript & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
