import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/logos/empty-logo-transparent.svg";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
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
        "border-black fixed w-full bg-lightgray " +
        `${isScroll ? "border-b-2" : "border-none"}`
      }
    >
      <div className="container mx-auto flex justify-between items-center py-2">
        <div>
          <Link to="/about">
            <Logo className="h-12 w-12" />
          </Link>
        </div>
        <div>
          <ul
            className={`md:flex ${
              isOpen ? "block" : "hidden"
            } md:justify-between`}
          >
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </div>
        <button onClick={handleClick} className="block md:hidden">
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
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
    </header>
  );
};

export default Navbar;
