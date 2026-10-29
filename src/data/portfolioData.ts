export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  description: string;
  category: "Full-Stack" | "Frontend" | "Web App";
  cover: string;
  liveUrl: string;
  githubUrl: string; // Only client/frontend repo as specified in requirements
  stack: string[];
  tags: string[];
  featured: boolean;
  order: number;
  role: string;
  year: string;
  keyFeatures: string[];
  challenges: string[];
  futurePlans: string[];
  highlights?: string[];
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    level: number; // percentage
    status: string; // e.g., "Advanced", "Proficient", "Intermediate"
    icon: string;
    description: string;
    tags: string[];
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  badge?: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  major: string;
  description: string;
  keyCourses: string[];
  highlights: string[];
}

export const PERSONAL_INFO = {
  name: "Hossain Ahmad",
  designation: "Full-Stack Web Developer",
  currentRole: "Assistant Programmer at Gazipur City Corporation",
  email: "hossain.ahmad38@gmail.com",
  phone: "+880 1551810331",
  location: "Gazipur, Dhaka, Bangladesh",
  coords: "24.0031° N, 90.4203° E",
  github: "https://github.com/hossainahmad",
  linkedin: "https://www.linkedin.com/in/hossainahmad-dev/",
  twitter: "https://x.com/hossain888",
  avatar: "/hossain-ahmad-Avatar-Portrait.png",
  logo: "/images/logo.png",
  headline:
    "Crafting resilient, high-performance web applications and civic digital infrastructure.",
  shortBio:
    "Full-Stack Web Developer and Assistant Programmer at Gazipur City Corporation. I specialize in building scalable web architectures with React, Next.js, TypeScript, Node.js, and MongoDB, bridging civic responsibility with modern software engineering.",
  availability: "Open to High-Impact Opportunities & Collaborations",
  experienceYears: "3+",
  projectsCompleted: "10+",
  citizensServed: "2M+",
  philosophy:
    "Don't just learn a technology — build something meaningful with it.",
};

export const ABOUT_DETAILS = {
  journey: `My journey into web development began with a deep fascination with how code turns into real-world tools that people use every day. Starting from foundational web technologies (HTML, CSS, modern JavaScript ES6+), I quickly advanced into full-scale modern software engineering with TypeScript, React, Next.js, and Node.js. 

Today, as an Assistant Programmer at Gazipur City Corporation, I work at the intersection of civic infrastructure and modern software systems. Writing software for a metropolitan city of over two million citizens has instilled a relentless commitment to reliability, data integrity, clean architecture, and performance. Outside my public-sector work, I continuously design, engineer, and ship full-stack web applications to solve real-world problems.`,

  workEnjoy: `I thrive on end-to-end product development — from schema modeling and API design to crafting buttery-smooth, accessible user interfaces. I take genuine satisfaction in solving thorny edge cases: building custom sorters that seamlessly understand Bengali numerals alongside Western digits, designing SSR-safe persistence layers in Next.js, or structuring component trees with strict unidirectional data flow. For me, good code is clean, readable, modular, and built to last.`,

  hobbies: [
    {
      title: "Specialty Coffee ☕",
      desc: "Brewing great pour-overs and espresso while debugging logic or brainstorming system architectures.",
    },
    {
      title: "Books & Tech Literature 📚",
      desc: "Immersing myself in software design books, system thinking, and personal growth literature.",
    },
    {
      title: "Urban & Nature Photography 📷",
      desc: "Capturing streetscapes, urban geometry, and quiet moments behind the lens.",
    },
    {
      title: "Open Source & Tech Experimentation 💡",
      desc: "Exploring emerging web standards, experimenting with modern developer toolchains, and continuous improvement.",
    },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend Development",
    description:
      "Modern, component-driven reactive user interfaces with strong type safety.",
    skills: [
      {
        name: "React.js",
        level: 90,
        status: "Advanced",
        icon: "Atom",
        description:
          "Functional components, custom hooks, Context API, state management, memoization.",
        tags: ["React 19", "Hooks", "Virtual DOM", "SPA"],
      },
      {
        name: "Next.js",
        level: 88,
        status: "Advanced",
        icon: "Globe",
        description:
          "App Router, Server Components, SSR/SSG, Server Actions, Route Handlers.",
        tags: ["App Router", "SSR", "SEO", "Optimization"],
      },
      {
        name: "TypeScript",
        level: 85,
        status: "Proficient",
        icon: "Code2",
        description:
          "Type safety, generics, interfaces, strict type checking, union types.",
        tags: ["Type Safety", "Generics", "TSConfig"],
      },
      {
        name: "JavaScript (ES6+)",
        level: 92,
        status: "Advanced",
        icon: "FileCode",
        description:
          "Async/Await, Promises, Event Loop, Closures, DOM manipulation.",
        tags: ["ES6+", "Async", "Prototypes", "Modules"],
      },
      {
        name: "Tailwind CSS",
        level: 92,
        status: "Advanced",
        icon: "Palette",
        description:
          "Responsive layouts, utility-first CSS, custom design tokens, dark mode.",
        tags: ["Tailwind v4", "Flexbox/Grid", "Responsive", "Glassmorphism"],
      },
      {
        name: "HTML5 & Modern CSS3",
        level: 95,
        status: "Expert",
        icon: "Layout",
        description:
          "Semantic markup, CSS Grid, Flexbox, transitions, accessibility (a11y).",
        tags: ["Semantic HTML", "CSS Grid", "Animations", "a11y"],
      },
    ],
  },
  {
    name: "Backend & Database",
    description:
      "Scalable server logic, robust authentication, and persistent data storage.",
    skills: [
      {
        name: "Node.js & Express",
        level: 84,
        status: "Proficient",
        icon: "Server",
        description:
          "RESTful API development, middleware, authentication flows, error handling.",
        tags: ["Node.js", "Express", "REST APIs", "Middleware"],
      },
      {
        name: "MongoDB",
        level: 85,
        status: "Proficient",
        icon: "Database",
        description:
          "Document data modeling, native Node.js driver, aggregation pipelines, indexing.",
        tags: ["MongoDB Atlas", "NoSQL", "Aggregation", "Indexes"],
      },
      {
        name: "Authentication (Better Auth / JWT)",
        level: 82,
        status: "Proficient",
        icon: "ShieldCheck",
        description:
          "OAuth 2.0 (Google, GitHub), session management, password hashing, secure cookies.",
        tags: ["Better Auth", "OAuth", "Sessions", "Security"],
      },
      {
        name: "REST API Design",
        level: 88,
        status: "Advanced",
        icon: "Network",
        description:
          "Stateless architecture, HTTP verbs, payload validation, status codes, pagination.",
        tags: ["REST", "CRUD", "JSON", "API Contracts"],
      },
    ],
  },
  {
    name: "Tools & DevOps",
    description:
      "Version control, automated pipelines, deployment, and developer toolchains.",
    skills: [
      {
        name: "Git & GitHub",
        level: 90,
        status: "Advanced",
        icon: "GitBranch",
        description:
          "Branching strategies, PR workflows, code reviews, rebase, merge conflict resolution.",
        tags: ["Git", "GitHub", "Version Control", "Collaboration"],
      },
      {
        name: "Vercel & Netlify",
        level: 88,
        status: "Advanced",
        icon: "Cloud",
        description:
          "Continuous deployment (CI/CD), environment variable management, serverless edge.",
        tags: ["Vercel", "Netlify", "CI/CD", "Serverless"],
      },
      {
        name: "VS Code & Tooling",
        level: 94,
        status: "Expert",
        icon: "Terminal",
        description:
          "Debugging, linting (ESLint), code formatting (Prettier), command line CLI.",
        tags: ["VS Code", "ESLint", "Prettier", "npm/pnpm"],
      },
      {
        name: "Figma (UI/UX)",
        level: 78,
        status: "Experienced",
        icon: "Layers",
        description:
          "Wireframing, UI prototyping, responsive grid layouts, design handoff.",
        tags: ["Figma", "Design", "Wireframes", "Prototyping"],
      },
    ],
  },
  {
    name: "Engineering Practices",
    description:
      "Core software engineering disciplines that ensure durable, maintainable software.",
    skills: [
      {
        name: "Clean Code & Refactoring",
        level: 90,
        status: "Advanced",
        icon: "CheckCircle2",
        description:
          "DRY, SOLID principles, modular component hierarchy, readable naming.",
        tags: ["SOLID", "DRY", "Readability", "Modularity"],
      },
      {
        name: "Performance & SEO",
        level: 86,
        status: "Proficient",
        icon: "Cpu",
        description:
          "Lighthouse optimization, image lazy loading, metadata, bundle size reduction.",
        tags: ["Lighthouse", "Core Web Vitals", "SEO", "Speed"],
      },
      {
        name: "Responsive & Mobile-First",
        level: 94,
        status: "Expert",
        icon: "Smartphone",
        description:
          "Adaptive layouts across phones, tablets, laptops, and ultra-wide displays.",
        tags: [
          "Mobile First",
          "Cross Browser",
          "Touch Events",
          "Fluid Typography",
        ],
      },
    ],
  },
];

export const EDUCATIONS: EducationItem[] = [
  {
    id: "bsc-cse",
    degree:
      "Bachelor of Science in Computer Science & Engineering (B.Sc. in CSE)",
    institution: "University of Repute",
    location: "Dhaka Division, Bangladesh",
    period: "Completed",
    major: "Computer Science & Engineering",
    description:
      "Comprehensive academic grounding in computer science fundamentals, algorithmic problem solving, software engineering principles, database systems, and full-stack web architectures.",
    keyCourses: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Software Engineering & System Analysis",
      "Computer Networks & Security",
      "Web Technologies & Internet Computing",
    ],
    highlights: [
      "Rigorous hands-on laboratory courses and software development term projects.",
      "In-depth focus on relational and document-based data management.",
      "Solid theoretical and practical foundations applied to real-world civic systems.",
    ],
  },
  {
    id: "hsc",
    degree: "Diploma in Computer Science (HSC)",
    institution: "Model Institute of Science & Technology",
    location: "Gazipur, Bangladesh",
    period: "Completed",
    major: "Computer Science",
    description:
      "Rigorous pre-university academic curriculum focusing on Computer Fundamentals & Architecture, Programming Languages, Data Structures & Algorithms, and Database Management Systems (DBMS).",
    keyCourses: [
      "Computer Fundamentals & Architecture",
      "Data Structures & Algorithms",
      "Computer Networks & Security",
      "Operating Systems",
    ],
    highlights: [
      "Developed strong analytical, logical, and mathematical problem-solving skills.",
      "Early engagement with programming logic and computer systems.",
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "gcc",
    role: "Assistant Programmer",
    company: "Gazipur City Corporation (GCC)",
    companyUrl: "https://gcc.gov.bd",
    location: "Gazipur, Bangladesh",
    period: "2023 — Present",
    badge: "Current Role",
    type: "Public Sector / Civic Technology",
    description:
      "Spearheading digital systems and civic software development for Gazipur City Corporation, serving a metropolitan population of over two million citizens. Responsible for citizen-facing digital services, municipal management dashboards, internal administration pipelines, and robust data integrity.",
    achievements: [
      "Modernized internal citizen request pipelines and administrative management interfaces.",
      "Engineered reliable database operations ensuring high system availability and zero data corruption.",
      "Collaborated closely with municipal department heads to digitize paper-bound administrative processes.",
      "Implemented strict security safeguards, automated operational routines, and citizen service workflows.",
    ],
    technologies: [
      "Web Technologies",
      "Database Systems",
      "API Integrations",
      "Civic Infrastructure",
      "System Administration",
      "Data Security",
    ],
  },
  {
    id: "independent-dev",
    role: "Full-Stack Web Developer",
    company: "Independent Projects & Open Source",
    location: "Gazipur, Bangladesh",
    period: "2024 — Present",
    badge: "Active",
    type: "Software Development",
    description:
      "Designed, engineered, and shipped multiple production web applications from scratch, taking full ownership of UX/UI design, database architecture, state management, and deployment pipelines.",
    achievements: [
      "Built BazarDor, a bilingual grocery price tracker solving local market price transparency with custom Bengali numeral sorters.",
      "Created FitLog, a modern workout planning app utilizing Context API with SSR hydration synchronization.",
      "Developed DevStack, a developer tool curator built with strict TypeScript unidirectional data flow.",
      "Authored open-source projects with comprehensive documentation, clean code standards, and active deployments.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Better Auth",
      "Git & GitHub",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "bazar-dor",
    title: "BazarDor (বাজার দর)",
    subtitle: "Real-Time Market-Price Tracker for Essential Products",
    summary:
      "A full-stack market-price tracker that brings daily prices for essential commodities into one clear dashboard — compare market ranges, track fluctuations, and browse by category.",
    description:
      "If you buy groceries in Bangladesh, the same essential product can vary significantly in price from market to market, with no unified way to check a fair benchmark. BazarDor solves this by collecting daily prices for essential goods into an intuitive platform where consumers can inspect price changes, filter by category, and compare markets side-by-side.",
    category: "Full-Stack",
    cover: "/covers/bazar-dor.png",
    liveUrl: "https://bazar-dor-zeta-steel.vercel.app",
    githubUrl: "https://github.com/hossainahmad/bazar-dor",
    stack: [
      "Next.js (App Router)",
      "React",
      "Better Auth",
      "MongoDB",
      "Tailwind CSS",
      "Sonner",
    ],
    tags: ["Full-Stack", "Auth", "MongoDB", "Next.js", "Tailwind CSS"],
    featured: true,
    order: 1,
    role: "Full-Stack Architect & Developer",
    year: "2026",
    keyFeatures: [
      "Browse essential products with real-time prices, standard units, and price-change indicators.",
      "Filter by grocery category and instant search by product name.",
      "Custom price sorting (low-to-high and high-to-low) that natively supports Bengali numerals (০-৯) alongside Western digits.",
      "Market-by-market comparison view to discover which regional market offers the best deal.",
      "Authentication and user accounts using Better Auth with customizable profile names.",
      "Polished responsive UI with loading skeletons, error boundaries, and friendly empty states.",
    ],
    challenges: [
      "Bengali Numeral Sorting: Most local users read prices written in Bengali digits. Standard JavaScript sorts string '৯৯' differently than numeric 99. Engineered a custom unicode digit normalizer so both Bengali and Western numerals sort with accurate mathematical ordering.",
      "Comparison Data Modeling: Organizing data for comparing multiple markets against a single product required an efficient document schema in MongoDB without resorting to heavy relational joins.",
      "Authentication Edge Cases: Configuring Better Auth with session caching, redirect guards, and zero hydration flicker across server and client components.",
    ],
    futurePlans: [
      "Crowdsourced price verification where registered shoppers can upload receipt photos and submit verified market rates.",
      "Price surge notifications via SMS or WhatsApp for staple goods.",
      "Offline-first Progressive Web App (PWA) support for smooth browsing inside subterranean local bazaars with spotty connectivity.",
      "Historical price analytics charts to track multi-month inflation trends across seasons.",
    ],
    highlights: [
      "Full-Stack Next.js App Router implementation",
      "Native MongoDB driver with optimized aggregation",
      "Seamless bilingual Bengali & English support",
    ],
  },
  {
    slug: "fit-log",
    title: "FitLog",
    subtitle: "High-Performance Daily Workout Planner & Routine Tracker",
    summary:
      "A modern workout planner featuring an interactive exercise library, persistent routine planning, bookmarking, and live duration & calorie expenditure metric tracking.",
    description:
      "Workout routines often get lost across scattered notes apps and fitness blogs. FitLog consolidates everything into a unified web application: explore exercise libraries with step-by-step guidance, construct custom daily routines, bookmark exercises, and track estimated energy expenditure in real time.",
    category: "Web App",
    cover: "/covers/fit-log.png",
    liveUrl: "https://fit-log-wheat-kappa.vercel.app",
    githubUrl: "https://github.com/hossainahmad/fit-log",
    stack: [
      "Next.js",
      "React Context API",
      "Tailwind CSS",
      "Lucide React",
      "localStorage",
    ],
    tags: ["Next.js", "React", "State Management", "Tailwind CSS"],
    featured: true,
    order: 2,
    role: "UI/UX Designer & Frontend Engineer",
    year: "2026",
    keyFeatures: [
      "Interactive exercise catalog with search, muscle group filters, and equipment prerequisites.",
      "Step-by-step routine pages with difficulty ratings, target muscle groups, and calorie estimates.",
      "Plan & bookmark management: easily add exercises to today's schedule or save for future sessions.",
      "Real-time synchronized navbar badges reflecting active plan and bookmark counts across all views.",
      "Persistent metrics dashboard that aggregates total planned duration and anticipated calorie burn.",
    ],
    challenges: [
      "SSR Hydration Trap with localStorage: In Next.js, servers render HTML before browser localStorage is accessible, easily causing React hydration mismatches. Implemented a two-stage hydration gate that renders initial server HTML cleanly before mounting persisted storage state.",
      "Context API Performance: Preventing unnecessary re-renders across the large exercise catalog when updating metric counters in the navbar. Structured fine-grained Context selectors to keep interactions instant.",
    ],
    futurePlans: [
      "Cloud database synchronization to sync workout routines across mobile and desktop devices.",
      "Interactive audio rest timer between sets with audible audio cues.",
      "Custom routine builder allowing users to create, name, and share custom workout circuits with friends.",
      "Export routine to PDF or calendar format (Google Calendar / iCal).",
    ],
    highlights: [
      "Flawless hydration handling in Next.js",
      "Global Context state with zero unnecessary re-renders",
      "Responsive, clean UI with Lucide icon integration",
    ],
  },
  {
    slug: "devstack",
    title: "DevStack",
    subtitle: "Developer Tech Stack Explorer & Architecture Curator",
    summary:
      "An interactive tool for developers to explore, compare, and curate their ideal tech stack across frontend, backend, database, mobile, and DevOps ecosystems.",
    description:
      "Choosing the right tech stack for a new project usually involves opening dozens of tabs, benchmark articles, and documentation pages. DevStack streamlines this exploration into a single cohesive interface: explore technologies side by side, evaluate their trade-offs, and curate your choices into a live sticky tray.",
    category: "Frontend",
    cover: "/covers/devstack.png",
    liveUrl: "https://devstacktech.netlify.app",
    githubUrl: "https://github.com/hossainahmad/DevStack",
    stack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "React Toastify",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "DaisyUI"],
    featured: true,
    order: 3,
    role: "Frontend Engineer & Interface Architect",
    year: "2026",
    keyFeatures: [
      "Multi-ecosystem exploration across Frontend, Backend, Database, Mobile, and DevOps.",
      "Side-by-side technology comparison matrix highlighting strengths, typical use cases, and ecosystem pairings.",
      "Live sticky 'Your Stack' dock tracking all curated technologies with one-click removal and clear-all capabilities.",
      "Interactive toast notification system powered by React Toastify confirming every stack mutation.",
      "Fully type-safe modular component hierarchy with strict unidirectional data flow.",
    ],
    challenges: [
      "Unidirectional Data Flow Discipline: Lifting state across deeply nested cards while preserving reactive updates in the sticky dock required careful prop-drilling management and well-defined TypeScript interfaces.",
      "Responsive Docking UI: Designing the sticky bottom stack dock to remain unobtrusive on small mobile screens while still showing rich information on desktop monitors.",
    ],
    futurePlans: [
      "One-click export of curated stacks to formatted Markdown README badges or boilerplate `package.json` starter templates.",
      "Community voting metrics and ecosystem compatibility warning flags (e.g., flag conflicting libraries).",
      "AI stack recommendations based on project constraints (e.g. solo dev vs. enterprise, SEO requirement).",
    ],
    highlights: [
      "Strict TypeScript typing throughout component tree",
      "Sticky responsive curation dock",
      "Deployed and active on Netlify",
    ],
  },
  {
    slug: "world-explorer",
    title: "World Explorer",
    subtitle: "Global Country Discovery & Geospatial Data Browser",
    summary:
      "An interactive web application built with React and TypeScript that fetches real-time country information from public REST APIs, featuring instant search, filtering, and rich demographic cards.",
    description:
      "World Explorer delivers an engaging way to explore global geography, geopolitics, and demographics. Powered by public REST APIs, the app presents country profiles complete with national flags, population statistics, currencies, languages, time zones, and bordering nations in an intuitive interface.",
    category: "Frontend",
    cover: "/covers/world-explorer.png",
    liveUrl: "https://world-explorer-neon.vercel.app/",
    githubUrl: "https://github.com/hossainahmad/world-explorer",
    stack: ["React.js", "TypeScript", "REST API", "Tailwind CSS", "CSS3"],
    tags: ["React", "TypeScript", "REST API", "Tailwind CSS"],
    featured: true,
    order: 4,
    role: "Frontend Developer",
    year: "2026",
    keyFeatures: [
      "Comprehensive country exploration with detailed population, capital, region, and flag displays.",
      "Instant real-time search with debounced input and continent/region filtering.",
      "Resilient asynchronous REST API integration with loading states and graceful error recovery.",
      "Bordering nations navigation allowing users to hop from country to adjacent country.",
      "Mobile-optimized card grid with fluid typography and dark mode aesthetic.",
    ],
    challenges: [
      "REST API Data Inconsistencies: Public country APIs often return varied data models (missing capitals, differing currency structures, incomplete border arrays). Built robust TypeScript type guards and fallback normalizers to prevent UI crashes.",
      "Search Performance: Debouncing user keystrokes to prevent API rate limits and rendering country cards smoothly without stutter.",
    ],
    futurePlans: [
      "Interactive SVG or Mapbox globe visualization with clickable pinpoint borders.",
      "Side-by-side country statistical comparison tool (e.g., population density, GDP, land area).",
      "Currency exchange rate live calculator integrated into each country's profile.",
    ],
    highlights: [
      "Type-safe REST API consumption with custom hooks",
      "Bordering nation interactive navigation",
      "Fast, responsive mobile layout",
    ],
  },
  {
    slug: "readora",
    title: "Readora",
    subtitle: "Modern Digital Library & Distraction-Free Book Reader",
    summary:
      "A comprehensive digital reading platform featuring card-based book discovery, personal library shelves, Better Auth social login, and an eye-comfortable distraction-free reader UI.",
    description:
      "Readora reimagines online long-form reading with an interface designed specifically for eye comfort and focus. Readers can discover books by genre, track reading progress automatically, organize their personal bookshelves (Want to Read, Reading, Finished), and enjoy distraction-free reading with customizable serif typography and warm-tinted themes.",
    category: "Full-Stack",
    cover: "/covers/bazar-dor.png", // will use thematic cover or custom presentation
    liveUrl: "https://github.com/hossainahmad/readora",
    githubUrl: "https://github.com/hossainahmad/readora",
    stack: ["Next.js", "TypeScript", "MongoDB", "Better Auth", "Tailwind CSS"],
    tags: ["Next.js", "TypeScript", "MongoDB", "Better Auth", "Reader UI"],
    featured: false,
    order: 5,
    role: "Full-Stack Architect",
    year: "2026",
    keyFeatures: [
      "Curated book discovery catalog with instant search, category filters, and featured author spotlights.",
      "Distraction-free Reader UI with Light, Sepia, and warm Dark themes designed to prevent eye strain.",
      "Typography controls: adjustable font sizes (14–28px), line heights, reading widths, and keyboard shortcuts (←/→ page turn, 't' table of contents).",
      "Automatic reading progress tracker that saves exact scroll position and percentage complete per chapter.",
      "Personal library management with Want to Read, Reading, and Finished status shelves.",
      "Better Auth authentication supporting Google, Facebook, and GitHub OAuth sign-in.",
    ],
    challenges: [
      "Reader Typography & Comfort: Standard websites cause reading fatigue due to harsh contrast and overly wide line lengths. Engineered strict typographic constraints (~70 characters per line maximum, line-height 1.7) and persistent warm dark mode.",
      "Reading Progress Sync: Gracefully persisting scroll progress both locally in localStorage and synchronizing with MongoDB upon authentication.",
    ],
    futurePlans: [
      "Offline reading support via Service Workers (PWA) to allow reading without an internet connection.",
      "In-text highlighting, margin annotations, and quote sharing.",
      "EPUB and PDF file import and export capabilities.",
    ],
    highlights: [
      "Distraction-free reading interface with warm sepia and dark modes",
      "Better Auth multi-provider authentication",
      "Automated chapter progress tracking",
    ],
  },
];
