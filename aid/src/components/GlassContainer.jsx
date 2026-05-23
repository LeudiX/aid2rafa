import React from 'react';

export default function GlassContainer({ children, className = '' }) {
  return (
    <div className={`backdrop-blur-md bg-slate-900/40 border border-blue-500/15 rounded-2xl shadow-xl shadow-black/30 ${className}`}>
      {children}
    </div>
  );
}