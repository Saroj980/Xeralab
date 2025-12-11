import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <>
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="rounded-[3rem] bg-slate-900 dark:bg-white/5 border border-slate-800 dark:border-white/10 p-8 md:p-16 overflow-hidden relative">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Your <br/> AI Journey Today.</h2>
                    <p className="text-slate-400 text-lg mb-8 max-w-md">
                        Don't get left behind. Join the next cohort at XeraLabs and future-proof your career.
                    </p>
                    
                    <div className="space-y-6">
                        {[
                            { icon: Phone, label: "Call Us", val: "+977 9800000000" },
                            { icon: Mail, label: "Email", val: "hello@xeralabs.com.np" },
                            { icon: MapPin, label: "Visit", val: "Traffic Chowk, Dhangadhi" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 text-white">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                    <item.icon className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-bold">{item.label}</p>
                                    <p className="text-lg font-medium">{item.val}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-950 p-8 rounded-3xl shadow-2xl">
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase">First Name</label>
                                <input className="w-full p-3 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 ring-cyan-500" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase">Last Name</label>
                                <input className="w-full p-3 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 ring-cyan-500" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase">Email Address</label>
                            <input className="w-full p-3 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 ring-cyan-500" placeholder="john@example.com" />
                        </div>
                         <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase">Interested In</label>
                            <select className="w-full p-3 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 ring-cyan-500">
                                <option>1-Month AI Masterclass</option>
                                <option>Corporate Training</option>
                            </select>
                        </div>
                        <button className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                            Submit Application <ArrowRight size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>

    <footer className="py-8 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-white/5">
        <div className="container mx-auto px-6 text-center text-slate-500 text-sm">
            <p>© 2025 XeraLabs. All rights reserved.</p>
        </div>
    </footer>
    </>
  );
};

export default Contact;