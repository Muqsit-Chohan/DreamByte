import React from 'react';
import TeamSection from '../components/TeamSection';
import ProcessSection from '../components/ProcessSection';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Users, Target, Heart, Zap, Award } from 'lucide-react';

const coreValues = [
  { icon: Award, title: 'Engineering Excellence' },
  { icon: Heart, title: 'User-Centric Design' },
  { icon: Target, title: 'AI-First Thinking' },
  { icon: Zap, title: 'Speed & Reliability' },
];

export default function AboutPage({ onSelectFounder }) {
  return (
    <div className="pt-10 pb-10 relative z-10 animate-fadeIn">
      <section className="py-10 sm:py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="purple" className="mb-4">
            <Users className="w-4 h-4 shrink-0" />
            <span>Who We Are</span>
          </Badge>
          <h1 className="max-w-3xl mx-auto text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-heading mt-4">
            Where Cutting-Edge AI Meets World-Class Software Engineering.
          </h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white font-heading mb-8">Our Story</h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            DreamByte is a Karachi-based software studio founded on the principle of crafting high-quality, impactful digital products. We are a collective of engineers, designers, and strategists who love to build. Our focus is on creating AI-powered software and immersive experiences that solve real-world problems and delight users.
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            We evolved from building our own in-house innovations to scaling digital solutions for global clients, bringing our lab-tested expertise to every project we undertake.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-10 sm:py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white font-heading">Core Values</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map(value => (
              <Card key={value.title} className="p-6 text-center bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-600 dark:text-teal-400 mb-4 mx-auto"><value.icon className="w-6 h-6" /></div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{value.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <TeamSection onSelectMember={onSelectFounder} />
    </div>
  );
}
