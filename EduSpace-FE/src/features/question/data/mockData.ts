import { Answer, Question } from "../../../types/index.ts";

export const MOCK_QUESTIONS: Question[] = [
  {
    id: "1",
    title:
      "How to implement a balanced B-Tree in Rust for high-concurrency environments?",
    content:
      "I am working on a storage engine and need a B-Tree implementation that can handle multiple writers efficiently. I am looking for advice on latching strategies and node splitting in a concurrent context.",
    author: {
      id: "a1",
      name: "Alex Thompson",
      avatar: "https://picsum.photos/seed/alex/100/100",
      grade: "Senior",
      role: "Computer Science Major",
      isVerified: true,
    },
    timestamp: "2 hours ago",
    tags: ["Computer Science", "Rust", "Algorithms"],
    votes: 84,
    answersCount: 12,
  },
  {
    id: "2",
    title: "Visualizing Stokes' Theorem using manifold-based surfaces",
    content:
      "Can someone explain the geometric intuition behind Stokes' Theorem? I understand the formula, but I struggle to visualize how the line integral around the boundary relates to the surface integral of the curl.",
    author: {
      id: "a2",
      name: "Elena Rodriguez",
      avatar: "https://picsum.photos/seed/elena/100/100",
      grade: "Junior",
      role: "Physics Major",
      isVerified: true,
    },
    timestamp: "Yesterday",
    tags: ["Mathematics", "Calculus III", "Physics"],
    votes: 31,
    answersCount: 5,
  },
  {
    id: "3",
    title:
      "Quantum Decoherence and the Measurement Problem: A new perspective?",
    content:
      "Recent papers suggest that decoherence might not fully solve the measurement problem. What are the current leading interpretations that address the transition from quantum to classical states?",
    author: {
      id: "a3",
      name: "Julian Thorne",
      avatar: "https://picsum.photos/seed/julian/100/100",
      grade: "PhD Candidate",
      role: "Quantum Physics",
      isVerified: true,
    },
    timestamp: "3 days ago",
    tags: ["Physics", "Quantum Mechanics"],
    votes: 156,
    answersCount: 28,
  },
];

export const MOCK_ANSWERS: Answer[] = [
  {
    id: "ans1",
    content:
      'The key to concurrent B-Trees is usually the "B-link tree" algorithm. It allows for node splitting without locking the entire path from the root. Each node has a "high key" and a "right link" to its sibling, which handles the case where a searcher lands on a node that was just split.',
    author: {
      id: "m1",
      name: "Dr. Amelia V.",
      avatar: "https://picsum.photos/seed/amelia/100/100",
      role: "Verified Mentor",
    },
    timestamp: "1 hour ago",
    votes: 42,
    isAccepted: true,
  },
  {
    id: "ans2",
    content:
      "In Rust, you should look into the `crossbeam` or `parking_lot` crates for efficient synchronization primitives. Using a `RwLock` per node is a common starting point, but for high concurrency, you might want to explore lock-free techniques or fine-grained latching.",
    author: {
      id: "u1",
      name: "Marcus T.",
      avatar: "https://picsum.photos/seed/marcus/100/100",
      role: "Systems Engineer",
    },
    timestamp: "45 mins ago",
    votes: 15,
  },
];
