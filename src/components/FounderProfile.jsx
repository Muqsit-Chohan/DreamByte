import React, { useEffect } from 'react';
import { MapPin, ArrowLeft, ExternalLink, Mail, MessageCircle, GraduationCap } from 'lucide-react';
import { InstagramIcon as Instagram, LinkedinIcon as Linkedin } from './BrandIcons';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { scrollToTop } from '../lib/lenis';

const founderProfiles = [
  {
    name: 'Syed Safeer',
    fallbackColor: 'from-teal-600 to-purple-700',
    location: 'Karachi, Pakistan',
    aboutTitle: 'Product builder. Studio founder.',
    contact: { whatsapp: 'https://wa.me/923102110584', email: 'mailto:dreambyte.space@gmail.com' },
    skills: ['React 19', 'FastAPI', 'Supabase', 'Python', 'Node.js', 'Groq AI', 'LLaMA', 'Vercel', 'Railway', 'Git', 'Product Strategy', 'Investor Relations'],
    education: [
      { degree: 'Computer Engineering Technology', institution: 'Sir Syed University of Engineering & Technology', period: '2022 - Present' },
    ],
    experience: [
      { role: 'CEO & Co-Founder - DreamByte', period: '2024 - Present', desc: 'Leading product strategy, creator partnerships, fundraising, and engineering direction behind Nexsora OS.' },
      { role: 'Software Engineering Student', period: '2022 - Present', desc: 'Studying software architecture, AI systems, cloud networks, and embedded technology.' },
    ],
  },
  {
    name: 'Sami',
    fallbackColor: 'from-purple-600 to-indigo-700',
    location: 'Karachi, Pakistan',
    aboutTitle: 'Operations leader. Growth partner.',
    contact: { whatsapp: 'https://wa.me/923102110584', email: 'mailto:dreambyte.space@gmail.com' },
    skills: ['Operations', 'Creator Partnerships', 'Community Growth', 'Project Management', 'Product Strategy', 'Client Relations'],
    education: [{ degree: 'Computer Engineering Technology', institution: 'Sir Syed University of Engineering & Technology', period: '2022 - Present' }],
    experience: [
      { role: 'COO & Co-Founder - DreamByte', period: '2024 - Present', desc: 'Driving company operations, creator onboarding, strategic partnerships, and community growth.' },
      { role: 'Operations & Growth Lead', period: '2024 - Present', desc: 'Building systems for delivery, partnerships, and long-term customer relationships.' },
    ],
  },
  {
    name: 'Basit',
    fallbackColor: 'from-pink-600 to-rose-700',
    location: 'Karachi, Pakistan',
    aboutTitle: 'Founding engineer. Product partner.',
    contact: { whatsapp: 'https://wa.me/923102110584', email: 'mailto:dreambyte.space@gmail.com' },
    skills: ['Product Engineering', 'React', 'Node.js', 'Supabase', 'Mobile Apps', 'User Feedback', 'Product Strategy'],
    education: [],
    experience: [
      { role: 'Co-Founder - DreamByte', period: '2024 - Present', desc: 'Contributing to the founding engineering and product team building Nexsora OS.' },
      { role: 'Product Engineering Lead', period: '2024 - Present', desc: 'Turning user feedback into product improvements and reliable software experiences.' },
    ],
  }, {
    name: 'Muqsit',
    fallbackColor: 'from-amber-500 to-orange-600',
    location: 'Karachi, Pakistan',
    aboutTitle: 'Junior web developer. Web experience builder.',
    contact: { whatsapp: 'https://wa.me/923493485645', email: 'mailto:muqsit816@gmail.com' },
    skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Authentication', 'Supabase', 'Firebase', "UI/UX Design", 'Framer Motion', 'Vite', 'GSAP', 'Lenis', 'Git & GitHub', 'Responsive Design'],
    education: [{ degree: 'Software Engineering', institution: 'Sindh Madressatul Islam University (SMIU)', period: '2023 - Present' },
              { degree: 'Web And Mobile App Development', institution: 'Saylani Mass IT Training (SMIT)', period: '2024 - 2025' }
    ],
    experience: [
      { role: 'Junior Web Developer - DreamByte', period: '2026 - Present', desc: 'Building responsive, accessible, and production-ready web experiences for DreamByte products.' },
      { role: 'Web Development Contributor', period: '2026 - Present', desc: 'Supporting frontend implementation, reusable components, and web performance improvements.' },
    ],
  }, {
    name: 'Hurrain',
    fallbackColor: 'from-blue-500 to-indigo-600',
    location: 'Karachi, Pakistan',
    aboutTitle: 'Junior backend developer. Systems builder.',
    contact: { whatsapp: 'https://wa.me/923102110584', email: 'mailto:dreambyte.space@gmail.com' },
    skills: ['Node.js', 'Express', 'REST APIs', 'Supabase', 'Databases', 'Backend Integrations'],
    education: [{ degree: 'Computer Engineering Technology', institution: 'Sir Syed University of Engineering & Technology', period: '2022 - Present' }],
    experience: [
      { role: 'Junior Backend Developer - DreamByte', period: '2026 - Present', desc: 'Building reliable APIs, integrations, and server-side systems that support DreamByte products.' },
      { role: 'Backend Engineering Contributor', period: '2026 - Present', desc: 'Supporting data flows, database operations, and dependable service integrations.' },
    ],
  }, {
    name: 'Umam',
    fallbackColor: 'from-fuchsia-500 to-purple-600',
    location: 'Karachi, Pakistan',
    aboutTitle: 'Junior frontend developer. Interface builder.',
    contact: { whatsapp: 'https://wa.me/923102110584', email: 'mailto:dreambyte.space@gmail.com' },
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'UI Development', 'Responsive Design', 'Reusable Components'],
    education: [{ degree: 'Computer Engineering Technology', institution: 'Sir Syed University of Engineering & Technology', period: '2022 - Present' }],
    experience: [
      { role: 'Junior Frontend Developer - DreamByte', period: '2026 - Present', desc: 'Creating polished interfaces, reusable UI components, and smooth user experiences.' },
      { role: 'Frontend Engineering Contributor', period: '2026 - Present', desc: 'Helping translate product requirements into responsive and maintainable frontend experiences.' },
    ],
  }, {
    name: 'Zoha',
    fallbackColor: 'from-fuchsia-500 to-purple-600',
    location: 'Karachi, Pakistan',
    aboutTitle: 'Junior Cybersecurity Engineer.',
    contact: { whatsapp: 'https://wa.me/923102110584', email: 'mailto:dreambyte.space@gmail.com' },
    skills: ['Cybersecurity', 'Network Security', 'Vulnerability Assessment', 'Penetration Testing', 'Security Audits', 'Incident Response'],
    education: [],
    experience: [
      { role: 'Junior Cybersecurity Engineer - DreamByte', period: '2026 - Present', desc: 'Focusing on protecting DreamByte digital assets and ensuring robust security practices.' },
      { role: 'Cybersecurity Contributor', period: '2026 - Present', desc: 'Supporting security assessments, risk evaluations, and security audit processes.' },
    ],
  },
];

export default function FounderProfile({ member, onBack }) {
  useEffect(() => {
    scrollToTop();
  }, []);

  if (!member) return null;

  const founderData = founderProfiles.find((profile) => profile.name === member.name) || founderProfiles[0];
  const profile = {
    ...founderData,
    ...member,
    contact: { ...founderData.contact, ...member.contact },
  };

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
            <div className={`w-full h-full rounded-[22px] bg-gradient-to-br ${profile.fallbackColor} flex items-center justify-center text-4xl font-extrabold text-white font-heading overflow-hidden`}>
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <Badge variant="teal">{profile.role}</Badge>
              <Badge variant="outline" icon={MapPin}>{profile.location}</Badge>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-heading mt-3">
              {profile.name}
            </h1>

            <p className="mt-3 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl"> 
              {profile.tagline || profile.bio}
            </p>

            {/* Social Action Buttons */} 
            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center whitespace-nowrap px-4 py-2 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-slate-200 hover:text-gray-900 dark:hover:text-white hover:border-cyan-500/40 text-xs font-semibold gap-2 transition-all"
                >
                  <Linkedin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              )}

              {profile.instagram && (
                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center whitespace-nowrap px-4 py-2 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-slate-200 hover:text-gray-900 dark:hover:text-white hover:border-pink-500/40 text-xs font-semibold gap-2 transition-all"
                >
                  <Instagram className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              )}

              <a
                href={profile.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-500/20 text-xs font-semibold flex items-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>WhatsApp Direct</span>
              </a>

              <a
                href={profile.contact.email}
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
            {profile.aboutTitle}
          </h2>
          <p className="mt-3 text-gray-600 dark:text-slate-300 leading-relaxed text-base"> 
            {profile.fullBio || profile.bio}
          </p>
        </Card>

        {/* Skills & Tech Stack */}
        <Card className="p-8">
          <Badge variant="teal" className="mb-3">Skills & Technical Stack</Badge>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-heading">Core Competencies</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-semibold text-gray-700 dark:text-slate-200 hover:border-teal-400/40 hover:text-teal-500 dark:hover:text-teal-300 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>

        {/* Education Section */}
        {profile.education?.length > 0 && (
          <Card className="p-8">
            <Badge variant="teal" className="mb-3" icon={GraduationCap}>Education</Badge>
            <div className="space-y-4">
              {profile.education.map((education, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading">{education.degree}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{education.institution}</p>
                  <div className="text-xs text-teal-600 dark:text-teal-400 font-mono mt-1">{education.period}</div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Experience Section */}
        <Card className="p-8">
          <Badge variant="pink" className="mb-3">Experience</Badge>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-heading mb-6">Track Record</h2>
          
          <div className="space-y-6">
            {profile.experience.map((exp, i) => (
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
