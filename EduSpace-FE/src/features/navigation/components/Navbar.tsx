import React from "react";
import { useTranslation } from "react-i18next";
import { Search, Bell, Mail, Page } from "../../../types/index.ts";

interface NavbarProps {
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language.startsWith("vi") ? "en" : "vi";
    i18n.changeLanguage(nextLang);
  };

  return (
    <header
      id="main-header"
      className="fixed top-0 w-full z-50 glass-nav border-b border-surface-container h-16 flex items-center justify-between px-6"
    >
      <div className="flex items-center gap-8">
        <span
          id="brand-logo"
          className="text-xl font-bold text-primary font-headline tracking-tight cursor-pointer"
          onClick={() => onNavigate("home")}
        >
          EduSpace
        </span>

        <div
          id="search-container"
          className="hidden md:flex items-center bg-surface-container-low px-4 py-2 rounded-lg w-96 group transition-all focus-within:bg-surface-container-lowest focus-within:ring-1 focus-within:ring-primary/20"
        >
          <Search className="text-outline mr-2 w-4 h-4" />
          <input
            id="global-search"
            className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-outline"
            placeholder={t("navbar.searchPlaceholder")}
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleLanguage}
          className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors cursor-pointer px-2"
        >
          {i18n.language.startsWith("vi") ? "VI" : "EN"}
        </button>
        <button
          id="nav-notifications"
          className="p-2 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-full active:scale-95"
        >
          <Bell className="w-5 h-5" />
        </button>
        <button
          id="nav-messages"
          className="p-2 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-full active:scale-95"
        >
          <Mail className="w-5 h-5" />
        </button>
        <div
          id="user-profile-trigger"
          className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary-fixed ml-2 cursor-pointer"
          onClick={() => onNavigate("profile")}
        >
          <img
            src="https://picsum.photos/seed/student/100/100"
            alt="User Avatar"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};
