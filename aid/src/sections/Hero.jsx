import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { IMAGES } from '../data/portfolioData';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-6 space-y-6 z-10 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
            <span className="hero-title-part block">A Journey</span>
            <span className="hero-title-part block text-cyan-400">Driven by Hope.</span>
          </h1>
          <p className="hero-desc text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            This is my story—a raw statement about reality, survival, and a young professional's dream to build a peaceful future for his family away from uncertainty.
          </p>
          <div className="hero-cta pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={() => scrollToSection('letter')}
              className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium rounded-xl shadow-lg shadow-cyan-950/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group"
            >
              Read My Story
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button 
              onClick={() => scrollToSection('fundme')}
              className="px-8 py-3.5 bg-slate-900/60 border border-blue-500/30 text-cyan-400 hover:bg-slate-800/60 font-medium rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              Support My Transition
            </button>
          </div>
        </div>

        <div className="hero-carousel lg:col-span-6 w-full h-[350px] sm:h-[450px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-slate-800 relative group">
          {IMAGES.map((img, idx) => (
            <div 
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b19] via-transparent to-black/30 z-10" />
              <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
            </div>
          ))}
          
          <button 
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-slate-900/60 backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white hover:bg-slate-800"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setCurrentSlide((prev) => (prev + 1) % IMAGES.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-slate-900/60 backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white hover:bg-slate-800"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}