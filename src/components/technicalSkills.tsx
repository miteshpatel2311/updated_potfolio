"use client";
import React, { useState } from "react";
import { technicalSkills } from "@/constants/skills";
import Link from "next/link";
import Image from "next/image";

const TechnicalSkills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(100);
  return (
    <div id="technicalSkills" className="py-10">
      <div className="text-sky-500 text-3xl my-4 font-semibold">
        Technical skills :
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 ml-[-12px] sm:ml-0">
        {technicalSkills.map((item, index) => {
          const vue = item.title === "vueJs" ? "pt-4" : "";
          const react = item.title === "react" ? "px-3" : "";
          const hoverOpacity =
            index === hoveredIndex || hoveredIndex === 100
              ? "opacity-100"
              : "opacity-40";
          const scale = index === hoveredIndex ? "scale-125" : "";
          return (
            <Link
              data-aos="flip-up"
              href={item.link}
              key={item.link}
              className="m-2"
              target="_blank"
            >
              <Image
                src={item.icon}
                height={100}
                width={100}
                alt={item.title}
                className={`${vue} ${react} ${hoverOpacity} ${scale} p-4 m-2 rounded-full border-2 border-sky-500 overflow-visible  hover:rotate-360 ease-in-out duration-700 hover:ease-in`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(100)}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TechnicalSkills;
