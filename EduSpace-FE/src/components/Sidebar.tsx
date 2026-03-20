import React from 'react';
import { useTranslation } from 'react-i18next';
import { Home, PlusCircle, Trophy, User, Page } from '../types';

interface SidebarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentPage, onNavigate }) => {
  const { t } = useTranslation();

  const navItems = [
    { id: 'home', label: t('sidebar.nav_home'), icon: Home },
    { id: 'ask', label: t('sidebar.nav_ask'), icon: PlusCircle },
    { id: 'leaderboard', label: t('sidebar.nav_leaderboard'), icon: Trophy },
    { id: 'profile', label: t('sidebar.nav_profile'), icon: User },
  ];

  const subjects = [
    t('sidebar.subjects.math'),
    t('sidebar.subjects.physics'),
    t('sidebar.subjects.chemistry'),
    t('sidebar.subjects.literature'),
    t('sidebar.subjects.english')
  ];

  const trending = [
    { tag: '#QuantumDynamics', count: t('sidebar.trending.activeDiscussions', { count: 42 }) },
    { tag: '#CalculusReview', count: t('sidebar.trending.activeDiscussions', { count: 128 }) },
    { tag: '#MidtermPrep', count: t('sidebar.trending.activeDiscussions', { count: 310 }) },
  ];

  return (
    <aside id="left-sidebar" className="hidden lg:flex flex-col w-64 fixed h-[calc(100vh-64px)] overflow-y-auto pt-8 pb-12 px-4 border-r-0">
      <nav className="flex flex-col gap-1 mb-10">
        <span className="text-[10px] uppercase tracking-widest text-outline font-bold mb-4 px-4">{t('sidebar.headers.navigation')}</span>
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
        <span className="text-[10px] uppercase tracking-widest text-outline font-bold px-4">{t('sidebar.headers.subjectTags')}</span>
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
        <span className="text-[10px] uppercase tracking-widest text-outline font-bold px-4">{t('sidebar.headers.trendingTopics')}</span>
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
