import React, { useEffect } from 'react';
import { MapPin, ArrowLeft, ExternalLink, Mail, MessageCircle } from 'lucide-react';
import { InstagramIcon as Instagram, LinkedinIcon as Linkedin } from './BrandIcons';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';

export default function FounderProfile({ member, onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!member) return null;

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fadeIn">
      
      {/* Back button */}
      <div className="mb-8">
        <Button
          variant="glass"
          size="sm"
          icon={ArrowLeft}
          onClick={onBack}
        >
          Back to Main Overview
        </Button>
      </div>

      {/* Hero Header Card */}
      <Card className="p-8 sm:p-12 border-teal-500/30 relative overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-gradient-to-bl from-teal-500/20 via-purple-500/10 to-transparent blur-[120px] pointer-events-none" />

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
          
          {/* Avatar frame */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl p-1 bg-gradient-to-br from-teal-400 via-cyan-500 to-purple-600 shadow-[0_0_30px_rgba(0,211,189,0.3)] shrink-0 overflow-hidden">
            <div className={`w-full h-full rounded-[22px] bg-gradient-to-br ${member.fallbackColor || 'from-teal-600 to-purple-700'} flex items-center justify-center text-4xl font-extrabold text-white font-heading overflow-hidden`}>
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <Badge variant="teal">{member.role}</Badge>
              <Badge variant="outline" icon={MapPin}>{member.location || 'Karachi, Pakistan'}</Badge>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-heading mt-3">
              {member.name}
            </h1>

            <p className="mt-3 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl"> 
              {member.tagline || member.bio}
            </p>

            {/* Social Action Buttons */} 
            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-slate-200 hover:text-gray-900 dark:hover:text-white hover:border-cyan-500/40 text-xs font-semibold flex items-center gap-2 transition-all"
                >
                  <Linkedin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              )}

              {member.instagram && (
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-slate-200 hover:text-gray-900 dark:hover:text-white hover:border-pink-500/40 text-xs font-semibold flex items-center gap-2 transition-all"
                >
                  <Instagram className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              )}

              <a
                href="https://wa.me/923102110584"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-500/20 text-xs font-semibold flex items-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>WhatsApp Direct</span>
              </a>

              <a
                href="mailto:dreambyte.space@gmail.com"
                className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-slate-200 hover:text-gray-900 dark:hover:text-white text-xs font-semibold flex items-center gap-2 transition-all"
              >
                <Mail className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Email</span>
              </a>
            </div>

          </div>

        </div>
      </Card>

      {/* Profile Details Sections */}
      <div className="mt-8 space-y-8">
        
        {/* About Section */}
        <Card className="p-8">
          <Badge variant="purple" className="mb-3">About</Badge>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-heading">
            {member.aboutTitle || 'Product builder. Studio founder.'}
          </h2>
          <p className="mt-3 text-gray-600 dark:text-slate-300 leading-relaxed text-base"> 
            {member.fullBio || member.bio}
          </p>
        </Card>

        {/* Skills & Tech Stack */}
        <Card className="p-8">
          <Badge variant="teal" className="mb-3">Skills & Technical Stack</Badge>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-heading">Core Competencies</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {(member.skills || ['React 19', 'FastAPI', 'Supabase', 'Python', 'Node.js', 'Groq AI', 'LLaMA', 'Vercel', 'Railway', 'Git', 'Product Strategy', 'Investor Relations']).map((skill, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-semibold text-gray-700 dark:text-slate-200 hover:border-teal-400/40 hover:text-teal-500 dark:hover:text-teal-300 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>

        {/* Experience Section */}
        <Card className="p-8">
          <Badge variant="pink" className="mb-3">Experience</Badge>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-heading mb-6">Track Record</h2>
          
          <div className="space-y-6">
            {(member.experience || [
              {
                role: `${member.role} — DreamByte`,
                period: '2024 – Present',
                desc: 'Leading the founding team behind Nexsora OS. Driving product roadmap, creator partnerships, fundraising strategy, and engineering direction.',
              },
              {
                role: 'Software Engineering Student',
                period: 'Sir Syed University of Engineering & Technology · 2022 – Present',
                desc: 'Department of Computer Engineering Technology. Coursework spanning software architecture, AI systems, cloud networks, and embedded tech.',
              }
            ]).map((exp, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 relative pl-6 border-l-2 border-l-teal-600 dark:border-l-teal-400">
                <h4 className="text-base font-bold text-slate-900 dark:text-white font-heading">{exp.role}</h4>
                <div className="text-xs text-teal-600 dark:text-teal-400 font-mono mt-0.5">{exp.period}</div>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </Card>

      </div>

    </div>
  );
}
