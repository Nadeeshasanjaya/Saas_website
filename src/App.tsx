
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-ink-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Pricing />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>);

}