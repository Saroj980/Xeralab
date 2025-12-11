import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, Sparkles, User, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMessage } from '../types';

const AiDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Namaste! I am the XeraLabs AI. Ask me about our courses or AI trends!' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const apiKey = process.env.API_KEY; 
      if (!apiKey) throw new Error("API Key missing");

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [{ role: 'user', parts: [{ text: userMsg }] }],
      });

      const text = response.text || "Try again.";
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: "Demo Mode: Join our course to learn how to build this properly!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="demo" className="py-32 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3 h-3" /> Live Interaction
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">Experience <br/> <span className="text-cyan-500">Intelligence</span></h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">
                This isn't just a chatbot. It's a glimpse into what you will build in Week 4 of our Masterclass. Try it out right now.
            </p>
            <div className="flex gap-4">
                <div className="px-6 py-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">0.5s</p>
                    <p className="text-sm text-slate-500">Latency</p>
                </div>
                 <div className="px-6 py-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">Gemini</p>
                    <p className="text-sm text-slate-500">Powered By</p>
                </div>
            </div>
        </div>

        {/* Chat Interface */}
        <div className="relative">
             {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[2rem] blur-xl opacity-30 dark:opacity-40 animate-pulse" />
            
            <div className="relative bg-white dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden h-[500px] flex flex-col">
                {/* Header */}
                <div className="p-4 border-b border-slate-100 dark:border-white/5 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-2 h-2 absolute bottom-0 right-0 bg-green-500 rounded-full border-2 border-white dark:border-slate-900"></div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                                <Bot size={16} />
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white text-sm">Xera Assistant</h4>
                            <p className="text-xs text-slate-500">Always active</p>
                        </div>
                    </div>
                </div>

                {/* Messages */}
                <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                        >
                             <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-slate-200 dark:bg-slate-800' : 'bg-cyan-100 dark:bg-cyan-900/30'}`}>
                                {msg.role === 'user' ? <User size={14} className="text-slate-600 dark:text-slate-400" /> : <Bot size={14} className="text-cyan-600 dark:text-cyan-400" />}
                             </div>
                             <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                                 msg.role === 'user' 
                                 ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-tr-none' 
                                 : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-tl-none'
                             }`}>
                                {msg.text}
                             </div>
                        </motion.div>
                    ))}
                    {loading && (
                         <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center shrink-0">
                                <Bot size={14} className="text-cyan-600 dark:text-cyan-400" />
                            </div>
                            <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center h-10">
                                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></span>
                                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></span>
                            </div>
                         </div>
                    )}
                </div>

                {/* Input */}
                <div className="p-4 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-white/5">
                    <form 
                        onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                        className="flex gap-2 p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus-within:ring-2 ring-cyan-500/50 transition-all"
                    >
                        <input 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 bg-transparent border-none focus:outline-none px-2 text-slate-900 dark:text-white placeholder-slate-500"
                        />
                        <button type="submit" disabled={loading} className="p-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors">
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default AiDemo;