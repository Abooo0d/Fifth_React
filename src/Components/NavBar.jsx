import React from "react";
import { useState } from "react";
import { logo, menu, close } from "./../assets";
import { navLinks } from "../constants";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="Hoo Bank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white 
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="Menu"
          className="w-[28px] h-[28px] object-contain transition-all"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-center flex-1 flex-col">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white 
                ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
