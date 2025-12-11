import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code2, Rocket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-sm font-bold tracking-widest uppercase text-cyan-500 mb-4">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Democratizing AI for <br/> Everyone in Nepal.
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                XeraLabs is Dhangadhi's first dedicated AI institute. We believe that Artificial Intelligence shouldn't be limited to tech giants. Our mission is to simplify these complex tools and put the power of AI into the hands of students, creators, and business owners.
            </p>
            
            <div className="flex gap-4">
                <div className="flex flex-col gap-1">
                    <span className="text-3xl font-bold text-slate-900 dark:text-white">500+</span>
                    <span className="text-sm text-slate-500">Students Taught</span>
                </div>
                <div className="w-px bg-slate-200 dark:bg-slate-800" />
                <div className="flex flex-col gap-1">
                    <span className="text-3xl font-bold text-slate-900 dark:text-white">50+</span>
                    <span className="text-sm text-slate-500">Projects Built</span>
                </div>
            </div>
        </motion.div>

        <div className="grid gap-6">
            {[
                { icon: Lightbulb, title: "Learn Concepts", text: "Understand how LLMs and diffusion models actually work." },
                { icon: Code2, title: "Master Tools", text: "Hands-on practice with Gemini, GPT-4, and Midjourney." },
                { icon: Rocket, title: "Build Future", text: "Create real automation workflows for your career." }
            ].map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-none hover:border-cyan-500/50 transition-colors group"
                >
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                            <item.icon size={24} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                            <p className="text-slate-600 dark:text-slate-400">{item.text}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default About;