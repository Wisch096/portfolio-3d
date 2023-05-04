import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


const ServiceCard =({ index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >

        </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Visão Geral.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Tenho utilizado tecnologias de ponta para entregar soluções personalizadas e eficazes aos nossos clientes. Minha experiência em desenvolvimento web com Spring Boot e React.js, as duas principais tecnologias da minha stack e que utilizo diariamente, me permite criar aplicativos escaláveis e seguros em um ambiente dinâmico e em constante mudança.
        Além disso, tenho conhecimentos em outras tecnologias importantes, como o Next.js, que utilizei para desenvolver sites com ótimo desempenho e geração de conteúdo no lado do servidor. 
        Também possuo conhecimentos em outras tecnologias como Vue.js para a criação de interfaces de usuário modernas e escaláveis, Node.js para o desenvolvimento de APIs, e habilidades em desenvolvimento de programas desktop com JavaFX. Além disso, utilizo o banco de dados PostgreSQL no meu dia a dia.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default About