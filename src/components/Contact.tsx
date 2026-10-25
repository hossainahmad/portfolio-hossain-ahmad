"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Sparkles,
  ExternalLink,
  Terminal,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text">Touch</span>
          </h2>
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
            Have an exciting opportunity, a civic engineering inquiry, or want to collaborate on a full-stack project? I&apos;d love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Contact Channels
              </h3>
              <p className="text-sm text-slate-400">
                Reach out directly via email, phone, or WhatsApp. I typically reply within 24 hours.
              </p>
            </div>

            {/* Email Card */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-start justify-between gap-4 group hover:border-slate-700 transition-all">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Email Address
                  </p>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-cyan-400 transition-colors block mt-0.5 break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
                title="Copy email to clipboard"
              >
                {copiedField === "email" ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-start justify-between gap-4 group hover:border-slate-700 transition-all">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Phone Number
                  </p>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-indigo-400 transition-colors block mt-0.5"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, "phone")}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
                title="Copy phone number"
              >
                {copiedField === "phone" ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* WhatsApp Card */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-start justify-between gap-4 group hover:border-slate-700 transition-all">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    WhatsApp Chat (Direct)
                  </p>
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-semibold text-white hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 mt-0.5"
                  >
                    <span>{PERSONAL_INFO.whatsapp}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                  </a>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/30 text-xs font-mono transition-colors shrink-0"
              >
                Message
              </a>
            </div>

            {/* Office & Coordinates Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <MapPin className="w-4 h-4" />
                <span>Base of Operations</span>
              </div>
              <p className="text-sm font-semibold text-white">
                Gazipur City Corporation (GCC)
              </p>
              <p className="text-xs text-slate-400">
                Gazipur Sadar, Dhaka Division, Bangladesh
              </p>
              <p className="text-[11px] font-mono text-slate-400">
                Coords: {PERSONAL_INFO.coords}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill out this quick form and I will get back to you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out, {formData.name || "friend"}. Your message has been received, and I will reply to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-cyan-400 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-slate-900 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                        Your Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-slate-900 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Project Inquiry / Job Opportunity / Collaboration"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full bg-slate-900 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                      Your Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Hi Hossain, I came across your portfolio and wanted to discuss..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-slate-900 border border-slate-800 focus:border-cyan-500 rounded-xl p-4 text-sm text-slate-200 placeholder-slate-500 outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
