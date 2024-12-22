import React from 'react';
import { FeatureCard } from './FeatureCard';
import { featureData } from '../../data/featureData';

export function FeatureGrid() {
  return (
    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {featureData.map((feature, index) => (
        <FeatureCard
          key={index}
          {...feature}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}
