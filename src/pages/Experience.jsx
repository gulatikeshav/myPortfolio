import React from "react";
import Image from "../components/Image";
const Experience = () => {
  return (
    <section className="flex flex-col h-fit  w-10/12   m-auto items-center  gap-8 pt-12 pb-4 px-4 bg-gradient-to-r from-blue-400 to-indigo-800 rounded-lg shadow-lg">

      <h1 className="text-2xl md:text-5xl font-semibold text-white text-center">
        Experience
      </h1>
      <p className="text-lg md:text-2xl text-gray-200 text-center italic ">
        "You need experience to get the job and the job is where you gain that
        experience."
      </p>

      <Image
        src="/experience-img2.png"
        alt="experience-image"
        className="w-44 md:w-5/12 md:h-8/12 object-fit rounded-2xl shrink-0 shadow-sm "
      />
    </section>
  );
};

export default Experience;
