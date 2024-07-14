import React from 'react';

const SkillIcon = ({ icon, name }: {icon: string; name: string}) => {
  return (
    <div>
      <h2 className='text-center text-3xl mb-4'>Habilidades</h2>
      <div className="flex space-x-4">
        <SkillIcon icon="/python.png" name="Python" />
        <SkillIcon icon="/java.png" name="Java" />
        {/* Agrega más SkillIcons según necesites */}
      </div>
    </div>
    <div className="skill-icon">
      <img src={icon} alt={name} className="w-12 h-12" />
      <span>{name}</span>
    </div>
  );
}

export default SkillIcon;
