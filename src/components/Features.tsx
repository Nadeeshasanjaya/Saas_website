

import React from 'react';
import { motion } from 'framer-motion';
import {
  ZapIcon,
  ShieldCheckIcon,
  GlobeIcon,
  GitBranchIcon,
  GaugeIcon,
  LayersIcon } from
'lucide-react';
import { SectionHeading } from './Section';

const features = [
{
  icon: ZapIcon,
  title: 'Instant deploys',
  desc: 'Every git push triggers an optimized build that goes live worldwide in seconds, not minutes.'
},
{
  icon: GlobeIcon,
  title: 'Global edge network',
  desc: 'Serve content from 120+ regions with intelligent routing that keeps latency below 40ms.'
},
{
  icon: ShieldCheckIcon,
  title: 'Enterprise security',
  desc: 'SOC 2 Type II, automatic TLS, DDoS protection and isolated runtimes on every request.'
},
{
  icon: GitBranchIcon,
  title: 'Preview environments',
  desc: 'A shareable live URL for every pull request so your team reviews real changes, faster.'
},
{
  icon: GaugeIcon,
  title: 'Realtime analytics',
  desc: 'Core Web Vitals, traffic and error tracking streamed live with zero configuration.'
},
{
  icon: LayersIcon,
  title: 'Infinite scale',
  desc: 'Autoscaling infrastructure absorbs traffic spikes automatically — you never touch a server.'
}];


export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Features"
          title={<>Everything you need to <span className="text-gradient">ship fast</span></>}
          subtitle="A complete platform that replaces your patchwork of tools with one seamless, blazing-fast workflow." />
        

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) =>
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass glow-border group relative overflow-hidden rounded-2xl p-6 transition-colors hover:bg-white/[0.06]">
            
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent-violet/20 to-accent-sky/20 ring-1 ring-white/10">
                <f.icon className="h-6 w-6 text-accent-indigo transition-transform group-hover:scale-110" />
              </div>
              <h3 className="font-display text-lg font-600 text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{f.desc}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}