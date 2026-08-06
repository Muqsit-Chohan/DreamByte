import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon as Instagram, GithubIcon as Github, LinkedinIcon as Linkedin } from './BrandIcons';


export default function Footer() {
  return (
    // <footer className="bg-slate-100 dark:bg-[#05080b] border-t border-slate-200 dark:border-white/10 pt-16 pb-12 relative">
    <footer className="bg-slate-100 dark:bg-black border-t border-slate-200 dark:border-white/10 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200 dark:border-white/10">

          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md p-[1px]">
                <img
                                src="/images/dreambytelogo.jpg"
                                alt="DreamByte Logo"
                                className="h-full w-full rounded-md object-cover"
                            />
              </div>
              <span className="text-xl font-extrabold text-slate-900 dark:text-white font-heading">
                Dream<span className="text-gradient-teal">Byte</span>
              </span>
            </a>

            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              The company behind Nexora OS. Building AI-powered tools for South Asian content creators.
              Based in Karachi, Pakistan.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/4playstudiosdev-cmyk/Creator-OS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-200/60 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-white/10 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/syed-safeer-023422357"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-200/60 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-300/50 dark:hover:bg-white/10 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/i.saffeerr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-200/60 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-slate-300/50 dark:hover:bg-white/10 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Team Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white font-heading mb-4">Team</h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li><a href="#team" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Syed Safeer (CEO)</a></li>
              <li><a href="#team" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Sami (COO)</a></li>
              <li><a href="#team" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Basit (Co-Founder)</a></li>
              <li><a href="#contact" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Join Our Team</a></li>
            </ul>
          </div>

          {/* Nexora OS Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white font-heading mb-4">Nexora OS</h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li><a href="#features" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Groq AI Generator</a></li>
              <li><a href="#features" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Instagram OAuth</a></li>
              <li><a href="#features" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">YouTube PKCE OAuth</a></li>
              <li><a href="#features" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Unified Analytics</a></li>
              <li><a href="#features" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Post Scheduler</a></li>
            </ul>
          </div>

          {/* Company & External Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white font-heading mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href="https://nexoraos.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center gap-1"
                >
                  nexoraos.online <ArrowUpRight className="w-3 h-3 text-teal-600 dark:text-teal-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/4playstudiosdev-cmyk/Creator-OS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center gap-1"
                >
                  GitHub Source <ArrowUpRight className="w-3 h-3 text-teal-600 dark:text-teal-400" />
                </a>
              </li>
              <li><a href="mailto:dreambyte.space@gmail.com" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">dreambyte.space@gmail.com</a></li>
              <li><a href="https://wa.me/923102110584" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">WhatsApp Support</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 DreamByte Studio. All rights reserved. Based in Karachi, Pakistan.
          </div>
          <div className="flex items-center gap-1">
            <span>Makers of</span>
            <span className="font-semibold text-teal-400">Nexora OS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
