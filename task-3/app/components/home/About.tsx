"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  return (
    <section id="about" className="py-10 bg-background transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16 overflow-hidden"
        >
          <span className="text-amber-400 font-bold tracking-[0.4em] uppercase text-[10px] whitespace-nowrap">
            About the Developer
          </span>
          <div className="w-full h-[1px] bg-slate-100 dark:bg-white/5"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          
          <motion.div variants={itemVariants} className="space-y-10">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-[1.1] tracking-tight">
              Driven by <span className="text-amber-400">Logic</span>,<br />
              Defined by <span className="opacity-50">Design.</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                I am a Frontend Developer & UI/UX Specialist focused on crafting digital solutions that are as functional as they are beautiful.
              </p>
              <p className="text-sm text-foreground/50 leading-relaxed max-w-md">
                With a background in modern web technologies, I combine technical rigor with a deep understanding of user behavior to build high-performance applications.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-2 border-l-2 border-amber-400 pl-6">
                <h4 className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Education</h4>
                <p className="text-sm font-semibold text-foreground">Bachelor's Degree</p>
                <p className="text-[11px] text-foreground/50">Islamia University of Bahawalpur</p>
              </div>
              <div className="space-y-2 border-l-2 border-amber-400 pl-6">
                <h4 className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Current Focus</h4>
                <p className="text-sm font-semibold text-foreground">Next.js Ecosystem</p>
                <p className="text-[11px] text-foreground/50">Scalable Web Architecture</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-amber-400 uppercase tracking-[0.3em]">Core Expertise</h4>
              <div className="grid grid-cols-2 gap-y-3">
                {["Frontend Engineering", "UI/UX Design", "Backend Systems", "API Integration", "State Management", "Performance Optimization"].map((skill) => (
                  <div key={skill} className="flex items-center gap-2 group cursor-default">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/10 group-hover:bg-amber-400 transition-colors"></span>
                    <span className="text-xs font-medium text-foreground/70 group-hover:text-foreground transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <a 
                href="/Fahad_CV.pdf" 
                download
                className="inline-flex items-center gap-6 group cursor-pointer"
              >
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-foreground group-hover:text-amber-400 transition-colors">
                  Download Full CV
                </span>
                <motion.div 
                  whileHover={{ y: 5 }}
                  className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:border-amber-400 group-hover:bg-amber-400 transition-all duration-300"
                >
                  <svg className="w-4 h-4 text-foreground group-hover:text-slate-950 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.div>
              </a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;