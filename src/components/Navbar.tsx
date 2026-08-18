"use client";

import { useState, useEffect } from "react";
import { Menu, X, FileText, Send, Sparkles } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030712]/80 backdrop-blur-2xl border-b border-indigo-500/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="group flex items-center gap-3 text-lg font-bold tracking-tight"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <BrandLogo size={38} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white group-hover:text-indigo-300 transition-colors text-base">
                Ahmed Shoieb
              </span>
              <span className="text-[10px] font-mono text-indigo-400/80 -mt-1">
                Full-Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation - Floating Island */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 backdrop-blur-xl px-4 py-1.5 rounded-full border border-indigo-500/20 shadow-inner">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)] font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/Ahmed_Shoieb_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl text-slate-300 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-indigo-500/50 transition-all duration-200 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              Resume
            </a>
            <a
              href="#contact"
              className="relative group overflow-hidden flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] transition-all duration-300 hover:scale-[1.03]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="/Ahmed_Shoieb_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs flex items-center gap-1 font-mono"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              CV
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#030712]/95 backdrop-blur-2xl border-b border-indigo-500/20 shadow-2xl p-6 flex flex-col gap-2.5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                activeSection === link.href.substring(1)
                  ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold shadow-md"
                  : "text-slate-300 hover:bg-slate-900 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="/Ahmed_Shoieb_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center rounded-xl bg-slate-900 text-white font-medium flex items-center justify-center gap-2 border border-slate-700"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold flex items-center justify-center gap-2 shadow-lg"
            >
              <Send className="w-4 h-4" />
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
