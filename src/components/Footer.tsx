




import React from 'react';
import { HexagonIcon, TwitterIcon, GithubIcon, LinkedinIcon } from 'lucide-react';

const groups = [
{ title: 'Product', links: ['Features', 'Services', 'Pricing', 'Changelog', 'Docs'] },
{ title: 'Company', links: ['About', 'Blog', 'Careers', 'Customers', 'Contact'] },
{ title: 'Resources', links: ['Guides', 'Status', 'API', 'Community', 'Security'] }];


const socials = [TwitterIcon, GithubIcon, LinkedinIcon];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent-violet to-accent-sky shadow-glow">
                <HexagonIcon className="h-5 w-5 text-white" />
              </span>
              <span className="font-display text-lg font-700 tracking-tight text-white">Nebula</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              The developer cloud built for scale. Deploy at the speed of imagination.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((Icon, i) =>
              <a
                key={i}
                href="#top"
                aria-label="Social link"
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white">
                
                  <Icon className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {groups.map((g) =>
          <div key={g.title}>
              <h4 className="text-sm font-600 text-white">{g.title}</h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {g.links.map((l) =>
              <li key={l}>
                    <a href="#top" className="text-sm text-white/50 transition-colors hover:text-white">
                      {l}
                    </a>
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Nebula, Inc. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="#top" className="transition-colors hover:text-white">Privacy</a>
            <a href="#top" className="transition-colors hover:text-white">Terms</a>
            <a href="#top" className="transition-colors hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>);

}