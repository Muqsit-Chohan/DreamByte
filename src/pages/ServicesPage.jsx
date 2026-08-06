import React from 'react';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Zap, Users, Briefcase } from 'lucide-react';

const engagementModels = [
  {
    icon: Users,
    title: 'Dedicated Team',
    description: 'A full-time, dedicated team of engineers and designers integrated into your existing workflow, acting as an extension of your in-house team.'
  },
  {
    icon: Briefcase,
    title: 'Project-Based',
    description: 'A fixed-scope, fixed-price engagement where we deliver a complete product from concept to launch based on your requirements.'
  },
  {
    icon: Zap,
    title: 'Staff Augmentation',
    description: 'Supplement your team with our expert engineers on a flexible basis to fill skill gaps and accelerate your project timeline.'
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20 relative z-10 animate-fadeIn">
      {/* Hero Banner */}
      <section className="py-10 sm:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="teal" className="mb-4">Our Capabilities</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-heading">
            End-to-End Custom Digital Product Engineering
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            From AI-powered solutions to immersive gaming experiences, we have the technical depth to bring your most ambitious ideas to life.
          </p>
        </div>
      </section>

      {/* Core Capability Breakdown */}
      <ServicesSection />

      {/* Development Methodology */}
      <ProcessSection />

      {/* Engagement Models */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">Engagement Models</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">Flexible options to suit your project needs and budget.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <Card key={index} className="p-8 text-center bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-600 dark:text-purple-400 mb-6 mx-auto"><model.icon className="w-6 h-6" /></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-3">{model.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{model.description}</p>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button variant="primary" size="lg" className="btn-glow-purple">Request a Custom Proposal</Button>
          </div>
        </div>
      </section>
    </div>
  );
}