
import React from 'react';
import { TrophyIcon } from '../constants';

const PrizeCard: React.FC<{ rank: string, color: string, details: string }> = ({ rank, color, details }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg border-b-4 text-center transform hover:scale-105 transition-transform duration-300" style={{borderColor: color}}>
        <TrophyIcon className="w-16 h-16 mx-auto mb-4" style={{color: color}} />
        <h3 className="text-2xl font-bold" style={{color: color}}>Juara {rank}</h3>
        <p className="text-gray-600 mt-2">{details}</p>
    </div>
);

const PrizeSection: React.FC = () => {
  return (
    <section className="my-16">
      <div className="text-center mb-12">
        <h2 className="font-anton text-4xl text-gray-800">HADIAH MENARIK</h2>
        <p className="text-gray-600 mt-2">Raih hadiah menarik untuk para pemenang!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <PrizeCard rank="1" color="#FFD700" details="Uang Tunai + Bingkisan Spesial" />
          <PrizeCard rank="2" color="#C0C0C0" details="Uang Tunai + Bingkisan Menarik" />
          <PrizeCard rank="3" color="#CD7F32" details="Uang Tunai + Bingkisan Hiburan" />
      </div>
    </section>
  );
};

export default PrizeSection;
