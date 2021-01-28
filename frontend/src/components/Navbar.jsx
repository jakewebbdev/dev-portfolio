import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/logos/empty-logo.svg";

const Navbar = () => {
  return (
    <header className="lg:px-16 px-6 bg-white flex flex-wrap items-cetner lg:py-0 py-2">
      <div className="flex-1 flex justify-between items-center">
        <Link to="/about">
          <Logo className="h-16 w-16" />
        </Link>
      </div>
      <div
        className="hidden lg:flex lg:items-center lg:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="lg:flex items-center justify-between text-base text-black pt-4 lg:pt-0">
            <li>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
