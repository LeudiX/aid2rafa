import React, { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';
import GlassContainer from '../components/GlassContainer';
import SectionHeader from '../components/SectionHeader';
import { IMPACT_CARDS } from '../data/portfolioData';

export default function FundMe() {
  const [copiedAddress, setCopiedAddress] = useState('');
  const cryptoAddress = "0xAF34430f05713B4D3b3Fc4949F905F111Df5F2fc";

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedAddress('usdt');
    setTimeout(() => setCopiedAddress(''), 2000);
  };

  return (
    <section id="fundme" className="fund-section-trigger py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader title="Support the Mission" subtitle="Transparent usage of every single donation" />

      <div className="fund-card-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {IMPACT_CARDS.map((card, idx) => {
          const IconComponent = card.icon;
          return (
            <GlassContainer key={idx} className="fund-card p-6 transform hover:-translate-y-1 transition-all duration-300 hover:border-cyan-500/30 group">
              <div className="p-3 bg-blue-950/50 rounded-xl border border-blue-500/20 w-fit text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-transform duration-300">
                <IconComponent className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2 text-white">{card.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
            </GlassContainer>
          );
        })}
      </div>

      <div className="max-w-3xl mx-auto">
        <GlassContainer className="p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 flex flex-col items-center justify-center space-y-3">
            <div className="p-4 bg-white rounded-2xl shadow-xl shadow-black/40 hover:scale-105 transition-transform duration-300 border border-slate-200">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=180&data=https://paypal.me/emileracine" 
                alt="Donation QR Code"
                className="w-[160px] h-[160px]"
              />
            </div>
            <span className="text-xs font-mono text-slate-400">Scan to process quickly</span>
          </div>

          <div className="md:col-span-7 space-y-5">
            <h4 className="text-lg font-medium text-slate-200 text-center md:text-left">Transfer Infrastructure</h4>
            
            <a 
              href="https://paypal.me/emileracine" 
              target="_blank" 
              rel="noreferrer" 
              className="w-full px-5 py-4 bg-blue-600/20 border border-blue-500/30 rounded-xl flex items-center justify-between group hover:bg-blue-600/30 transition-all duration-200"
            >
              <span className="font-semibold text-sm sm:text-base text-blue-400 group-hover:text-blue-300">PayPal Connection Gateway</span>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors duration-200" />
            </a>

            <div className="w-full px-5 py-4 bg-slate-900/80 border border-slate-800 rounded-xl flex items-center justify-between">
              <div className="overflow-hidden mr-2">
                <span className="block text-xs uppercase tracking-wider font-mono text-cyan-500">USDT (ERC-20 Address)</span>
                <span className="block text-sm font-mono font-medium truncate text-slate-300 mt-0.5">{cryptoAddress}</span>
              </div>
              <button 
                onClick={() => handleCopy(cryptoAddress)}
                className="p-2.5 bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white rounded-lg border border-slate-700 transition-all duration-200 shrink-0"
              >
                {copiedAddress === 'usdt' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </GlassContainer>
      </div>
    </section>
  );
}