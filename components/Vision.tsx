import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Compass } from 'lucide-react';

const Vision: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            
            {/* Vision Card */}
            <motion.div 
                style={{ y: y1 }}
                className="group relative p-10 rounded-[2.5rem] bg-gradient-to-br from-indigo-500 to-purple-600 text-white overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-700">
                    <Compass size={180} />
                </div>
                <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8">
                        <Compass className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                    <p className="text-indigo-100 text-lg leading-relaxed">
                        To build a future where every Nepali student, entrepreneur, and professional leverages Artificial Intelligence to solve local problems and compete on a global scale.
                    </p>
                </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
                style={{ y: y2 }}
                className="group relative p-10 rounded-[2.5rem] bg-slate-900 dark:bg-white/5 border border-slate-200 dark:border-white/10 overflow-hidden mt-12 md:mt-0"
            >
                 <div className="absolute top-0 right-0 p-12 opacity-5 dark:opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                    <Target size={180} />
                </div>
                <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-slate-200 dark:bg-white/10 flex items-center justify-center mb-8 text-slate-900 dark:text-white">
                        <Target className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Our Mission</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        To provide accessible, high-quality AI education that bridges the gap between theory and practice, ensuring our students leave with tangible skills and real-world projects.
                    </p>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Vision;