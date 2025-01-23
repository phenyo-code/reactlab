// app/data/courses.js

import { modules } from './modules';

export const courses = [
  {
    id: 1,
    name: "React.js Fundamentals",
    description: "Learn the basics of React.js, including components, state, props, and the virtual DOM.",
    modules: [
      {
        id: 1,
        title: "Introduction to React",
        objectives: ["Understand what React.js is", "Set up a React environment", "Create your first component"],
        content: [
          "What is React.js?",
          "Setting up a React environment",
          "Creating your first React component",
          "Understanding JSX",
          "State and Props",
        ],
      },
      {
        id: 2,
        title: "React Components",
        objectives: ["Learn about functional and class components", "Understand component lifecycle", "Create reusable components"],
        content: [
          "Functional vs Class Components",
          "Component Lifecycle",
          "Props and State",
          "Building Reusable Components",
        ],
      }
    ]
  },
  {
    id: 2,
    name: "Advanced React.js",
    description: "Dive deeper into React.js, including hooks, context, performance optimizations, and routing.",
    modules: [
      {
        id: 3,
        title: "Hooks in React",
        objectives: ["Learn about useState and useEffect", "Understand custom hooks", "Manage state and side effects"],
        content: [
          "useState Hook",
          "useEffect Hook",
          "Creating Custom Hooks",
          "Managing State with Hooks",
        ],
      }
    ]
  },
  {
    id: 3,
    name: "Next.js Basics",
    description: "An introduction to building applications with Next.js, server-side rendering, and API routes.",
    modules: [
      {
        id: 4,
        title: "Next.js Basics",
        objectives: ["Understand Next.js architecture", "Learn about pages and APIs", "Set up static site generation"],
        content: [
          "Introduction to Next.js",
          "Pages and APIs",
          "Static Site Generation",
          "Dynamic Routing",
        ],
      }
    ]
  },
  {
    id: 4,
    name: "Full-Stack React Development",
    description: "Learn how to build full-stack applications with React, Next.js, and Node.js.",
    modules: []
  }
];
