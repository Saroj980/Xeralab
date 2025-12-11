import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CourseTimeline from './components/CourseTimeline';
import Projects from './components/Projects';
import AiDemo from './components/AiDemo';
import Contact from './components/Contact';
import Background from './components/Background';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-slate-200 selection:bg-cyan-500/30">
      <Background />
      <Navbar />
      <main className="relative z-10 flex flex-col gap-0">
        <Hero />
        <About />
        <CourseTimeline />
        <Projects />
        <AiDemo />
        <Contact />
      </main>
    </div>
  );
};

export default App;
