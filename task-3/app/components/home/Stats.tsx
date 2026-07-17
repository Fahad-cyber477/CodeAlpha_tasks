"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

const Stats = () => {
  const stats = [
    { label: "Years Experience", value: "1.5" },
    { label: "Global Projects", value: "10" },
    { label: "Core Stack", value: "12" },
    { label: "Happy Clients", value: "05" },
  ];

  const fadeUpVariant: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      filter: 'blur(8px)' 
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        delay: i * 0.1, 
        duration: 0.8,
        ease: [0.21, 0.45, 0.32, 0.9], 
      },
    }),
  };

  return (
    <section className="py-15 bg-background transition-colors duration-500 border-t border-slate-100 dark:border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} 
              variants={fadeUpVariant} 
              className="relative group"
            >
              <div className="absolute -left-4 top-0 w-[1px] h-0 bg-amber-400 group-hover:h-full transition-all duration-500 ease-out" />
              
              <div className="space-y-1">
                <div className="flex items-center gap-1">
                  <span className="text-3xl md:text-4xl font-medium tracking-tight text-foreground">
                    {stat.value}
                  </span>
                  <span className="text-amber-400 font-light text-xl">+</span>
                </div>
                
                <p className="text-[10px] md:text-[11px] font-bold text-foreground/40 uppercase tracking-[0.3em] group-hover:text-amber-400 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
              
              <div className="mt-4 overflow-hidden h-0 group-hover:h-5 transition-all duration-500 opacity-0 group-hover:opacity-100">
                <p className="text-[10px] text-foreground/30 italic">Professional Excellence</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;