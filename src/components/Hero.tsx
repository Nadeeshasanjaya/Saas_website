

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, PlayIcon, SparklesIcon } from 'lucide-react';

const logos = ['Loom', 'Ramp', 'Vercel', 'Linear', 'Retool', 'Cursor', 'Notion', 'Raycast'];

const stats = [
{ value: '99.99%', label: 'Uptime SLA' },
{ value: '35ms', label: 'Edge latency' },
{ value: '120+', label: 'Global regions' },
{ value: '4.9/5', label: 'Customer rating' }];


export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-44">
      {/* Background image + glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src="/6adbec97-4dfb-4150-bb5b-33d9929be0f6.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-60" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-ink-950/70 to-ink-950" />
        <div className="animate-float-slow absolute -left-24 top-24 h-72 w-72 rounded-full bg-accent-violet/25 blur-[120px]" />
        <div className="animate-float-slow absolute -right-24 top-40 h-80 w-80 rounded-full bg-accent-sky/20 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center text-center">
          <motion.a
            href="#features"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-500 text-white/80">
            
            <SparklesIcon className="h-3.5 w-3.5 text-accent-violet" />
            Introducing Nebula Edge v3 — ship 10x faster
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </motion.a>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-4xl font-800 leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            
            Deploy at the speed
            <br />
            of <span className="text-gradient">imagination</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            
            The developer cloud built for scale. Push your code and Nebula handles the builds,
            edge delivery, and global infrastructure — so your team ships without limits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-600 text-ink-950 shadow-glow transition-transform hover:scale-[1.03]">
              
              Start deploying free
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-600 text-white transition-colors hover:bg-white/10">
              
              <PlayIcon className="h-4 w-4" />
              Watch demo
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="glass-strong mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl md:grid-cols-4">
          
          {stats.map((s) =>
          <div key={s.label} className="bg-white/[0.02] px-6 py-7 text-center">
              <div className="font-display text-2xl font-700 text-white sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/45">{s.label}</div>
            </div>
          )}
        </motion.div>

        {/* Logo marquee */}
        <div className="relative mt-16">
          <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-white/35">
            Trusted by fast-moving teams
          </p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
            <div className="animate-marquee flex w-max gap-14">
              {[...logos, ...logos].map((logo, i) =>
              <span
                key={i}
                className="whitespace-nowrap font-display text-xl font-600 text-white/30">
                
                  {logo}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}