import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className="projects-container max-w-screen-xl mx-auto px-4 py-4">
      <h2 className='text-center text-3xl font-bold mb-4'>Proyectos</h2>
      <p className="text-center mb-8 text-lg">
        Aquí encontrarás una selección de mis proyectos, demostrando mis habilidades y experiencia en el desarrollo de software. Cada proyecto incluye una descripción detallada y un enlace para explorar más a fondo.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
        <ProjectCard title="Aerolab Challenger" description="iption=Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit felis eu sem rhoncus dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit felis eu sem rhoncus dapibus." ruta="https://neon-pothos-fb29a1.netlify.app/" imagen="/imgProjects/aerolab.png" />
        <ProjectCard title="Nombre del Proyecto 2" description="Descripción del Proyecto 2" ruta="/" imagen=""/>
        <ProjectCard title="Nombre del Proyecto 3" description="Descripción del Proyecto 3" ruta="/" imagen=""/>

      </div>
    </div>
  );
}

export default Projects;