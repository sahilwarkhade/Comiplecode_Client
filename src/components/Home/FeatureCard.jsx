import React from 'react';

export function FeatureCard({ icon, title, description, imageUrl, delay }) {
  return (
    <div
      className="feature-card group animate-fade-in overflow-hidden"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative h-48 mb-6 overflow-hidden rounded-t-lg -mx-6 -mt-6">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-gray-900/80" />
        <div className="absolute bottom-4 left-4 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-200">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
