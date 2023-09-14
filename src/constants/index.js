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
    contalem,
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
      title: "React",
      icon: mobile,
    },
    {
      title: "SpringBoot",
      icon: backend,
    },
    {
      title: "SQL",
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
      title: "Departamento Fiscal",
      company_name: "Contalem",
      icon: contalem,
      iconBg: "#fff",
      date: "Abril 2021 - Maio 2022",
      points: [
        "Comecei minha carreira em um escritório de contabilidade, onde cuidei da parte fiscal e emissão de certificados digitais para várias empresas. Lá, aprimorei habilidades em lidar com documentos, questões legais e contribuí para o sucesso de empresas, garantindo conformidade fiscal e legal. A experiência foi essencial para meu desenvolvimento profissional e estabelecimento de base sólida para minha carreira.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "TopSoft Informática",
      icon: topsoft,
      iconBg: "#E6DEDD",
      date: "Mai 2022 - Jun 2023",
      points: [
        "Criei e mantive uma variedade de sistemas desktop e web de alta qualidade. Com expertise em tecnologias como Java, SpringBoot, JavaScript/TypeScript, NodeJS, ReactJS e NextJS, liderei implementação eficiente e aprimoramento de soluções inovadoras. Colaborei de forma proativa para satisfazer as demandas dos clientes e proporcionar experiências excepcionais aos usuários."
      ],
    },
    {
      title: "Web Developer",
      company_name: "Captar Agrobusiness",
      icon: captar,
      iconBg: "#E6DEDD",
      date: "Jun 2023 - Presente",
      points: [
          "Java",
          "SpringBoot",
          "JavaScript",
          "React.js",
          "SQLServer",
          "Docker",
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