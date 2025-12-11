import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Sparkles, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { y: "100%" },
    visible: { y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 text-center z-10">
        
        {/* Animated Badge */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-8"
        >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-slate-600 dark:text-slate-300">Based in Dhangadhi</span>
        </motion.div>

        {/* Masked Reveal Headline */}
        <motion.div 
            variants={container}
            initial="hidden"
            animate="visible"
            className="mb-8"
        >
            <div className="overflow-hidden">
                <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-9xl font-bold text-slate-900 dark:text-white tracking-tighter leading-[1.1]">
                    Empowering
                </motion.h1>
            </div>
            <div className="overflow-hidden">
                <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-9xl font-bold text-slate-900 dark:text-white tracking-tighter leading-[1.1]">
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600">Future</span>
                </motion.h1>
            </div>
        </motion.div>

        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12"
        >
            Master AI from scratch and build real-world tools. Join Nepal's most advanced AI learning community.
        </motion.p>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
            <a href="#course" className="group relative px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold overflow-hidden transition-transform hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">Start Learning <Sparkles size={18}/></span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a href="#demo" className="px-8 py-4 rounded-full border border-slate-200 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-900 dark:text-white font-medium transition-colors">
                Try AI Demo
            </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-600"
      >
        <ArrowDown />
      </motion.div>
    </section>
  );
};

export default Hero;