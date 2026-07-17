"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Projects = () => {
  const projects = [
    {
      title: "Al-Noor Academy LMS",
      category: "Full-Stack Development",
      description: "A professional educational platform built for Al-Noor Academy, featuring student management and course branding.",
      tech: ["Next.js", "Tailwind", "Firebase"],
      link: "https://al-noor-72.vercel.app/",
      github: "https://github.com/Fahad-cyber477/Al-Noor-Academy"
    },
    {
      title: "Lawyer Management System",
      category: "Web Application",
      description: "A specialized project designed for legal professionals to manage cases and client interactions efficiently.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://lawyer-project-gilt.vercel.app/",
      github: "https://github.com/Fahad-cyber477/Lawyer-Project-"
    },
    {
      title: "Modern E-Commerce Store",
      category: "E-Commerce",
      description: "A high-performance online shopping experience with seamless navigation and optimized performance.",
      tech: ["Next.js", "Zustand", "Tailwind CSS"],
      link: "https://ecommerce-project-five-pi.vercel.app/",
      github: "https://github.com/Fahad-cyber477"
    }
  ];

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.1, 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      }
    })
  };

  return (
    <section id="projects" className="py-24 bg-background border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20"
        >
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span className="text-amber-400 font-bold tracking-[0.4em] uppercase text-[10px]">Selected Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter uppercase">
              Featured <span className="opacity-40">Projects.</span>
            </h2>
          </div>
          <p className="text-foreground/40 text-sm max-w-xs font-medium leading-relaxed text-center md:text-left">
            Real-world applications built with technical precision and the latest stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              className="group relative flex flex-col h-full bg-slate-900/10 dark:bg-slate-900/20 backdrop-blur-sm border border-slate-200 dark:border-white/5 rounded-3xl p-8 hover:bg-slate-900/30 dark:hover:bg-slate-900/40 hover:border-amber-400/30 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-amber-400/[0.01]"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 py-1.5 rounded-xl">
                  {project.category}
                </span>
                <div className="flex gap-4 text-foreground/30 z-10">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors cursor-pointer">
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors cursor-pointer">
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="space-y-4 flex-grow">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/50 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-200 dark:border-white/5 flex flex-wrap gap-3">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-mono text-foreground/40 dark:text-foreground/30 uppercase tracking-wider">
                    #{t}
                  </span>
                ))}
              </div>

              <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 cursor-pointer">
                <HiOutlineArrowNarrowRight className="w-6 h-6 text-amber-400" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex justify-center"
        >
          <a 
            href="https://github.com/Fahad-cyber477" 
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-6 py-3 group overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 inline-block cursor-pointer"
          >
            <div className="absolute inset-0 bg-amber-400 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative text-xs font-bold uppercase tracking-[0.3em] text-foreground group-hover:text-slate-950 transition-colors duration-500">
              Check My GitHub
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;