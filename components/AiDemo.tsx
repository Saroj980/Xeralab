import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, Sparkles, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { ChatMessage } from '../types';

const AiDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Namaste! I am the XeraLabs AI Assistant. Ask me anything about AI or our courses!' }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);
    setError(null);

    try {
      // NOTE: In a real production app, never expose API keys on the client.
      // This is for demonstration purposes as per user request instructions.
      // Assuming env variable is injected during build.
      const apiKey = process.env.API_KEY; 

      if (!apiKey) {
        throw new Error("API Key missing. Please configure process.env.API_KEY.");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            { role: 'user', parts: [{ text: userMsg }] }
        ],
        config: {
            systemInstruction: "You are a helpful, enthusiastic AI assistant for XeraLabs, an AI institute in Dhangadhi, Nepal. Keep answers short, encouraging, and focused on how AI can help the user.",
        }
      });

      const text = response.text || "I couldn't generate a response. Please try again.";
      
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (err: any) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'model', text: "I'm currently in demo mode without a backend key. Join the course to build me for real!" }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3 h-3" /> Live Demo
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">AI Right Now</span></h2>
        </div>

        <div className="max-w-2xl mx-auto glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            {/* Chat Window Header */}
            <div className="bg-white/5 p-4 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-slate-400 font-mono">XeraLabs Assistant v1.0</span>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="h-[400px] overflow-y-auto p-6 space-y-4 bg-slate-950/50">
                {messages.map((msg, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                            msg.role === 'user' 
                            ? 'bg-cyan-600 text-white rounded-br-none' 
                            : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
                        }`}>
                            {msg.text}
                        </div>
                    </motion.div>
                ))}
                {loading && (
                    <div className="flex justify-start">
                        <div className="bg-slate-800 p-4 rounded-2xl rounded-bl-none border border-slate-700">
                             <div className="flex gap-1">
                                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100" />
                                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200" />
                             </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white/5 border-t border-white/5 flex gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Ask about AI, Python, or future trends..."
                    className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
                <button
                    onClick={handleSend}
                    disabled={loading}
                    className="bg-cyan-600 hover:bg-cyan-500 text-white p-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <Send className="w-5 h-5" />
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AiDemo;
