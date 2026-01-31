"use client";
import About from "@/components/about";
// import Contact from "@/components/contact";
import DarkLightButton from "@/components/darkLightButton";
import Education from "@/components/education";
import Hero from "@/components/hero";
import SoftSkills from "@/components/softSkills";
import TechnicalSkills from "@/components/technicalSkills";
// Importing AOS CSS for animations
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Experience from "@/components/experience";
const Landing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <main>
      <div>
        <Hero />
        <About />
        <TechnicalSkills />
        <SoftSkills />
        <Education />
        <Experience />
        {/* <Contact /> */}
      </div>
      <DarkLightButton />
    </main>
  );
};

export default Landing;
