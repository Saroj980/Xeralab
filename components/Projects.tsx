import React, { useRef, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Bot, Zap, Smartphone, FileText } from 'lucide-react';

const iconMap = {
    bot: Bot,
    doc: FileText,
    app: Smartphone,
    automation: Zap,
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Student <span className="text-purple-600">Showcase</span></h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                    Real applications built by our students solving real Nepali problems.
                </p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-slate-900 dark:text-white font-bold hover:gap-4 transition-all">
                View All Projects <ArrowUpRight />
            </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS.map((project, idx) => (
                <TiltCard key={idx} project={project} index={idx} />
            ))}
        </div>
      </div>
    </section>
  );
};

const TiltCard: React.FC<{ project: any, index: number }> = ({ project, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: MouseEvent) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const Icon = iconMap[project.icon as keyof typeof iconMap];

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative h-96 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-8 flex flex-col justify-between group cursor-pointer shadow-xl dark:shadow-none"
        >
            <div style={{ transform: "translateZ(50px)" }}>
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors text-slate-900 dark:text-white">
                    <Icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{project.description}</p>
            </div>

            <div style={{ transform: "translateZ(30px)" }} className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-bold tracking-widest uppercase text-slate-400">View Project</span>
                <ArrowUpRight className="text-cyan-500" />
            </div>
        </motion.div>
    );
};

export default Projects;