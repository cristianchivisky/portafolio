import React from 'react';

const skillsData = [
  {
    category: 'Habilidades Blandas',
    skills: [
      { name: 'Comunicación', icon: '/skillIcons/communication.svg', description: 'Efectiva comunicación verbal y escrita en equipos.' },
      { name: 'Trabajo en equipo', icon: '/skillIcons/teamwork.svg', description: 'Colaboración en equipos multidisciplinarios.' },
      { name: 'Resolución de problemas', icon: '/skillIcons/problem-solving.svg', description: 'Capacidad para encontrar soluciones creativas.' },
      { name: 'Creatividad', icon: '/skillIcons/creativity.svg', description: 'Innovación en el desarrollo de proyectos.' },
      { name: 'Gestión del tiempo', icon: '/skillIcons/time-management.svg', description: 'Eficiencia en la organización y cumplimiento de plazos.' },
      { name: 'Adaptabilidad', icon: '/skillIcons/adaptability.svg', description: 'Flexibilidad ante cambios y nuevos desafíos.' },
      { name: 'Perseverancia', icon: '/skillIcons/perseverance.svg', description: 'Persistencia y dedicación.' },
      { name: 'Seguridad', icon: '/skillIcons/security.svg', description: 'Confiabilidad y compromiso, asegurando estabilidad y cumplimiento de responsabilidades.' },
      { name: 'Pensamiento crítico', icon: '/skillIcons/critical-thinking.svg', description: 'Habilidad para analizar y evaluar información para la toma de decisiones.' },
      { name: 'Empatía', icon: '/skillIcons/empathy.svg', description: 'Capacidad para entender y compartir los sentimientos de los demás.' },
      { name: 'Atención al detalle', icon: '/skillIcons/attention-to-detail.svg', description: 'Capacidad para realizar tareas con precisión y cuidado.' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'ReactJS', icon: '/skillIcons/react.svg', level: 'Avanzado' },
      { name: 'Next.js', icon: '/skillIcons/nextjs.svg', level: 'Intermedio' },
      { name: 'Tailwind CSS', icon: '/skillIcons/tailwindcss.svg', level: 'Avanzado' },
      { name: 'HTML5', icon: '/skillIcons/html5.svg', level: 'Avanzado' },
      { name: 'CSS3', icon: '/skillIcons/css.svg', level: 'Avanzado' },
      { name: 'JavaScript', icon: '/skillIcons/javascript.svg', level: 'Avanzado' },
      { name: 'TypeScript', icon: '/skillIcons/typescript.svg', level: 'Intermedio' },
      { name: 'Bootstrap', icon: '/skillIcons/bootstrap.svg', level: 'Intermedio' },
      { name: 'Webpack', icon: '/skillIcons/webpack.svg', level: 'Intermedio' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: '/skillIcons/nodejs.svg', level: 'Intermedio' },
      { name: 'GraphQL', icon: '/skillIcons/graphql.svg', level: 'Intermedio' },
      { name: 'PostgreSQL', icon: '/skillIcons/postgresql.svg', level: 'Intermedio' },
      { name: 'MongoDB', icon: '/skillIcons/mongoDB.svg', level: 'Intermedio' },
      { name: 'Flask', icon: '/skillIcons/flask.svg', level: 'Intermedio' },
      { name: 'Python', icon: '/skillIcons/python.svg', level: 'Intermedio' },
      { name: 'Java', icon: '/skillIcons/java.svg', level: 'Intermedio' },
      { name: 'Redis', icon: '/skillIcons/redis.svg', level: 'Básico' }, 
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', icon: '/skillIcons/github.svg', level: 'Avanzado' },
      { name: 'Docker', icon: '/skillIcons/docker.svg', level: 'Intermedio' },
      { name: 'Figma', icon: '/skillIcons/figma.svg', level: 'Intermedio' },
      { name: 'Netlify', icon: '/skillIcons/netlify.svg', level: 'Intermedio' },
      { name: 'Postman', icon: '/skillIcons/postman.svg', level: 'Intermedio' },
      { name: 'VSCode', icon: '/skillIcons/vscode.svg', level: 'Avanzado' },
      { name: 'Jira', icon: '/skillIcons/jira.svg', level: 'Intermedio' },
      { name: 'Linux', icon: '/skillIcons/linux.svg', level: 'Intermedio' },
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-container max-w-screen-xl mx-auto px-4 py-4">
      <h2 className="text-center text-3xl font-bold mb-4">Habilidades</h2>
      <p className="text-center mb-8 text-lg">
        A continuación, se presentan mis habilidades agrupadas en diferentes categorías, mostrando las tecnologías y herramientas con las que tengo experiencia.
      </p>
      <div className="space-y-8">
        {skillsData.map((category, index) => (
          <div key={index} className="skills-category p-6 rounded-lg shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
            <ul className="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.skills.map((skill, idx) => (
                <li key={idx} className="text-md flex items-center">
                  <img src={skill.icon} alt={skill.name} width={30} height={30} className="mr-4" />
                  <div>
                    <span className="font-medium">{skill.name}</span>
                    {skill.description && <p className="text-xs">{skill.description}</p>}
                    {skill.level && <p className="text-xs">Nivel: {skill.level}</p>}
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
