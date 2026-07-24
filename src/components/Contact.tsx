




import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2Icon, SendIcon, MailIcon, MessageSquareIcon, ArrowRightIcon } from 'lucide-react';
import { SectionHeading } from './Section';

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="glass-strong glow-border relative overflow-hidden rounded-[2rem] p-8 shadow-card sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-violet/20 blur-[110px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent-sky/15 blur-[120px]" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                center={false}
                eyebrow="Contact"
                title={<>Let's build something <span className="text-gradient">extraordinary</span></>}
                subtitle="Tell us about your project and our team will get back to you within one business day." />
              
              <div className="mt-8 flex flex-col gap-4">
                <a
                  href="mailto:hello@nebula.dev"
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white">
                  
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <MailIcon className="h-5 w-5 text-accent-indigo" />
                  </span>
                  hello@nebula.dev
                </a>
                <a
                  href="#top"
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white">
                  
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <MessageSquareIcon className="h-5 w-5 text-accent-indigo" />
                  </span>
                  Chat with sales
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-6 sm:p-8">
              
              {sent ?
              <div className="flex flex-col items-center gap-3 py-10 text-center">
                  <CheckCircle2Icon className="h-12 w-12 text-accent-sky" />
                  <h3 className="font-display text-xl font-700 text-white">Message sent!</h3>
                  <p className="max-w-xs text-sm text-white/55">
                    Thanks {form.name || 'there'} — we'll be in touch at {form.email || 'your inbox'} shortly.
                  </p>
                  <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: '', email: '', message: '' });
                  }}
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-600 text-accent-indigo hover:text-white">
                  
                    Send another <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div> :

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs font-500 text-white/60">
                      Name
                    </label>
                    <input
                    id="name"
                    required
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Ada Lovelace"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-accent-indigo/60 focus:ring-2 focus:ring-accent-indigo/20" />
                  
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-500 text-white/60">
                      Work email
                    </label>
                    <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    placeholder="ada@company.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-accent-indigo/60 focus:ring-2 focus:ring-accent-indigo/20" />
                  
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-xs font-500 text-white/60">
                      Message
                    </label>
                    <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell us what you're building..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-accent-indigo/60 focus:ring-2 focus:ring-accent-indigo/20" />
                  
                  </div>
                  <button
                  type="submit"
                  className="group mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-600 text-ink-950 transition-transform hover:scale-[1.02]">
                  
                    Send message
                    <SendIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>
              }
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}