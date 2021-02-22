import { Github } from "@icons-pack/react-simple-icons";
import portfolioThumbnail from "../images/portfolio1.png";
import imagesSoon from "../images/imagessoon.png";
import wip from "../images/wip.png";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "UTK FAC Bodyfarm Web App",
    github: "na",
    image: imagesSoon,
    path: "/projects/bodyfarm",
  },
  {
    name: "TeamHealth Network Team Web App",
    github: "na",
    image: imagesSoon,
    path: "projects/teamhealth",
  },
  {
    name: "Portfolio",
    github: "https://github.com/jakewebbdev/dev-portfolio",
    image: portfolioThumbnail,
    path: "projects/portfolio",
  },
  {
    name: "More Coming Soon!",
    github: "https://github.com/jakewebbdev/",
    image: wip,
    path: "/projects/coming-soon",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-20 md:container md:mx-auto px-4 md:px-6 pb-2">
        <div className="flex justify-between border-b-2 border-smokey pb-2">
          <h1 className="text-xl md:text-3xl font-semibold text-utorange">
            Projects
          </h1>
        </div>
        <div className="md:grid md:grid-cols-4 md:gap-4 pt-6 flex flex-col space-y-4 md:space-y-0">
          {projects.map((project) => {
            return (
              <div
                className="bg-white rounded flex flex-col border-2 border-white pb-3 space-y-2"
                key={project.name}
              >
                <div className="border-2 border-black rounded">
                  <Link to={project.path}>
                    <img src={project.image} alt="" />
                  </Link>
                </div>
                <div className="flex justify-center text-gray-700">
                  <h1>{project.name}</h1>
                </div>
                <div className="flex px-2">
                  {project.github === "na" ? (
                    <div className="flex flex-row space-x-2">
                      <Github className="text-gray-700" />
                      <h1 className="text-gray-700">
                        Unable to show Source Code
                      </h1>
                    </div>
                  ) : (
                    <a
                      href={project.github}
                      className="flex flex-row space-x-2 hover:text-gray-500"
                    >
                      <Github className="text-gray-700" />
                      {project.name === "More Coming Soon!" ? (
                        <span>Visit my github</span>
                      ) : (
                        <span className="text-gray-700 hover:text-gray-500">
                          Source Code
                        </span>
                      )}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
