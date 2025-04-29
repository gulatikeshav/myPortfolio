import React from "react";
import PageHeader from "../components/pageHeader";
import Image from "../components/Image";
import { PROJECTS } from "../utils/Constants";
import AboutPage from "../components/AboutPage";
import CodeSnippetSection from "../components/CodeSnippetSection";

const Projects = () => {
  return (
    <section className="w-full h-fit p-8 max-w-4xl mx-auto bg-gray-100 rounded-xl shadow-sm">
      {/* Header */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-start flex-wrap gap-4">
        <div className="flex-1 min-w-[300px]">
          <PageHeader
            heading={"Projects"}
            description={
              "Turning ideas into code—some projects are still taking shape!!"
            }
          />

          <AboutPage
            text={`Explore my projects—some born from my own ideas, others built as clones
            of popular apps. Each project highlights my ability to innovate, replicate
            industry-leading functionality, and master new skills along the way.`}
          />
        </div>

        <Image
          src="/projects.png"
          className="md:size-52 w-full rounded-2xl shrink-0"
        />
      </div>

      {/* Projects List */}
      <div className="flex  flex-wrap gap-8  my-10">
        {PROJECTS?.map((project, index) => (
          <div
            key={index}
            className="w-full sm:w-5/12 md:w-5/12 lg:w-100  bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-110 flex flex-col justify-between my-2"
          >
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h2>

              <Image
                src={project.src}
                className="w-full h-48 object-scale-down  rounded-2xl shrink-0 shadow-sm my-4"
              />

              <ul className="text-sm text-gray-600 list-disc  mb-4">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>

              <hr className="my-3" />

              <div className="flex flex-wrap gap-2 mt-2">
                {project.techStack.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Live Demo
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>

      <CodeSnippetSection
        subHeading={`Projects.jsx`}
        src={"/projects-code.png"}
        className={"w-full max-w-2xl  rounded-xl shadow-md"}
      />
    </section>
  );
};

export default Projects;
