import React from "react";
import Image from "./Image";

const CodeSnippetSection = ({ subHeading, src, className }) => {
  return (
    <div className="space-y-2 mt-4">
      <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
        {subHeading}
      </h2>
      <Image src={src} className={className} />
    </div>
  );
};

export default CodeSnippetSection;


