import React from "react";

const Image = ({ src, className }) => {
  return <img src={src} alt="page-image" className={`${className} border`} />;
};

export default Image;
