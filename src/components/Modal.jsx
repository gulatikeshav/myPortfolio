import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { SUGGESTED_LINKS, SUGGESTIONS_LIST } from "../utils/Constants";

const Modal = () => {
  const [userQuery, setUserQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const inputRef = useRef(null);

  const handleClose = (e) => {
    if (e.key === "Escape") {
      setIsModalOpen(false);
      setUserQuery("");
    }
  };

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalOpen(false);
      setUserQuery("");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleClose);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleClose);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredSections = SUGGESTIONS_LIST.filter((item) =>
    item.page.toLowerCase().includes(userQuery.toLowerCase())
  );

  const filteredLinks = SUGGESTED_LINKS.filter((item) =>
    item.label.toLowerCase().includes(userQuery.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search sections..."
        onFocus={() => setIsModalOpen(true)}
        className="w-1/2 max-w-md px-4 py-2 rounded-full bg-gray-100 text-gray-800 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        readOnly
        aria-label="Search sections"
      />

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-80 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white w-full max-w-md md:max-w-3xl lg:max-w-4xl rounded-2xl shadow-xl p-6 relative mx-4"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-7 right-12 text-gray-400 hover:text-black text-2xl"
              aria-label="Close search modal"
            >
              &times;
            </button>

            <input
              ref={inputRef}
              type="text"
              placeholder="Search sections..."
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              className="border w-full rounded-xl px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
              aria-label="Search sections"
            />

            {filteredLinks.length > 0 && (
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2 text-gray-500">
                  Links
                </h3>
                <ul className="space-y-2">
                  {filteredLinks.map((item, idx) => (
                    <Link to={item.to} key={idx}>
                      <li
                        onClick={() => setIsModalOpen(false)}
                        className="flex items-center space-x-2 hover:bg-gray-200 p-2 cursor-pointer rounded-2xl"
                      >
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}

            {filteredSections.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold mb-2 text-gray-500">
                  Sections
                </h3>

                <ul className="space-y-2 flex flex-col">
                  {filteredSections.map((item, idx) => (
                    <li
                      key={idx}
                      className="hover:bg-gray-200 rounded-2xl flex items-center space-x-3"
                    >
                      <Link
                        to={item.to}
                        className="flex items-center space-x-3 cursor-pointer p-2 transition"
                      >
                        <input
                          id={`radio-${idx}`}
                          type="radio"
                          name="section"
                          className="form-radio text-blue-600 h-4 w-4 cursor-pointer"
                        />
                        <label
                          htmlFor={`radio-${idx}`}
                          onClick={() => setIsModalOpen(false)}
                          className="cursor-pointer"
                        >
                          {item.page}
                        </label>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {filteredLinks.length === 0 && filteredSections.length === 0 && (
              <p className="text-sm text-gray-400">No results found.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
