



import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from 'lucide-react';
import { SectionHeading } from './Section';

type Review = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const reviews: Review[] = [
{
  quote:
  'We cut our deploy times from 12 minutes to under 30 seconds. Nebula fundamentally changed how our team ships.',
  name: 'Sarah Chen',
  role: 'VP Engineering, Ramp',
  avatar: 'https://i.pravatar.cc/120?img=5'
},
{
  quote:
  'The edge network is unreal. Our global users finally get the same snappy experience no matter where they are.',
  name: 'Marcus Webb',
  role: 'CTO, Loom',
  avatar: 'https://i.pravatar.cc/120?img=12'
},
{
  quote:
  'Preview environments alone paid for the plan. Reviewing PRs on a live URL is a total game changer.',
  name: 'Priya Nair',
  role: 'Lead Dev, Linear',
  avatar: 'https://i.pravatar.cc/120?img=32'
},
{
  quote:
  'We scaled from 10k to 4M requests a day during launch week without touching a single config. It just held.',
  name: 'Diego Alvarez',
  role: 'Founder, Retool',
  avatar: 'https://i.pravatar.cc/120?img=15'
},
{
  quote:
  'Best DX I have used in a decade. The dashboard is gorgeous and the analytics are genuinely useful.',
  name: 'Emma Larsson',
  role: 'Staff Engineer, Notion',
  avatar: 'https://i.pravatar.cc/120?img=48'
},
{
  quote:
  'Support answered in minutes and helped us tune our edge cache. This feels like a true partner, not a vendor.',
  name: 'Tom Becker',
  role: 'Platform Lead, Raycast',
  avatar: 'https://i.pravatar.cc/120?img=52'
}];


export function Reviews() {
  return (
    <section id="reviews" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Customer reviews"
          title={<>Loved by <span className="text-gradient">developers</span> everywhere</>}
          subtitle="Join thousands of teams who trust Nebula to power their most critical infrastructure." />
        

        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {reviews.map((r, i) =>
          <motion.figure
            key={r.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i % 3 * 0.08 }}
            className="glass mb-5 break-inside-avoid rounded-2xl p-6">
            
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) =>
              <StarIcon key={s} className="h-4 w-4 fill-accent-violet text-accent-violet" />
              )}
              </div>
              <blockquote className="text-sm leading-relaxed text-white/75">"{r.quote}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <img
                src={r.avatar}
                alt={r.name}
                className="h-10 w-10 rounded-full ring-2 ring-white/10" />
              
                <div>
                  <div className="text-sm font-600 text-white">{r.name}</div>
                  <div className="text-xs text-white/45">{r.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          )}
        </div>
      </div>
    </section>);

}