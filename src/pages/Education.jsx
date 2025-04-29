import React from "react";
import { EDUCATIONS } from "../utils/Constants";
import PageHeader from "../components/PageHeader";
import AboutPage from "../components/AboutPage";
import Image from "../components/Image";
import CodeSnippetSection from "../components/CodeSnippetSection";

const Education = () => {
  return (
    <section className="w-full h-fit px-8 py-3 max-w-4xl m-auto text-justify  bg-gray-100  text-gray-900  rounded-xl shadow-md space-y-8">
      <div className=" flex flex-col-reverse md:flex-row gap-2 justify-between items-center  w-full">
        <div className="w-full md:w-7/12">
          <PageHeader
            heading={"Education"}
            description={`Education laid the foundation, but real growth happened in the
              code editor.!!`}
          />

          <AboutPage
            text={` I'm pursuing a Bachelor's in Computer Science Engineering (CSE)
              from Chandigarh Group of Colleges, Landran, where I've built a
              strong foundation in computer science and software engineering.`}
          />
        </div>

        <Image
          src="/education-img.jpg"
          alt="education"
          className={"md:size-52 w-full  rounded-2xl  shrink-0"}
        />
      </div>

      {/* Timeline of Education */}
      <div className="space-y-8">
        {EDUCATIONS?.map((education, index) => (
          <div
            key={index}
            className="relative border-l-4 border-blue-600 pl-6 pb-6 hover:bg-blue-100 rounded-lg"
          >
            <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-blue-600 border-4 border-white " />
            <h3 className=" md:text-xl font-semibold text-gray-800 ">
              {education.course}
            </h3>
            <span className="text-sm text-gray-500  italic">
              {education.duration}
            </span>
          </div>
        ))}
      </div>

      <CodeSnippetSection
        subHeading={`Education.jsx`}
        src={"/education-code.png"}
        className={"w-full max-w-2xl rounded-xl shadow-md"}
      />
    </section>
  );
};

export default Education;
