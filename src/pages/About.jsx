import React from "react";
import CodeSnippetSection from "../components/CodeSnippetSection";
import AboutPage from "../components/AboutPage";
import Image from "../components/Image";
import PageHeader from "../components/pageHeader";

const About = () => {
  return (
    <section className="w-full h-fit p-8 max-w-4xl bg-gray-100   rounded-xl shadow-md space-y-12 m-auto text-justify">
      <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-6 flex-1">
          <PageHeader
            heading={"About Keshav"}
            description={
              "I turn caffeine and curiosity into clean, functional code!!"
            }
          />

          <div className="space-y-4">
            <AboutPage
              text={`I'm a Frontend Developer passionate about crafting
              high-performance, responsive web applications. I specialize in
              HTML5, CSS3, JavaScript, and React, always aiming to write clean,
              efficient code that delivers seamless experiences across devices.
              Staying curious and up-to-date is part of the job I love.`}
            />
            <AboutPage
              text={` My focus lies in creating scalable and maintainable applications
            that align with user needs and business objectives. Whether I'm
            optimizing performance or debugging for smoother interaction, I
            thrive in collaborative environments that push great ideas forward.`}
            />
            {/* <p className="text-lg leading-relaxed  "> */}
          </div>
        </div>

        <Image
          src={"/about-img.jpg"}
          // className={"size-52 rounded-2xl shrink-0"}
          className="md:size-64 w-full  object-cover rounded-2xl shrink-0 shadow-sm"
        />
      </div>

      <CodeSnippetSection
        subHeading={"AboutMe.jsx"}
        src={"/about-code.png"}
        alt={"Screenshot of AboutMe.jsx code"}
        className={"w-full max-w-2xl rounded-xl h-auto shadow-md"}
      />
    </section>
  );
};

export default About;

