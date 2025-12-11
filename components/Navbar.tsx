import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-slate-950/80 backdrop-blur-md border-b border-white/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-shadow">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold font-['Space_Grotesk'] tracking-wide">
            Xera<span className="text-cyan-400">Labs</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-white hover:text-shadow transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium transition-all hover:scale-105"
          >
            Enroll Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-medium text-slate-300 hover:text-cyan-400"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="w-full text-center py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold"
            onClick={() => setIsOpen(false)}
          >
            Enroll Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
