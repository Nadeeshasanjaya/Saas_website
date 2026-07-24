


import React from 'react';
import { motion } from 'framer-motion';
import { ServerIcon, DatabaseIcon, CloudIcon, CpuIcon, CheckIcon, ArrowRightIcon } from 'lucide-react';
import { SectionHeading } from './Section';

const services = [
{
  icon: ServerIcon,
  title: 'Compute & Hosting',
  desc: 'Serverless functions and edge compute that scale to zero and spin up in milliseconds.',
  points: ['Zero cold starts', 'Auto-scaling', 'Global runtime']
},
{
  icon: DatabaseIcon,
  title: 'Managed Databases',
  desc: 'Fully-managed Postgres, Redis and object storage with automated backups and failover.',
  points: ['Point-in-time restore', 'Read replicas', 'Encrypted at rest']
},
{
  icon: CloudIcon,
  title: 'Edge CDN',
  desc: 'Cache and deliver assets from the closest node with smart invalidation on every deploy.',
  points: ['Instant purge', 'Image optimization', 'Brotli & HTTP/3']
},
{
  icon: CpuIcon,
  title: 'AI Inference',
  desc: 'Run models at the edge with GPU-backed inference and pay only for what you use.',
  points: ['GPU on demand', 'Streaming responses', 'Usage-based billing']
}];


export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-indigo/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Services"
          title={<>One platform, <span className="text-gradient">every layer</span> of your stack</>}
          subtitle="From compute to data to AI, Nebula gives you production-grade building blocks that just work together." />
        

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {services.map((s, i) =>
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className="glass-strong group relative flex flex-col overflow-hidden rounded-3xl p-8 shadow-card">
            
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent-violet/10 blur-3xl transition-opacity group-hover:opacity-80" />
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-accent-violet to-accent-sky shadow-glow">
                <s.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-700 text-white">{s.title}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/55">{s.desc}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.points.map((p) =>
              <li
                key={p}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70">
                
                    <CheckIcon className="h-3.5 w-3.5 text-accent-sky" />
                    {p}
                  </li>
              )}
              </ul>
              <a
              href="#pricing"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-600 text-accent-indigo transition-colors hover:text-white">
              
                Explore service
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}