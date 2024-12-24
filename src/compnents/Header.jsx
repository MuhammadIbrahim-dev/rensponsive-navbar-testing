import React from "react";
import { FaBars } from "react-icons/fa";
import {
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="fixed w-full h-24  bg-white">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <a href="/">
          <h2>logo</h2>
        </a>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex gap-2">
            <li className="mr-8">
              <a
                href="/"
                className="text-xl uppercase hover:border-b-4 hover:border-red-300"
              >
                <Link to={'/'}>Home</Link> 
              </a>
            </li>
            <li className="mr-8">
              <a
                href="/"
                className="text-xl uppercase hover:border-b-4 hover:border-red-300"
              >
                <Link to={'/about'}>About</Link> 
              </a>
            </li>
            <li className="mr-8">
              <a
                href="/"
                className="text-xl uppercase hover:border-b-4 hover:border-red-300"
              >
               <Link to={'/contact'}>Contact</Link> 
              </a>
            </li>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <FaBars size={25} />
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed right-0 top-0 w-48 h-screen bg-white p-10 ease-in-out duration-500 "
            : "fixed right-[-100%] top-0 w-48  h-screen bg-white p-10 ease-in-out duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <ul className="flex flex-col gap-9 mt-10 ">
          <li>
            <a
              href="/"
              onClick={() => setNav(false)}
              className="text-xl uppercase hover:border-b-4 hover:border-red-300"
            >
              <Link to={'/'}> Home</Link>
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={() => setNav(false)}
              className="text-xl uppercase hover:border-b-4 hover:border-red-300"
            >
              <Link to={'/about'}> About</Link>
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={() => setNav(false)}
              className="text-xl uppercase hover:border-b-4 hover:border-red-300"
            >
             <Link to={'/contact'}>  Contact</Link> 
            </a>
          </li>
        </ul>
        <div className="flex flex-row justify-between pt-20 items-center">
          <a href="/">
            <AiOutlineInstagram size={25} className="cursor-pointer" />
          </a>
          <a href="/">
            <AiOutlineFacebook size={25} className="cursor-pointer" />
          </a>
          <a href="/">
            <AiOutlineTwitter size={25} className="cursor-pointer" />
          </a>
        </div>
        <h1>logo</h1>
      </div>
    </nav>
  );
}

export default Header;
