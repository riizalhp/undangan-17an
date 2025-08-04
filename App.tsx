
import React from 'react';
import Header from './components/Header';
import InfoSection from './components/InfoSection';
import CompetitionSection from './components/CompetitionSection';
import PrizeSection from './components/PrizeSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-75"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e53e3e' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <InfoSection />
        <CompetitionSection />
        <PrizeSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
