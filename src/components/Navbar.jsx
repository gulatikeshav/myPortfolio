import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const baseLink =
    "text-gray-700  hover:underline hover:text-blue-600  transition font-medium";

  const activeLink = "text-blue-600  font-semibold underline";

  return (
    <nav className="flex items-center gap-6 text-lg">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${baseLink} ${activeLink}` : baseLink
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive ? `${baseLink} ${activeLink}` : baseLink
        }
      >
        Blogs
      </NavLink>

      <a
        href="https://github.com/gulatikeshav"
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseLink} `}
      >
        GitHub
      </a>
    </nav>
  );
};

export default Navbar;
