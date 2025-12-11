import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { COURSE_MODULES } from '../constants';
import { Check } from 'lucide-react';

const CourseTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="course" className="py-32 bg-slate-50 dark:bg-slate-900/50" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">Course <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Roadmap</span></h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                A structured 4-week journey to mastery.
            </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-800 origin-top" />
            <motion.div 
                style={{ scaleY }}
                className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-purple-600 origin-top"
            />

            {COURSE_MODULES.map((module, index) => (
                <div key={index} className={`relative flex items-center mb-24 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    
                    {/* Content */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className={`w-full md:w-5/12 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}
                    >
                        <div className="p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-white/10 shadow-xl dark:shadow-2xl hover:border-cyan-500/30 transition-all">
                            <span className="inline-block px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
                                Week {module.week}
                            </span>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{module.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">{module.description}</p>
                            
                            <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                {module.topics.map(t => (
                                    <span key={t} className="flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded-md">
                                        <Check size={12} className="text-green-500" /> {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Timeline Node */}
                    <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 border-4 border-white dark:border-slate-800 shadow-lg z-10">
                        <div className="w-3 h-3 rounded-full bg-cyan-500" />
                    </div>

                    {/* Spacer */}
                    <div className="w-full md:w-5/12" />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CourseTimeline;