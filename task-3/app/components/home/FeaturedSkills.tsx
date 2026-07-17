"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaReact, FaGitAlt } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiTailwindcss, SiJavascript, SiRedux } from "react-icons/si";

const ZustandIcon = () => (
  <span className="text-xl font-bold tracking-tighter" title="Zustand">🐻</span>
);

const FeaturedSkills = () => {
  const topSkills = [
    { name: "Next.js 14", category: "Framework", level: 95, icon: <TbBrandNextjs className="w-7 h-7" /> },
    { name: "React.js", category: "Library", level: 96, icon: <FaReact className="w-7 h-7" /> },
    { name: "TypeScript", category: "Language", level: 90, icon: <SiTypescript className="w-6 h-6" /> },
    { name: "JavaScript", category: "Core", level: 94, icon: <SiJavascript className="w-6 h-6" /> },
    { name: "Tailwind CSS", category: "Styling", level: 98, icon: <SiTailwindcss className="w-7 h-7" /> },
    { name: "Zustand", category: "State", level: 92, icon: <ZustandIcon /> },
    { name: "Redux & RTK", category: "State / Query", level: 91, icon: <SiRedux className="w-7 h-7" /> },
    { name: "Git & GitHub", category: "Version Control", level: 93, icon: <FaGitAlt className="w-7 h-7" /> },
  ];

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    }),
  };

  return (
    <section className="py-16 bg-background border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20"
        >
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="text-amber-400 font-bold tracking-[0.4em] uppercase text-[10px]">Technical Core</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter uppercase">
              Main <span className="opacity-40">Stack.</span>
            </h2>
          </div>
          
          <a href="/skills" className="group flex items-center justify-center gap-4 cursor-pointer">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/50 group-hover:text-foreground transition-colors">
              Explore Full Universe
            </span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-amber-400 group-hover:border-amber-400 transition-all duration-500">
              <svg className="w-4 h-4 text-foreground group-hover:text-slate-950 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-y-12 gap-x-10 justify-items-center">
          {topSkills.map((skill, index) => {
            const radius = 45;
            const circumference = 2 * Math.PI * radius;
            const targetOffset = circumference - (skill.level / 100) * circumference;

            return (
              <motion.div
                key={skill.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUpVariant}
                className="flex flex-col items-center group cursor-default w-full max-w-[150px]"
              >
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle cx="50%" cy="50%" r="45%" className="fill-none stroke-white/5 stroke-[3px]" />
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      whileInView={{ strokeDashoffset: targetOffset }}
                      transition={{ duration: 1.8, delay: 0.3, ease: "circOut" }}
                      viewport={{ once: true }}
                      className="fill-none stroke-amber-400 stroke-[3px] rounded-full"
                    />
                  </svg>

                  <div className="absolute inset-[10%] rounded-full bg-slate-900/40 border border-white/5 backdrop-blur-sm flex flex-col items-center justify-center gap-1 group-hover:border-amber-400/30 transition-all duration-500">
                    <div className="text-amber-400/80 group-hover:text-amber-400 transition-colors duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-black text-foreground">{skill.level}%</span>
                  </div>
                </div>

                <div className="mt-6 text-center space-y-1">
                  <h3 className="text-sm font-bold text-foreground group-hover:text-amber-400 transition-colors line-clamp-1">{skill.name}</h3>
                  <p className="text-[9px] font-bold text-foreground/30 uppercase tracking-widest">{skill.category}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSkills;