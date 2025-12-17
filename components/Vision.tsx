import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Eye, Flag } from 'lucide-react';

const Vision: React.FC = () => {
  const { scrollYProgress } = useScroll();
  // Smoother, subtle parallax that keeps elements relatively connected
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section id="vision" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-start">
            
            {/* Vision Card */}
            <motion.div 
                style={{ y: y1 }}
                className="group relative p-8 md:p-12 rounded-[2rem] bg-white dark:bg-slate-900/60 border border-purple-100 dark:border-purple-500/20 backdrop-blur-xl shadow-2xl dark:shadow-purple-900/10 overflow-hidden flex flex-col h-full hover:border-purple-500/50 transition-colors duration-500"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-100 transition-opacity" />
                
                <div className="relative z-10 flex-1">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 mb-8 group-hover:scale-110 transition-transform duration-500">
                        <Eye size={32} />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Our Vision</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                        To build a future where every Nepali student, entrepreneur, and professional leverages Artificial Intelligence to solve local problems and compete on a global scale.
                    </p>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors" />
            </motion.div>

            {/* Mission Card */}
            <motion.div 
                style={{ y: y2 }} 
                className="group relative p-8 md:p-12 rounded-[2rem] bg-white dark:bg-slate-900/60 border border-cyan-100 dark:border-cyan-500/20 backdrop-blur-xl shadow-2xl dark:shadow-cyan-900/10 overflow-hidden flex flex-col h-full hover:border-cyan-500/50 transition-colors duration-500 md:mt-16"
            >
                 <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-100 transition-opacity" />
                 
                <div className="relative z-10 flex-1">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-300 mb-8 group-hover:scale-110 transition-transform duration-500">
                        <Flag size={32} />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Our Mission</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                        To provide accessible, high-quality AI education that bridges the gap between theory and practice, ensuring our students leave with tangible skills and real-world projects.
                    </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-colors" />
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Vision;