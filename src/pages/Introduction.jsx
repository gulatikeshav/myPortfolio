import React from "react";
import PageHeader from "../components/PageHeader";
import AboutPage from "../components/AboutPage";
import CodeSnippetSection from "../components/CodeSnippetSection";
import Image from "../components/Image";

const Introduction = () => {
  return (
    <section className="w-full h-fit p-8 max-w-4xl m-auto bg-gray-100   rounded-xl shadow-sm">

      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-2">
        
        <div className="">
          <PageHeader
            heading={"Keshav Gulati"}
            description={"Can transform your thoughts into code!!"}
          />

          <AboutPage
            text={` A passionate Frontend Developer focused on building clean, efficient,
          and high-performance web applications. I specialize in HTML, CSS,
          JavaScript, and React.js — aiming to create seamless user experiences
          across all devices!`}
          />
        </div>

        <Image
          src={"/introImg.jpg"}
          className={"w-full  md:size-52 rounded-2xl shrink-0"}
        />


      </div>

      <CodeSnippetSection
        subHeading={`Welcome.jsx`}
        src={"/introCode.png"}
        className={"w-full max-w-xl rounded-xl shadow-md"}
      />

    </section>
  );
};

export default Introduction;

