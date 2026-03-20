import React from 'react';
import { Home, PlusCircle, Trophy, User, Page } from '../types';

interface SidebarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'ask', label: 'Ask Question', icon: PlusCircle },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  const subjects = ['Math', 'Physics', 'Chemistry', 'Literature', 'English'];
  const trending = [
    { tag: '#QuantumDynamics', count: '42 active discussions' },
    { tag: '#CalculusReview', count: '128 active discussions' },
    { tag: '#MidtermPrep', count: '310 active discussions' },
  ];

  return (
    <aside id="left-sidebar" className="hidden lg:flex flex-col w-64 fixed h-[calc(100vh-64px)] overflow-y-auto pt-8 pb-12 px-4 border-r-0">
      <nav className="flex flex-col gap-1 mb-10">
        <span className="text-[10px] uppercase tracking-widest text-outline font-bold mb-4 px-4">Navigation</span>
        {navItems.map((item) => (
          <button
            key={item.id}
            id={`nav-item-${item.id}`}
            onClick={() => onNavigate(item.id as Page)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all hover:translate-x-1 ${
              currentPage === item.id 
                ? 'bg-surface-container-lowest text-primary shadow-sm font-bold' 
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            <item.icon className={`w-5 h-5 ${currentPage === item.id ? 'fill-primary/10' : ''}`} />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="flex flex-col gap-4 mb-10">
        <span className="text-[10px] uppercase tracking-widest text-outline font-bold px-4">Subject Tags</span>
        <div className="flex flex-wrap gap-2 px-2">
          {subjects.map((subject) => (
            <span 
              key={subject}
              className="px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-semibold cursor-pointer hover:brightness-95 transition-all"
            >
              {subject}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-[10px] uppercase tracking-widest text-outline font-bold px-4">Trending Topics</span>
        <ul className="px-4 space-y-3">
          {trending.map((topic) => (
            <li key={topic.tag} className="group cursor-pointer">
              <p className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors">{topic.tag}</p>
              <p className="text-[11px] text-outline">{topic.count}</p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
