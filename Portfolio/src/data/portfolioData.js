// ============================================================
// portfolioData.js — Centralized configuration for Suman Kumar's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Suman Kumar",
  firstName: "Suman",
  brandName: "Suman Kumar",
  title: "AI-Native Software Engineer",
  location: "Dhanbad, India",
  phone: "+91-9153867819",
  emails: {
    primary: "sumanvas5242@gmail.com",
    secondary: "",
  },
  summary:
    "ECE undergraduate at BIT Sindri, passionate about staying ahead of emerging tech—agentic AI, RAG, LangChain, LangGraph, MCP. Built a C++ vector database from scratch and led platforms serving 500+ members. Eager to bring curiosity and first-principles rigor to an AI-native engineering role.",
  resumeUrl: "/Suman_Kumar_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/SumanVaishkiyar",
  linkedin: "https://www.linkedin.com/in/suman-kumar-a2644427b",
  instagram: "#",
};

export const heroContent = {
  greeting: "Hi, I'm Suman Kumar",
  titleHighlight: "AI-Native Software Engineer",
  subtitle:
    "I build robust AI applications, RAG pipelines, and high-performance vector databases from scratch.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:sumanvas5242@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Suman,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Suman_Kumar_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Suman Kumar</span>, an ECE undergraduate at BIT Sindri, passionate about building emerging tech—from Agentic AI and RAG pipelines to high-performance C++ vector databases.`,
  techStack: ["C++", "Python", "AI & Machine Learning"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust AI and full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by exploring emerging tech and academic papers, deeply understanding algorithms, AI frameworks, and system constraints.",
    },
    {
      number: "02",
      title: "Design",
      text: "Architecting clean, modular systems and low-level data structures (like HNSW and KD-Trees) that scale perfectly.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building high-performance backends and AI-native applications using C++, Python, and modern web tech stacks.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Deploying robust applications with REST APIs, ensuring high availability, performance optimization, and seamless user experiences.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "PHP", level: 75 },
        { name: "SQL (MySQL)", level: 85 }
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "RAG Pipelines", level: 85 },
        { name: "Ollama / Llama 3.2", level: 80 },
        { name: "LangChain & LangGraph", level: 75 },
        { name: "Agentic AI", level: 80 }
      ]
    },
    {
      title: "Web & Backend",
      skills: [
        { name: "REST APIs", level: 85 },
        { name: "HTML5 & CSS3", level: 90 },
        { name: "Vector Databases", level: 85 }
      ]
    },
    {
      title: "Computer Science Concepts",
      skills: [
        { name: "Data Structures & Algorithms", level: 95 },
        { name: "Object-Oriented Programming", level: 90 },
        { name: "DBMS", level: 85 },
        { name: "Operating Systems", level: 80 }
      ]
    },
    {
      title: "Tools & Environment",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 }
      ]
    }
  ]
};

// Extracurriculars & Leadership Data (Replaces Content Creation)
export const contentCreation = {
  badge: "Beyond Coding",
  heading: "Extracurriculars & Leadership",
  description: "I actively participate in technical communities, competitive programming, and hackathons.",
  categories: [
    {
      title: "Competitive Programming",
      description: "Solved 300+ problems on LeetCode and GeeksforGeeks, covering a broad range of DSA topics and paradigms.",
      stats: "300+ DSA Problems",
      icon: "💻"
    },
    {
      title: "Club Leadership",
      description: "Placement Coordinator, Secretary, and Technical Head at GRS Club, BIT Sindri. Organized college-wide events.",
      stats: "500+ Members",
      icon: "👑"
    },
    {
      title: "Hackathons",
      description: "Runner-up in college Hackathon and 2nd Runner-up in PLACE-COM Mock GD, demonstrating rapid prototyping skills.",
      stats: "Multiple Wins",
      icon: "🏆"
    },
    {
      title: "Sports",
      description: "Represented at the National Basketball (1x) and Regional (3x) levels, building strong teamwork and discipline.",
      stats: "National Level",
      icon: "🏀"
    }
  ]
};

// Leadership Data
export const leadershipList = [
  {
    title: "GRS Club, BIT Sindri",
    description: "Placement Coordinator | Secretary and Technical Head for a club with 500+ members. Organized multiple college-wide technical and cultural events.",
    role: "Secretary & Tech Head",
    badge: "Leadership"
  },
  {
    title: "College Hackathon",
    description: "Participated and secured Runner-up position by building innovative solutions under time constraints.",
    role: "Runner-up",
    badge: "Innovation"
  },
  {
    title: "PLACE-COM Mock GD",
    description: "Secured 2nd Runner-up position, showcasing strong communication and problem-solving articulation.",
    role: "2nd Runner-up",
    badge: "Public Speaking"
  },
  {
    title: "National Basketball",
    description: "Participated in National (1x) and Regional (3x) level basketball tournaments.",
    role: "Athlete",
    badge: "Sports"
  }
];

// Internships Data
export const internshipsList = [
  {
    organization: "ONGC (Oil and Natural Gas Corporation)",
    role: "Communication & Process Monitoring Trainee",
    duration: "Winter 2025",
    skills: ["SCADA/PLC", "Industrial Protocols", "Data Integrity", "Technical Documentation"],
    tech: ["SCADA", "PLC", "Telemetry Systems"]
  },
  {
    organization: "Ministry of Electronics & IT (with IIT ISM)",
    role: "UAS Bootcamp Trainee",
    duration: "2024",
    skills: ["Hardware Integration", "Autonomous Flight", "Sensor Telemetry", "Team Leadership"],
    tech: ["Hexacopter UAS", "Sensors", "Calibration"]
  }
];

// Soft Skills Data
export const softSkillsList = [
  { name: "Leadership", icon: "👑", desc: "Guiding teams, managing club operations for 500+ members, and organizing major events." },
  { name: "Problem Solving", icon: "🧩", desc: "Applying first-principles rigor to solve complex algorithmic problems and architecting systems." },
  { name: "Team Collaboration", icon: "🤝", desc: "Working seamlessly in teams, whether leading hardware integration or playing national basketball." },
  { name: "Communication", icon: "💬", desc: "Articulating technical workflows, drafting protocol reports, and excelling in group discussions." },
  { name: "Adaptability", icon: "🌟", desc: "Quickly learning and applying emerging technologies like AI, RAG, and LangGraph." },
  { name: "Curiosity", icon: "🔍", desc: "Constantly exploring the depths of computer science and building complex tools from scratch." }
];

export const projects = [
  {
    id: "astrovector",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "AstroVector Engine",
    description:
      "Architected a high-performance vector database from scratch using HNSW and KD-Tree indexing, achieving sub-millisecond semantic search at scale. Engineered an offline RAG pipeline with a custom REST API and a locally-hosted LLM (Llama 3.2 via Ollama), serving a real-time 2D PCA visualization dashboard.",
    techTags: [
      "C++",
      "REST API",
      "Ollama",
      "Llama 3.2",
      "PCA",
      "HNSW",
      "KD-Tree",
    ],
    links: {
      github: "https://github.com/SumanVaishkiyar",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "grs-club",
    number: "02",
    badge: null,
    title: "Official GRS Club Website",
    description:
      "Designed a normalized MySQL schema for 500+ member registrations and automated event-data pipelines, cutting manual data-entry workload by 40%. Delivered a responsive UI featuring event galleries and member portfolios, and enforced code-review workflows.",
    techTags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    links: {
      github: "https://github.com/SumanVaishkiyar",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Machine Learning Specialization",
      issuer: "DeepLearning.AI & Stanford University",
      icon: "🧠",
    },
    {
      name: "UAS Bootcamp Certification",
      issuer: "Ministry of Electronics & IT",
      icon: "🚁",
    },
    {
      name: "Industrial Training",
      issuer: "ONGC",
      icon: "🏭",
    }
  ],
  viewAllUrl: "#",
};

export const education = {
  degree: "B.Tech in Electronics & Communication Engineering",
  institution: "BIT Sindri",
  cgpa: "7.8",
  graduation: "2027",
  twelfth: "Class XII (Intermediate) – 89.4%",
  tenth: "Kendriya Vidyalaya, Chandrapura",
};

export const footerContent = {
  taglines: [
    "AI-Native Software Engineering",
    "C++ · Python · Vector Databases",
    "RAG Pipelines & Agentic AI",
  ],
  credential: "B.Tech ECE · CGPA 7.8",
  copyright: `© ${new Date().getFullYear()} Suman Kumar | Built with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
