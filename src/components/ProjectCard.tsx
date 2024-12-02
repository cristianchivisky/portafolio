import React from 'react';
import Link from 'next/link';
import { ProjectCardProps } from '@/types/projectCardProps';
import Image from 'next/image';

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, deployUrl, githubUrl }) => {
  const cardLink = deployUrl || githubUrl;

  return (
    <div className="max-w-sm sm:max-w-full rounded-lg overflow-hidden shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-2xl border-white border-2">
      <Link href={cardLink || '#'} target="_blank" rel="noopener noreferrer">
        <div className="block">
          <Image
            src={image}
            alt={title}
            layout="responsive"
            width={500}
            height={300}
            className="w-full h-full object-cover"
          />
          <div className="px-4 py-2">
            <div className="font-semibold text-xl mb-2">{title}</div>
            <p className="text-base">{description}</p>
          </div>
        </div>
      </Link>
      <div className="px-4 py-2 flex justify-start space-x-2">
        {deployUrl && (
          <Link href={deployUrl} target="_blank" rel="noopener noreferrer" >
            <div className="p-0.5 inline-block border rounded-md flex items-center space-x-0.5 hover:opacity-40 transition-colors duration-300">
              <Image
                src={'/skillIcons/deploy.svg'}
                alt={"Deploy Icon"}
                width={16}
                height={16}
                className="h-4 w-4 md:h-4 md:w-4 lg:h-5 lg:w-5"
              />
            </div>
          </Link>
        )}
        <Link href={githubUrl} target="_blank" rel="noopener noreferrer" >
          <div className="p-0.5 inline-block border rounded-md flex items-center space-x-0.5 hover:opacity-40 transition-colors duration-300">
            <Image
              src={'/skillIcons/github.svg'}
              alt={"GitHub Icon"}
              width={16}
              height={16}
              className="h-4 w-4 md:h-4 md:w-4 lg:h-5 lg:w-5"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
