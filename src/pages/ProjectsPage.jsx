import React, { useState } from 'react';
import ProjectsSection from '../components/ProjectsSection';
import { Button } from '../components/ui/Button';

const filters = ['All', 'In-House Products', 'Client Case Studies', 'AI & Web', 'Games & Apps'];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <div className="pt-28 pb-20 relative z-10 animate-fadeIn">
      {/* Header & Filter System */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-heading">
          Projects & Production Lineup
        </h1>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {filters.map(filter => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'primary' : 'secondary'}
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter ? 'btn-glow-teal' : ''}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>
      <ProjectsSection filter={activeFilter} />
    </div>
  );
}