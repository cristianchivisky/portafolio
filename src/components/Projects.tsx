import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '@/data/projectsData';

const Projects = () => {
  return (
    <div className="projects-container max-w-screen-xl mx-auto px-4 py-4">
      <h2 className='text-center text-3xl font-bold mb-4'>Projects</h2>
      <p className="text-center mb-8 text-lg">
        Here you will find a selection of my projects, each including a description and links to explore further.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
      {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            deployUrl={project.deployUrl}
            image={project.image}
            githubUrl={project.githubUrl}

          />
        ))}
      </div>
    </div>
  );
}

export default Projects;