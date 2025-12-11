import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, MapPin, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        
        {/* Main About Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-8 md:p-12 rounded-3xl mb-12 relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                <Users size={200} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About <span className="text-cyan-400">XeraLabs</span></h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
                We are Dhangadhi's premier AI institute dedicated to democratizing Artificial Intelligence. 
                We believe AI isn't just for tech giants in Silicon Valley—it's a tool that can simplify daily life, 
                enhance productivity, and create new opportunities for students, professionals, and entrepreneurs right here in Nepal.
            </p>
            
            <div className="flex items-center gap-4 mt-8 text-sm text-cyan-300">
                <MapPin className="w-5 h-5" />
                <span>Operating from Dhangadhi, Nepal</span>
            </div>
        </motion.div>

        {/* Vision & Mission Grid */}
        <div className="grid md:grid-cols-2 gap-8">
            
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel glass-panel-hover p-8 rounded-2xl group transition-all"
            >
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Eye className="text-blue-400 w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-slate-400">
                    "AI literacy for every Nepali — everyone should understand and use AI."
                </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel glass-panel-hover p-8 rounded-2xl group transition-all"
            >
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Target className="text-purple-400 w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-slate-400">
                    "To teach practical AI skills, provide hands-on training, and help people build real-world AI projects."
                </p>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
