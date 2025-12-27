import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Cpu } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { NAV_ITEMS } from '../constants';

// --- LOGO COMPONENT ---
// Edit this component to change your logo globally
const Logo: React.FC<{ className?: string; iconSize?: number }> = ({ className = "", iconSize = 18 }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    {/* Option A: Stylish Icon (Current) */}
    {/* <div className="p-1.5 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/20">
      <Cpu className="text-white" size={iconSize} />
    </div> */}

    {/* Option B: Image File (Uncomment below and comment Option A to use a file) */}
    { <img src="/xeralabai-final-removebg-preview.png" alt="XeraLabs Logo" className="h-10 w-auto" /> }

    {/* <span className="font-bold font-display tracking-tight text-slate-900 dark:text-white">
      Xera<span className="text-cyan-500">Labs</span>
    </span> */}
  </div>
);

const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState(NAV_ITEMS[0].href);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Desktop Floating Pill Navbar */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-2 p-2 rounded-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-lg">
        <a href="#hero" className="px-4 py-2 mr-2 hover:opacity-80 transition-opacity">
          <Logo iconSize={16} />
        </a>

        <nav className="flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setActiveTab(item.href)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === item.href ? 'text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {activeTab === item.href && (
                <motion.div
                  layoutId="navbar-pill"
                  className="absolute inset-0 bg-slate-900 dark:bg-white/10 rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  style={{ zIndex: -1 }}
                />
              )}
              {item.label}
            </a>
          ))}
        </nav>

        <div className="w-px h-6 bg-slate-300 dark:bg-slate-700 mx-2" />

        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:scale-110 transition-transform"
        >
          <AnimatePresence mode="wait">
            {theme === 'dark' ? (
                <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <Sun size={18} />
                </motion.div>
            ) : (
                <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Moon size={18} />
                </motion.div>
            )}
          </AnimatePresence>
        </button>

        <a href="#contact" className="ml-2 px-5 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold hover:scale-105 transition-transform shadow-md">
            Join Now
        </a>
      </div>

      {/* Mobile Header */}
      <div className="fixed top-0 left-0 w-full p-4 z-50 md:hidden flex justify-between items-center bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-200 dark:border-white/10">
        <a href="#hero">
          <Logo iconSize={20} className="text-xl" />
        </a>
        <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="text-slate-600 dark:text-slate-300 p-2">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-900 dark:text-white p-2">
                {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-0 z-40 bg-white dark:bg-slate-950 pt-24 px-6 md:hidden"
            >
                <div className="flex flex-col gap-6">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-2xl font-bold text-slate-800 dark:text-slate-200 hover:text-cyan-500 transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                    <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-4 bg-cyan-600 text-white text-center rounded-xl font-bold mt-4 shadow-lg shadow-cyan-500/20">
                        Enroll Now
                    </a>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
