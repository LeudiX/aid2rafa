import React from 'react';
import GlassContainer from '../components/GlassContainer';
import SectionHeader from '../components/SectionHeader';
import { LETTER_PARAGRAPHS } from '../data/portfolioData';

export default function MotiveLetter() {
  return (
    <section id="letter" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#090f23]/60 relative border-y border-slate-900">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Motive Letter" />

        <GlassContainer className="p-8 sm:p-12 md:p-16 space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="prose prose-invert max-w-none space-y-6 sm:space-y-8 text-base sm:text-lg leading-relaxed text-slate-300">
            {LETTER_PARAGRAPHS.map((para, idx) => {
              const isHighlight = para.includes("dream of the day") || para.includes("peace and stability");
              return (
                <p 
                  key={idx} 
                  className={`letter-p ${isHighlight ? 'text-transparent bg-gradient-to-r from-cyan-300 via-blue-200 to-amber-200 bg-clip-text font-medium' : ''}`}
                >
                  {para}
                </p>
              );
            })}
          </div>

          <div className="pt-8 border-t border-slate-800/60 flex flex-col items-end">
            <span className="text-sm tracking-widest text-cyan-500 font-mono uppercase">Warmly,</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mt-1">Rafa</span>
          </div>
        </GlassContainer>
      </div>
    </section>
  );
}