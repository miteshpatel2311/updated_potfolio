"use client";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { useTheme } from "@/context/themeContext";

const DarkLightButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className="bg-sky-500 cursor-pointer p-2 rounded-full fixed right-0 bottom-0 mr-7 mb-7 z-10"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <MdDarkMode color="white" />
      ) : (
        <BsSunFill color="white" />
      )}
    </div>
  );
};

export default DarkLightButton;
