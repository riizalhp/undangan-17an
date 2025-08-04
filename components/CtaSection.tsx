
import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="my-16 text-center">
        <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-red-600">
            <h2 className="font-anton text-3xl text-gray-800">JANGAN SAMPAI KETINGGALAN!</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Ayo, Bapak, Ibu, dan seluruh warga RT 02, mari kita ramaikan acara ini bersama-sama.
                Tunjukkan semangat dan kekompakan kita dalam merayakan hari kemerdekaan!
            </p>
            <button className="mt-8 bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300">
                MARI BERPARTISIPASI!
            </button>
        </div>
    </section>
  );
};

export default CtaSection;
