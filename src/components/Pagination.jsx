import React from "react";
import { Link, useLocation } from "react-router";

const Pagination = () => {
  const location = useLocation();

  // Define your page names and paths together
  const PAGES = [
    { name: "Introduction", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  // Get the current page index by matching path
  const currentIndex = PAGES.findIndex(
    (page) =>
      page.path === location.pathname ||
      (location.pathname === "/" && page.path === "/")
  );

  // Get previous and next page (with wrap around)
  const prevIndex = (currentIndex - 1 + PAGES.length) % PAGES.length;
  const nextIndex = (currentIndex + 1) % PAGES.length;

  const prevPage = PAGES[prevIndex];
  const nextPage = PAGES[nextIndex];

  return (
    <div
      style={{
        marginTop: "2rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link to={prevPage.path}>← {prevPage.name}</Link>

      <Link to={nextPage.path}>{nextPage.name} →</Link>
    </div>
  );
};

export default Pagination;
