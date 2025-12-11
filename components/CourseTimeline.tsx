import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar } from 'lucide-react';
import { COURSE_MODULES } from '../constants';

const CourseTimeline: React.FC = () => {
  return (
    <section id="course" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">1-Month <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">AI Masterclass</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
                From zero to building your own AI agent in just 4 weeks. No coding experience required.
            </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent opacity-30" />

            {COURSE_MODULES.map((module, index) => (
                <motion.div 
                    key={module.week}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex items-center mb-16 md:mb-24 ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                    {/* Spacer for desktop layout */}
                    <div className="hidden md:block w-1/2" />

                    {/* Center Dot */}
                    <div className="absolute left-[6px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-500 z-10 shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                        <div className="w-full h-full rounded-full bg-cyan-400 animate-ping opacity-20" />
                    </div>

                    {/* Content Card */}
                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                        index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    }`}>
                        <div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors border border-white/5 hover:border-cyan-500/30 group">
                            <div className={`flex items-center gap-2 mb-3 text-cyan-400 font-bold tracking-wider text-sm ${
                                index % 2 === 0 ? 'md:justify-end' : ''
                            }`}>
                                <Calendar className="w-4 h-4" />
                                <span>WEEK {module.week}</span>
                            </div>
                            
                            <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                                {module.title}
                            </h3>
                            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                                {module.description}
                            </p>
                            
                            <ul className={`flex flex-col gap-2 ${
                                index % 2 === 0 ? 'md:items-end' : 'items-start'
                            }`}>
                                {module.topics.map((topic, i) => (
                                    <li key={i} className="flex items-center gap-2 text-xs text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                        {index % 2 !== 0 && <CheckCircle2 className="w-3 h-3 text-purple-400" />}
                                        {topic}
                                        {index % 2 === 0 && <CheckCircle2 className="w-3 h-3 text-purple-400" />}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CourseTimeline;
