import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <>
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="glass-panel p-8 md:p-16 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Shape the <br/><span className="text-cyan-400">Future?</span></h2>
                    <p className="text-slate-400 text-lg mb-8">
                        Enrollment for our next batch is open. Seats are limited to ensure personalized attention.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                <Phone className="text-cyan-400 w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-wider">Call / WhatsApp</p>
                                <p className="text-xl font-bold">+977 9800000000</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                             <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                <Mail className="text-purple-400 w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-wider">Email Us</p>
                                <p className="text-xl font-bold">hello@xeralabs.com.np</p>
                            </div>
                        </div>

                         <div className="flex items-center gap-4">
                             <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                <MapPin className="text-green-400 w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-wider">Visit Us</p>
                                <p className="text-lg font-bold">Traffic Chowk, Dhangadhi, Nepal</p>
                            </div>
                        </div>
                    </div>
                </div>

                <form className="bg-slate-950/50 p-8 rounded-2xl border border-white/5" onSubmit={(e) => e.preventDefault()}>
                    <h3 className="text-2xl font-bold mb-6">Join the Waitlist</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs uppercase text-slate-500 mb-2">Full Name</label>
                            <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-xs uppercase text-slate-500 mb-2">Phone Number</label>
                            <input type="tel" className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500" placeholder="+977" />
                        </div>
                         <div>
                            <label className="block text-xs uppercase text-slate-500 mb-2">Interest</label>
                            <select className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500">
                                <option>1-Month AI Masterclass</option>
                                <option>Corporate Training</option>
                                <option>General Inquiry</option>
                            </select>
                        </div>
                        <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold py-4 rounded-lg mt-4 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-shadow">
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </section>

    <footer className="py-12 border-t border-white/5 bg-slate-950">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
                <span className="text-xl font-bold font-['Space_Grotesk']">
                Xera<span className="text-cyan-400">Labs</span>
                </span>
                <span className="text-slate-600 text-sm">| Future of Nepal</span>
            </div>
            
            <div className="text-slate-500 text-sm">
                © 2025 XeraLabs. All rights reserved.
            </div>

            <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20}/></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20}/></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20}/></a>
            </div>
        </div>
    </footer>
    </>
  );
};

export default Contact;
