import React from 'react';
import Link from 'next/link';
import links from '@/data/links';

const Footer = () => {
  return (
    <footer className="text-center px-8  lg:px-10">
        <hr className="my-2 sm:mx-auto " />
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <p className="block text-sm sm:text-center ">© 2024 | Creado por Cristian Chivisky.</p>
          <ul className="flex flex-wrap items-center mt-3 text-sm justify-center font-medium sm:mt-0">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="hover:underline mx-2 md:mx-3"
                  download={link.download ? link.download : undefined}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
    </footer>
  );
}

export default Footer;