import React from "react";

const AboutPage = ({ text }) => {
  return (
    <p className="text-xs  md:text-lg leading-relaxed text-gray-400  md:max-w-3xl text-justify w-12/12">
      {text}
    </p>
  );
};

export default AboutPage;

