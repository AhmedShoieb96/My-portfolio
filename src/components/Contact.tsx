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
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import MotionReveal from "@/components/MotionReveal";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFormSubmitted(false), 5000);
    }, 900);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Slide Down) */}
        <MotionReveal direction="down" className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-white/[0.1] text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-3 font-mono">
            <MessageSquare className="w-3.5 h-3.5 text-zinc-400" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact <span className="text-gradient-silver">Me</span>
          </h2>
          <div className="w-12 h-0.5 bg-white/40 rounded-full mt-4" />
        </MotionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contact Info & Socials (Slide from Left) */}
          <MotionReveal
            direction="left"
            delay={100}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Let&apos;s collaborate on your next project.
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                Currently open to full-time roles, freelance full-stack contracts, and high-impact engineering opportunities.
              </p>

              {/* Direct Info Cards with Click to Copy */}
              <div className="space-y-3.5">
                {/* Email */}
                <div className="glass-card p-4 rounded-2xl border border-white/[0.08] flex items-center justify-between group">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-zinc-900 text-white border border-white/[0.08]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400 font-medium">Email Address</div>
                      <a
                        href="mailto:Ahmdshoiib@gmail.com"
                        className="text-sm sm:text-base font-semibold text-white hover:text-zinc-300 transition-colors"
                      >
                        Ahmdshoiib@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy("email", "Ahmdshoiib@gmail.com")}
                    className="p-2 rounded-lg bg-zinc-900 border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20 transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-white" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="glass-card p-4 rounded-2xl border border-white/[0.08] flex items-center justify-between group">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-zinc-900 text-white border border-white/[0.08]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400 font-medium">Phone / WhatsApp</div>
                      <a
                        href="tel:+201027212082"
                        className="text-sm sm:text-base font-semibold text-white hover:text-zinc-300 transition-colors"
                      >
                        +201027212082
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy("phone", "+201027212082")}
                    className="p-2 rounded-lg bg-zinc-900 border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20 transition-colors cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-white" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="glass-card p-4 rounded-2xl border border-white/[0.08] flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-zinc-900 text-white border border-white/[0.08]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-medium">Current Location</div>
                    <div className="text-sm sm:text-base font-semibold text-white">
                      Cairo, Egypt
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-6 border-t border-white/[0.08]">
              <div className="text-xs font-mono uppercase text-zinc-400 mb-3 tracking-wider">
                Follow & Connect:
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/ahmed-shoieb-407909139"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/[0.08] hover:border-white/20 transition-all font-medium text-xs sm:text-sm"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/AhmedShoieb96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/[0.08] hover:border-white/20 transition-all font-medium text-xs sm:text-sm"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </MotionReveal>

          {/* Right Column: Message Form (Slide from Right) */}
          <MotionReveal
            direction="right"
            delay={150}
            className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-white/[0.08]"
          >
            <h3 className="text-xl font-bold text-white mb-6">
              Send a Direct Message
            </h3>

            {formSubmitted && (
              <div className="mb-6 p-4 rounded-2xl bg-zinc-900 border border-white/20 text-white text-sm flex items-center gap-3">
                <Check className="w-4 h-4 text-white shrink-0" />
                <span>
                  Thank you! Your message has been received. I will reach out shortly.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
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
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/[0.08] text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
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
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/[0.08] text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="e.g. Full-Stack Project Inquiry / Job Role"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/[0.08] text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                  Your Message *
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Write your project details or inquiries here..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/[0.08] text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
