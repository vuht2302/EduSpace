import React from "react";
import {
  Lightbulb,
  Verified,
  History,
  Bold,
  Italic,
  Code,
  Link2,
  ImageIcon,
  List,
  X,
} from "../../../types/index.ts";

export const AskQuestion: React.FC = () => {
  return (
    <div
      id="ask-question-view"
      className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10"
    >
      {/* Form Section */}
      <div className="lg:col-span-8 space-y-8">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">
            Ask a Question
          </h1>
          <p className="text-on-surface-variant font-body">
            Share your academic challenge with the community and get insights
            from peers and mentors.
          </p>
        </div>

        <div className="space-y-6">
          {/* Title Input */}
          <div className="group">
            <label className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2 px-1">
              Question Title
            </label>
            <div className="relative">
              <input
                className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-0 focus:bg-surface-container-lowest transition-all duration-300 font-body text-on-surface placeholder:text-outline/50 border-b-2 border-transparent focus:border-primary"
                placeholder="e.g., How do I solve for 'x' in this quadratic equation with complex roots?"
                type="text"
              />
            </div>
            <p className="mt-2 text-xs text-outline px-1">
              Be specific and imagine you're asking a question to another
              person.
            </p>
          </div>

          {/* Description Input */}
          <div>
            <label className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2 px-1">
              Detailed Description
            </label>
            <div className="bg-surface-container-low rounded-lg overflow-hidden border-b-2 border-transparent focus-within:border-primary focus-within:bg-surface-container-lowest transition-all">
              <div className="flex items-center gap-1 p-2 bg-surface-container-high/50 border-b border-outline-variant/10">
                <button className="p-1.5 hover:bg-surface-container-high rounded transition-colors">
                  <Bold className="w-4 h-4" />
                </button>
                <button className="p-1.5 hover:bg-surface-container-high rounded transition-colors">
                  <Italic className="w-4 h-4" />
                </button>
                <button className="p-1.5 hover:bg-surface-container-high rounded transition-colors">
                  <Code className="w-4 h-4" />
                </button>
                <button className="p-1.5 hover:bg-surface-container-high rounded transition-colors">
                  <Link2 className="w-4 h-4" />
                </button>
                <button className="p-1.5 hover:bg-surface-container-high rounded transition-colors">
                  <ImageIcon className="w-4 h-4" />
                </button>
                <div className="w-px h-4 bg-outline-variant/30 mx-1"></div>
                <button className="p-1.5 hover:bg-surface-container-high rounded transition-colors">
                  <List className="w-4 h-4" />
                </button>
              </div>
              <textarea
                className="w-full bg-transparent border-none focus:ring-0 p-4 font-body text-on-surface placeholder:text-outline/50"
                placeholder="Include all the information someone would need to answer your question. Show what you have tried so far..."
                rows={10}
              ></textarea>
            </div>
          </div>

          {/* Tag Selection */}
          <div>
            <label className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2 px-1">
              Tags
            </label>
            <div className="bg-surface-container-low rounded-lg p-4 flex flex-wrap gap-2">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-primary text-white rounded-full text-xs font-medium">
                Mathematics <X className="w-3 h-3 cursor-pointer" />
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 bg-primary text-white rounded-full text-xs font-medium">
                Algebra <X className="w-3 h-3 cursor-pointer" />
              </span>
              <input
                className="bg-transparent border-none focus:ring-0 text-xs font-body w-24"
                placeholder="Add a tag..."
                type="text"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Physics", "Computer Science", "History", "Literature"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-surface-container-high hover:bg-surface-container-highest cursor-pointer transition-colors rounded-full text-[10px] font-bold uppercase text-outline"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-6 flex items-center gap-4">
            <button className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-3 rounded text-sm font-bold shadow-md hover:opacity-90 transition-all active:scale-95">
              Post Your Question
            </button>
            <button className="text-on-surface-variant hover:bg-surface-container-high px-8 py-3 rounded text-sm font-bold transition-all">
              Discard Draft
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar / Tips Section */}
      <div className="lg:col-span-4 space-y-6">
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
          <h3 className="text-lg font-bold text-on-surface mb-4 flex items-center gap-2">
            <Lightbulb className="text-secondary w-5 h-5 fill-secondary/20" />
            Writing a good question
          </h3>
          <ul className="space-y-4 text-sm font-body text-on-surface-variant">
            <li className="flex gap-3">
              <span className="text-primary font-bold">1.</span>
              <span>Summarize your problem in a one-line title.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">2.</span>
              <span>
                Describe what you've tried and what you expected to happen.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">3.</span>
              <span>
                Add "tags" which help surface your question to members who can
                help.
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-primary-fixed/30 rounded-xl p-6 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center">
                <Verified className="text-white w-6 h-6" />
              </div>
              <h3 className="font-bold text-on-primary-fixed">
                Verified Mentors
              </h3>
            </div>
            <p className="text-xs text-on-primary-fixed-variant leading-relaxed">
              Questions tagged with core subjects are reviewed by our Verified
              Scholars to ensure quality guidance.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-surface-container border border-outline-variant/20 flex gap-4">
          <History className="text-outline w-5 h-5" />
          <div>
            <h4 className="text-xs font-bold uppercase text-outline mb-1">
              Auto-saved
            </h4>
            <p className="text-[10px] text-outline">
              Your draft was last saved 2 minutes ago.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
