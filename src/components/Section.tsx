
import React from 'react';
import { motion } from 'framer-motion';

type EyebrowProps = {
  children: React.ReactNode;
};

export function Eyebrow({ children }: EyebrowProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-500 uppercase tracking-[0.18em] text-accent-indigo">
      {children}
    </span>);

}

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
};

export function SectionHeading({ eyebrow, title, subtitle, center = true }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col gap-4 ${center ? 'items-center text-center' : 'items-start text-left'}`}>
      
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display text-3xl font-700 leading-[1.1] tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {subtitle &&
      <p className={`text-base leading-relaxed text-white/60 ${center ? 'max-w-2xl' : 'max-w-xl'}`}>
          {subtitle}
        </p>
      }
    </motion.div>);

}