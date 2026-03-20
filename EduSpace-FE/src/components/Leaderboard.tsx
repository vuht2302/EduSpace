import React from 'react';
import { Verified, Trophy, Award, Star } from '../types';

export const Leaderboard: React.FC = () => {
  const topThree = [
    {
      rank: 2,
      name: 'Elena Rodriguez',
      reputation: '18,420',
      tag: 'Physics',
      badge: 'SILVER',
      avatar: 'https://picsum.photos/seed/elena/200/200',
      isVerified: true,
      color: 'bg-slate-200',
      icon: Award
    },
    {
      rank: 1,
      name: 'Julian Thorne',
      reputation: '24,890',
      tag: 'Mathematics',
      badge: 'GOLD',
      avatar: 'https://picsum.photos/seed/julian/200/200',
      isTop: true,
      color: 'bg-secondary-fixed',
      icon: Trophy
    },
    {
      rank: 3,
      name: 'Amara Okafor',
      reputation: '15,100',
      tag: 'Biology',
      badge: 'BRONZE',
      avatar: 'https://picsum.photos/seed/amara/200/200',
      color: 'bg-orange-100',
      icon: Star
    }
  ];

  const others = [
    { rank: '04', name: 'Liam Henderson', sub: 'Chemistry Specialist', rep: '12,450', status: 'Rising Star', isVerified: true, avatar: 'https://picsum.photos/seed/liam/100/100' },
    { rank: '05', name: 'Sophia Chen', sub: 'Computer Science', rep: '11,820', status: 'Consistent', avatar: 'https://picsum.photos/seed/sophia/100/100' },
    { rank: '06', name: 'Marcus Wu', sub: 'Literature & Arts', rep: '9,440', status: 'Contributor', avatar: 'https://picsum.photos/seed/marcusw/100/100' },
    { rank: '07', name: 'Zara Mitchell', sub: 'Economics', rep: '8,900', status: 'Contributor', avatar: 'https://picsum.photos/seed/zara/100/100' },
  ];

  return (
    <div id="leaderboard-view" className="max-w-6xl mx-auto w-full">
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold text-on-surface tracking-tight mb-2">Global Leaderboard</h1>
        <p className="text-on-surface-variant text-lg max-w-2xl">Recognizing the most impactful contributors in the ScholarFlow academic community. Reputation is earned through verified answers and peer insights.</p>
      </header>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-end">
        {topThree.map((scholar) => (
          <div 
            key={scholar.name} 
            className={`bg-surface-container-lowest p-8 rounded-xl flex flex-col items-center text-center shadow-sm relative overflow-hidden group hover:scale-[1.02] transition-transform ${scholar.isTop ? 'bg-gradient-to-br from-primary to-primary-container text-white md:-mt-6 shadow-xl' : ''}`}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <scholar.icon className="w-24 h-24" />
            </div>
            <div className="relative mb-6">
              <div className={`w-24 h-24 rounded-full p-1 ${scholar.color} ${scholar.isTop ? 'w-28 h-28' : ''}`}>
                <img src={scholar.avatar} alt={scholar.name} className="w-full h-full object-cover rounded-full" />
              </div>
              <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full shadow-md ${scholar.isTop ? 'bg-secondary-container text-on-secondary-container px-4 py-1.5' : 'bg-slate-400 text-white'}`}>
                {scholar.badge}
              </div>
            </div>
            <h3 className={`text-xl font-bold mb-1 ${scholar.isTop ? 'text-2xl' : ''}`}>{scholar.name}</h3>
            <p className={`font-semibold text-lg ${scholar.isTop ? 'text-primary-fixed' : 'text-primary'}`}>{scholar.reputation} Reputation</p>
            <div className="mt-4 flex gap-2">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${scholar.isTop ? 'bg-white/20' : 'bg-secondary-container text-on-secondary-container'}`}>{scholar.tag}</span>
              {scholar.isVerified && (
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${scholar.isTop ? 'bg-white/20' : 'bg-tertiary-container text-on-tertiary-container'}`}>Verified</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* List of Rest */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-6 pb-2 border-b border-outline-variant/20">
          <span className="text-xs font-bold text-outline uppercase tracking-widest">Rank & Scholar</span>
          <span className="text-xs font-bold text-outline uppercase tracking-widest">Reputation</span>
        </div>
        
        {others.map((scholar) => (
          <div key={scholar.rank} className="bg-surface-container-lowest hover:bg-surface-bright p-5 rounded-xl transition-all flex items-center justify-between group cursor-pointer shadow-sm">
            <div className="flex items-center gap-6">
              <span className="text-xl font-black text-outline/30 w-8 group-hover:text-primary transition-colors">{scholar.rank}</span>
              <div className="flex items-center gap-4">
                <img src={scholar.avatar} alt={scholar.name} className="w-12 h-12 rounded-lg object-cover" />
                <div>
                  <h4 className="font-bold text-on-surface">{scholar.name}</h4>
                  <p className="text-xs text-on-surface-variant flex items-center gap-1">
                    {scholar.sub}
                    {scholar.isVerified && <Verified className="w-3 h-3 text-tertiary-container fill-current" />}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="font-black text-xl text-on-surface">{scholar.rep}</p>
              <p className="text-[10px] text-secondary font-bold uppercase tracking-tighter">{scholar.status}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="mt-12 text-center">
        <button className="px-8 py-3 bg-primary-fixed text-on-primary-fixed font-bold rounded-lg hover:bg-primary-container hover:text-white transition-colors">
          Load Full Leaderboard
        </button>
      </div>
    </div>
  );
};
