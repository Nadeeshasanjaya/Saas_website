



import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { SectionHeading } from './Section';

const faqs = [
{
  q: 'How does the free plan work?',
  a: 'The Hobby plan is free forever with no credit card required. You get one concurrent build, 100 GB of bandwidth per month, and automatic HTTPS — perfect for side projects and prototypes.'
},
{
  q: 'Can I switch plans at any time?',
  a: 'Yes. You can upgrade or downgrade whenever you like from your dashboard. Changes are prorated automatically, so you only ever pay for what you use.'
},
{
  q: 'Do you support custom domains?',
  a: 'Absolutely. Connect unlimited custom domains on any paid plan, with free automatic SSL certificates that renew themselves. Hobby plans support one custom domain.'
},
{
  q: 'What regions do you deploy to?',
  a: 'Nebula runs across 120+ edge locations spanning North & South America, Europe, Asia-Pacific, and Africa. Traffic is automatically routed to the nearest healthy region.'
},
{
  q: 'Is my data secure?',
  a: 'Security is built in. We are SOC 2 Type II compliant, encrypt data at rest and in transit, and isolate every runtime. Enterprise plans add SSO, SAML, and detailed audit logs.'
},
{
  q: 'What kind of support do you offer?',
  a: 'Community support on Hobby, priority email support on Pro with a same-day response, and a dedicated success engineer plus a 99.99% uptime SLA on Enterprise.'
}];


export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Questions? <span className="text-gradient">Answered.</span></>}
          subtitle="Everything you need to know before getting started. Can't find an answer? Reach out below." />
        

        <div className="mt-14 flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="glass overflow-hidden rounded-2xl">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                  
                  <span className="font-500 text-white">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="grid h-7 w-7 flex-none place-items-center rounded-full bg-white/5 text-accent-indigo">
                    
                    <PlusIcon className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen &&
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden">
                    
                      <p className="px-6 pb-5 text-sm leading-relaxed text-white/55">{item.a}</p>
                    </motion.div>
                  }
                </AnimatePresence>
              </div>);

          })}
        </div>
      </div>
    </section>);

}