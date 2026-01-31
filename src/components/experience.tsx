import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="py-10">
      <div className="text-sky-500 text-3xl my-4 font-semibold">
        Experience :
      </div>
      <div className="lg:grid grid-cols-2 gap-32 mt-12" data-aos="zoom-in">
        <div className="relative w-full h-full overflow-hidden rounded-xl">
          <img
            src="/images/experience.jpg"
            alt="laptop"
            className="rounded-xl w-full h-full hover:scale-125 lg:absolute duration-500"
          />
        </div>
        <div className="dark:text-white mt-12 lg:mt-0">
          <div className="font-bold text-2xl leading-10">
            Techstaunch Solution - Frontend Next.js Developer (1.5 Year
            +)
          </div>
          <p className="text-base my-4">
            As a Frontend Developer at Techstaunch Solution, I specialized in{" "}
            <span className="text-sky-500">Vue.js </span> and{" "}
            <span className="text-sky-500">Reactjs </span>
            development, contributing to a range of web projects. My
            responsibilities included designing and implementing user
            interfaces,Create reusable common components also enhancing site performance, and ensuring an optimal user
            experience.
          </p>
          <p className="text-base">
            Successfully completed several frontend projects,Improved website
            responsiveness and load times, resulting in a 30% decrease in bounce
            rates. Implemented efficient coding practices, leading to faster
            development cycles and reduced debugging time
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
