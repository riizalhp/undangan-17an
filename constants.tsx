import React from 'react';
import type { CompetitionCategory } from './types';

export const FlagIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6"><path fill="#E70011" d="M0 0h9v3H0z"/><path fill="#fff" d="M0 3h9v3H0z"/></svg>
);

export const CalendarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
);

export const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

export const MapPinIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);

export const KidsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       <circle cx="12" cy="12" r="9"></circle>
       <line x1="9" y1="10" x2="9.01" y2="10"></line>
       <line x1="15" y1="10" x2="15.01" y2="10"></line>
       <path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>
       <path d="M12 3a2 2 0 0 0 2 -2"></path>
       <path d="M10 3a2 2 0 0 1-2 -2"></path>
    </svg>
);

export const TeensIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       <rect x="4" y="13" rx="2" width="5" height="7"></rect>
       <rect x="15" y="13" rx="2" width="5" height="7"></rect>
       <path d="M4 15v-3a8 8 0 0 1 16 0v3"></path>
    </svg>
);

export const MothersIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       <circle cx="12" cy="5" r="2"></circle>
       <path d="M10 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4"></path>
    </svg>
);

export const FathersIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       <circle cx="12" cy="5" r="2"></circle>
       <path d="M10 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5"></path>
    </svg>
);

export const CouplesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       <circle cx="7" cy="5" r="2"></circle>
       <path d="M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5"></path>
       <circle cx="17" cy="5" r="2"></circle>
       <path d="M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4"></path>
    </svg>
);

export const AllUsersIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.273-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.273.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
);

export const TrophyIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
    <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" transform="translate(0, 2)"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 21h14M12 3v2m-4.243 1.757l1.414 1.414M4 12H2m1.757 4.243l1.414-1.414M12 21v-2m4.243-1.757l-1.414-1.414M20 12h2m-1.757-4.243l-1.414 1.414" transform="translate(-0.5, -2.5)"/></svg>
);


export const competitionData: CompetitionCategory[] = [
  {
    category: 'Anak',
    icon: <KidsIcon className="w-10 h-10 mx-auto" />,
    competitions: [{ name: 'Meniup gelas plastik' }, { name: 'Pecah air' }],
    color: 'bg-blue-500',
  },
  {
    category: 'Remaja',
    icon: <TeensIcon className="w-10 h-10 mx-auto" />,
    competitions: [{ name: 'Menggendong balon' }],
    color: 'bg-green-500',
  },
  {
    category: 'Ibu-ibu',
    icon: <MothersIcon className="w-10 h-10 mx-auto" />,
    competitions: [{ name: 'Kelereng' }],
    color: 'bg-pink-500',
  },
  {
    category: 'Bapak-bapak',
    icon: <FathersIcon className="w-10 h-10 mx-auto" />,
    competitions: [{ name: 'Memakai sarung' }],
    color: 'bg-indigo-500',
  },
  {
    category: 'Berpasangan',
    icon: <CouplesIcon className="w-10 h-10 mx-auto" />,
    competitions: [
      { name: 'Memasukkan pensil ke botol' },
      { name: 'Memindahkan gelas plastik pake karet' },
    ],
    color: 'bg-purple-500',
  },
  {
    category: 'Lomba all warga',
    icon: <AllUsersIcon className="w-10 h-10 mx-auto" />,
    competitions: [{ name: 'Perang badar all team' }],
    color: 'bg-yellow-500',
  },
];