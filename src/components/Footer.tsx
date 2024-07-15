import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center px-8  lg:px-10">
        <hr className="my-2 sm:mx-auto " />
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <p className="block text-sm sm:text-center ">© 2024 | Creado por Cristian Chivisky.</p>
          <ul className="flex flex-wrap items-center mt-3 text-sm justify-center font-medium sm:mt-0">
            <li>
                <a href="https://www.linkedin.com/in/cristian-chivisky-3186aa242/" className="hover:underline me-4 md:me-6">Linkedin</a>
            </li>
            <li>
                <a href="https://github.com/cristianchivisky" className="hover:underline me-4 md:me-6">Github</a>
            </li>
            <li>
                <a href="mailto:cristian.chivisky@gmail.com" className="hover:underline me-4 md:me-6">Email</a>
            </li>
            <li>
                <a href="/aboutMe/cristian-chivisky.pdf" download="cristian-chivisky.pdf" className="hover:underline">Currículum</a>
            </li>
            
        </ul>
        </div>
    </footer>
  );
}

export default Footer;