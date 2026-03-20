import React from "react";
import { Info, Page } from "../../../types/index.ts";

interface RightSidebarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({ onNavigate }) => {
  const contributors = [
    {
      name: "Dr. Amelia V.",
      pts: "2.4k pts",
      avatar: "https://picsum.photos/seed/amelia/100/100",
    },
    {
      name: "Marcus T.",
      pts: "1.8k pts",
      avatar: "https://picsum.photos/seed/marcus/100/100",
    },
    {
      name: "Li Wei",
      pts: "1.5k pts",
      avatar: "https://picsum.photos/seed/li/100/100",
    },
  ];

  return (
    <aside
      id="right-sidebar"
      className="hidden xl:flex flex-col w-[300px] fixed right-6 h-[calc(100vh-80px)] gap-6 pt-8"
    >
      {/* Quick Start Guide */}
      <section
        id="quick-start-widget"
        className="bg-primary p-6 rounded-xl text-white relative overflow-hidden"
      >
        <div className="relative z-10">
          <h3 className="text-lg font-extrabold mb-2">Quick Start</h3>
          <p className="text-xs text-blue-100 mb-4 opacity-90 leading-relaxed">
            Boost your grade by asking clear questions or helping others.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Search for existing answers",
              "Use subject tags correctly",
              "Earn points for verified info",
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-3 text-xs">
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center font-bold">
                  {i + 1}
                </span>
                {text}
              </li>
            ))}
          </ul>
          <button
            onClick={() => onNavigate("ask")}
            className="w-full py-3 bg-secondary-container text-on-secondary-container rounded-lg font-bold text-sm active:scale-95 transition-all"
          >
            Start a Topic
          </button>
        </div>
        <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary-container rounded-full blur-2xl opacity-50"></div>
      </section>

      {/* Top Contributors */}
      <section
        id="contributors-widget"
        className="bg-surface-container-low p-6 rounded-xl"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-outline">
            Top Contributors
          </h3>
          <Info className="text-outline w-4 h-4" />
        </div>
        <div className="space-y-4">
          {contributors.map((c) => (
            <div key={c.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={c.avatar}
                  alt={c.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <p className="text-sm font-semibold">{c.name}</p>
              </div>
              <span className="text-xs font-bold text-primary">{c.pts}</span>
            </div>
          ))}
        </div>
        <button
          onClick={() => onNavigate("leaderboard")}
          className="w-full mt-6 py-2 text-xs font-bold text-primary hover:bg-white rounded-lg transition-colors border border-transparent hover:border-primary-fixed"
        >
          View Leaderboard
        </button>
      </section>

      {/* Learning Progress */}
      <section
        id="progress-widget"
        className="bg-surface-container-lowest p-6 rounded-xl custom-shadow"
      >
        <p className="text-xs font-bold text-outline uppercase tracking-wider mb-4">
          Your Progress
        </p>
        <div className="flex items-end justify-between mb-2">
          <p className="text-2xl font-extrabold text-on-surface">Level 14</p>
          <p className="text-xs font-bold text-primary">350/500 XP</p>
        </div>
        <div className="h-1.5 w-full bg-primary-fixed rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary"
            style={{ width: "70%" }}
          ></div>
        </div>
        <p className="text-[10px] text-outline mt-3">
          Next badge:{" "}
          <span className="font-bold text-on-surface">Quantum Theorist</span>
        </p>
      </section>
    </aside>
  );
};
