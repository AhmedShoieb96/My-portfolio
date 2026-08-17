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
} from "lucide-react";
import MotionReveal from "@/components/MotionReveal";

export default function About() {
  const PERSONAL_INFO = [
    {
      icon: MapPin,
      label: "Address",
      value: "Cairo, Egypt",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+201027212082",
      href: "tel:+201027212082",
    },
    {
      icon: Mail,
      label: "Email",
      value: "Ahmdshoiib@gmail.com",
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
    },
    {
      icon: Database,
      title: "Databases & BaaS Mastery",
      desc: "Architecting structured schemas in PostgreSQL and MongoDB, alongside Supabase for Auth and real-time listeners.",
    },
    {
      icon: Layout,
      title: "Modern Frontend (React & Vue)",
      desc: "Building dynamic, responsive interfaces using React.js, Vue 3, TypeScript, and modern utility CSS.",
    },
    {
      icon: Zap,
      title: "Performance & Clean Code",
      desc: "Adhering to strict modular clean-code standards, scalable design patterns, and lightning-fast asset loading.",
    },
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Slide Down) */}
        <MotionReveal direction="down" className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-white/[0.1] text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-3 font-mono">
            <Terminal className="w-3.5 h-3.5 text-zinc-400" />
            Background & Profile
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-silver">Me</span>
          </h2>
          <div className="w-12 h-0.5 bg-white/40 rounded-full mt-4" />
        </MotionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Bio Card (Slide from Left) */}
          <MotionReveal
            direction="left"
            delay={100}
            className="lg:col-span-7 flex flex-col justify-between glass-card p-8 sm:p-10 rounded-3xl border border-white/[0.08]"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-zinc-400 font-mono text-xs mb-4">
                <User className="w-3.5 h-3.5 text-white" />
                Full-Stack Profile
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-snug">
                Full-Stack Developer focused on intuitive user interfaces backed by scalable database architectures.
              </h3>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                A passionate <strong className="text-white">Full-Stack Developer</strong> with <strong className="text-white">+3 years of professional experience</strong> engineering robust web applications. Experienced across <strong className="text-zinc-200">Next.js 15, React, Vue.js, TypeScript</strong> on the client side, paired with <strong className="text-zinc-200">PostgreSQL, MongoDB, Supabase, and Node.js</strong> on the backend.
              </p>

              <p className="text-zinc-400 text-base leading-relaxed mb-8">
                My objective is to build clean, maintainable, and scalable codebases that elevate developer productivity and deliver seamless, delightful web experiences to users.
              </p>
            </div>

            {/* Personal Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-white/[0.08]">
              {PERSONAL_INFO.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 p-3 rounded-xl bg-zinc-900/60 border border-white/[0.06]"
                  >
                    <div className="p-2.5 rounded-lg bg-zinc-800 text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400 font-medium">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-semibold text-white hover:text-zinc-300 transition-colors"
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
                );
              })}
            </div>
          </MotionReveal>

          {/* Core Pillars (Slide from Right with Stagger) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <MotionReveal
                  key={idx}
                  direction="right"
                  delay={100 + idx * 120}
                  className="glass-card glass-card-hover p-6 rounded-2xl border border-white/[0.08] flex flex-col justify-center group"
                >
                  <div className="flex items-center gap-3.5 mb-2">
                    <div className="p-2.5 rounded-xl bg-white/[0.06] text-white border border-white/[0.1] group-hover:bg-white group-hover:text-black transition-colors duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-zinc-200 transition-colors">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed pl-1 font-normal">
                    {pillar.desc}
                  </p>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
