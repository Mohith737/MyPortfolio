import {
    backend,
    carrent,
    creator,
    css,
    docker,
    figma,
    firebase,
    git,
    Hibernate,
    html,
    java,
    javascript,
    jobit,
    meta,
    mobile,
    mongodb,
    mysql,
    nextjs,
    nodejs,
    prisma,
    python,
    reactjs,
    redux,
    shopify,
    spring,
    springboot,
    starbucks,
    tailwind,
    tesla,
    threejs,
    tripguide,
    typescript,
    web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web & Java Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI Optimization & Design",
    icon: mobile,
  },
  {
    title: "Digital Content Strategy & Communications",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "TypeScript",
    icon: typescript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "Three JS",
    icon: threejs,
  },

  {
    name: "mysql",
    icon: mysql,
  },
  
  {
    name: "docker",
    icon: docker,
  },

  {
    name: "Java",
    icon: java,
  },

  {
    name: "springboot",
    icon: springboot,
  },

  {
    name: "python",
    icon: python,
  },

  {
    name: "nextjs",
    icon: nextjs,
  },

  {
    name: "git",
    icon: git,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "prisma",
    icon: prisma,
  },
  
  {
    name: "firebase",
    icon: firebase,
  },

  {
    name: "Hibernate",
    icon: Hibernate,
  },

  {
    name: "spring",
    icon: spring,
  },

  {
    name: "figma",
    icon: figma,
  },
  

];

const experiences = [
  {
    title: "Full-Stack Developer Intern → Development Lead",
    company_name: "Prayana Electric",
    icon: starbucks,
    iconBg: "#383E56",
    date: "October 2024 - April 2025",
   points: [
  "Built and maintained scalable web apps with React.js, Node.js, and MongoDB.",
  "Synced hardware updates with web features via close IoT and other team collaboration.",
  "Optimized UI with Tailwind CSS for responsive, cross-device experience.",
  "Managed GitHub and MongoDB workflows, cutting deployment bugs by 25–30%.",
]
  },
  {
    title: "React.js Developer (Frontend Focus)",
    company_name: "Shiksha Sathi",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Feb 2025 – May 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Student Coordinator(Head) → Intern",
    company_name: "VIT-AP University",
    icon: shopify,
    iconBg: "#383E56",
    date: " September 2022 – July 2025",
   points: [
  "Led a 90-member student team overseeing VIT-AP’s official social media presence, driving content strategy and audience engagement.",
  "Independently managed platforms like LinkedIn, Instagram, and others, growing total followers by over 150% during my tenure.",
  "Formulated and executed marketing campaigns to enhance brand visibility, increase reach, and boost user interaction.",
  "Directed event coverage and produced branded media content, ensuring timely delivery aligned with the university’s voice and goals.",
]
  },
  {
    title:" Freelance Full-Stack Developer",
    company_name: "Cyrisq UK Ltd",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Nov 2024 – Present",
    points: [
  "Developed and maintained full-stack client platforms using React.js, Node.js, and MongoDB, ensuring responsive and high-performance web solutions.",
  "Managed multiple freelance projects, architecting scalable systems and integrating APIs and databases to enhance functionality and reliability.",
  "Delivered production-ready code with consistent, on-time deployments, resulting in strong client satisfaction and repeat collaborations.",
]
  },
];

const activities = [
  {
    role: "President",
    organization: "Kalki Personality Development Club",
    points: [
  "Led a 200+ member club, organizing 15+ events to boost student confidence and communication.",
  "Launched Mirror Hour and SpeakUp Arena to promote self-expression across campus.",
  "Built a leadership model and represented the club at university forums for recognition and growth.",
]
  },
  {
    role: "Club Manager",
    organization: "Photography Club & Chaitra Telugu Association",
    points: [
  "Managed 10+ major events per club, ensuring flawless execution, logistics, and media coordination.",
  "Led creative direction for themed visuals and storytelling, enhancing audience engagement.",
  "Preserved cultural identity and built a media archive by mentoring juniors and collaborating on heritage events.",
],
  },
   {
    role: "Core Organizer",
    organization: "VTAPP (Technical Fest) & VITOPIA (Cultural Fest)",
    points: [
  "Led 30-member teams for 2 years to deliver high-impact university fests.",
  "Handled full-scale planning and logistics for seamless large events.",
  "Acted as a key organizing bridge, aligning student-led creativity with faculty objectives for cohesive and outcome-driven events.",
],
   }
];

const projects = [
  {
    name: "Snack Squad App",
    description:
      "Developed an intuitive food delivery Android app implementing dynamic components, MVVM architecture, and local SQLite storage to improve responsiveness and reliability.",
    tags: [
      { name: "Kotlin", color: "blue-text-gradient" },
      { name: "SQLite", color: "green-text-gradient" },
      { name: "MVVM", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/Mohith737/snack-squad",
  },
  {
    name: "Online Sports Booking Website",
    description:
      "Built a responsive sports booking website with efficient database management and reservation flows using PHP and MySQL.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "PHP", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/Mohith737/sports-booking",
  },
  {
    name: "Chat App — Realtime Messaging",
    description:
      "Real-time chat application using Socket.IO and a MERN stack backend to enable instant messaging with a modern responsive UI.",
    tags: [
      { name: "MERN", color: "blue-text-gradient" },
      { name: "Socket.IO", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Mohith737/chat-app",
  },
  {
    name: "Fake News Detection System",
    description:
      "Machine learning pipeline that classifies news articles using NLP preprocessing and TF-IDF features, achieving ~92% accuracy.",
    tags: [
      { name: "NLP", color: "blue-text-gradient" },
      { name: "TF-IDF", color: "green-text-gradient" },
      { name: "ML", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/Mohith737/fake-news",
  },
  {
    name: "Quiz Application",
    description:
      "Desktop quiz application with a user-friendly interface built using Java Swing and AWT, focused on robust event handling and responsive interactions.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "Swing", color: "green-text-gradient" },
      { name: "AWT", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/Mohith737/quiz-app",
  },
];

export { activities, experiences, projects, services, technologies };

