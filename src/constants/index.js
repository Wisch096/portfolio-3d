import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    conceito,
    topsoft,
    carrent,
    jobit,
    tripguide,
    threejs,
    captar,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Sobre",
    },
    {
      id: "work",
      title: "Trabalho",
    },
    {
      id: "contact",
      title: "Contato",
    },
  ];
  
  const services = [
    {
      title: "Java",
      icon: web,
    },
    {
      title: "C#",
      icon: mobile,
    },
    {
      title: "Angular",
      icon: backend,
    },
    {
      title: ".NET",
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Desenvolvedor FullStack",
      company_name: "TopSoft Informática",
      icon: topsoft,
      iconBg: "#fff",
      date: "Mai 2022 - Jun 2023",
      points: [
        "Java",
        "SpringBoot",
        "JavaFX",
        "NextJS",
        "ReactJS",
        "NodeJS",      ],
    },
    {
      title: "Desenvolvedor FullStack",
      company_name: "Captar Agrobusiness",
      icon: captar,
      iconBg: "#E6DEDD",
      date: "Jun 2023 - Set 2023",
      points: [
        "C#",
        ".NET",
        "Python",
        "Vue.js",
        "SQLServer",
        "Docker",
    ],
    },
    {
      title: "Desenvolvedor FullStack",
      company_name: "Conceito Tecnologia",
      icon: conceito,
      iconBg: "#E6DEDD",
      date: "Set 2023 - Presente",
      points: [
          "C#",
          ".NET",
          "Angular",
          "TailwindCSS",
          "SQLServer",
          "Docker",
          "Jenkins",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Muito esperto.",
      name: "HOra",
      designation: "CEO",
      company: "TOPSOFT",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "SAbe muito.",
      name: "LUisao",
      designation: "DESIGNER",
      company: "top soft",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };