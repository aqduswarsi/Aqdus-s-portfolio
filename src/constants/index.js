import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from "../assets";

// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";
import gyanvi from "../assets/company/gyanvi.png";

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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Gyanvi Digital",
    icon: gyanvi,
    iconBg: "#383E56",
    date: "Aug 2025 - Present",
    points: [
      "Developing responsive and scalable web applications using React.js, Next.js, JavaScript, and Tailwind CSS.",
      "Building and maintaining client websites with a strong focus on performance, accessibility, and user experience.",
      "Creating reusable UI components and integrating REST APIs for dynamic and interactive applications.",
      "Working on real-world projects including educational platforms, business websites, and portfolio applications.",
      "Collaborating with developers using Git and GitHub while following modern development practices.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Aqdus proved me wrong.",
    name: "Mohd Waquar Khan",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Aqdus does.",
    name: "Mohd Zahid Khan",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Aqdus optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Saiyad Saquib Haider",
    image: thirdTestimonial,
  },
];

import resumeBuilder from "../assets/projects/resume-builder.png";
import latencyVisualizer from "../assets/projects/latency-visualizer.png";
import unit27 from "../assets/projects/unit27.png";

const projects = [
  {
    name: "Plainscript Resume Builder",

    description:
      "A free online resume builder developed with Next.js and TypeScript. Users can create, customize, preview and export professional resumes as PDF directly from the browser. Features responsive design, modern UI and real-time resume editing.",
    tags: [
      {
        name: "nextjs",

        color: "blue-text-gradient",
      },

      {
        name: "typescript",

        color: "green-text-gradient",
      },

      {
        name: "tailwindcss",

        color: "pink-text-gradient",
      },
    ],

    image: resumeBuilder,

    source_code_link:
      "https://github.com/aqduswarsi/plainscript-resume-builder",

    live_demo_link: "https://plainscript-resume-builder.vercel.app/",
  },

  {
    name: "Latency Topology Visualizer",

    description:
      "Interactive 3D globe visualization platform built with React Three Fiber and Three.js. Displays exchange server locations, network routes and latency analytics with real-time visualization, provider filtering and performance insights.",

    tags: [
      {
        name: "threejs",

        color: "blue-text-gradient",
      },

      {
        name: "react-three-fiber",

        color: "green-text-gradient",
      },

      {
        name: "nextjs",

        color: "pink-text-gradient",
      },
    ],

    image: latencyVisualizer,

    source_code_link: "https://github.com/aqduswarsi/latency-visualizer",

    live_demo_link: "https://latency-visualizer-sigma.vercel.app/",
  },

  {
    name: "Unit 27",

    description:
      "Premium fashion eCommerce website developed for a denim brand using React, Tailwind CSS and Framer Motion. Features responsive layouts, modern product showcases, smooth animations, optimized performance, mobile-first design and an engaging shopping experience.",

    tags: [
      {
        name: "reactjs",

        color: "blue-text-gradient",
      },

      {
        name: "tailwindcss",

        color: "green-text-gradient",
      },

      {
        name: "framer-motion",

        color: "pink-text-gradient",
      },
    ],

    image: unit27,

    source_code_link: "https://github.com/aqduswarsi/Unit27",

    live_demo_link: "https://unit27.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
