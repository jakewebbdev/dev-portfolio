import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/logos/jw-empty-bacground-white.svg";

const Landing = () => {
  return (
    <section id="landing">
      <div className="h-screen flex items-center justify-center">
        <div className="space-y-2 md:container md:mx-auto px-4">
          <p className="text-6xl text-center text-white">Welcome!</p>
          <p className="text-2xl text-white text-center">
            My name is{" "}
            <span className="text-utorange font-semibold">Jake Webb</span>, I am
            a software engineer.
          </p>
          <div className="flex items-center justify-center pt-6">
            <Link
              to="/projects"
              className="border-2 rounded border-smokey px-6 py-2 inline-block align-middle text-white hover:border-utorange transition duration-500 ease-in-out hover:bg-gray-600"
            >
              <span>View some of my projects!</span>
              <span className="pl-4 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="white"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-2 left-2">
          <Link to="/about-me">
            <Logo className="h-20 w-20" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
