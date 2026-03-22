import React, { useState } from "react";
import {
  Navbar,
  RightSidebar,
  Sidebar,
} from "../../features/navigation/index.ts";
import { Feed } from "../../features/feed/index.ts";
import { AskQuestion, QuestionDetail } from "../../features/question/index.ts";
import { Profile } from "../../features/profile/index.ts";
import { Leaderboard } from "../../features/leaderboard/index.ts";
import {
  MOCK_ANSWERS,
  MOCK_QUESTIONS,
} from "../../features/question/data/mockData.ts";
import NotFoundPage from "../pages/NotFoundPage.tsx";
import { Page } from "../../types/index.ts";
import { scrollToTop } from "../../shared/utils/scrollToTop.ts";
import { PageContainer } from "../../shared/components/ui/PageContainer.tsx";
import { ResourcePage } from "../../features/resource/index.ts";
export default function MainRouter() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(
    null,
  );

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    setSelectedQuestionId(null);
    scrollToTop();
  };

  const handleQuestionClick = (id: string) => {
    setSelectedQuestionId(id);
    setCurrentPage("question-detail");
    scrollToTop();
  };

  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return (
          <Feed
            questions={MOCK_QUESTIONS}
            onQuestionClick={handleQuestionClick}
          />
        );
      case "question-detail": {
        const question =
          MOCK_QUESTIONS.find((q) => q.id === selectedQuestionId) ||
          MOCK_QUESTIONS[0];
        return <QuestionDetail question={question} answers={MOCK_ANSWERS} />;
      }
      case "ask":
        return <AskQuestion />;
      case "profile":
        return <Profile />;
      case "leaderboard":
        return <Leaderboard />;
      case "resource":
        return <ResourcePage />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="min-h-screen bg-surface">
      <Navbar onNavigate={handleNavigate} />

      <div className="pt-16 flex max-w-[1600px] mx-auto">
        <Sidebar currentPage={currentPage} onNavigate={handleNavigate} />

        <PageContainer>{renderContent()}</PageContainer>

        <RightSidebar currentPage={currentPage} onNavigate={handleNavigate} />
      </div>
    </div>
  );
}
