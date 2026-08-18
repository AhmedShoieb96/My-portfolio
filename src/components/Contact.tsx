"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  MessageSquare,
  MessageCircle,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import MotionReveal from "@/components/MotionReveal";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = (type: "email" | "phone", text: string) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("https://formsubmit.co/ajax/Ahmdshoiib@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `New Portfolio Message: ${formData.subject || "General Inquiry"}`,
          message: formData.message,
          _template: "table",
        }),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setFormSubmitted(false), 7000);
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "Unable to send message right now. Please try via WhatsApp or direct email.");
      }
    } catch (err) {
      setErrorMessage("Network error occurred. You can email directly at Ahmdshoiib@gmail.com or via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionReveal direction="down" className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3 font-mono shadow-[0_0_15px_rgba(99,102,241,0.15)]">
            <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Let&apos;s <span className="text-gradient-accent">Connect</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-4" />
        </MotionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contact Info & WhatsApp Action */}
          <MotionReveal
            direction="left"
            delay={100}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Let&apos;s build something extraordinary together.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                Currently open to full-time roles, high-impact freelance projects, and scalable technical consulting.
              </p>

              {/* Direct Info Cards with Click to Copy */}
              <div className="space-y-3.5">
                {/* Email */}
                <div className="glass-card p-4 rounded-2xl border border-slate-800 hover:border-indigo-500/40 flex items-center justify-between group transition-all">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-indigo-950/60 text-indigo-400 border border-indigo-500/30">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono">Email Address</div>
                      <a
                        href="mailto:Ahmdshoiib@gmail.com"
                        className="text-sm sm:text-base font-semibold text-white hover:text-indigo-300 transition-colors"
                      >
                        Ahmdshoiib@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy("email", "Ahmdshoiib@gmail.com")}
                    className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone & WhatsApp */}
                <div className="glass-card p-4 rounded-2xl border border-slate-800 hover:border-cyan-500/40 flex items-center justify-between group transition-all">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono">Phone & WhatsApp</div>
                      <a
                        href="tel:+201027212082"
                        className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors"
                      >
                        +20 102 721 2082
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy("phone", "+201027212082")}
                    className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Copy Phone"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="glass-card p-4 rounded-2xl border border-slate-800 flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-900 text-slate-300 border border-slate-700">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Base Location</div>
                    <div className="text-sm font-semibold text-white">
                      Cairo, Egypt • (Open to Remote / Relocation)
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp Action Button */}
              <div className="pt-4">
                <a
                  href="https://wa.me/201027212082"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat directly on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-6 border-t border-slate-800">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Professional Profiles:
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/AhmedShoieb96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/40 text-xs font-semibold transition-all shadow-sm"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmed-shoieb-407909139"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/40 text-xs font-semibold transition-all shadow-sm"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </MotionReveal>

          {/* Right Column: Contact Terminal Form */}
          <MotionReveal
            direction="right"
            delay={200}
            className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-slate-800/90 shadow-2xl relative"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-indigo-400">
                contact_dispatch.sh
              </span>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Message Transmitted Successfully! 🚀</h4>
                <p className="text-sm text-slate-300">
                  Thank you for reaching out. The message was dispatched to <strong>Ahmdshoiib@gmail.com</strong>. I will get back to you shortly!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:border-indigo-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:border-indigo-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:border-indigo-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project, timeline, or requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Message...</span>
                    </span>
                  ) : (
                    <>
                      <span>Send Transmission</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
