import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Decorative Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-cyan-300 font-semibold">Based in Dhangadhi, Nepal</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          Empowering Nepal With <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient">
            The Future of AI
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          XeraLabs teaches AI from scratch and helps people build real-world opportunities using modern AI tools.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#course"
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold text-lg overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(147,51,234,0.5)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center gap-2">
              Join 1-Month Course <Sparkles className="w-5 h-5" />
            </span>
          </a>
          
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl glass-panel text-white font-semibold text-lg hover:bg-white/10 transition-all flex items-center gap-2 group"
          >
            Contact XeraLabs <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Floating Elements (Visual Decoration) */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] hidden lg:block"
      >
        <div className="w-24 h-24 rounded-2xl glass-panel flex items-center justify-center border-t border-l border-cyan-500/30">
            <span className="text-4xl">🤖</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-[10%] hidden lg:block"
      >
         <div className="w-20 h-20 rounded-full glass-panel flex items-center justify-center border-b border-r border-purple-500/30">
            <span className="text-3xl">🧠</span>
        </div>
      </motion.div>
      
      {/* Scroll Marquee */}
      <div className="absolute bottom-0 w-full glass-panel border-t border-white/5 py-3 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee flex gap-12 text-slate-500 font-mono text-sm uppercase tracking-widest">
           {[...Array(10)].map((_, i) => (
             <React.Fragment key={i}>
                <span>AI for Everyone</span>
                <span className="text-cyan-500">•</span>
                <span>Automate Your Work</span>
                <span className="text-purple-500">•</span>
                <span>Future Ready</span>
                <span className="text-cyan-500">•</span>
             </React.Fragment>
           ))}
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
