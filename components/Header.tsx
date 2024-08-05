"use client";

import React, { useState } from "react";
import { NAV_LINKS } from "../constants";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="w-full flex -mt[20px] justify-between items-center py-6 px-[5%]  navbar">
      <div className="flex items-center">
        <img src="/logo.png" alt="logo" className="w-10 h-10 mr-1" />
        <p>Cyphorix</p>
      </div>
      <div>
        <ul className="hidden h-full gap-12 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className="regular-16 text-gray-50 flexcenter pb-1.5 transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <Image
            src={isMenuOpen ? "/close.svg" : "/menu.svg"}
            alt={isMenuOpen ? "close" : "menu"}
            width={32}
            height={32}
            className="inline-block cursor-pointer"
            onClick={toggleMenu}
          />
          {isMenuOpen && (
            <div className="p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10">
              <ul className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className="regular-16 text-white flexcenter transition-all hover:font-bold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
