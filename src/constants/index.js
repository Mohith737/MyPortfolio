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
    mobile,
    mongodb,
    mysql,
    nextjs,
    nodejs,
    prisma,
    python,
    reactjs,
    redux,
    spring,
    springboot,
    tailwind,
    threejs,
    tripguide,
    typescript,
    web
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

const experiences = [];

const activities = [];

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
  {
    name: "Meeting Summarizer",
    description:
      "An NLP-powered meeting summarizer that extracts action items and produces concise meeting notes from audio/transcript inputs.",
    tags: [
      { name: "NLP", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "ML", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Mohith737/Meeting-Summarizer",
  },
];

export { activities, experiences, projects, services, technologies };

