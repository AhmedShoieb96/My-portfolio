import Image from "next/image";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  Sparkles,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import MotionReveal from "@/components/MotionReveal";

export default function Education() {
  const COURSES = [
    {
      institution: "Ministry of Communications and I.T (MCIT)",
      program: "Digital Egypt Pioneers Initiative (DEPI)",
      period: "04/2024 - 10/2024",
      location: "Cairo, Egypt",
      image: "/images/depi.png",
      description:
        "Comprehensive training initiative covering advanced Front-End engineering, real-world web application development, collaborative software lifecycle, and agile workflows.",
      tag: "Specialized Diploma",
    },
    {
      institution: "Arab Academy for Science, Technology & Maritime",
      program: "Oracle SQL | PL SQL",
      period: "03/2018 - 07/2018",
      location: "Alexandria, Egypt",
      image: "/images/academy.png",
      description:
        "In-depth relational database fundamentals, data modeling, SQL queries optimization, stored procedures, triggers, and PL/SQL scripting.",
      tag: "Database Certification",
    },
  ];

  return (
    <section id="education" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionReveal direction="down" className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3 font-mono shadow-[0_0_15px_rgba(99,102,241,0.15)]">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
            Academic & Certifications
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Education & <span className="text-gradient-accent">Diplomas</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-4" />
        </MotionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Degree Card (University) */}
          <MotionReveal
            direction="left"
            delay={100}
            className="lg:col-span-5 glass-card glass-card-hover p-8 rounded-3xl border border-slate-800 hover:border-indigo-500/40 flex flex-col justify-between h-full shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 font-mono">
                  <GraduationCap className="w-4 h-4 text-indigo-400" />
                  University Degree
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                  Grade: Very Good
                </span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-900 border border-slate-700 shrink-0">
                  <Image
                    src="/images/images.jfif"
                    alt="Tanta University"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    Bachelor of Commerce
                  </h3>
                  <div className="text-sm font-medium text-indigo-300 mt-1">
                    Major: Business Information Systems (BIS)
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Tanta University, Egypt
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                Focused on information systems, computer science foundations, business logic integration, relational database management, and modern software development principles.
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-slate-800 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                2014 - 2018
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                Tanta, Egypt
              </div>
            </div>
          </MotionReveal>

          {/* Professional Diplomas */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <MotionReveal direction="right" delay={100} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 font-mono mb-1">
              <Award className="w-4 h-4 text-indigo-400" />
              Specialized Diplomas & Certifications
            </MotionReveal>

            {COURSES.map((course, idx) => (
              <MotionReveal
                key={idx}
                direction="right"
                delay={150 + idx * 150}
                className="glass-card glass-card-hover p-6 sm:p-7 rounded-3xl border border-slate-800 hover:border-cyan-500/40 flex flex-col sm:flex-row gap-5 items-start shadow-xl"
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-slate-900 border border-slate-700 shrink-0 p-2 flex items-center justify-center">
                  <Image
                    src={course.image}
                    alt={course.institution}
                    width={56}
                    height={56}
                    className="object-contain max-h-12 max-w-12"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 font-mono">
                      {course.tag}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {course.period}
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1">
                    {course.program}
                  </h4>
                  <div className="text-sm font-medium text-slate-300 mb-3">
                    {course.institution} • <span className="text-slate-400 text-xs">{course.location}</span>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {course.description}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
