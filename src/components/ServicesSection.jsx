import React from 'react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Bot, Code, Palette, Gamepad2 } from 'lucide-react';
import { Button } from './ui/Button';

const services = [
  { icon: Bot, title: 'AI Engineering', description: 'We design and build custom AI solutions, from intelligent chatbots to complex data analysis pipelines, leveraging the latest in machine learning and large language models.' },
  { icon: Code, title: 'Web & Mobile Apps', description: 'Crafting high-performance, scalable, and user-friendly applications for web and mobile platforms. We turn your ideas into robust digital products.' },
  { icon: Palette, title: 'UI/UX Design', description: 'Our design process focuses on creating intuitive and beautiful interfaces that provide a seamless user experience, ensuring your product is not just functional but also delightful to use.' },
  { icon: Gamepad2, title: 'Game Development', description: 'We build immersive 2D/3D games and AR/VR experiences using industry-leading engines like Unity and Unreal, from concept to launch.' },
];

export default function ServicesSection({ isTeaser, setCurrentPage }) {
  const servicesToShow = isTeaser ? services : services;

  return (
    <section id="services" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="purple" className="mb-4">What We Do</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white font-heading">{isTeaser ? 'Core Services' : 'Our Core Services'}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-slate-400">We specialize in turning complex problems into elegant digital solutions.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesToShow.map((service, index) => (
            <Card key={index} className="p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-teal-500/50 transition-colors duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-600 dark:text-teal-400 mb-6"><service.icon className="w-6 h-6" /></div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white font-heading mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-slate-400 leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
        {isTeaser && (
          <div className="mt-16 text-center">
            <Button
              size="lg"
              onClick={() => setCurrentPage('contact')}
              className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-400 dark:hover:bg-teal-300 text-white dark:text-slate-950 shadow-lg shadow-teal-600/30 dark:shadow-teal-400/40 transition-colors"
            >
              Request a Custom Proposal
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}