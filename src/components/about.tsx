"use client";
import React from "react";
import CountUp from "react-countup";

const About = () => {
  return (
    <div id="about" className="py-10">
      <div className="text-sky-500 text-3xl my-4 font-semibold">About me :</div>
      <div
        data-aos="fade-up"
        data-aos-duration={1500}
        className="flex flex-col gap-6"
      >
        <p className="dark:text-white text-lg">
          Hello i&apos;m
          <span className="text-sky-500 font-semibold">
            {" "}
            Mitesh H Patel
          </span>{" "}
          , a passionate Frontend Developer. My journey in the world of web
          development has equipped me with a strong foundation in HTML, CSS, and
          JavaScript, the essential building blocks of the web. I am dedicated
          to staying up-to-date with the latest web technologies and trends to
          ensure that I can create modern, accessible, and performant solutions.
        </p>
        <p className="dark:text-white text-lg">
          In addition to my technical skills, I bring a user-centered approach
          to every project. I believe in the power of great user interfaces to
          enhance user satisfaction and engagement. I work closely with
          designers, backend developers and collaborate effectively with
          cross-functional teams to bring concepts to life seamlessly.
        </p>
        <div className="lg:flex gap-4 items-center">
          <div
            data-aos="zoom-out"
            className="text-sky-500 text-8xl text-center"
          >
            <CountUp end={13} />+
          </div>
          <p className="dark:text-white text-lg">
            Month of experience in the area of web development. My experience
            extends to various frontend frameworks and libraries, such as
            Next.js, React, allowing me to choose the right tool for each
            project&apos;s unique requirements. I&apos;m also proficient in
            optimizing web performance, ensuring fast load times and a smooth
            user experience across different devices and browsers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
