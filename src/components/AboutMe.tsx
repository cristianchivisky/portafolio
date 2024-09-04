import React from 'react';
import SocialLink from '@/components/SocialLink';
import socialLinksData from '@/data/socialLinksData';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className="about-container flex justify-center items-center py-3 lg:py-8">
      <div className="about-info max-w-8xl mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:space-x-8">
          <Image
            src={"/aboutMe/profile.png"}
            alt={"Mi Foto"}
            className="profile-img h-40 w-40 lg:h-60 lg:w-60 rounded-full border-4 mt-0 lg:mt-4 mb-4 lg:mb-0 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            width={240} 
            height={240} 
          />
          <div className="text-center lg:text-left">
            <p className="text-2xl lg:text-3xl font-bold mb-4">Hello! My name is Cristian.</p>
            <p className="text-sm lg:text-base mb-4">
              I am a passionate developer with experience in both frontend and backend development. I specialize in technologies such as ReactJS, Next.js, Tailwind CSS, Node.js, Flask, GraphQL, and PostgreSQL. I graduated as a Systems Analyst and am currently in my fourth year of pursuing a Bachelor&apos;s degree in Information Systems.
            </p>
            <p className="text-sm lg:text-base mb-4">
              I am always looking for new opportunities to expand my skills and knowledge. My perseverance, responsibility, and teamwork, along with my ability to adapt to different environments and technologies, enable me to contribute effectively in agile and collaborative teams. I am committed to excellence in software development and prepared to face any challenge in the projects I participate in.
            </p>
            <div className="flex space-x-4 justify-center lg:justify-start">
              {socialLinksData.map((link, index) => (
                <SocialLink
                  key={index}
                  href={link.href}
                  imgSrc={link.imgSrc}
                  alt={link.alt}
                  text={link.text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
