import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, ArrowUpRight, MapPin, X } from "lucide-react";
import { InstagramIcon as Instagram, LinkedinIcon as Linkedin } from "./BrandIcons";

export default function TeamSection({ onSelectMember }) {
  const [selectedMember, setSelectedMember] = useState(null);

  const team = [
    {
      name: "Syed Safeer",
      role: "CEO & Co-Founder",
      location: "Karachi, Pakistan",
      bio: "Product vision and strategy behind Nexsora OS. Drives overall direction, AI integrations, investor relations, and core engineering decisions at DreamByte.",
      image: "/images/Safeer.jpeg",
      fallbackColor: "from-teal-500 to-cyan-600",
      initials: "SS",
      linkedin: "https://linkedin.com/in/syed-safeer-023422357",
      instagram: "https://instagram.com/i.saffeerr",
      highlights: ["Product Lead for Nexsora OS", "FastAPI & Groq AI Architecture", "Investor & Growth Strategy"],
    },
    {
      name: "Sami",
      role: "COO & Co-Founder",
      location: "Karachi, Pakistan",
      bio: "Keeps DreamByte running smoothly while the product ships fast. Handles company operations, creator onboarding, and strategic growth for Nexsora OS.",
      image: "/images/Sami.jpeg",
      fallbackColor: "from-purple-500 to-indigo-600",
      initials: "S",
      linkedin: "https://linkedin.com/in/syed-safeer-023422357",
      instagram: "https://instagram.com/",
      highlights: ["Creator Onboarding & Partnerships", "Operational Execution", "Community Growth"],
    },
    {
      name: "Basit",
      role: "Co-Founder",
      location: "Karachi, Pakistan",
      bio: "Core founding partner at DreamByte. Part of the founding engineering & product team driving Nexsora OS forward from Karachi.",
      image: "/images/Basit.jpeg",
      fallbackColor: "from-pink-500 to-rose-600",
      initials: "B",
      linkedin: "https://linkedin.com/in/syed-safeer-023422357",
      instagram: "https://instagram.com/",
      highlights: ["Founding Partner", "Product Engineering", "User Feedback Loops"],
    },

     {
      name: "Muqsit",
      role: "Junior Web Developer",
      location: "Karachi, Pakistan",
      bio: "Junior web developer contributing to responsive, accessible, and production-ready web experiences at DreamByte.",
      image: "/images/Muqsit.jpeg",
      fallbackColor: "from-amber-500 to-orange-600",
      initials: "M",
      linkedin: "https://linkedin.com/in/syed-safeer-023422357",
      instagram: "https://instagram.com/",
      highlights: ["Responsive Web Development", "Frontend Components", "Web Performance"],
    },
    {
      name: "Hurrain",
      role: "Junior Backend Developer",
      location: "Karachi, Pakistan",
      bio: "Junior backend developer building reliable APIs, integrations, and server-side systems that support DreamByte products.",
      image: "/images/Hurrain.jpeg",
      fallbackColor: "from-blue-500 to-indigo-600",
      initials: "H",
      linkedin: "https://linkedin.com/in/syed-safeer-023422357",
      instagram: "https://instagram.com/",
      highlights: ["API Development", "Backend Integrations", "Database Systems"],
    },
    {
      name: "Umam",
      role: "Junior Frontend Developer",
      location: "Karachi, Pakistan",
      bio: "Junior frontend developer focused on polished interfaces, reusable UI components, and smooth user experiences.",
      image: "/images/Umam.jpeg",
      fallbackColor: "from-fuchsia-500 to-purple-600",
      initials: "U",
      linkedin: "https://linkedin.com/in/syed-safeer-023422357",
      instagram: "https://instagram.com/",
      highlights: ["UI Development", "Reusable Components", "Responsive Interfaces"],
    },
    
  ];

  return (
    <section id="team" className="py-24 relative bg-transparent overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-teal-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-700 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" /> The Team Behind Nexsora OS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mt-4 font-heading tracking-tight">
            Three founders <span className="text-gradient-teal">shipping from Karachi</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-slate-400 text-base sm:text-lg">
            A tight-knit team of engineers and operators building the AI operating system for South Asian creators.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-panel rounded-3xl p-6 border border-gray-200 dark:border-white/10 glass-panel-hover flex flex-col justify-between relative group bg-white dark:bg-transparent"
            >
              <div>
                <div className="relative w-24 h-24 mx-auto rounded-2xl overflow-hidden p-1 bg-gradient-to-br from-teal-400 via-cyan-500 to-purple-600 shadow-[0_0_20px_rgba(0,211,189,0.25)] group-hover:shadow-[0_0_30px_rgba(0,211,189,0.45)] transition-all">
                  <div className={`w-full h-full rounded-xl bg-gradient-to-br ${member.fallbackColor} flex items-center justify-center text-2xl font-bold text-white font-heading overflow-hidden`}>
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" onError={(e) => { e.target.style.display = "none"; }} />
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-heading group-hover:text-teal-500 dark:group-hover:text-teal-300 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 mt-1 uppercase tracking-wider">{member.role}</div>
                  <div className="flex items-center justify-center gap-1 text-xs text-slate-400 mt-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{member.location}</span>
                  </div>
                  <p className="mt-4 text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{member.bio}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-colors" title="LinkedIn">
                      <Linkedin className="w-4 h-4 text-cyan-400" />
                    </a>
                  )}
                  {member.instagram && (
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors" title="Instagram">
                      <Instagram className="w-4 h-4 text-pink-400" />
                    </a>
                  )}
                </div>
                <button
                  onClick={() => onSelectMember ? onSelectMember(member) : setSelectedMember(member)}
                  className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 flex items-center gap-1 group/btn cursor-pointer"
                >
                  View Profile
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="glass-panel max-w-lg w-full p-8 rounded-3xl border border-gray-200 dark:border-teal-500/40 relative shadow-xl dark:shadow-[0_0_50px_rgba(0,211,189,0.3)] bg-white dark:bg-transparent">
              <button onClick={() => setSelectedMember(null)} className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white">
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-4">
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${selectedMember.fallbackColor} flex items-center justify-center text-3xl font-bold text-white font-heading overflow-hidden`}>
                  <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = "none"; }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-heading">{selectedMember.name}</h3>
                  <div className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">{selectedMember.role}</div>
                  <div className="text-xs text-slate-400">{selectedMember.location}</div>
                </div>
              </div>
              <p className="mt-5 text-sm text-gray-700 dark:text-slate-200 leading-relaxed">{selectedMember.bio}</p>
              <div className="mt-5 pt-4 border-t border-gray-200 dark:border-white/10">
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">Key Focus Areas</div>
                <ul className="space-y-1.5">
                  {selectedMember.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-teal-700 dark:text-teal-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-teal-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex items-center gap-3">
                {selectedMember.linkedin && (
                  <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-semibold text-gray-800 dark:text-slate-200 dark:hover:bg-white/10 flex items-center justify-center gap-1.5 transition-colors">
                    <Linkedin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> LinkedIn Profile
                  </a>
                )}
                {selectedMember.instagram && (
                  <a href={selectedMember.instagram} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-semibold text-gray-800 dark:text-slate-200 dark:hover:bg-white/10 flex items-center justify-center gap-1.5 transition-colors">
                    <Instagram className="w-4 h-4 text-pink-600 dark:text-pink-400" /> Instagram Profile
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
