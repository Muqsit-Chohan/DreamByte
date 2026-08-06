import React from 'react';
import { Badge } from './ui/Badge';

const processSteps = [
  {
    step: '01',
    title: 'Discover',
    description: 'We start by understanding your vision, goals, and challenges. This phase is all about deep listening, research, and strategic planning.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Our team creates wireframes, prototypes, and high-fidelity designs. We focus on user experience and visual aesthetics to craft an intuitive product.',
  },
  {
    step: '03',
    title: 'Develop',
    description: 'Using agile methodologies, our engineers build, test, and iterate on the product. We write clean, scalable code to ensure a robust foundation.',
  },
  {
    step: '04',
    title: 'Deploy',
    description: 'We handle the launch process, deploying your application to the cloud and ensuring it runs smoothly. Post-launch, we offer support and maintenance.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 sm:py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="teal" className="mb-4">How We Work</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">Our Proven Process</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">A streamlined approach to guarantee quality and efficiency from start to finish.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((item, index) => (
            <div key={index} className="relative p-8 rounded-2xl bg-white/60 dark:bg-transparent border border-slate-200/60 dark:border-transparent">
              <div className="absolute top-0 left-0 text-6xl font-extrabold text-slate-200 dark:text-white/5 font-heading -z-10">{item.step}</div>
              <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-400 font-heading mb-3">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}