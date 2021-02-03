import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/logos/jw-empty-bacground-white.svg";
import { useState, useEffect } from "react";
import { Github, Linkedin } from "@icons-pack/react-simple-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const turnOff = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 10) {
        setIsScroll(false);
      } else {
        setIsScroll(true);
      }
    });
  }, []);

  return (
    <header
      className={
        "border-smokey fixed w-full bg-black " +
        `${isScroll ? "border-b-2" : "border-none"}`
      }
    >
      <div className="md:container md:mx-auto flex justify-between items-center py-2 md:px-6 px-4">
        <div>
          <Link to="/about-me">
            <Logo className="h-12 w-12" />
          </Link>
        </div>
        <div>
          <ul className={`md:flex hidden md:space-x-6 md:static absolute`}>
            <li>
              <NavLink
                to="/about-me"
                activeClassName="text-utorange"
                className="hover:text-utorange text-lg font-bold uppercase focus:outline-none text-white"
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                activeClassName="text-utorange"
                className="hover:text-utorange text-lg font-bold uppercase focus:outline-none text-white"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName="text-utorange"
                className="hover:text-utorange text-lg font-bold uppercase focus:outline-none text-white"
              >
                Contact Me
              </NavLink>
            </li>
            <li className="flex items-center">
              <a href="https://www.linkedin.com/in/jakewebbdev/">
                <Linkedin
                  className="text-white hover:text-utorange"
                  size={18}
                />
              </a>
            </li>
            <li className="flex items-center">
              <a href="https://github.com/jakewebbdev">
                <Github className="text-white hover:text-utorange" size={18} />
              </a>
            </li>
          </ul>
        </div>
        <button
          onClick={handleClick}
          className="block md:hidden focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
          >
            {isOpen && (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            )}
            {!isOpen && (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>
      </div>
      <div class={"w-full md:hidden " + (isOpen ? "block" : "hidden")}>
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NavLink
            to="/about-me"
            activeClassName="text-utorange bg-gray-900 rounded-md"
            className="text-white block px-3 py-2 text-base font-medium hover:text-utorange"
            onClick={turnOff}
          >
            About Me
          </NavLink>
          <NavLink
            to="/projects"
            activeClassName="text-utorange bg-gray-900 rounded-md"
            className="text-white hover:bg-utorange block px-3 py-2 rounded-md text-base font-medium"
            onClick={turnOff}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="text-utorange bg-gray-900 rounded-md"
            className="text-white hover:bg-utorange block px-3 py-2 rounded-md text-base font-medium"
            onClick={turnOff}
          >
            Contact Me
          </NavLink>
          <div className="flex space-x-4 px-3 float-left py-2 pb-4">
            <a href="https://www.linkedin.com/in/jakewebbdev/">
              <Linkedin className="text-white hover:text-utorange" size={18} />
            </a>
            <a href="https://github.com/jakewebbdev">
              <Github className="text-white hover:text-utorange" size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
