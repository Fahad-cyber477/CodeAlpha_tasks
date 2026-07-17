"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon, Download, Orbit } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  
  // Is state mein hum current active section ka id store karein ge (e.g., 'home', 'about', 'skills')
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);

    // Dynamic scroll observer jo detect karega screen par kaunsa section visible hai
    const sections = ['home', 'about', 'projects', 'skills', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Screen ke middle area mein aate hi active trigger hoga
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' }, // Home ko bhi anchor link bna dia taaki scroll trigger ho ske
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  // Ab checking custom dynamic state se hogi
  const isLinkActive = (href: string) => {
    const targetId = href.replace('#', '');
    return activeSection === targetId;
  };

  if (!mounted) return null;

  return (
    <nav 
      style={{ 
        transition: 'padding 250ms cubic-bezier(0.16, 1, 0.3, 1), background-color 0s',
        transitionProperty: 'padding'
      }}
      className={`fixed w-full z-[100] ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 py-3 shadow-sm' 
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link href="#home" className="flex items-center gap-3 group cursor-pointer" onClick={() => setActiveSection('home')}>
            <div className="relative">
              <div className="absolute -inset-1 bg-amber-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-[#050505] p-2 rounded-full border border-white/10">
                <Orbit className="text-amber-400 w-5 h-5 animate-[spin_10s_linear_infinite]" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-[0.1em] text-foreground uppercase">
              FAHAD<span className="text-amber-400">_</span>XP
            </span>
          </Link>
        </motion.div>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.div key={link.name} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <a 
                href={link.href} 
                onClick={() => setActiveSection(link.href.replace('#', ''))}
                className={`text-[11px] font-bold uppercase tracking-widest relative group py-2 cursor-pointer transition-colors duration-300 ${
                  isLinkActive(link.href) ? 'text-amber-400' : 'text-slate-500 hover:text-amber-400'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-1/2 h-[2px] bg-amber-400 transition-all duration-300 -translate-x-1/2 group-hover:w-full ${
                  isLinkActive(link.href) ? 'w-full' : 'w-0'
                }`}></span>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-5">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
            className="p-2.5 rounded-full bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-700 cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
          </button>
          
          <a 
            href="/Fahad_CV.pdf" 
            download 
            className="flex items-center gap-2 bg-amber-400 text-slate-900 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-amber-400 border border-amber-400 transition-all shadow-md cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" /> Resume
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
            className="p-2.5 rounded-full transition-colors cursor-pointer"
          >
            {theme === 'dark' ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-slate-500" />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2.5 rounded-full text-foreground active:scale-90 transition-all cursor-pointer"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[140] lg:hidden cursor-pointer"
              onClick={() => setIsOpen(false)} 
            />
            <motion.div 
              initial={{ x: '100%' }} 
              animate={{ x: 0 }} 
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
              className="fixed top-0 right-0 h-full w-[75%] max-w-[300px] bg-slate-950 border-l border-white/5 shadow-2xl z-[150] lg:hidden"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-center mb-10 pb-4 border-b border-white/5">
                  <span className="font-bold text-sm uppercase tracking-widest text-amber-400">Navigation</span>
                  <button onClick={() => setIsOpen(false)} className="p-1.5 text-slate-500 cursor-pointer hover:text-white transition-colors">
                    <X size={24} />
                  </button>
                </div>

                <div className="flex flex-col gap-6">
                  {navLinks.map((link, index) => (
                    <motion.div key={link.name} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                      <a 
                        href={link.href} 
                        className={`text-sm block font-bold uppercase tracking-widest cursor-pointer hover:text-amber-400 transition-colors ${
                          isLinkActive(link.href) ? 'text-amber-400' : 'text-slate-400'
                        }`} 
                        onClick={() => {
                          setIsOpen(false);
                          setActiveSection(link.href.replace('#', ''));
                        }}
                      >
                        {link.name}
                      </a>
                    </motion.div>
                  ))}
                  
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <a 
                      href="/Fahad_CV.pdf" 
                      download 
                      className="mt-4 flex items-center justify-center gap-3 bg-amber-400 text-slate-900 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] shadow-lg cursor-pointer hover:bg-amber-500 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <Download size={14} /> Download Resume
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;