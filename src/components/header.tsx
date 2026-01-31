"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { useTheme } from "@/context/themeContext";
import SocialMedia from "./socialMedia";
import MenuItems from "@/constants/menu";
import Link from "next/link";
const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const { theme } = useTheme();

  const Menu = () => {
    return MenuItems.map((menu, index) => {
      return (
        <Link href={menu.link} key={menu.link}>
          <span
            className={`${
              index % 2 !== 0 ? "sm:hidden lg:block" : ""
            }  dark:text-white sm:dark:text-white sm:text-black`}
          >
            {menu.title}
          </span>
        </Link>
      );
    });
  };
  const handleScroll = () => {
    setIsActive(false);
  };

  useEffect(() => {
    if (isActive) {
      window.addEventListener("scroll", handleScroll);
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
      window.removeEventListener("scroll", handleScroll);
    }
  }, [isActive]);
  return (
    <header
      id="portfolio"
      className="dark:border-b-0 border-b-1 dark:bg-black-shadow-200"
    >
      <div className="flex justify-between sm:grid sm:grid-cols-2 h-14 sm:h-20 items-center container mx-auto px-4 sm:px-8">
        <h1 className="font-bold text-sky-500 sm:text-2xl">Mitesh Patel</h1>
        <div className="sm:flex gap-4 xl:gap-12 hidden justify-end">
          <Menu />
        </div>
        <div className="sm:hidden flex justify-end">
          {!isActive ? (
            <div onClick={() => setIsActive(true)}>
              <AiOutlineMenu
                size={20}
                color={theme === "light" ? "black" : "white"}
              />
            </div>
          ) : (
            <div onClick={() => setIsActive(false)}>
              <MdCancel
                size={22}
                color={theme === "light" ? "black" : "white"}
              />
            </div>
          )}
          <div
            className={`${
              !isActive ? "left-[-100%]" : "left-0 flex-col flex"
            } p-4 bg-gray-100 dark:bg-black-shadow-200 absolute top-14 gap-4 items-center z-20 duration-500 h-screen w-full overflow-hidden`}
          >
            <Menu />
            <div className="flex gap-3 absolute bottom-[70px]">
              <SocialMedia size={35} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
