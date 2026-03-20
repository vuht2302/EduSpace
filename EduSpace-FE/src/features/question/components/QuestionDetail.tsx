import React from "react";
import {
  ArrowUp,
  ArrowDown,
  Bookmark,
  Verified,
  Share2,
  MoreVertical,
  CheckCircle2,
  Bold,
  Italic,
  Link2,
  List,
  Sigma,
  ImageIcon,
  Code,
  Question,
  Answer,
} from "../../../types/index.ts";

interface QuestionDetailProps {
  question: Question;
  answers: Answer[];
}

export const QuestionDetail: React.FC<QuestionDetailProps> = ({
  question,
  answers,
}) => {
  return (
    <div id="question-detail-view" className="max-w-4xl">
      {/* Question Section */}
      <section className="mb-12">
        <div className="flex gap-6 items-start">
          {/* Voting Column */}
          <div className="flex flex-col items-center gap-2">
            <button className="p-2 hover:bg-primary-fixed rounded-lg transition-colors group">
              <ArrowUp className="w-6 h-6 text-outline group-hover:text-primary" />
            </button>
            <span className="text-xl font-bold font-headline text-on-surface">
              {question.votes}
            </span>
            <button className="p-2 hover:bg-red-100 rounded-lg transition-colors group">
              <ArrowDown className="w-6 h-6 text-outline group-hover:text-red-500" />
            </button>
            <button className="mt-4 p-2 text-outline hover:text-primary transition-colors">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>

          {/* Content Column */}
          <div className="flex-1">
            <div className="mb-4 flex flex-wrap gap-2">
              {question.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-bold uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-on-surface mb-6 tracking-tight leading-tight">
              {question.title}
            </h1>
            <div className="prose prose-slate max-w-none text-on-surface-variant leading-relaxed mb-8">
              <p>{question.content}</p>
            </div>

            <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={question.author.avatar}
                    alt={question.author.name}
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  {question.author.isVerified && (
                    <div className="absolute -top-1 -right-1 bg-tertiary-container text-on-tertiary-container p-0.5 rounded-md shadow-sm">
                      <Verified className="w-3 h-3 fill-current" />
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">
                    {question.author.name}
                  </p>
                  <p className="text-xs text-outline">
                    Published {question.timestamp} • {question.author.role}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-sm font-medium text-primary hover:bg-primary-fixed rounded-lg transition-colors flex items-center gap-2">
                  <Share2 className="w-4 h-4" /> Share
                </button>
                <button className="p-2 text-outline hover:bg-surface-container-highest rounded-lg transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Answers Header */}
      <div className="flex items-center justify-between mb-8 border-b-0">
        <h2 className="text-xl font-bold font-headline text-on-surface">
          {answers.length} Professional Answers
        </h2>
        <div className="flex bg-surface-container-low p-1 rounded-lg">
          <button className="px-4 py-1.5 text-xs font-bold bg-white shadow-sm rounded-md text-primary">
            Highest Rated
          </button>
          <button className="px-4 py-1.5 text-xs font-bold text-outline hover:text-on-surface transition-colors">
            Newest
          </button>
        </div>
      </div>

      {/* Answers List */}
      <div className="space-y-6 mb-12">
        {answers.map((answer) => (
          <div
            key={answer.id}
            className={`bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow ${answer.isAccepted ? "border-l-4 border-primary" : ""}`}
          >
            <div className="flex gap-6">
              <div className="flex flex-col items-center gap-2 pt-1">
                <button className="p-1.5 hover:bg-primary-fixed rounded-lg transition-colors group">
                  <ArrowUp className="w-5 h-5 text-outline group-hover:text-primary" />
                </button>
                <span className="text-lg font-bold font-headline">
                  {answer.votes}
                </span>
                <button className="p-1.5 hover:bg-red-100 rounded-lg transition-colors group">
                  <ArrowDown className="w-5 h-5 text-outline group-hover:text-red-500" />
                </button>
                {answer.isAccepted && (
                  <div className="mt-4 text-primary">
                    <CheckCircle2 className="w-6 h-6 fill-current" />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={answer.author.avatar}
                      alt={answer.author.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-bold">{answer.author.name}</p>
                      <p className="text-[10px] text-outline uppercase tracking-wider">
                        {answer.author.role} • {answer.timestamp}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-on-surface-variant text-sm leading-relaxed space-y-4">
                  <p>{answer.content}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Rich Text Editor Section */}
      <section className="bg-surface-container-high p-1 rounded-2xl">
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-bold font-headline mb-4">Your Answer</h3>
          {/* Editor Toolbar */}
          <div className="flex items-center gap-1 mb-4 p-1 bg-surface-container-low rounded-lg border-b-2 border-primary-fixed">
            <button className="p-2 hover:bg-white rounded transition-colors">
              <Bold className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-white rounded transition-colors">
              <Italic className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-white rounded transition-colors">
              <Link2 className="w-4 h-4" />
            </button>
            <div className="w-px h-6 bg-outline-variant/30 mx-1"></div>
            <button className="p-2 hover:bg-white rounded transition-colors">
              <List className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-white rounded transition-colors">
              <Sigma className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-white rounded transition-colors">
              <ImageIcon className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-white rounded transition-colors">
              <Code className="w-4 h-4" />
            </button>
          </div>
          <textarea
            className="w-full bg-surface-container-low border-none rounded-lg focus:ring-0 focus:bg-white transition-all p-4 text-sm resize-none"
            placeholder="Share your academic insight... Use markdown for formulas."
            rows={8}
          ></textarea>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-xs text-outline italic">
              Supporting LaTeX for mathematical equations.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all">
              Post Answer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
