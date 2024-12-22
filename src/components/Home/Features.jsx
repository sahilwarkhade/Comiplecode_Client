import React from 'react';
import { FeatureGrid } from './FeatureGrid';
import { SectionHeader } from './SectionHeader';

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Powerful Features"
          subtitle="Everything you need for seamless code collaboration"
        />
        <FeatureGrid />
      </div>
    </section>
  );
}
