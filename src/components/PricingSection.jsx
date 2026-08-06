import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap } from 'lucide-react';

export default function PricingSection() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: 'Free Creator',
      desc: 'Ideal for getting started with basic cross-platform AI tools.',
      priceMonthly: 0,
      priceAnnual: 0,
      badge: 'Starter',
      glow: false,
      features: [
        '1 Instagram + 1 YouTube account',
        '50 AI script generations / month',
        'Basic post analytics dashboard',
        'Standard Groq AI inference speed',
        'Community support',
      ],
      buttonText: 'Get Started Free',
      buttonStyle: 'bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white border border-slate-300 dark:border-white/10',
    },
    {
      name: 'Pro Creator',
      desc: 'Built for active creators expanding their brand across platforms.',
      priceMonthly: 19,
      priceAnnual: 15,
      badge: 'Most Popular',
      glow: true,
      features: [
        'Unlimited Instagram & YouTube connections',
        '1,000 AI script & caption generations',
        'Automated post scheduling queue',
        'Unified cross-platform analytics & reach metrics',
        'Optimal posting time AI recommendations',
        'Groq LLaMA 3.3 priority speed',
        '24/7 Priority creator support',
      ],
      buttonText: 'Start 14-Day Free Trial',
      buttonStyle: 'bg-teal-600 hover:bg-teal-700 text-white dark:bg-gradient-to-r dark:from-teal-400 dark:to-cyan-500 dark:text-slate-950 font-bold shadow-md dark:shadow-[0_0_20px_rgba(0,211,189,0.5)]',
    },
    {
      name: 'Agency & Team',
      desc: 'For talent agencies, production studios, and creator teams.',
      priceMonthly: 49,
      priceAnnual: 39,
      badge: 'Enterprise',
      glow: false,
      features: [
        'Everything in Pro Creator plan',
        'Up to 10 team seats & role permissions',
        'Unlimited AI script & caption generations',
        'Custom South Asian brand voice fine-tuning',
        'Dedicated Railway/Supabase API endpoints',
        'WhatsApp direct account manager',
      ],
      buttonText: 'Contact Team',
      buttonStyle: 'bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white border border-slate-300 dark:border-white/10',
    },
  ];

  return (
    <section id="pricing" className="py-24 relative bg-white dark:bg-[#060a0d] overflow-hidden">

      {/* Background glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-700 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" /> Simple Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 font-heading tracking-tight">
            Invest in your <span className="text-gradient-teal">creator growth</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Choose the plan that fits your content workflow. Upgrade or cancel anytime.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full glass-panel border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-transparent">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                !annual ? 'bg-teal-600 text-white dark:bg-teal-400 dark:text-slate-950 shadow-sm dark:shadow-[0_0_15px_rgba(0,211,189,0.4)]' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                annual ? 'bg-teal-600 text-white dark:bg-teal-400 dark:text-slate-950 shadow-sm dark:shadow-[0_0_15px_rgba(0,211,189,0.4)]' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full bg-slate-900 dark:bg-slate-950 text-teal-300 text-[10px] font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => {
            const price = annual ? plan.priceAnnual : plan.priceMonthly;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`glass-panel p-8 rounded-3xl border relative flex flex-col justify-between ${
                  plan.glow
                    ? 'border-teal-400/50 shadow-[0_0_50px_rgba(0,211,189,0.25)] bg-teal-50/40 dark:bg-[#0d171f]'
                    : 'border-slate-200 dark:border-white/10 bg-white dark:bg-transparent glass-panel-hover'
                }`}
              >
                {/* Glow Badge */}
                {plan.glow && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-950 text-xs font-extrabold shadow-[0_0_20px_rgba(0,211,189,0.6)] uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">{plan.name}</h3>
                    {!plan.glow && (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{plan.desc}</p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-heading">
                      ${price}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">/ month</span>
                  </div>

                  {annual && price > 0 && (
                    <div className="text-[11px] text-teal-700 dark:text-teal-400 mt-1">Billed annually (${price * 12}/yr)</div>
                  )}

                  {/* Feature list */}
                  <ul className="mt-8 space-y-3 pt-6 border-t border-slate-200 dark:border-white/10">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div className="mt-8">
                  <a
                    href="#contact"
                    className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center transition-all ${plan.buttonStyle}`}
                  >
                    {plan.buttonText}
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
