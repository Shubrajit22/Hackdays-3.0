import React from 'react';
import Hero from './components/Hero';
import Events from './components/Events';
import Sponsors from './components/Sponsors';
import Posters from './components/Posters';
import Merchandise from './components/Merchandise';
import Messages from './components/Messages';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import MerchandiseCard from './components/MerchandiseCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Events />
      <Posters />
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 animate-text-glow">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Official Merchandise
            </span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <MerchandiseCard />
          </div>
        </div>
      </section>

      <Sponsors />
      <Messages />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;