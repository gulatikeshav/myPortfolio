import React, { useState } from "react";
import { Link } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import Navbar from "./Navbar";
import Modal from "./Modal";

const mobileLinks = [
  { label: "Intro", to: "/" },
  { label: "About Me", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Skills & Tools", to: "/skills" },
  { label: "Experience", to: "/experience" },
  { label: "Education", to: "/education" },
  { label: "Contact", to: "/contact" },
  { label: "Blog", to: "/blog" },
];

const Header = ({ toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative flex justify-between items-center w-full h-16 px-6 bg-white shadow-sm border-b border-gray-200 transition-colors z-50">
      {/* Logo */}
      <Link to="/" className="block z-50">
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src="/logo_name.png"
            alt="logo-name"
            className="h-8 w-36 object-contain"
          />
          <img
            src="/logo-spec.png"
            alt="logo-glasses"
            className="h-6 w-12 object-contain"
          />
        </div>
      </Link>

      {/* Hamburger menu */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden z-50"
        aria-label="Toggle menu"
      >
        <RxHamburgerMenu size={28} className="text-gray-800" />
      </button>

      {/* Desktop navbar */}
      <div className="hidden md:flex  items-center gap-4">
        <Modal />
        <Navbar />
      </div>

      {/* Fullscreen mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-start p-6 pt-16 gap-6 overflow-y-auto ">
          {mobileLinks.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg w-full border-b border-gray-200 pb-2 font-medium hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
          <p className=" text-center w-full text-gray-400 text-sm">
            — End of the menu —
          </p>
        </div>
      )}
    </header>
  );
};

export default Header;
