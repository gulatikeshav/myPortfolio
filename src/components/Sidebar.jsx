import React from "react";
import { Link, useLocation } from "react-router";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

const navItems = [
  { to: "/", label: "Introduction", icon: "🏠" },
  { to: "/about", label: "About", icon: "👤" },
  { to: "/skills", label: "Skills", icon: "🛠️" },
  { to: "/projects", label: "Projects", icon: "📁" },
  { to: "/education", label: "Education", icon: "🎓" },
  { to: "/experience", label: "Experience", icon: "💼" },
  { to: "/contact", label: "Contact", icon: "✉️" },
];

const socialLinks = [
  {
    to: "https://www.linkedin.com/in/keshavgulati/",
    icon: (
      <FaLinkedin className="w-10 h-10 text-[#0A66C2] p-2 bg-white rounded-full shadow-md" />
    ),
    text: "LinkedIn",
  },
  {
    to: "https://github.com/gulatikeshav",
    icon: (
      <FaGithub className="w-10 h-10 text-black p-2 bg-white rounded-full shadow-md" />
    ),
    text: "GitHub",
  },
  {
    to: "https://drive.google.com/file/d/1J1zF_uHZU86xGXK2U-9csjlLhLFvAKup/view?usp=share_link",
    icon: (
      <HiOutlineDocumentArrowDown className=" w-10 h-10 text-green-600 p-2 bg-white rounded-full shadow-md" />
    ),
    text: "Resume",
  },
];


const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 h-full bg-white border-r border-gray-200 p-4 flex flex-col justify-between">
      <nav className="space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;

          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-lg font-medium transition-colors ${
                isActive
                  ? "bg-blue-100 text-blue-800"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom: Social Links */}
      <div className="flex justify-center gap-6 mt-8 mb-4 ">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.to}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex flex-col items-center group"
          >
            {link.icon}
            <span className="absolute bottom-full mb-2 text-sm text-gray-700 bg-white px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">
              {link.text}
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
