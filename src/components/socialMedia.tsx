"use client";
import socialMediaList from "@/constants/socialMedia";
import { useTheme } from "@/context/themeContext";
import Link from "next/link";
import { useEffect } from "react";
interface PropType {
  size: number;
}

const SocialMedia = ({ size }: PropType) => {
  const { theme } = useTheme();
  // const iconColor = theme === "light" ? "black" : "white";
  const iconColor = "#0ea5e9";

  // const handleMouseEvent = (
  //   event: React.MouseEvent<HTMLAnchorElement>,
  //   updatedColor: string
  // ) => {
  //   const element = event.target as HTMLElement;
  //   element.style.color = updatedColor;
  //   const firstChild = element.firstElementChild as HTMLElement;
  //   if (firstChild) {
  //     firstChild.style.color = updatedColor;
  //   }
  // };

  // useEffect(() => {
  //   const elements = document.querySelectorAll("[id='socialMediaIcon']") as any;
  //   // const color = theme === "light" ? "black" : "white";
  //   const color = "#7562E0";
  //   for (let i = 0; i < elements.length; i++) {
  //     elements[i].style.color = color;
  //     elements[i].firstElementChild.style.color = color;
  //   }
  // }, [theme]);

  return socialMediaList.map((item) => {
    const Icon = item.icon;

    return (
      <Link href={item.link} key={item.link} target="_blank">
        <Icon size={size} color={iconColor} id="socialMediaIcon" />
      </Link>
    );
  });
};

export default SocialMedia;
