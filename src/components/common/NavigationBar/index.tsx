'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { LuHome, LuPersonStanding, LuGithub, LuBriefcase, LuMail } from 'react-icons/lu';

import './styles.css';

export default function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-0 left-0 w-full flex justify-center">
      <div
        className={`w-1/2 py-4 px-16 max-md:w-3/4 max-md:px-8 bg-gray-200 bg-opacity-20 backdrop-blur-md ring-1 ring-gray-200 transition-all duration-800
        ${isScrolled ? 'rounded-b-3xl mt-0' : 'rounded-full mt-6'}`}
      >
        <div className="flex items-center justify-between max-md:justify-evenly gap-4">
          <Link
            href="/"
            className="nav-item-link "
          >
            <LuPersonStanding /> <span className="block max-md:hidden">About</span>
          </Link>
          <Link
            href="/"
            className="nav-item-link"
          >
            <LuGithub /> <span className="block max-md:hidden">Github</span>
          </Link>
          <Link
            href="/"
            className="nav-item-icon-only"
          >
            <LuHome />
          </Link>
          <Link
            href="/"
            className="nav-item-link"
          >
            <LuBriefcase /> <span className="block max-md:hidden">Works</span>
          </Link>
          <Link
            href="/"
            className="nav-item-link"
          >
            <LuMail /> <span className="block max-md:hidden">Contact</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
