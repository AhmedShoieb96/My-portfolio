"use client";

import { useState, useEffect } from "react";
import { Menu, X, FileText, Send, ArrowUpRight } from "lucide-react";

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
      const scrollPosition = window.scrollY + 120;

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
          ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3.5"
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
            <BrandLogo size={38} />
            <span className="font-mono text-white group-hover:text-zinc-300 transition-colors">
              Ahmed Shoieb
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-950/80 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/[0.08] shadow-lg">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-white text-black shadow-sm font-semibold"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
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
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl text-zinc-300 bg-zinc-900/80 hover:bg-zinc-800 border border-white/[0.08] hover:border-white/20 transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-300" />
              Resume
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl text-black bg-white hover:bg-zinc-200 shadow-sm transition-all duration-200 hover:scale-[1.02]"
            >
              <Send className="w-3.5 h-3.5" />
              Contact
            </a>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="/Ahmed_Shoieb_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-white/[0.08] text-white text-xs flex items-center gap-1 font-mono"
            >
              <FileText className="w-3.5 h-3.5" />
              CV
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-zinc-900 border border-white/[0.08] text-zinc-300 hover:text-white transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-black/95 backdrop-blur-2xl border-b border-white/[0.1] shadow-2xl p-6 flex flex-col gap-2.5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                activeSection === link.href.substring(1)
                  ? "bg-white text-black font-semibold"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-2">
            <a
              href="/Ahmed_Shoieb_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center rounded-xl bg-zinc-900 text-white font-medium flex items-center justify-center gap-2 border border-white/[0.1]"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center rounded-xl bg-white text-black font-semibold flex items-center justify-center gap-2"
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
