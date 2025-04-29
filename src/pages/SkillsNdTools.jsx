import React from "react";
import { SKILLS } from "../utils/Constants";
import CodeSnippetSection from "../components/CodeSnippetSection";
import PageHeader from "../components/PageHeader";
import AboutPage from "../components/AboutPage";
import Image from "../components/Image";

const SkillsNdTools = () => {
  return (
    <section className="w-full h-fit max-w-4xl mx-auto text-justify p-8 bg-gray-100  text-gray-900 rounded-xl shadow-md space-y-10">
      <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-2 ">
        <div className="">
          <PageHeader
            heading={"Skills & Tools"}
            description={`Here's what I use to build fast, functional, and scalable web
              apps.!!`}
          />

          <AboutPage
            text={`These skills are honed through real-world projects—solving problems,
            breaking stuff, and building better. From UI to functionality, this
            is what powers my process.`}
          />
        </div>

        <Image
          src="/skills.png"
          className={"md:size-52 w-full  rounded-2xl  shrink-0"}
        />
      </div>

      {/* Skill Grid */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {SKILLS?.map(({ icon: Icon, skill }, index) => (
          <div
            key={index}
            className="flex flex-col justify-center  items-center space-y-2 p-4 bg-white  rounded-lg shadow-md hover:scale-105"
          >
            <span className="text-2xl md:text-4xl text-blue-600 ">
              <Icon />
            </span>
            <span className=" md:text-lg font-medium text-gray-900 ">
              {skill}
            </span>
          </div>
        ))}
      </div>

      <CodeSnippetSection
        subHeading={`Skills.jsx`}
        src="skills-code.png"
        alt="Code snippet showing skills component"
        className="w-full max-w-2xl rounded-xl shadow-md"
      />
    </section>
  );
};

export default SkillsNdTools;
