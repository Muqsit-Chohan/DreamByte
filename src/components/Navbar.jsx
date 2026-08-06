import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
    { id: 'home', title: 'Home' },
    { id: 'projects', title: 'Projects' },
    { id: 'services', title: 'Services' },
    { id: 'about', title: 'About' },
    { id: 'contact', title: 'Contact' },
];

export default function Navbar({ setCurrentPage, currentPage, theme, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navLinks = NAV_LINKS;

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll spy using scroll position
    useEffect(() => {
        if (currentPage !== 'home') {
            setActiveSection("");
            return;
        }

        const handleScrollSpy = () => {
            const scrollPos = window.scrollY + 180;
            const docHeight = document.documentElement.scrollHeight;
            const winHeight = window.innerHeight;

            if (window.scrollY < 120) {
                setActiveSection('home');
                return;
            }

            if (window.scrollY + winHeight >= docHeight - 80) {
                setActiveSection('contact');
                return;
            }

            const sections = ['home', 'projects', 'services', 'about', 'contact'];
            let current = 'home';
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const top = el.offsetTop;
                    if (scrollPos >= top) {
                        current = id;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScrollSpy, { passive: true });
        handleScrollSpy();

        return () => window.removeEventListener("scroll", handleScrollSpy);
    }, [currentPage]);

    // Escape key closes mobile menu
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && setMobileMenuOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        setCurrentPage(id);
        setMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleLogoClick = (e) => {
        e.preventDefault();
        setCurrentPage('home');
        setMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Header class – scrolled glass styling
    const headerClass = scrolled
        ? "mx-3 mt-2 rounded-xl p-1.5   "
        : "bg-transparent";

    return (
        <motion.header
            initial={{ y: -28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${headerClass}`}
        >
            <nav
                aria-label="Primary navigation"
                className={`mx-auto flex max-w-7xl items-center justify-between px-2 py-1.5 md:px-8 ${scrolled && "max-w-6xl px-3 py-1 md:px-4"}`}
            >
                {/* Brand Logo */}
                <button
                    onClick={handleLogoClick}
                    className="group flex items-center gap-2.5 rounded-lg text-left outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                    aria-label="DreamByte home"
                >
                    <div className="relative h-8 w-8 rounded-md shadow-[0_0_15px_rgba(0,211,189,0.25)] transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(0,211,189,0.5)] group-hover:scale-110 group-hover:rotate-6">
                        <div className="h-full w-full rounded-md bg-[#0b1217] flex items-center justify-center overflow-hidden">
                            <img
                                src="/images/dreambytelogo.jpg"
                                alt="DreamByte Logo"
                                className="h-full w-full rounded-md object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white font-heading leading-tight">
                            Dream Byte
                        </span>
                        <span className="text-[9px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 -mt-0.5 font-medium">
                            Software Studio
                        </span>
                    </div>
                </button>

                {/* Desktop Nav Links */}
                <div className="hidden items-center gap-1 rounded-full bg-white/90 dark:bg-[#0b1217]/90 backdrop-blur-md p-1 border border-slate-200/80 dark:border-white/10 md:flex">
                    {navLinks.map((link) => {
                        const isActive = currentPage === link.id || (currentPage === 'home' && activeSection === link.id);
                        return (
                            <a
                                key={link.id}
                                href={`/${link.id}`}
                                onClick={(e) => handleNavClick(e, link.id)}
                                aria-current={isActive ? "page" : undefined}
                                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200 ${isActive
                                        ? "bg-teal-500/15 text-teal-700 dark:bg-teal-400/20 dark:text-teal-400 shadow-sm font-semibold"
                                        : "text-slate-600 hover:bg-slate-200/60 hover:text-teal-600 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-teal-400"
                                    }`}
                            >
                                {link.title}
                            </a>
                        );
                    })}
                </div>

                {/* Desktop Right Actions – theme toggle */}
                <div className="hidden items-center gap-2 md:flex">
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 transition hover:bg-slate-200 dark:hover:bg-white/10 md:hidden border border-slate-200 dark:border-white/10"
                    aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
                    aria-expanded={mobileMenuOpen}
                >
                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {/* Mobile Dropdown – Get Started removed */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        transition={{ duration: 0.24 }}
                        className="mx-3 mt-2 overflow-hidden rounded-2xl bg-white/95 dark:bg-[#0b1217]/95 backdrop-blur-xl p-3 shadow-2xl border border-slate-200 dark:border-white/10 md:hidden"
                    >
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={`/${link.id}`}
                                    onClick={(e) => handleNavClick(e, link.id)}
                                    aria-current={currentPage === link.id ? "page" : undefined}
                                    className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition ${currentPage === link.id
                                            ? "bg-teal-500/15 text-teal-700 dark:bg-teal-400/20 dark:text-teal-400 font-semibold"
                                            : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5 hover:text-teal-600 dark:hover:text-teal-400"
                                        }`}
                                >
                                    {link.title}
                                </a>
                            ))}
                            <div className="my-2 border-t border-slate-200 dark:border-white/5" />
                            <div className="flex items-center justify-between px-2">
                                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Appearance</span>
                                <ThemeToggle theme={theme} toggleTheme={toggleTheme} showLabel={true} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}