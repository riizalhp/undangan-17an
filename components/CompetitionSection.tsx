
import React from 'react';
import { competitionData } from '../constants';
import type { CompetitionCategory } from '../types';

const CompetitionCard: React.FC<{ item: CompetitionCategory }> = ({ item }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
        <div className={`p-4 text-white text-center ${item.color}`}>
            {item.icon}
            <h3 className="font-bold text-xl mt-2">{item.category}</h3>
        </div>
        <ul className="p-6 space-y-3">
            {item.competitions.map((lomba, index) => (
                <li key={index} className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
                    <span className="text-gray-700">{lomba.name}</span>
                </li>
            ))}
        </ul>
    </div>
);

const CompetitionSection: React.FC = () => {
  return (
    <section className="my-16">
        <div className="text-center mb-12">
            <h2 className="font-anton text-4xl text-gray-800">KATEGORI LOMBA</h2>
            <p className="text-gray-600 mt-2">Berbagai macam lomba seru untuk semua kalangan!</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitionData.map((item) => (
                <CompetitionCard key={item.category} item={item} />
            ))}
        </div>
    </section>
  );
};

export default CompetitionSection;
