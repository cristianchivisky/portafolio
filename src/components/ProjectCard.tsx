import React from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  deployUrl: string;
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, deployUrl, githubUrl }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="block">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="px-4 py-2">
          <div className="font-semibold text-xl mb-2">{title}</div>
          <p className="text-base">{description}</p>
        </div>
      </div>
      <div className="px-4 py-2 flex justify-start space-x-2">
        {deployUrl && (
          <Link href={deployUrl} target="_blank" rel="noopener noreferrer" >
            <div className="p-0.5 inline-block border rounded-md flex items-center space-x-0.5 hover:opacity-40 transition-colors duration-300">
              <img src={'/skillIcons/deploy.svg'} alt="Deploy Icon" className="h-4 w-4 md:h-4 md:w-4 lg:h-5 lg:w-5" />
            </div>
          </Link>
        )}
        <Link href={githubUrl} target="_blank" rel="noopener noreferrer" >
          <div className="p-0.5 inline-block border rounded-md flex items-center space-x-0.5 hover:opacity-40 transition-colors duration-300">
            <img src={'/skillIcons/github.svg'} alt="GitHub Icon" className="h-4 w-4 md:h-4 md:w-4 lg:h-5 lg:w-5" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
