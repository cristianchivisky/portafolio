import React from 'react';
import SocialLink from '@/components/SocialLink';
import socialLinksData from '@/data/socialLinksData';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className="about-container flex justify-center items-center py-3 lg:py-8">
      <div className="about-info max-w-8xl mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:space-x-8">
          <Image
            src={"/aboutMe/profile.png"}
            alt={"Mi Foto"}
            className="profile-img h-40 w-40 lg:h-60 lg:w-60 rounded-full border-4 mb-4 lg:mb-0 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            width={240} 
            height={240} 
          />
          <div className="text-center lg:text-left">
            <p className="text-2xl lg:text-3xl font-bold mb-4">¡Hola! Mi nombre es Cristian.</p>
            <p className="text-sm lg:text-base mb-4">
              Soy un desarrollador entusiasta con experiencia en frontend y backend. Me especializo en tecnologías como ReactJS, Next.js, Tailwind CSS, Node.js, Flask, GraphQL y PostgreSQL. Me gradué como Analista de Sistemas y actualmente estoy cursando el cuarto año de la Licenciatura en Sistemas de Información.
            </p>
            <p className="text-sm lg:text-base mb-4">
              Siempre busco nuevas oportunidades para expandir mis habilidades y conocimientos. Mi capacidad para adaptarme a diferentes entornos y tecnologías me permite contribuir de manera efectiva en equipos ágiles y colaborativos. Estoy comprometido con la excelencia en el desarrollo de software y preparado para enfrentar cualquier desafío en los proyectos en los que participe.
            </p>
            <div className="flex space-x-4 justify-center lg:justify-start">
              {socialLinksData.map((link, index) => (
                <SocialLink
                  key={index}
                  href={link.href}
                  imgSrc={link.imgSrc}
                  alt={link.alt}
                  text={link.text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
