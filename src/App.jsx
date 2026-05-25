import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from './sections/Hero';
import MotiveLetter from './sections/MotiveLetter';
import FundMe from './sections/FundMe';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const globalContainerRef = useRef(null);

  useGSAP(() => {
    // 1. Entrance Title Stagger Animations
    const tl = gsap.timeline();
    tl.from('.hero-title-part', { y: 60, opacity: 0, duration: 1, stagger: 0.2, ease: 'power4.out' })
      .from('.hero-desc', { opacity: 0, y: 20, duration: 0.8 }, '-=0.4')
      .from('.hero-cta', { scale: 0.9, opacity: 0, duration: 0.6, ease: 'back.out(1.5)' }, '-=0.3')
      .from('.hero-carousel', { opacity: 0, x: 40, duration: 1, ease: 'power3.out' }, '-=0.8');

    // 2. Continuous Scroll-Triggered Letter Reveal
    gsap.utils.toArray('.letter-p').forEach((para) => {
      gsap.from(para, {
        scrollTrigger: {
          trigger: para,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 25,
        duration: 0.8,
        ease: 'power2.out',
      });
    });

    // 3. Fixed Financial Info Cards Entrance
    // We use standard array mapping to target the layout grid wrapper cleanly
    gsap.from('.fund-card', {
      scrollTrigger: {
        trigger: '.fund-card-grid', // Target the immediate parent container instead of the whole section
        start: 'top 80%',           // Slightly lower starting point to account for mobile devices
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      clearProps: 'all', // CRITICAL: Wipes out GSAP transforms upon completion so Tailwind grid takes over
    });
  }, { scope: globalContainerRef });

  return (
    <div ref={globalContainerRef} className="relative select-none text-slate-100">
      {/* Background Decorative Ambient Glow Components */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-10 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <Hero />
      <MotiveLetter />
      <FundMe />

      <footer className="py-8 text-center text-xs font-mono text-slate-600 border-t border-slate-900/60 max-w-7xl mx-auto px-4">
        &copy; {new Date().getFullYear()} Rafa. Created with conviction and transparency.
      </footer>
    </div>
  );
}