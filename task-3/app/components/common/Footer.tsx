"use client";
import React from 'react';
import { FaGithub, FaEnvelope, FaWhatsapp, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const WHATSAPP_NUMBER = "923034002782"; 
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Fahad,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect%20with%20you!`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-background border-t border-slate-200 dark:border-white/10 pt-20 pb-10 overflow-hidden">
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-16 border-b border-slate-200 dark:border-white/5">
          <div className="text-center md:text-left space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/25 bg-amber-500/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-amber-400/90 font-bold uppercase tracking-widest text-[8px]">
                Available for Freelance & Remote Work
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-foreground tracking-tight leading-none uppercase">
              Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500">extraordinary.</span>
            </h2>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-foreground hover:text-amber-400 transition-colors duration-300 cursor-pointer"
          >
            Back to top 
            <span className="w-8 h-8 rounded-full border border-slate-300 dark:border-white/20 flex items-center justify-center group-hover:border-amber-400/40 group-hover:bg-amber-400/5 transition-all duration-300">
              <FaArrowUp className="w-3 h-3 text-foreground group-hover:text-amber-400 transition-transform duration-300 group-hover:-translate-y-1" />
            </span>
          </button>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-16 items-start">
          
          
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-xl font-black text-foreground tracking-widest uppercase">
              Fahad<span className="text-amber-400">.</span>
            </h3>
            <p className="text-sm text-foreground/50 leading-relaxed max-w-sm">
              Creating high-performance user interfaces. Focused on clean code, micro-interactions, and flawless responsive designs.
            </p>
          </div>

          
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest">Menu</h4>
              <ul className="space-y-2.5">
                {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-xs text-foreground/60 hover:text-amber-400 transition-colors duration-200 relative group block w-fit pb-1"
                    >
                      {item}
                      
                      <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-amber-400 transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest">Contact</h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="mailto:fhasnain290@gmail.com" className="text-xs text-foreground/60 hover:text-amber-400 transition-colors duration-200 block truncate pb-1 relative group w-fit">
                    fhasnain290@gmail.com
                    <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-amber-400 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
                <li>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-foreground/60 hover:text-amber-400 transition-colors duration-200 pb-1 relative group block w-fit">
                    +92 303 4002782
                    <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-amber-400 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest">Follow Me</h4>
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/Fahad-cyber477" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-lg border border-slate-200 dark:border-white/10 flex items-center justify-center text-foreground/50 hover:text-amber-400 hover:border-amber-400/30 hover:bg-amber-400/5 transition-all duration-300 cursor-pointer"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a 
                href="mailto:fhasnain290@gmail.com" 
                className="w-10 h-10 rounded-lg border border-slate-200 dark:border-white/10 flex items-center justify-center text-foreground/50 hover:text-amber-400 hover:border-amber-400/30 hover:bg-amber-400/5 transition-all duration-300 cursor-pointer"
              >
                <FaEnvelope className="w-4 h-4" />
              </a>
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-lg border border-slate-200 dark:border-white/10 flex items-center justify-center text-foreground/50 hover:text-amber-400 hover:border-amber-400/30 hover:bg-amber-400/5 transition-all duration-300 cursor-pointer"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        
        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-foreground/30 uppercase tracking-wider">
            © {new Date().getFullYear()} Fahad Hasnain. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-foreground/20 uppercase tracking-widest">Designed & Coded with ♥</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;