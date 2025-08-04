
import React from 'react';
import { FlagIcon } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="py-12 text-center">
      <div className="inline-block bg-white p-4 rounded-lg shadow-lg border-t-4 border-red-600">
        <div className="flex justify-center items-center gap-4">
            <FlagIcon className="w-12 h-8 hidden sm:block"/>
            <div>
                <p className="text-gray-500 text-sm sm:text-base font-semibold">Undangan Terbuka untuk Warga</p>
                <h1 className="font-anton text-3xl sm:text-4xl md:text-5xl text-red-700 tracking-wider">
                  LOMBA & JALAN SEHAT 17-AN
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold">RT 02 RW 01 PEDURUNGAN LOR</h2>
            </div>
            <FlagIcon className="w-12 h-8 hidden sm:block transform scale-x-[-1]"/>
        </div>
      </div>
      <p className="mt-4 text-xl font-semibold text-gray-600">Dalam Rangka HUT RI ke-80</p>
    </header>
  );
};

export default Header;
