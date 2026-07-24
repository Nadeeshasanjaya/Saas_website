
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, HexagonIcon } from 'lucide-react';

const links = [
{ label: 'Features', href: '#features' },
{ label: 'Services', href: '#services' },
{ label: 'Pricing', href: '#pricing' },
{ label: 'Reviews', href: '#reviews' },
{ label: 'FAQ', href: '#faq' }];


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`w-full max-w-6xl rounded-2xl transition-all duration-300 ${
        scrolled ? 'glass-strong shadow-card' : 'glass'}`
        }>
        
        <div className="flex items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent-violet to-accent-sky shadow-glow">
              <HexagonIcon className="h-5 w-5 text-white" />
            </span>
            <span className="font-display text-lg font-700 tracking-tight text-white">Nebula</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) =>
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 transition-colors hover:text-white">
              
                {l.label}
              </a>
            )}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#contact" className="text-sm text-white/70 transition-colors hover:text-white">
              Sign in
            </a>
            <a
              href="#pricing"
              className="rounded-xl bg-white px-4 py-2 text-sm font-600 text-ink-950 transition-transform hover:scale-[1.03]">
              
              Get started
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-xl text-white md:hidden"
            onClick={() => setOpen((v) => !v)}>
            
            {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open &&
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden md:hidden">
            
              <div className="flex flex-col gap-1 px-5 pb-5 pt-1">
                {links.map((l) =>
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-white">
                
                    {l.label}
                  </a>
              )}
                <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-white px-4 py-2.5 text-center text-sm font-600 text-ink-950">
                
                  Get started
                </a>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </motion.nav>
    </header>);

}