'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="px-6 fixed top-0 left-0 w-full shadow-md z-50 backdrop-blur-xl">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-wrap items-center justify-between">
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-70} // Ajusta este valor según la altura de tu navbar
          duration={500}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src={"/aboutMe/logo-ch.svg"}
            alt={"logo"}
            className="h-8 w-8 md:h-8 md:w-8 lg:h-10 lg:w-10 object-contain rounded-full border"
            width={40}
            height={40}
          />
        </ScrollLink>
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-8 h-8 md:w-10 md:h-10 justify-center text-sm rounded-lg border md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-4 h-4 md:w-5 md:h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`w-full md:flex md:w-auto  ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 shadow-2xl rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 border-white border-2">
            <li>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeMenu}
                className="block py-2 px-3 rounded md:border-0 md:p-0 hover:opacity-40"
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                  className="block py-2 px-3 rounded md:border-0 md:p-0 hover:opacity-40"
                >
                  Skills
                </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeMenu}
                className="block py-2 px-3 rounded md:border-0 md:p-0 hover:opacity-40"
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeMenu}
                className="block py-2 px-3 rounded md:border-0 md:p-0 hover:opacity-40"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
