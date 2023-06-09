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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Full-Stack Developer",
      icon: backend,
    },
    {
      title: "Spring Developer",
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
        "Minha primeira experiência profissional foi em um escritório de contabilidade, onde eu trabalhei como responsável pela parte fiscal de diversas empresas, além de fazer certificados digitais. Nesse trabalho, eu pude aprimorar minhas habilidades em lidar com documentos e questões legais, além de me familiarizar com o ambiente de trabalho em uma empresa. Aprendi muito sobre organização e responsabilidade, e pude contribuir para o sucesso de muitas empresas, ajudando a garantir a conformidade fiscal e legal de seus negócios. Essa experiência foi fundamental para o meu desenvolvimento profissional e me ajudou a estabelecer uma base sólida para minha carreira futura..",
      ],
    },
    {
      title: "HelpDesk T.I",
      company_name: "TopSoft Informática",
      icon: topsoft,
      iconBg: "#E6DEDD",
      date: "Maio 2021 - Out 2022",
      points: [
        "Decidi mudar minha área de atuação e comecei a me interessar por tecnologia. Foi aí que comecei a estudar sobre desenvolvimento de software e, por indicação de um amigo que já atuava nessa área, descobri uma empresa especializada em desenvolvimento de software comerciais em minha cidade natal.",

        "Mesmo sem ter muita experiência técnica, fui contratado como técnico helpdesk, pois a empresa valorizava minha vontade de aprender e minha paixão pela tecnologia. Durante meu tempo lá, trabalhei duro para aprender e crescer na empresa, participando de treinamentos e projetos, para aprimorar minhas habilidades técnicas e ganhar mais experiência em desenvolvimento de software.",
    
      "Foi uma experiência enriquecedora e desafiadora, mas estou grato por ter tido a oportunidade de aprender e crescer profissionalmente naquela empresa. Acredito que essa experiência me ajudou a desenvolver habilidades valiosas em tecnologia e me preparou para desafios futuros na área de desenvolvimento de software.",
     ],
    },
    {
      title: "Full stack Developer",
      company_name: "TopSoft Informática",
      icon: topsoft,
      iconBg: "#E6DEDD",
      date: "Out 2022 - Presente",
      points: [
        "Após trabalhar como técnico de helpdesk na TopSoft Informática, finalmente realizei minha transição para o cargo de desenvolvedor de software. Hoje em dia, tenho a oportunidade de trabalhar no desenvolvimento de novos aplicativos e também na manutenção de sistemas antigos da empresa.",

        "Como desenvolvedor de software, sou responsável por desenvolver soluções personalizadas para nossos clientes, trabalhando em estreita colaboração com outros membros da equipe de desenvolvimento para garantir que nossos aplicativos sejam eficientes, seguros e fáceis de usar. Meu trabalho envolve lidar com diversas linguagens de programação e plataformas tecnológicas para criar soluções que atendam às necessidades específicas de nossos clientes.",
        
        "Além disso, também sou responsável por ajudar a manter sistemas legados da empresa, garantindo que esses sistemas continuem operando com segurança e eficiência. Isso inclui a identificação e correção de problemas de software e a implementação de atualizações para garantir que nossos sistemas estejam sempre funcionando de maneira ideal.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
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