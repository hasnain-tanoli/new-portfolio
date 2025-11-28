export const siteConfig = {
  name: "Hasnain Tanoli",
  title: "Full-Stack Developer",
  description:
    "Full-stack developer specializing in building modern, scalable web applications with clean code and exceptional user experiences.",
  url: "https://hasnain-tanoli.vercel.app",
  email: "contact.hasnaintanoli@gmail.com", // Update with your actual email
  location: "Pakistan",
  available: true,
  resumeUrl: "/resume.pdf", // Add your resume

  links: {
    github: "https://github.com/Hasnain-Tanoli",
    linkedin: "https://linkedin.com/in/hasnain-tanoli",
    twitter: "https://twitter.com/hasnain_tanoli",
    email: "mailto:hasnaintanoli@gmail.com",
  },
};

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Info", href: "/info" },
  { name: "Contact", href: "/contact" },
];

export const skills = {
  languages: [
    "JavaScript",
    "TypeScript",
    "Python",
    "HTML5",
    "CSS3",
    "SQL",
  ],
  frontend: [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Redux Toolkit",
    "Framer Motion",
    "Shadcn UI",
    "Material UI",
    "Bootstrap",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "REST APIs",
    "GraphQL",
    "Firebase",
  ],
  tools: [
    "Git",
    "GitHub",
    "VS Code",
    "Vercel",
    "Netlify",
    "Postman",
    "Figma",
    "Docker",
    "npm/yarn/pnpm",
  ],
};

export const experiences = [
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2023 - Present",
    description:
      "Building custom web applications for clients worldwide. Specializing in React, Next.js, and Node.js solutions with focus on performance and user experience.",
    highlights: [
      "Delivered 10+ successful projects",
      "Worked with clients from US, UK, and UAE",
      "Maintained 5-star rating on freelance platforms",
    ],
  },
  {
    company: "Self-Employed",
    role: "Web Developer",
    period: "2022 - 2023",
    description:
      "Started journey in web development, building personal projects and learning modern technologies.",
    highlights: [
      "Built multiple full-stack applications",
      "Contributed to open source projects",
      "Developed strong foundation in React ecosystem",
    ],
  },
  // Add more experiences as needed
];

export const education = [
  {
    institution: "Your University Name", // Update this
    degree: "Bachelor's in Computer Science", // Update this
    period: "2020 - 2024", // Update this
    description: "Focused on software engineering and web technologies.",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    slug: "ecommerce-platform",
    description:
      "A full-featured e-commerce platform with product management, shopping cart, secure checkout, and admin dashboard. Built with modern technologies for optimal performance.",
    longDescription:
      "This comprehensive e-commerce solution includes user authentication, product catalog with search and filters, shopping cart functionality, Stripe payment integration, order management, and a complete admin panel for inventory and order management.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Stripe"],
    github: "https://github.com/Hasnain-Tanoli/ecommerce-platform",
    live: "https://ecommerce-demo.vercel.app",
    image: "/projects/ecommerce.png",
    featured: true,
    category: "Full-Stack",
    year: "2024",
  },
  {
    id: 2,
    title: "Task Management App",
    slug: "task-management-app",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    longDescription:
      "Built for teams to organize and track their work efficiently. Features include kanban boards, task assignments, due dates, labels, file attachments, and real-time notifications.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Redux"],
    github: "https://github.com/Hasnain-Tanoli/task-manager",
    live: "https://taskmanager-demo.vercel.app",
    image: "/projects/taskmanager.png",
    featured: true,
    category: "Full-Stack",
    year: "2024",
  },
  {
    id: 3,
    title: "Portfolio Website",
    slug: "portfolio-website",
    description:
      "A modern, responsive portfolio website showcasing projects and skills with dark/light theme support and smooth animations.",
    longDescription:
      "Personal portfolio built with Next.js 14, featuring server-side rendering, optimized images, SEO best practices, and accessibility compliance.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Hasnain-Tanoli/portfolio",
    live: "https://hasnain-tanoli.vercel.app",
    image: "/projects/portfolio.png",
    featured: true,
    category: "Frontend",
    year: "2024",
  },
  {
    id: 4,
    title: "Blog Platform",
    slug: "blog-platform",
    description:
      "A full-stack blog platform with markdown support, categories, comments, and SEO optimization.",
    longDescription:
      "A complete blogging solution with rich text editor, image uploads, category management, comment system with moderation, and built-in analytics.",
    tech: ["Next.js", "MDX", "Prisma", "PostgreSQL", "NextAuth"],
    github: "https://github.com/Hasnain-Tanoli/blog-platform",
    live: "https://blog-demo.vercel.app",
    image: "/projects/blog.png",
    featured: false,
    category: "Full-Stack",
    year: "2024",
  },
  {
    id: 5,
    title: "Weather Dashboard",
    slug: "weather-dashboard",
    description:
      "A beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
    longDescription:
      "Real-time weather data visualization with 7-day forecasts, hourly breakdowns, severe weather alerts, and interactive radar maps.",
    tech: ["React", "TypeScript", "Tailwind CSS", "OpenWeather API"],
    github: "https://github.com/Hasnain-Tanoli/weather-app",
    live: "https://weather-demo.vercel.app",
    image: "/projects/weather.png",
    featured: false,
    category: "Frontend",
    year: "2023",
  },
  {
    id: 6,
    title: "Chat Application",
    slug: "chat-application",
    description:
      "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
    longDescription:
      "A feature-rich messaging platform supporting one-on-one conversations, group channels, file/image sharing, read receipts, and online status indicators.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    github: "https://github.com/Hasnain-Tanoli/chat-app",
    live: "https://chat-demo.vercel.app",
    image: "/projects/chat.png",
    featured: false,
    category: "Full-Stack",
    year: "2023",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications in 2024",
    slug: "building-scalable-react-applications-2024",
    excerpt:
      "Learn the best practices and patterns for building large-scale React applications that are maintainable and performant.",
    content: "", // Add full content or use MDX files
    date: "2024-01-15",
    readTime: "8 min",
    tags: ["React", "Architecture", "Best Practices"],
    featured: true,
  },
  {
    id: 2,
    title: "Mastering TypeScript: Advanced Patterns",
    slug: "mastering-typescript-advanced-patterns",
    excerpt:
      "Explore advanced TypeScript patterns including generics, conditional types, and mapped types to write better code.",
    content: "",
    date: "2024-01-10",
    readTime: "10 min",
    tags: ["TypeScript", "JavaScript", "Tutorial"],
    featured: true,
  },
  {
    id: 3,
    title: "Next.js 14: What's New and How to Upgrade",
    slug: "nextjs-14-whats-new",
    excerpt:
      "A comprehensive guide to the new features in Next.js 14 and step-by-step migration from previous versions.",
    content: "",
    date: "2024-01-05",
    readTime: "6 min",
    tags: ["Next.js", "React", "Web Development"],
    featured: false,
  },
  {
    id: 4,
    title: "Building REST APIs with Node.js and Express",
    slug: "building-rest-apis-nodejs-express",
    excerpt:
      "A complete guide to building robust and secure REST APIs using Node.js, Express, and best practices.",
    content: "",
    date: "2023-12-28",
    readTime: "12 min",
    tags: ["Node.js", "Express", "API", "Backend"],
    featured: false,
  },
  {
    id: 5,
    title: "CSS Grid vs Flexbox: When to Use What",
    slug: "css-grid-vs-flexbox",
    excerpt:
      "Understanding the differences between CSS Grid and Flexbox and knowing when to use each layout method.",
    content: "",
    date: "2023-12-20",
    readTime: "5 min",
    tags: ["CSS", "Frontend", "Layout"],
    featured: false,
  },
  {
    id: 6,
    title: "Authentication in Next.js with NextAuth.js",
    slug: "authentication-nextjs-nextauth",
    excerpt:
      "Implementing secure authentication in your Next.js applications using NextAuth.js with multiple providers.",
    content: "",
    date: "2023-12-15",
    readTime: "9 min",
    tags: ["Next.js", "Authentication", "Security"],
    featured: false,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "CEO",
    company: "Tech Startup",
    image: "/testimonials/john.jpg",
    text: "Hasnain delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise exceeded our expectations.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Digital Agency",
    image: "/testimonials/sarah.jpg",
    text: "Working with Hasnain was a great experience. He understood our requirements perfectly and delivered a beautiful, functional application.",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Founder",
    company: "SaaS Company",
    image: "/testimonials/michael.jpg",
    text: "Highly professional and skilled developer. Hasnain helped us build our MVP in record time with excellent code quality.",
  },
];

export const uses = {
  hardware: [
    {
      name: "Laptop",
      description: "Primary development machine",
    },
    {
      name: "External Monitor",
      description: "For extended workspace",
    },
    {
      name: "Mechanical Keyboard",
      description: "Better typing experience",
    },
    {
      name: "Wireless Mouse",
      description: "Ergonomic for long coding sessions",
    },
  ],
  software: [
    {
      name: "VS Code",
      description: "Primary code editor",
    },
    {
      name: "Windows Terminal / Warp",
      description: "Terminal emulator",
    },
    {
      name: "Chrome / Arc",
      description: "Browser for development",
    },
    {
      name: "Figma",
      description: "Design and prototyping",
    },
    {
      name: "Notion",
      description: "Notes and project management",
    },
    {
      name: "Postman",
      description: "API testing",
    },
    {
      name: "GitHub Desktop",
      description: "Git GUI client",
    },
  ],
  vscodeSetup: [
    {
      name: "Theme",
      description: "One Dark Pro / GitHub Dark",
    },
    {
      name: "Font",
      description: "JetBrains Mono with ligatures",
    },
    {
      name: "Icons",
      description: "Material Icon Theme",
    },
    {
      name: "Key Extensions",
      description: "ESLint, Prettier, Tailwind Intellisense, GitLens",
    },
  ],
};