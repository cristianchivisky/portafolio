import React from 'react';
import Link from 'next/link';

const AboutMe = () => {
  return (
    <div className="about-container flex justify-center items-center py-3 lg:py-8">
      <div className="about-info max-w-8xl mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:space-x-8">
          <img src={"/aboutMe/profile.png"} alt="Mi Foto" className="profile-img h-40 w-40 lg:h-60 lg:w-60 rounded-full border-4 mb-4 lg:mb-0 transform transition duration-300 hover:scale-105 hover:shadow-2xl" />
          <div className="text-center lg:text-left">
            <p className="text-2xl lg:text-3xl font-bold mb-4">¡Hola! Soy Cristian.</p>
            <p className="text-sm lg:text-base mb-4">
              Soy un desarrollador apasionado con experiencia tanto en frontend como en backend.
              Me especializo en tecnologías como ReactJS, Next.js, Tailwind CSS, Node.js, Express y PostgreSQL.
              Actualmente, trabajo como profesional independiente, colaborando en diversos proyectos para
              crear interfaces de usuario atractivas y APIs robustas. Mi enfoque se centra en el diseño de
              experiencias de usuario intuitivas y funcionales, combinando mi conocimiento técnico con
              habilidades sólidas en UX/UI.
            </p>
            <p className="text-sm lg:text-base mb-4">
              Soy un aprendiz apasionado, siempre buscando oportunidades para expandir mis habilidades
              y conocimientos. Mi capacidad para adaptarme rápidamente a nuevos entornos y tecnologías
              me permite contribuir de manera efectiva en equipos ágiles y colaborativos. Estoy comprometido
              con la excelencia en el desarrollo de software y preparado para afrontar nuevos desafíos
              en cualquier proyecto en el que participe.
            </p>
            <div className="flex space-x-4 justify-center lg:justify-start">
              <Link
                href="https://www.linkedin.com/in/cristian-chivisky-3186aa242/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-0.5 inline-block border rounded-md flex items-center space-x-0.5 hover:opacity-40 transition-colors duration-300"
              >
                <img src={"/aboutMe/linkedin.svg"} alt="LinkedIn" className="h-4 w-4 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                <span className="text-xs md:text-xs lg:text-sm hidden md:block">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/cristianchivisky"
                target="_blank"
                rel="noopener noreferrer"
                className="p-0.5 inline-block border rounded-md flex items-center space-x-0.5 hover:opacity-40 transition-colors duration-300"
              >
                <img src={"/aboutMe/github.svg"} alt="GitHub" className="h-4 w-4 md:h-4 md:w-4 lg:h-5 lg:w-5 " />
                <span className="text-xs md:text-xs lg:text-sm hidden md:block">GitHub</span>
              </Link>
              <Link
                href="/aboutMe/cristian-chivisky.pdf" download="cristian-chivisky.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-0.5 inline-block border rounded-md flex items-center space-x-0.5 hover:opacity-40 transition-colors duration-300"
              >
                <img src={"/aboutMe/pdf.svg"} alt="Curriculum" className="h-4 w-4 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                <span className="text-xs md:text-xs lg:text-sm hidden md:block">Curriculum</span>
              </Link>
              <Link
                href="mailto:cristian.chivisky@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-0.5 inline-block border rounded-md flex items-center space-x-0.5 hover:opacity-40 transition-colors duration-300"
              >
                <img src={"/aboutMe/correo.svg"} alt="Email" className="h-4 w-4 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                <span className="text-xs md:text-xs lg:text-sm hidden md:block">Correo</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
