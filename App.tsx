import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import CourseTimeline from './components/CourseTimeline';
import Projects from './components/Projects';
import AiDemo from './components/AiDemo';
import Contact from './components/Contact';
import Background from './components/Background';
import { ThemeProvider } from './ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen selection:bg-cyan-500/30">
        <Background />
        <Navbar />
        <main className="relative z-10 flex flex-col gap-0">
          <Hero />
          <About />
          <Vision />
          <CourseTimeline />
          <Projects />
          <AiDemo />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;