import React from 'react';

export function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center animate-fade-in">
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <p className="mt-4 text-xl text-gray-400">{subtitle}</p>
    </div>
  );
}
