
import React from 'react';
import { CalendarIcon, ClockIcon, MapPinIcon } from '../constants';

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; subtitle: string }> = ({ icon, title, subtitle }) => (
    <div className="flex items-center gap-4">
        <div className="bg-white p-3 rounded-full shadow-md">
            {icon}
        </div>
        <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-gray-200">{subtitle}</p>
        </div>
    </div>
);


const InfoSection: React.FC = () => {
  return (
    <section className="bg-red-700 text-white rounded-xl shadow-2xl p-6 md:p-8 my-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <InfoCard 
                icon={<CalendarIcon className="w-8 h-8 text-red-600"/>}
                title="Tanggal"
                subtitle="Minggu, 10 Agustus 2025"
            />
             <InfoCard 
                icon={<ClockIcon className="w-8 h-8 text-red-600"/>}
                title="Waktu (Jalan Sehat)"
                subtitle="Mulai pukul 06.00 WIB"
            />
             <InfoCard 
                icon={<MapPinIcon className="w-8 h-8 text-red-600"/>}
                title="Lokasi Start"
                subtitle="Masjid Mubtadiin"
            />
        </div>
    </section>
  );
};

export default InfoSection;
