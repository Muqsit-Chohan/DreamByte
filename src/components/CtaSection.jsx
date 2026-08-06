import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, CheckCircle2, Sparkles, MapPin, ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: "What is a typical project timeline?",
    a: "Project timelines vary based on complexity, but a typical project takes between 3 to 6 months from discovery to deployment. We also offer faster-paced options for smaller scopes."
  },
  {
    q: "Who owns the intellectual property (IP)?",
    a: "For client projects, you own 100% of the intellectual property. We provide all source code, documentation, and assets upon project completion and final payment."
  },
  {
    q: "Do you sign Non-Disclosure Agreements (NDAs)?",
    a: "Absolutely. We are happy to sign an NDA before any sensitive information is shared to ensure your ideas and data are protected."
  }
];
export default function CtaSection() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) return;

    const whatsappMessage = [
      `Hello DreamByte, I need help with ${intent === 'project' ? 'a custom project' : 'an in-house product'}.`,
      '',
      message.trim(),
      '',
      `My email: ${email.trim()}`,
    ].join('\n');

    window.open(
      `https://wa.me/923102110584?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank',
      'noopener,noreferrer',
    );
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setMessage('');
    }, 3000);
  };

  const [intent, setIntent] = useState('project');

  const AccordionItem = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="border-b border-slate-200 dark:border-white/10 py-4">
        <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left flex justify-between items-center cursor-pointer">
          <span className="font-semibold text-slate-900 dark:text-white">{q}</span>
          <ChevronDown className={`w-5 h-5 text-slate-500 dark:text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{a}</p>}
      </div>
    )
  }

  return (
    <section id="contact" className="py-24 relative bg-transparent overflow-hidden">
      
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-purple-600/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 sm:p-14 rounded-3xl border border-gray-200 dark:border-teal-500/40 relative overflow-hidden shadow-lg dark:shadow-[0_0_80px_rgba(0,211,189,0.2)] text-center bg-white dark:bg-transparent"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Get in Touch
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white font-heading tracking-tight max-w-2xl mx-auto">
            Let's build something great together.
          </h2>

          <p className="mt-4 text-gray-600 dark:text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            Have a project in mind, or need support for one of our products? We're here to help.
          </p>

          {/* Smart Contact Form */}
          <div className="mt-10 max-w-xl mx-auto text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <button onClick={() => setIntent('project')} className={`p-3 rounded-lg border text-sm font-semibold transition-colors ${intent === 'project' ? 'bg-teal-500/20 border-teal-500/40 text-teal-700 dark:text-white' : 'bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-white/10'}`}>
                I want to hire DreamByte for a custom project
              </button>
              <button onClick={() => setIntent('support')} className={`p-3 rounded-lg border text-sm font-semibold transition-colors ${intent === 'support' ? 'bg-purple-500/20 border-purple-500/40 text-purple-700 dark:text-white' : 'bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-white/10'}`}>
                I need support on an in-house product
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                rows="4"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={intent === 'project' ? "Tell us about your project scope, budget, and timeline..." : "How can we help you with our product?"}
                className="w-full p-3 rounded-xl bg-gray-50 dark:bg-[#0b1217] border border-gray-200 dark:border-white/15 text-gray-900 dark:text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-400 transition-colors"
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="flex-1 w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#0b1217] border border-gray-200 dark:border-white/15 text-gray-900 dark:text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-400 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl btn-glow-teal font-bold text-sm flex items-center justify-center gap-2 shrink-0"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 mt-4 rounded-xl bg-teal-500/20 border border-teal-500/40 text-teal-800 dark:text-teal-300 text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <span>Thanks! We'll get back to you shortly.</span>
                </motion.div>
              )}
            </form>
          </div>

          {/* Direct Communication Channels */}
          <div className="mt-10 pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-center gap-6">
            
            <a
              href="mailto:dreambyte.space@gmail.com"
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
                <Mail className="w-4 h-4" />
              </div>
              <span>dreambyte.space@gmail.com</span>
            </a>

            <span className="hidden sm:block text-slate-600">•</span>

            <a
              href="https://wa.me/923102110584"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 transition-colors font-semibold"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <MessageCircle className="w-4 h-4" />
              </div>
              <span>WhatsApp: +92 310 2110584</span>
            </a>

            <span className="hidden sm:block text-slate-600">•</span>

            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>Karachi, Pakistan</span>
            </div>

          </div>

        </motion.div>

        {/* FAQ Section */}
        <div className="max-w-2xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-heading flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              Quick FAQ
            </h3>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-transparent">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
