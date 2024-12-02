'use client';

import { useState, useEffect } from 'react';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Mostrar botón cuando el usuario hace scroll hacia abajo
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para volver arriba
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    { id: 'about', component: <div className=" min-h-[85vh]"><AboutMe /></div> },
    { id: 'skills', component: <Skills /> },
    { id: 'projects', component: <Projects /> },
    { 
      id: 'contact', 
      component: (
        <div className="text-center px-4">
          <h2 className="text-3xl font-bold mt-4 mb-4">Contact</h2>
          <p className="mb-8 text-lg">
            If you have any questions, project proposals, or simply want to learn more about me, feel free to reach out through the form below. I am always open to new opportunities and collaborations.
          </p>
          <ContactForm />
        </div>
      ),
    },
  ];

  return (
    <div className="p-10 lg:p-20">
      {sections.map(({ id, component }) => (
        <div key={id} id={id} className="flex flex-col items-center justify-between">
          {component}
        </div>
      ))}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 px-2 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          aria-label="Scroll to top"
        >
          <Image
            src={"/aboutMe/flecha-hacia-arriba.png"}
            alt={"Scroll to top"}
            width={24}
            height={24}
            className="w-6 h-6 object-contain filter invert"
          />
        </button>
      )}
    </div>
  );
}
