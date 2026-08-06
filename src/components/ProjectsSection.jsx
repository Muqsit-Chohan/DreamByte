import React from "react";
import { motion } from "framer-motion";
import { Layers, ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";

import socialMediaAnalyticsImg from "../assets/social-media-analytics.jpeg";
import ecommercePlatformImg from "../assets/ecommerce-platform.jpeg";
import dataVisualizationImg from "../assets/data-visualization.jpeg";
import taxAppImg from "../assets/tax-app.jpeg";
import rhrAppImg from "../assets/rhr-app.jpeg";
import aiVoiceAgentImg from "../assets/ai-voice-agent.jpeg";
import arrWebsiteImg from "../assets/arr-website.jpeg";
import megaWipesImg from "../assets/mega-wipes.png";

const projects = [
  {
    title: "Social Media Analytics App",
    client: "Client Project",
    status: "Live",
    description: "A comprehensive analytics platform for social media managers, providing insights into engagement, reach, and audience demographics across multiple platforms.",
    tech: ["React", "TypeScript", "Chart.js", "Node.js", "PostgreSQL"],
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    image: socialMediaAnalyticsImg,
  },
  {
    title: "E-commerce Platform",
    client: "Client Project",
    status: "Live",
    description: "A full-featured e-commerce platform for a fashion brand, including product management, order processing, and a customer-facing storefront with a seamless checkout experience.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Vercel"],
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    image: ecommercePlatformImg,
  },
  {
    title: "Data Visualization Dashboard",
    client: "Internal Project",
    status: "In Development",
    description: "An interactive dashboard for visualizing complex datasets. Features include real-time data updates, customizable charts, and data filtering capabilities.",
    tech: ["React", "D3.js", "Node.js", "WebSocket", "TailwindCSS"],
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    image: dataVisualizationImg,
  },
  {
    title: "Tax File App",
    client: "Third-Party Client",
    status: "Live",
    description: "US Federal Tax Filing app for Pakistani-American clients. AES-256 encrypted document vault, Stripe payments, multi-step filing workflows, and secure client-CPA communication portal.",
    tech: ["Flutter", "FastAPI", "Supabase", "AES-256", "Stripe", "Railway"],
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    image: taxAppImg,
  },
  {
    title: "RHR & Company App",
    client: "Client Project",
    status: "In Development",
    description: "Enterprise field operations platform for a construction materials manufacturer across Karachi, Hyderabad & Sukkur. GPS tracking, multi-branch management, WhatsApp/SMS OTP, admin approval workflows, and HRM module — Flutter mobile + Electron desktop.",
    tech: ["Flutter (Android)", "Electron", "React", "Node.js", "Supabase", "WhatsApp OTP"],
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    image: rhrAppImg,
  },
  {
    title: "AI Voice Agent",
    client: "Internal Project",
    status: "Awarded",
    description: "AI-powered voice calling agent supporting English, Urdu & Arabic. Real-time WebSocket pipeline, automatic speech recognition, natural-sounding TTS. Built for automated customer engagement and inbound/outbound calling workflows.",
    tech: ["Python", "aiothtp WebSocket", "Groq STT", "ElevenLabs TTS", "Railway"],
    badgeColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
    image: aiVoiceAgentImg,
  },
  {
    title: "ARR & Company Website",
    client: "Client Project",
    status: "Delivered",
    description: "Corporate website + digital marketing strategy for a Karachi-based enterprise. Full brand presence, service showcase, lead generation, and SEO-optimised web presence.",
    tech: ["React", "Vite", "TailwindCSS", "Vercel"],
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    image: arrWebsiteImg,
  },
  {
    title: "Mega Wipes HRM",
    client: "Client Project",
    status: "Delivered",
    description: "WhatsApp-integrated order management & HRM system for Mega Wipes. AI bot with Roman Urdu support, order tracking, staff records, and automated reporting for a Karachi-based FMCG manufacturer.",
    tech: ["Node.js", "Express", "Supabase", "Groq LLaMA 3.3", "WhatsApp API"], // No change needed here, just confirming context
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    image: megaWipesImg,
  },
];

export default function ProjectsSection({ limit, showViewAll, setCurrentPage, filter }) {
  const filteredProjects = projects.filter(p => {
    if (!filter || filter === 'All') return true;
    if (filter === 'In-House Products') return p.client === 'Internal Project';
    if (filter === 'Client Case Studies') return p.client !== 'Internal Project';
    if (filter === 'AI & Web') {
      return p.tech.some(t => ['AI', 'React', 'Node.js', 'Vite', 'FastAPI', 'Python', 'LLaMA', 'Electron', 'Web'].some(keyword => t.includes(keyword)));
    }
    if (filter === 'Games & Apps') {
      return p.tech.some(t => ['Flutter', 'Unity', 'Unreal Engine', 'App'].some(keyword => t.includes(keyword)));
    }
    return true;
  });

  const projectsToShow = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section id="projects" className="py-24 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {!filter && (
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border-purple-500/20 dark:border-purple-500/30 text-purple-600 dark:text-purple-400 text-xs font-semibold uppercase tracking-wider"><Layers className="w-3.5 h-3.5" /> Featured Work</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 font-heading tracking-tight">Production Lineup & Case Studies</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">A showcase of our in-house products and successful client projects.</p>
          </div>
        )}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsToShow.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 25, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="relative group glass-panel rounded-3xl border border-slate-200 dark:border-white/10 glass-panel-hover transition-all duration-300 hover:border-teal-400/30 dark:hover:border-teal-400/50 hover:shadow-2xl hover:shadow-teal-500/10 dark:hover:shadow-teal-400/10 overflow-hidden"
            >
              {project.image && (
                <div className="relative h-48 w-full overflow-hidden">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">{project.title}</h3>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${project.badgeColor}`}>{project.status}</span>
                </div>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed min-h-[60px]">{project.description}</p>
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10">{tech}</span>)}
                  </div>
                  {setCurrentPage && (
                    <Button variant="secondary" size="sm" onClick={() => setCurrentPage('projects')} className="shrink-0">
                      View Project
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {showViewAll && setCurrentPage && (
          <div className="mt-16 text-center">
            <Button variant="secondary" size="lg" onClick={() => setCurrentPage('projects')}>View All Projects</Button>
          </div>
        )}
      </div>
    </section>
  );
}