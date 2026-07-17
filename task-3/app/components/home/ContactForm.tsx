"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, setIsPending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const WHATSAPP_NUMBER = "923034002782";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Fahad,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect%20with%20you!`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);

    const SERVICE_ID = "service_tn3i5rj";
    const TEMPLATE_ID = "template_ixnshuj";
    const PUBLIC_KEY = "rChtvEGVhMdXuSL6U";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      phone: "Not Provided",
      time: new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" }),
      to_email: "fhasnain290@gmail.com"
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        toast.success('Message sent successfully! I will get back to you soon.', {
          style: {
            background: '#0f172a',
            color: '#f8fafc',
            border: '1px solid rgba(251, 191, 36, 0.3)',
          },
          iconTheme: {
            primary: '#fbbf24',
            secondary: '#0f172a',
          },
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        toast.error('Failed to send message. Please try again or email directly.', {
          style: {
            background: '#0f172a',
            color: '#f8fafc',
            border: '1px solid rgba(239, 68, 68, 0.3)',
          }
        });
      })
      .finally(() => {
        setIsPending(false);
      });
  };

  return (
    <section id="contact" className="py-24 bg-background border-t border-white/15 overflow-hidden">
      <Toaster position="bottom-center" reverseOrder={false} />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                <span className="text-amber-400 font-bold tracking-[0.3em] uppercase text-[9px]">Get In Touch</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter uppercase leading-none">
                Let's <span className="opacity-30">Connect.</span>
              </h2>
            </div>
            
            <p className="text-sm text-foreground/50 leading-relaxed max-w-sm mx-auto lg:mx-0">
              Have a project in mind, an opportunity, or just want to say hello? Drop a message, and I will get back to you as soon as possible.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
              <a 
                href="https://github.com/Fahad-cyber477" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-lg border border-white/15 flex items-center justify-center text-foreground/40 hover:text-amber-400 hover:border-amber-400/40 hover:bg-slate-950/40 transition-all duration-350 cursor-pointer"
              >
                <FaGithub className="w-4.5 h-4.5" />
              </a>
              <a 
                href="mailto:fhasnain290@gmail.com" 
                className="w-10 h-10 rounded-lg border border-white/15 flex items-center justify-center text-foreground/40 hover:text-amber-400 hover:border-amber-400/40 hover:bg-slate-950/40 transition-all duration-350 cursor-pointer"
              >
                <FaEnvelope className="w-4.5 h-4.5" />
              </a>
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-lg border border-white/15 flex items-center justify-center text-foreground/40 hover:text-amber-400 hover:border-amber-400/40 hover:bg-slate-950/40 transition-all duration-350 cursor-pointer"
              >
                <FaWhatsapp className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-slate-950/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider block">Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Your name"
                    disabled={isPending}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950/40 border border-slate-300 dark:border-white/20 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/20 transition-all duration-300 disabled:opacity-50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider block">Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="hello@example.com"
                    disabled={isPending}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950/40 border border-slate-300 dark:border-white/20 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/20 transition-all duration-300 disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider block">Message</label>
                <textarea 
                  rows={5}
                  required
                  placeholder="Tell me about your project..."
                  disabled={isPending}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-950/40 border border-slate-300 dark:border-white/20 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/20 transition-all duration-300 resize-none disabled:opacity-50"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button 
                  type="submit"
                  disabled={isPending}
                  className="relative px-8 py-3 rounded-lg border border-white/20 overflow-hidden bg-slate-950 text-xs font-semibold uppercase tracking-[0.2em] text-foreground hover:text-slate-950 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center gap-2 group transition-colors duration-300"
                >
                  <span className="absolute inset-0 w-full h-full bg-amber-400 transition-transform duration-300 ease-out -translate-x-full group-hover:translate-x-0" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isPending ? (
                      <>
                        <svg className="animate-spin h-3.5 w-3.5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : "Send Message"}
                  </span>
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;