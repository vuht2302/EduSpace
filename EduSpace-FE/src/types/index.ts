import {
  Home,
  PlusCircle,
  Trophy,
  User,
  Search,
  Bell,
  Mail,
  ChevronRight,
  ThumbsUp,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Verified,
  Info,
  History,
  Lightbulb,
  X,
  Bold,
  Italic,
  Link2,
  List,
  Image as ImageIcon,
  Code,
  Sigma,
  ArrowUp,
  ArrowDown,
  Bookmark,
  Share2,
  MoreVertical,
  Award,
  Brain,
  PenTool,
  Users,
  Star,
  ShieldCheck,
  Eye,
  BookOpen
} from 'lucide-react';

export type Page = 'home' | 'question-detail' | 'ask' | 'profile' | 'leaderboard' | 'resource';

export interface Author {
  id: string;
  name: string;
  avatar: string;
  grade?: string;
  role?: string;
  isVerified?: boolean;
}

export interface Question {
  id: string;
  title: string;
  content: string;
  author: Author;
  timestamp: string;
  tags: string[];
  votes: number;
  answersCount: number;
  views?: string;
}

export interface Answer {
  id: string;
  content: string;
  author: Author;
  timestamp: string;
  votes: number;
  isAccepted?: boolean;
}

export {
  Home,
  PlusCircle,
  Trophy,
  User,
  Search,
  Bell,
  Mail,
  ChevronRight,
  ThumbsUp,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Verified,
  Info,
  History,
  Lightbulb,
  X,
  Bold,
  Italic,
  Link2,
  List,
  ImageIcon,
  Code,
  Sigma,
  ArrowUp,
  ArrowDown,
  Bookmark,
  Share2,
  MoreVertical,
  Award,
  Brain,
  PenTool,
  Users,
  Star,
  ShieldCheck,
  Eye,
  BookOpen,
};

