"use client";
import React from "react";
import { softSkills } from "@/constants/skills";
import { useTheme } from "@/context/themeContext";
import dynamic from "next/dynamic";
const ScrollCarouselComponent = dynamic(
  () => import("@/components/scrollCarousol"),
  { ssr: false }
);

const SoftSkills = () => {
  const { theme } = useTheme();
  const iconColor = theme === "light" ? "black" : "white";
  return (
    <div id="softSkills" className="mb-28 w-full scroll-mt-28 text-center sm:mb-40">
      <div className="text-sky-500 text-3xl mb-10 font-semibold">
        Soft skills :
      </div>
      <div className="w-full overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-sky-500 scrollbar-track-transparent">
      <ScrollCarouselComponent>
        <ul className="flex flex-nowrap gap-8 w-max px-4"> 
        {softSkills.map((item, index) => {
          
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-lg p-8 border-3 border-sky-500 bg-transparent flex flex-col w-96 gap-2 scroll-carousel-slider"
            >
              <Icon size={35} color={iconColor} id="icons" />
              <div
                className={
                  index % 2 === 0 ? "!text-sky-500" : "dark:text-white"
                }
                text-xl
              >
                {item.title}
              </div>
              <p className="dark:text-white text-sm">{item.description}</p>
            </div>
          );
        })}
        </ul>
      </ScrollCarouselComponent>
      </div>
    </div>
  );
};

export default SoftSkills;
