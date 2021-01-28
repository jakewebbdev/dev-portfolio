import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section id="landing">
      <div className="h-screen flex items-center justify-center">
        <div className="space-y-2">
          <p className="text-6xl text-center">Welcome!</p>
          <p className="text-2xl">
            My name is{" "}
            <span className="text-lightbrown font-semibold">Jake Webb</span>,
            I'm a Full Stack Web Developer.
          </p>
          <div className="flex items-center justify-center pt-6">
            <Link
              to="/projects"
              className="border-2 rounded border-black px-6 py-2 inline-block align-middle"
            >
              <span>View some of my projects!</span>
              <span className="pl-4 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
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
      </div>
    </section>
  );
};

export default Landing;
