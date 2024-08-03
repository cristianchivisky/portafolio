// src/components/SocialLink.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SocialLinkProps } from '@/types/socialLinkProps';

const SocialLink: React.FC<SocialLinkProps> = ({ href, imgSrc, alt, text }) => {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-0.5 inline-block border rounded-md flex items-center space-x-0.5 hover:opacity-40 transition-colors duration-300"
        >
            <Image
            src={imgSrc}
            alt={alt}
            className="h-4 w-4 md:h-4 md:w-4 lg:h-5 lg:w-5"
            width={20}
            height={20}
            />
            <span className="text-xs pe-0.5 md:text-xs lg:text-sm hidden md:block">{text}</span>
        </Link>
    );
};

export default SocialLink;
