import React from 'react';
import { motion } from 'framer-motion';
import { Bot, FileText, Smartphone, Zap, ArrowUpRight } from 'lucide-react';
import { PROJECTS, FEATURES } from '../constants';

const iconMap = {
    bot: Bot,
    doc: FileText,
    app: Smartphone,
    automation: Zap,
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative bg-slate-950/50">
      <div className="container mx-auto px-6">
        
        {/* Projects Header */}
        <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Real-Life <span className="text-cyan-400">AI Projects</span></h2>
            <p className="text-slate-400 text-lg max-w-2xl">
                We don't just teach theory. Here are examples of real solutions our students learn to build.
            </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            {PROJECTS.map((project, index) => {
                const Icon = iconMap[project.icon];
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -10 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="glass-panel p-6 rounded-2xl group cursor-pointer relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                            <Icon className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors" />
                        </div>
                        
                        <div className="text-xs font-mono text-purple-400 mb-2 uppercase tracking-wider">{project.category}</div>
                        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed mb-4">
                            {project.description}
                        </p>
                        
                        <div className="flex items-center text-xs text-cyan-300 font-bold opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                            LEARN THIS <ArrowUpRight className="w-3 h-3 ml-1" />
                        </div>
                    </motion.div>
                );
            })}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-b from-transparent to-slate-900/50 rounded-3xl p-8 md:p-16 border border-white/5">
            <h3 className="text-3xl font-bold text-center mb-12">Why Choose <span className="text-purple-400">XeraLabs</span>?</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                {FEATURES.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="text-center"
                    >
                         <div className="mx-auto w-14 h-14 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                            {/* Simplified icon mapping for features */}
                            <span className="text-2xl">
                                {feature.icon === 'brain' && '🧠'}
                                {feature.icon === 'users' && '👥'}
                                {feature.icon === 'zap' && '⚡'}
                                {feature.icon === 'rocket' && '🚀'}
                                {feature.icon === 'code' && '💻'}
                            </span>
                        </div>
                        <h4 className="font-bold text-white mb-2">{feature.title}</h4>
                        <p className="text-xs text-slate-400">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
