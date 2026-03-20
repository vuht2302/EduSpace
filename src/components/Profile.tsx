import React from 'react';
import { 
  Verified, 
  Award, 
  Brain, 
  PenTool, 
  Users, 
  Star, 
  ChevronRight,
  ThumbsUp,
  MessageSquare,
  Eye,
  Page
} from '../types';

export const Profile: React.FC = () => {
  const badges = [
    { name: 'Fastest Responder', tier: 'Rare', icon: Award, color: 'bg-secondary-container text-on-secondary-container' },
    { name: 'Problem Solver', tier: 'Epic', icon: Brain, color: 'bg-tertiary-container text-on-tertiary-container' },
    { name: 'Active Scholar', tier: 'Common', icon: PenTool, color: 'bg-primary-fixed text-primary' },
    { name: 'Mentor Spirit', tier: 'Legendary', icon: Users, color: 'bg-slate-100 text-slate-400' },
    { name: '100+ Upvotes', tier: 'Epic', icon: Star, color: 'bg-secondary-container text-on-secondary-container' },
  ];

  const activities = [
    {
      id: '1',
      title: 'How to implement a balanced B-Tree in Rust for high-concurrency environments?',
      tags: ['Computer Science', 'Algorithms'],
      time: '2 hours ago',
      votes: 84,
      answers: 12,
      views: '1.2k',
      isPrimary: true
    },
    {
      id: '2',
      title: "Visualizing Stokes' Theorem using manifold-based surfaces",
      tags: ['Mathematics', 'Calculus III'],
      time: 'Yesterday',
      votes: 31,
      answers: 5,
      views: '450'
    },
    {
      id: '3',
      title: 'Quantum Decoherence and the Measurement Problem: A new perspective?',
      tags: ['Physics'],
      time: '3 days ago',
      votes: 156,
      answers: 28,
      views: '3.4k'
    }
  ];

  return (
    <div id="profile-view" className="max-w-7xl mx-auto">
      {/* Profile Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
        <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
          <div className="relative group">
            <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-xl ring-4 ring-primary-fixed">
              <img src="https://picsum.photos/seed/alex/200/200" alt="User Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-tertiary-container text-on-tertiary-container p-1 rounded-full border-2 border-surface-container-lowest shadow-sm">
              <Verified className="w-4 h-4 fill-current" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
              <h1 className="text-3xl font-extrabold font-headline tracking-tight text-on-surface">Alex Thompson</h1>
              <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest rounded-full self-center">Top Contributor</span>
            </div>
            <p className="text-on-surface-variant mb-6 font-medium">Computer Science Major • Stanford University '25</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">12.4k</span>
                <span className="text-[10px] uppercase tracking-wider text-outline font-bold">Reputation</span>
              </div>
              <div className="w-px h-10 bg-outline-variant/30 hidden md:block"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-on-surface">142</span>
                <span className="text-[10px] uppercase tracking-wider text-outline font-bold">Questions</span>
              </div>
              <div className="w-px h-10 bg-outline-variant/30 hidden md:block"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-on-surface">589</span>
                <span className="text-[10px] uppercase tracking-wider text-outline font-bold">Answers</span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 bg-primary-container text-white rounded-xl p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-lg font-bold mb-1">Scholar Level 8</h3>
            <p className="text-white/80 text-sm mb-6">350 points to Level 9</p>
            <div className="w-full bg-white/20 h-2 rounded-full mb-8">
              <div className="bg-secondary-container h-full rounded-full" style={{ width: '65%' }}></div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Star className="text-secondary-container w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide">Recent Achievement</p>
                  <p className="text-sm">Peer Reviewer Gold</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full -mb-24 -mr-24 blur-3xl"></div>
        </div>
      </div>

      {/* Badges Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold font-headline text-on-surface">Unlocked Badges</h2>
          <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
          {badges.map((badge) => (
            <div key={badge.name} className="flex-shrink-0 w-36 h-44 bg-surface-container-lowest rounded-xl flex flex-col items-center justify-center text-center p-4 border border-outline-variant/10 hover:border-primary/30 transition-all">
              <div className={`w-16 h-16 rounded-full ${badge.color} flex items-center justify-center mb-3 shadow-sm`}>
                <badge.icon className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-on-surface leading-tight">{badge.name}</span>
              <span className="text-[10px] text-outline mt-1 uppercase">{badge.tier}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Activity Tabs */}
      <section className="mt-8">
        <div className="flex gap-8 mb-8 border-b border-outline-variant/20">
          <button className="pb-4 text-primary font-bold border-b-2 border-primary transition-all flex items-center gap-2">
            My Questions <span className="px-2 py-0.5 bg-primary-fixed text-primary text-[10px] rounded-full">142</span>
          </button>
          <button className="pb-4 text-outline hover:text-on-surface transition-all flex items-center gap-2">
            My Answers <span className="px-2 py-0.5 bg-surface-container-high text-outline text-[10px] rounded-full">589</span>
          </button>
        </div>

        <div className="space-y-4">
          {activities.map((activity) => (
            <article key={activity.id} className={`bg-surface-container-lowest p-6 rounded-xl hover:bg-surface-bright transition-all group border-l-4 ${activity.isPrimary ? 'border-primary' : 'border-outline-variant/30'} shadow-sm`}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-2">
                  {activity.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-outline">{activity.time}</span>
              </div>
              <h3 className="text-lg font-bold font-headline mb-3 text-on-surface group-hover:text-primary transition-colors">
                {activity.title}
              </h3>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1.5 text-outline group/icon">
                  <ThumbsUp className="w-4 h-4 group-hover/icon:text-primary" />
                  <span className="text-sm font-medium">{activity.votes}</span>
                </div>
                <div className="flex items-center gap-1.5 text-outline group/icon">
                  <MessageSquare className="w-4 h-4 group-hover/icon:text-primary" />
                  <span className="text-sm font-medium">{activity.answers}</span>
                </div>
                <div className="flex items-center gap-1.5 text-outline group/icon">
                  <Eye className="w-4 h-4 group-hover/icon:text-primary" />
                  <span className="text-sm font-medium">{activity.views}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button className="px-6 py-2 bg-surface-container-high text-on-surface-variant font-bold text-sm rounded-lg hover:bg-surface-variant transition-colors">
            Load More Activity
          </button>
        </div>
      </section>
    </div>
  );
};
