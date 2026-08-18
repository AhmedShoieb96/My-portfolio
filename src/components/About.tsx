"use client";

import { useState, useEffect } from "react";
import {
  User,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Code,
  Layout,
  Zap,
  CheckCircle2,
  Sparkles,
  Database,
  Server,
  Terminal,
  Clock,
  Copy,
  Check,
} from "lucide-react";
import MotionReveal from "@/components/MotionReveal";

export default function About() {
  const [cairoTime, setCairoTime] = useState("");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Cairo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const timeString = new Intl.DateTimeFormat("en-US", options).format(new Date());
      setCairoTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const PERSONAL_INFO = [
    {
      icon: MapPin,
      label: "Location",
      value: "Cairo, Egypt",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+201027212082",
      copyable: true,
      href: "tel:+201027212082",
    },
    {
      icon: Mail,
      label: "Email",
      value: "Ahmdshoiib@gmail.com",
      copyable: true,
      href: "mailto:Ahmdshoiib@gmail.com",
    },
    {
      icon: Calendar,
      label: "Birthday",
      value: "15 Jan 1996",
    },
  ];

  const PILLARS = [
    {
      icon: Server,
      title: "Full-Stack Web Architecture",
      desc: "Developing end-to-end web applications with Next.js 15, React Server Components (RSC), Server Actions, and REST API routes.",
      color: "from-indigo-500/20 to-purple-500/10 border-indigo-500/30 text-indigo-400",
    },
    {
      icon: Database,
      title: "Databases & BaaS Mastery",
      desc: "Architecting structured schemas in PostgreSQL and MongoDB, alongside Supabase for Auth and real-time listeners.",
      color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400",
    },
    {
      icon: Layout,
      title: "Modern Frontend (React & Vue)",
      desc: "Building dynamic, responsive interfaces using React.js, Vue 3, TypeScript, and modern utility CSS.",
      color: "from-pink-500/20 to-rose-500/10 border-pink-500/30 text-pink-400",
    },
    {
      icon: Zap,
      title: "Performance & Clean Code",
      desc: "Adhering to strict modular clean-code standards, scalable design patterns, and lightning-fast asset loading.",
      color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400",
    },
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionReveal direction="down" className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3 font-mono shadow-[0_0_15px_rgba(99,102,241,0.15)]">
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            Background & Profile
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            About <span className="text-gradient-accent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-4" />
        </MotionReveal>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Bento Card 1: Main Bio */}
          <MotionReveal
            direction="left"
            delay={100}
            className="lg:col-span-7 flex flex-col justify-between glass-card p-8 sm:p-10 rounded-3xl border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 text-indigo-400 font-mono text-xs font-semibold">
                  <User className="w-4 h-4 text-indigo-400" />
                  Full-Stack Profile
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-mono">
                  +3 Years Exp
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 leading-snug">
                Full-Stack Developer engineering intuitive interfaces backed by high-concurrency database systems.
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                A dedicated <strong className="text-white">Full-Stack Web Developer</strong> with a solid track record building scalable commercial platforms. Proficient in modern architectures using <strong className="text-indigo-300">Next.js 15, React, Vue.js, TypeScript</strong> on frontend systems, combined with <strong className="text-cyan-300">PostgreSQL, MongoDB, Supabase, and Node.js</strong> on the backend.
              </p>

              <p className="text-slate-400 text-base leading-relaxed mb-8">
                My core focus is delivering maintainable clean code, seamless user experiences, rock-solid security, and blazingly fast response times.
              </p>
            </div>

            {/* Personal Details Grid with Copy actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-slate-800">
              {PERSONAL_INFO.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-indigo-500/30 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-indigo-950/50 border border-indigo-500/20 text-indigo-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] text-slate-400 font-medium font-mono">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-semibold text-white hover:text-indigo-300 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-sm font-semibold text-white">
                            {item.value}
                          </div>
                        )}
                      </div>
                    </div>

                    {item.copyable && (
                      <button
                        onClick={() => copyToClipboard(item.value, item.label)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        title={`Copy ${item.label}`}
                      >
                        {copiedField === item.label ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </MotionReveal>

          {/* Right Column: Live Status + Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Bento Card 2: Live Cairo Timezone & Availability Badge */}
            <MotionReveal
              direction="right"
              delay={100}
              className="glass-card p-6 rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-slate-950/80 shadow-xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-300 font-semibold">
                  <Clock className="w-4 h-4 text-indigo-400" />
                  Cairo, Egypt (UTC+2)
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  Available for Hire
                </div>
              </div>

              <div className="text-2xl sm:text-3xl font-mono font-black text-white tracking-wider mb-2">
                {cairoTime || "12:00:00 PM"}
              </div>
              <p className="text-xs text-slate-400">
                Ready for high-impact full-time, freelance, or remote positions worldwide.
              </p>
            </MotionReveal>

            {/* Bento Card 3: Four Pillars */}
            <div className="grid grid-cols-1 gap-3.5">
              {PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <MotionReveal
                    key={idx}
                    direction="right"
                    delay={150 + idx * 100}
                    className={`glass-card glass-card-hover p-4 sm:p-5 rounded-2xl border ${pillar.color} flex items-start gap-4 group`}
                  >
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  </MotionReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
