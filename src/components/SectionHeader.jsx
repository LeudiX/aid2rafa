import React from 'react';

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && <p className="text-slate-400 mt-2 text-sm sm:text-base">{subtitle}</p>}
      <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full" />
    </div>
  );
}