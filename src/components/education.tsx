"use client";
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { educations } from "@/constants/education";
import { useTheme } from "@/context/themeContext";
import TimelineElement from "./timelineElement";
const Education = () => {
  const { theme } = useTheme();

  return (
    <div id="education" className="my-10">
      <div className="text-sky-500 text-3xl my-4 font-semibold">
        Education :
      </div>
      <VerticalTimeline lineColor={theme === "light" ? "black" : "white"}>
        {educations.map((item, index) => {
          const Icon = item.icon;
          return <TimelineElement key={index} item={item} Icon={Icon} />;
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
