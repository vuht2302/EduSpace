import React from 'react';
import { ThumbsUp, MessageSquare, ArrowRight, Verified, Question } from '../types';

interface QuestionCardProps {
  question: Question;
  onClick: (id: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, onClick }) => {
  return (
    <article 
      id={`question-card-${question.id}`}
      onClick={() => onClick(question.id)}
      className="bg-surface-container-lowest p-6 rounded-xl custom-shadow hover:bg-surface-bright border border-transparent hover:border-outline-variant/15 transition-all cursor-pointer group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img 
              src={question.author.avatar} 
              alt={question.author.name} 
              className="w-10 h-10 rounded-full object-cover" 
            />
            {question.author.isVerified && (
              <span className="absolute -bottom-1 -right-1 bg-tertiary-container text-on-tertiary-container rounded-full p-0.5 border-2 border-white">
                <Verified className="w-3 h-3 fill-current" />
              </span>
            )}
          </div>
          <div>
            <p className="text-sm font-bold text-on-surface leading-tight">{question.author.name}</p>
            <p className="text-[11px] text-outline font-medium">{question.timestamp} • {question.author.grade}</p>
          </div>
        </div>
        <div className="flex gap-2">
          {question.tags.slice(0, 1).map(tag => (
            <span key={tag} className="px-3 py-1 rounded-full bg-secondary-container/30 text-on-secondary-container text-[10px] font-bold uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
        {question.title}
      </h2>
      <p className="text-on-surface-variant text-sm line-clamp-2 font-body mb-6">
        {question.content}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-surface-container">
        <div className="flex gap-4">
          <div className="flex items-center gap-1.5 text-outline group/vote hover:text-primary transition-colors">
            <ThumbsUp className="w-4 h-4" />
            <span className="text-xs font-bold">{question.votes}</span>
          </div>
          <div className="flex items-center gap-1.5 text-outline group/ans hover:text-secondary transition-colors">
            <MessageSquare className="w-4 h-4" />
            <span className="text-xs font-bold">{question.answersCount} Answers</span>
          </div>
        </div>
        <button className="text-primary font-bold text-xs flex items-center gap-1 hover:underline">
          View Discussion <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </article>
  );
};
