


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { SectionHeading } from './Section';

type Plan = {
  name: string;
  monthly: number;
  blurb: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

const plans: Plan[] = [
{
  name: 'Hobby',
  monthly: 0,
  blurb: 'For side projects and experiments.',
  features: ['1 concurrent build', '100 GB bandwidth', 'Community support', 'Automatic HTTPS'],
  cta: 'Start free'
},
{
  name: 'Pro',
  monthly: 24,
  blurb: 'For growing teams shipping daily.',
  features: [
  'Unlimited builds',
  '1 TB bandwidth',
  'Preview environments',
  'Realtime analytics',
  'Priority support'],

  featured: true,
  cta: 'Start 14-day trial'
},
{
  name: 'Enterprise',
  monthly: 99,
  blurb: 'For organizations at global scale.',
  features: [
  'Everything in Pro',
  'Dedicated edge capacity',
  'SSO & SAML',
  'SOC 2 & audit logs',
  '99.99% uptime SLA'],

  cta: 'Contact sales'
}];


export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Pricing"
          title={<>Simple pricing that <span className="text-gradient">scales with you</span></>}
          subtitle="Start free and upgrade when you're ready. No hidden fees, cancel anytime." />
        

        <div className="mt-9 flex items-center justify-center gap-3">
          <span className={`text-sm ${!annual ? 'text-white' : 'text-white/45'}`}>Monthly</span>
          <button
            role="switch"
            aria-checked={annual}
            onClick={() => setAnnual((v) => !v)}
            className="relative h-7 w-12 rounded-full bg-white/10 ring-1 ring-white/15 transition-colors">
            
            <motion.span
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 32 }}
              className={`absolute top-1 h-5 w-5 rounded-full bg-gradient-to-br from-accent-violet to-accent-sky shadow-glow ${
              annual ? 'left-6' : 'left-1'}`
              } />
            
          </button>
          <span className={`text-sm ${annual ? 'text-white' : 'text-white/45'}`}>
            Annual <span className="text-accent-sky">–20%</span>
          </span>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-center">
          {plans.map((plan, i) => {
            const price = annual ? Math.round(plan.monthly * 0.8) : plan.monthly;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative flex flex-col rounded-3xl p-8 ${
                plan.featured ?
                'glass-strong glow-border shadow-glow lg:scale-105' :
                'glass'}`
                }>
                
                {plan.featured &&
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent-violet to-accent-sky px-3 py-1 text-xs font-600 text-white">
                    Most popular
                  </span>
                }
                <h3 className="font-display text-lg font-700 text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-white/50">{plan.blurb}</p>
                <div className="mt-6 flex items-end gap-1">
                  <span className="font-display text-4xl font-800 text-white">${price}</span>
                  <span className="mb-1.5 text-sm text-white/45">/mo</span>
                </div>

                <ul className="mt-7 flex flex-col gap-3">
                  {plan.features.map((f) =>
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                      <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-accent-indigo/15">
                        <CheckIcon className="h-3 w-3 text-accent-sky" />
                      </span>
                      {f}
                    </li>
                  )}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 rounded-xl py-3 text-center text-sm font-600 transition-transform hover:scale-[1.02] ${
                  plan.featured ?
                  'bg-white text-ink-950' :
                  'border border-white/15 bg-white/5 text-white hover:bg-white/10'}`
                  }>
                  
                  {plan.cta}
                </a>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}