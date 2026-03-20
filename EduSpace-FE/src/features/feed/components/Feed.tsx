import React from "react";
import { QuestionCard } from "./QuestionCard";
import { Question } from "../../../types/index.ts";

interface FeedProps {
  questions: Question[];
  onQuestionClick: (id: string) => void;
}

export const Feed: React.FC<FeedProps> = ({ questions, onQuestionClick }) => {
  return (
    <div id="main-feed" className="flex flex-col gap-6">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-extrabold tracking-tight text-on-surface">
          Curated Feed
        </h1>
        <div className="flex gap-2 bg-surface-container-low p-1 rounded-lg">
          <button className="px-4 py-1.5 bg-surface-container-lowest text-primary rounded-md text-sm font-semibold custom-shadow">
            Recent
          </button>
          <button className="px-4 py-1.5 text-outline text-sm font-medium hover:text-on-surface">
            Popular
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {questions.map((q) => (
          <QuestionCard key={q.id} question={q} onClick={onQuestionClick} />
        ))}
      </div>
    </div>
  );
};
