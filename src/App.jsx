import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FounderProfile from './components/FounderProfile';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import MouseEffects from './components/MouseEffects';
import BackToTopButton from './components/BackToTopButton';

const GLOBAL_STYLES = `
@keyframes hero-breathe {
  0%   { transform: translate(-50%, -50%) scale(1);   opacity: 0.5; }
  100% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.9; }
}
  .animate-hero-breathe { animation: hero-breathe 9s ease-in-out infinite alternate; }
  .hero-aurora {
    background: radial-gradient(
      circle at 50% 50%,
      var(--aurora-color-1) 0%,
      var(--aurora-color-2) 40%,
      transparent 72%
    );
  }
  .light .hero-aurora {
    opacity: 0.98;
    filter: blur(92px) saturate(1.15);
    mix-blend-mode: screen;
  }
  .dark .hero-aurora {
    opacity: 0.82;
  }
`;

export default function App() {
  const [selectedFounder, setSelectedFounder] = useState(null);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const root = window.document.documentElement;
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      root.classList.remove('light');
      root.classList.add('dark');
      root.style.setProperty('--aurora-color-1', 'rgba(56, 189, 248, 0.28)');
      root.style.setProperty('--aurora-color-2', 'rgba(13, 148, 136, 0.20)');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      root.style.setProperty('--aurora-color-1', 'rgba(0, 211, 189, 0.18)');
      root.style.setProperty('--aurora-color-2', 'rgba(99, 102, 241, 0.14)');
    }
  }, [theme]);

  useEffect(() => {
    // When the page changes, scroll to the top of the page.
    if (!selectedFounder) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage, selectedFounder]);

  // Check URL hash for direct links like #safeer, #sami, #basit
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('safeer')) {
        setSelectedFounder({
          name: 'Syed Safeer',
          role: 'CEO & Co-Founder',
          location: 'Karachi, Pakistan',
          tagline: 'Building AI-native products from Karachi, Pakistan. Founder of DreamByte and the mind behind Nexora OS.',
          fullBio: 'Safeer is the CEO and Co-Founder of DreamByte Studio, the company behind Nexora OS — an AI-powered creator platform for South Asian content creators. He leads product vision, go-to-market strategy, investor relations, and engineering direction at DreamByte. Alongside the studio, he studies Software Engineering at Sir Syed University of Engineering & Technology (SSUET).',
          aboutTitle: 'Product builder. Studio founder. Engineering student.',
          image: '/images/Safeer.jpeg',
          fallbackColor: 'from-teal-500 to-cyan-600',
          initials: 'SS',
          linkedin: 'https://linkedin.com/in/syed-safeer-023422357',
          instagram: 'https://instagram.com/i.saffeerr',
          skills: ['React 19', 'FastAPI', 'Supabase', 'Python', 'Node.js', 'Groq AI', 'LLaMA', 'Vercel', 'Railway', 'Git', 'Product Strategy', 'Investor Relations'],
          experience: [
            {
              role: 'CEO & Co-Founder — DreamByte Studio',
              period: '2024 – Present · Karachi, Pakistan',
              desc: 'Leading the founding team behind Nexora OS. Driving product roadmap, creator partnerships, fundraising strategy, and engineering direction.',
            },
            {
              role: 'Software Engineering Student',
              period: 'Sir Syed University of Engineering & Technology · 2022 – Present',
              desc: 'Department of Computer Engineering Technology. Coursework spanning software engineering, cloud systems, NLP, and AI applications.',
            }
          ]
        });
      } else if (hash.includes('sami')) {
        setSelectedFounder({
          name: 'Sami',
          role: 'COO & Co-Founder',
          location: 'Karachi, Pakistan',
          tagline: 'Operations & Creator Partnerships lead at DreamByte. Driving creator acquisition and scaling Nexora OS.',
          fullBio: 'Sami keeps DreamByte running smoothly while the product ships fast. He handles studio operations, creator onboarding, Instagram partnerships, and operational growth for Nexora OS.',
          aboutTitle: 'Operations leader. Creator partner. Studio co-founder.',
          image: '/images/Sami.jpeg',
          fallbackColor: 'from-purple-500 to-indigo-600',
          initials: 'S',
          linkedin: 'https://linkedin.com/in/syed-safeer-023422357',
          instagram: 'https://instagram.com/',
          skills: ['Operations', 'Creator Onboarding', 'Business Strategy', 'Partnerships', 'Growth', 'Meta Graph API'],
          experience: [
            {
              role: 'COO & Co-Founder — DreamByte Studio',
              period: '2024 – Present · Karachi, Pakistan',
              desc: 'Overseeing operations, creator onboarding pipelines, and strategic expansion for Nexora OS across South Asia.',
            }
          ]
        });
      } else if (hash.includes('basit')) {
        setSelectedFounder({
          name: 'Basit',
          role: 'Co-Founder',
          location: 'Karachi, Pakistan',
          tagline: 'Core founding partner at DreamByte driving product engineering and user feedback loops for Nexora OS.',
          fullBio: 'Basit is a core co-founder at DreamByte. Part of the founding engineering & product team driving Nexora OS forward from Karachi.',
          aboutTitle: 'Core founder. Product engineer.',
          image: '/images/Basit.jpeg',
          fallbackColor: 'from-pink-500 to-rose-600',
          initials: 'B',
          linkedin: 'https://linkedin.com/in/syed-safeer-023422357',
          instagram: 'https://instagram.com/',
          skills: ['Product Engineering', 'Backend Systems', 'UI/UX Design', 'FastAPI', 'Supabase', 'Python'],
          experience: [
            {
              role: 'Co-Founder — DreamByte Studio',
              period: '2024 – Present · Karachi, Pakistan',
              desc: 'Founding partner contributing to core system architecture, feature feedback loops, and Nexora OS releases.',
            }
          ]
        });
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSelectFounder = (member) => {
    setSelectedFounder(member);
  };

  const handleBackToMain = () => {
    setSelectedFounder(null);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const renderPage = () => {
    if (selectedFounder) {
      return <FounderProfile member={selectedFounder} onBack={handleBackToMain} />;
    }
    switch (currentPage) {
      case 'about':
        return <AboutPage onSelectFounder={handleSelectFounder} />;
      case 'projects':
        return <ProjectsPage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage onSelectFounder={handleSelectFounder} setCurrentPage={setCurrentPage} theme={theme} toggleTheme={toggleTheme} />;
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_STYLES }} />
      <MouseEffects theme={theme} />
      <div className="relative isolate min-h-screen bg-white dark:bg-[#080d11] text-slate-800 dark:text-slate-100 selection:bg-teal-400/40 selection:text-teal-900 dark:selection:text-white overflow-x-hidden">
        <div className="hero-aurora fixed left-1/2 top-1/2 h-[65vh] w-[90vw] rounded-[50%] blur-[90px] animate-hero-breathe z-0 pointer-events-none" />
        <div className="relative z-10">
          <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} theme={theme} toggleTheme={toggleTheme} />
          <main>{renderPage()}</main>
          <Footer />
          <BackToTopButton />
        </div>
      </div>
    </>
  );
}
