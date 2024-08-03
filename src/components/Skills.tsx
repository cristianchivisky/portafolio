import React from 'react';
import skillsData from '@/data/skillsData';
import { Skill, SkillCategory } from '@/types/skillTypes';
import Image from 'next/image';

const Skills = () => {
  return (
    <div className="skills-container max-w-screen-xl mx-auto px-4 py-4">
      <h2 className="text-center text-3xl font-bold mb-4">Habilidades</h2>
      <p className="text-center mb-8 text-lg">
        A continuación, se presentan mis habilidades agrupadas en diferentes categorías, mostrando las tecnologías y herramientas con las que tengo experiencia.
      </p>
      <div className="space-y-8">
        {skillsData.map((category: SkillCategory, index: number) => (
          <div key={index} className="skills-category p-6 rounded-lg shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
            <ul className="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.skills.map((skill: Skill, idx: number) => (
                <li key={idx} className="text-md flex items-center">
                  <Image 
                    src={skill.icon} 
                    alt={skill.name} 
                    width={30} 
                    height={30} 
                    className="mr-4" 
                  />
                  <div>
                    <span className="font-medium">{skill.name}</span>
                    {skill.description && <p className="text-xs">{skill.description}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
