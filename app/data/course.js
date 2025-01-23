export const courses = [
  {
    id: 1,
    name: "1. Introduction to React",
    description: "Learn the basics of React.js, including components, state, props, and the virtual DOM.",
    modules: [
      {
        id: 1,
        title: "What Is React.js?",
        content: "React.js is a popular JavaScript library used for building user interfaces. It allows developers to create reusable UI components.",
        subtopics: ["History of React.js", "Why React.js is popular", "How React differs from traditional JavaScript"]
      },
      {
        id: 2,
        title: "Creating a React App",
        content: "Learn how to set up a React project using Create React App, and understand the basic structure of a React application.",
        subtopics: ["Setting up React App", "File Structure", "Running the Development Server"]
      },
      {
        id: 3,
        title: "JSX and Virtual DOM",
        content: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in React. The virtual DOM is a lightweight in-memory representation of the real DOM.",
        subtopics: ["What is JSX?", "Rendering JSX", "Virtual DOM Concept"]
      },
      {
        id: 4,
        title: "Basic Components",
        content: "Understand the structure of React components and how to define and use them in your React applications.",
        subtopics: ["Functional Components", "Class Components", "Props in Components"]
      },
      {
        id: 5,
        title: "Props and State",
        content: "Learn the differences between props and state, and how to use both to manage data in React components.",
        subtopics: ["Understanding Props", "Managing State", "Passing Props Between Components"]
      }
    ]
  },
  {
    id: 2,
    name: "2. Advanced Component Building",
    description: "Dive deeper into React.js with advanced concepts like hooks, context, and performance optimizations.",
    modules: [
      {
        id: 6,
        title: "Component Lifecycle Methods",
        content: "Lifecycle methods are special functions in class components that are called at different stages of a component's life.",
        subtopics: ["Mounting", "Updating", "Unmounting"]
      },
      {
        id: 7,
        title: "Conditional Rendering",
        content: "Learn how to render components conditionally based on the state or props.",
        subtopics: ["if statements", "ternary operator", "logical && operator"]
      },
      {
        id: 8,
        title: "Lists and Keys",
        content: "Rendering lists of elements in React requires using the `map()` function, along with unique keys for efficient rendering.",
        subtopics: ["Rendering Lists", "Using Keys", "Performance Implications"]
      },
      {
        id: 9,
        title: "Controlled Components",
        content: "In controlled components, form elements are controlled by React state. Learn how to manage form inputs using state.",
        subtopics: ["Handling Form Inputs", "Controlled vs Uncontrolled Components"]
      },
      {
        id: 10,
        title: "Custom Hooks",
        content: "Custom hooks allow you to extract component logic into reusable functions.",
        subtopics: ["Creating Custom Hooks", "Using useEffect in Custom Hooks"]
      }
    ]
  },
  {
    id: 3,
    name: "3. React State Management",
    description: "Master managing state effectively using tools like Context API, Redux, and middleware.",
    modules: [
      {
        id: 11,
        title: "Local State & Global State",
        content: "Local state is managed within individual components, while global state can be shared across the application.",
        subtopics: ["Using useState", "Managing Global State with Context API"]
      },
      {
        id: 12,
        title: "Context API",
        content: "Context API provides a way to pass data through the component tree without having to pass props manually at every level.",
        subtopics: ["Creating Context", "Using useContext Hook", "Provider and Consumer Components"]
      },
      {
        id: 13,
        title: "Redux",
        content: "Redux is a predictable state container for JavaScript applications, helping you manage the state of your app in a consistent manner.",
        subtopics: ["Actions", "Reducers", "Store"]
      },
      {
        id: 14,
        title: "React-Redux Integration",
        content: "React-Redux provides bindings to integrate Redux with React components.",
        subtopics: ["Provider", "connect", "useSelector and useDispatch"]
      },
      {
        id: 15,
        title: "Middleware & Thunks",
        content: "Middleware in Redux can be used to extend the store's abilities. Thunks allow for handling asynchronous logic in Redux.",
        subtopics: ["Creating Middleware", "Redux Thunk for Async Operations"]
      }
    ]
  },
  {
    id: 4,
    name: "4. Advanced React Patterns",
    description: "Explore advanced patterns in React like Higher-Order Components, Render Props, and Portals.",
    modules: [
      {
        id: 16,
        title: "Higher-Order Components",
        content: "A Higher-Order Component (HOC) is a function that takes a component and returns a new component with additional props.",
        subtopics: ["Creating HOCs", "Use Cases of HOCs"]
      },
      {
        id: 17,
        title: "Render Props",
        content: "Render Props is a pattern for sharing code between React components using a function that returns JSX.",
        subtopics: ["Using Render Props", "Comparison with HOCs"]
      },
      {
        id: 18,
        title: "Portals",
        content: "Portals provide a first-class way to render children into a DOM node outside the current component hierarchy.",
        subtopics: ["Creating Portals", "Use Cases"]
      },
      {
        id: 19,
        title: "Suspense and Error Boundaries",
        content: "Suspense allows components to wait for something before rendering, while error boundaries catch JavaScript errors in their child components.",
        subtopics: ["Using Suspense", "Creating Error Boundaries"]
      },
      {
        id: 20,
        title: "Custom Render Methods",
        content: "Learn how to create custom render methods to better organize complex UI logic.",
        subtopics: ["Conditional Rendering", "Optimizing Render Performance"]
      }
    ]
  },
  {
    id: 5,
    name: "5. Performance Optimization",
    description: "Optimize your React applications with best practices, lazy loading, and React DevTools.",
    modules: [
      {
        id: 21,
        title: "Performance Best Practices",
        content: "Learn best practices for optimizing the performance of your React applications, such as avoiding unnecessary re-renders and using memoization.",
        subtopics: ["Memoization", "Pure Components", "Avoiding Inline Functions"]
      },
      {
        id: 22,
        title: "React.memo and useMemo",
        content: "React.memo is a higher-order component that prevents re-rendering, while useMemo is a hook that memoizes expensive calculations.",
        subtopics: ["Using React.memo", "Using useMemo Hook"]
      },
      {
        id: 23,
        title: "React DevTools",
        content: "React DevTools helps you inspect and debug your React application in a convenient way.",
        subtopics: ["Profiling Components", "Inspecting Props and State"]
      },
      {
        id: 24,
        title: "Virtual DOM",
        content: "The Virtual DOM is an abstraction of the real DOM, improving performance by reducing direct manipulation of the actual DOM.",
        subtopics: ["Reconciliation", "How React Updates the DOM"]
      },
      {
        id: 25,
        title: "Lazy Loading and Code Splitting",
        content: "Lazy loading and code splitting can help you load parts of your application only when needed, improving performance.",
        subtopics: ["React.lazy", "React.Suspense", "Dynamic Imports"]
      }
    ]
  },
  {
    id: 6,
    name: "6. React Routing",
    description: "Master routing in React, including nested routes, route parameters, and protected routes.",
    modules: [
      {
        id: 26,
        title: "React Router Basics",
        content: "React Router enables navigation in your React app. Learn how to set up basic routing.",
        subtopics: ["Setting up React Router", "Route Components", "Switch and Route"]
      },
      {
        id: 27,
        title: "Nested Routes",
        content: "Nested routes allow you to render child routes within a parent route.",
        subtopics: ["Defining Nested Routes", "Passing Props to Nested Components"]
      },
      {
        id: 28,
        title: "Route Parameters",
        content: "Learn how to use route parameters to capture dynamic segments of a URL.",
        subtopics: ["Extracting Parameters", "Using Parameters in Components"]
      },
      {
        id: 29,
        title: "Redirects and Navigation",
        content: "Learn how to use the `Redirect` component and programmatically navigate between routes.",
        subtopics: ["Redirecting Users", "Navigation with useHistory"]
      },
      {
        id: 30,
        title: "Protected Routes",
        content: "Protect specific routes by checking whether the user is authenticated before granting access.",
        subtopics: ["Authorization Logic", "Redirecting Unauthorized Users"]
      }
    ]
  },
  {
    id: 7,
    name: "7. Integration With Backend",
    description: "Connect React applications to backend services using REST APIs and GraphQL.",
    modules: [
      {
        id: 31,
        title: "Connecting React to REST APIs",
        content: "Learn how to connect React components to backend APIs using fetch or Axios.",
        subtopics: ["Fetching Data", "Handling Responses", "Error Handling"]
      },
      {
        id: 32,
        title: "Handling API Responses",
        content: "Handling API responses involves managing the data returned from the server and using it in your components.",
        subtopics: ["Handling JSON", "Displaying Data"]
      },
      {
        id: 33,
        title: "Building a CRUD App",
        content: "Learn how to build a basic CRUD (Create, Read, Update, Delete) app by integrating a backend API.",
        subtopics: ["Creating Records", "Reading Data", "Updating and Deleting Data"]
      },
      {
        id: 34,
        title: "Authentication and Authorization",
        content: "Implement user authentication and authorization in your React app with token-based systems like JWT.",
        subtopics: ["Login Form", "JWT Authentication", "Protected Routes"]
      },
      {
        id: 35,
        title: "GraphQL with React",
        content: "Learn how to integrate GraphQL with React to fetch and manipulate data using queries and mutations.",
        subtopics: ["Setting Up Apollo Client", "Queries and Mutations"]
      }
    ]
  },
  {
    id: 8,
    name: "8. Deployment and Hosting",
    description: "Deploy and host React applications with services like Netlify, Vercel, and Firebase.",
    modules: [
      {
        id: 36,
        title: "Deploying with Netlify",
        content: "Learn how to deploy your React app to Netlify for easy hosting and continuous deployment.",
        subtopics: ["Creating a Netlify Account", "Connecting GitHub Repo", "Deploying the App"]
      },
      {
        id: 37,
        title: "Deploying with Vercel",
        content: "Deploy your React app to Vercel, another platform for easy hosting and serverless functions.",
        subtopics: ["Setting Up Vercel", "Deploying to Vercel"]
      },
      {
        id: 38,
        title: "Hosting with Firebase",
        content: "Firebase Hosting allows you to deploy web apps to a global content delivery network.",
        subtopics: ["Setting Up Firebase Hosting", "Deploying a React App"]
      },
      {
        id: 39,
        title: "CI/CD for React",
        content: "Learn how to set up Continuous Integration and Continuous Deployment for React applications.",
        subtopics: ["Using GitHub Actions", "Automating Deployments"]
      },
      {
        id: 40,
        title: "Building for Production",
        content: "Optimizing your React app for production, ensuring it is fast and reliable.",
        subtopics: ["Building the App", "Optimizing Assets", "Minifying Code"]
      }
    ]
  }
];
