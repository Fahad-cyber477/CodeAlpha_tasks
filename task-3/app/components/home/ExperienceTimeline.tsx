"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface TimelineEvent {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  tags: string[];
}

const ExperienceTimeline = () => {
  const experiences: TimelineEvent[] = [
    {
      period: "2024 - Present",
      role: "Frontend Engineer & Founder",
      company: "Apex Academy LMS & Web Solutions",
      location: "Bahawalpur, Pakistan (Remote)",
      description: "Designed and developed custom web solutions including full-featured Academy Learning Management Systems and interactive client platforms. Engineered performant single-page applications utilizing Next.js, React, Tailwind CSS, and optimized global states using Zustand and Redux Toolkit.",
      tags: ["Next.js", "React.js", "Zustand", "Redux Toolkit", "Tailwind CSS"]
    },
    {
      period: "2023 - 2024",
      role: "Frontend Web Developer",
      company: "Local & Contractual Projects",
      location: "Bahawalpur, Pakistan",
      description: "Collaborated with local clients to deliver modern e-commerce stores and lawyer management web applications. Focused on converting complex design wireframes into responsive, pixel-perfect, and accessible user interfaces while optimizing bundle sizes and image delivery.",
      tags: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs", "Git"]
    }
  ];

  return (
    <section className="py-24 bg-background border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4 mb-20 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="text-amber-400 font-bold tracking-[0.4em] uppercase text-[10px]">Professional Path</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter uppercase">
            Work <span className="opacity-40">Journey.</span>
          </h2>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative pl-8 md:pl-12 group"
            >
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-955 border-2 border-white/20 group-hover:border-amber-400 group-hover:bg-amber-400 transition-all duration-500" />

              <div className="absolute left-[-110px] md:left-[-140px] top-1 hidden md:block w-28 text-right">
                <span className="text-xs font-black tracking-widest text-foreground/40 group-hover:text-amber-400 transition-colors duration-300 uppercase">
                  {exp.period}
                </span>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-black tracking-widest text-amber-400 uppercase md:hidden block">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-amber-400 transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-foreground/50 font-medium">
                    <span className="text-foreground/80">{exp.company}</span>
                    <span className="opacity-30">•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-sm text-foreground/60 leading-relaxed max-w-3xl">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] font-bold text-foreground/50 uppercase tracking-wider bg-white/5 border border-white/5 rounded-full group-hover:border-amber-400/20 group-hover:text-foreground/80 transition-all duration-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;