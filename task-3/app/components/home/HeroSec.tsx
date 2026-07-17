"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const HeroSec = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-[85vh] flex items-center text-foreground pt-20 pb-10 overflow-hidden transition-colors duration-500">
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-amber-400/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 z-10 w-full grid lg:grid-cols-2 gap-10 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-5"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase">
             <span className="w-4 h-[1px] bg-amber-400"></span> 👋 Hello, I'm
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-foreground transition-colors">
              Mahmood <span className="text-amber-400">Ul Hassan Fahad</span>
            </h1>
            
            <div className="h-[28px] text-lg lg:text-xl font-bold text-foreground opacity-90 transition-colors">
              <Typewriter
                words={[
                  'Frontend Developer',
                  'Next.js Expert',
                  'React Specialist',
                  'UI/UX Designer',
                  'Web Developer'
                ]}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </div>
          </div>
          
          <p className="text-foreground opacity-70 text-sm md:text-base max-w-lg leading-relaxed transition-colors">
            I craft modern, responsive web experiences using clean, maintainable code, 
            enhanced by smooth animations and user-centered design. 
            My focus is on building high-performance digital solutions.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="mailto:fhasnain290@gmail.com" 
              className="px-7 py-3 bg-amber-400 text-slate-950 font-bold rounded-lg text-xs md:text-sm shadow-lg shadow-amber-400/5 hover:bg-amber-400/90 transition-all active:scale-95 cursor-pointer"
            >
              Let's Talk
            </a>
            <a 
              href="#projects" 
              className="px-7 py-3 border border-slate-800 text-foreground font-bold rounded-lg text-xs md:text-sm hover:bg-slate-900 transition-all cursor-pointer"
            >
              Recent Works
            </a>
          </div>
        </motion.div>

        <div className="relative flex justify-center items-center">
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[320px] h-[320px] lg:w-[440px] lg:h-[440px] border-2 border-dashed border-gray-600 rounded-full"
          />
          
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] border-2 border-amber-400 rounded-full shadow-[0_0_40px_rgba(251,191,36,0.03)]"
          />

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-[8px] border-background shadow-2xl z-10 transition-colors"
          >
            <Image 
              src="/images/heroSection.jpg" 
              alt="Mahmood Ul Hassan Fahad" 
              fill 
              priority
              className="object-cover object-top hover:scale-105 transition-transform duration-1000 ease-in-out"
            />
          </motion.div>

          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-2 right-4 lg:right-10 bg-background/80 border border-slate-700/50 backdrop-blur-md p-2 px-4 rounded-xl shadow-xl z-20 transition-colors"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[9px] font-bold text-amber-400 uppercase tracking-widest">Next.js Expert</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSec;