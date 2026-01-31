"use client";
import React, { useEffect } from "react";
import { BiSolidUser } from "react-icons/bi";
import Button from "./button";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { HiDownload } from "react-icons/hi";

const Hero = () => {
  return (
    <div id="hero" className="my-10">
      <div
        data-aos="zoom-in"
        className="flex flex-col gap-16 lg:grid grid-cols-2 items-center justify-between"
      >
        <div
          data-aos="fade-up"
          data-aos-once={true}
          className="dark:text-white flex flex-col gap-4"
        >
          <div className="text-xl sm:text-3xl"> Hello, i&apos;m</div>
          <div className="text-3xl sm:text-4xl xl:text-[52px] font-semibold text-sky-500">
            <Typewriter
              options={{
                strings: ["Mitesh Patel", "Full Stack Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="text-lg">
            A passionate Full Stackc Developer with a keen eye for crafting
            engaging and user-friendly web experiences. I thrive on the art of
            turning ideas and designs into interactive, responsive, and visually
            stunning websites and web applications.
          </p>
          <div className="mt-3 flex gap-4 sm:gap-8 text-xs sm:text-base">
            <Link href="#about">
              <Button styleClass="bg-primary" type="button">
                <span className="flex items-center gap-1 sm:gap-3">
                  About me <BiSolidUser />
                </span>
              </Button>
            </Link>
            <Link
              href="resumem.pdf"
              download="Mitesh Patel Resume"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border-sky-500  border-2 px-4 transform transition duration-500 hover:scale-110"
            >
              Download CV
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </Link>
          </div>
        </div>
       {/* 1. Container Fix: Use aspect-square and consistent sizing */}
<div className="flex justify-center lg:justify-end items-center">
  <div className="relative overflow-hidden rounded-full border-4 border-sky-500/20 shadow-2xl transform transition duration-500 hover:scale-105 size-64 sm:size-80 lg:size-[400px]">
    <img
      src="/images/potfoliom.png"
      alt="profile"
      // 2. Image Fix: object-cover is mandatory for perfect circles
      className="h-full w-full object-cover"
    />
  </div>
</div>
      </div>
    </div>
  );
};

export default Hero;
