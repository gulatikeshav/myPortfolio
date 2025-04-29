import React from "react";

const PageHeader = ({ heading, description }) => {
  return (
    <div className="mb-8 space-y-4">
      <h1 className="text-2xl  md:text-4xl font-bold tracking-tight text-gray-900">
        {heading}
      </h1>
      <p className="text-gray-500 font-bold text-sm md:text-lg">

        <em>{description}</em>{" "}
      </p>
    </div>
  );
};

export default PageHeader;

