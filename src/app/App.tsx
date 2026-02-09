import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { Features } from './components/Features';
import { Collection } from './components/Collection';
import { Science } from './components/Science';
import { Benefits } from './components/Benefits';
import { Legacy } from './components/Legacy';
import { Pharmacy } from './components/Pharmacy';
import { Journey } from './components/Journey';
import { Consultation } from './components/Consultation';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-['Manrope',sans-serif]">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Features />
        <Collection />
        <Science />
        <Benefits />
        <Legacy />
        <Pharmacy />
        <Journey />
        <Consultation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
