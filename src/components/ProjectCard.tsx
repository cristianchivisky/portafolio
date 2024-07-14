import React from 'react';
import Link from 'next/link';

const ProjectCard = ({ title, description, ruta, imagen }: { title: string; description: string; ruta: string; imagen: string }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <Link href={ruta} className="block">
        <img src={imagen} alt={title} className="w-full h-40 object-cover" />
        <div className="px-6 py-4">
            <div className="font-semibold text-xl mb-2">{title}</div>
            <p className="text-base">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
