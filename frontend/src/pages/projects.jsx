import { Github } from "@icons-pack/react-simple-icons";
import bodyfarm from "../images/bodyfarm.png";
import imagesSoon from "../images/imagessoon.png";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    name: "UTK FAC Bodyfarm Web App",
    image: bodyfarm,
    path: "/projects/bodyfarm",
    description:
      "A better way for researchers at the University of Tennessee's Forensic Anthropology Center to view and keep track of their data. Allows for them to view more accurate data due to validation and work faster with better optimization.",
    techstack: [
      "React",
      "Nest.js",
      "Express.js",
      "Swagger",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    links: [
      {
        github: "a",
      },
      {
        external: "sdakjf;lasdjfa;s",
      },
    ],
  },
  {
    name: "TeamHealth Network Team Web App",
    image: imagesSoon,
    path: "projects/teamhealth",
    description:
      "An internal tool for tracking equipment, costs, and metrics accross the breadth of TeamHealth's network team. This allows for more analyization of the metrics acquired from the network team.",
    techstack: [
      "React",
      "Node.js",
      "Express.js",
      "Swagger",
      "Tailwind CSS",
      "MongoDB",
    ],
    links: [
      {
        github: "",
        website: "",
      },
    ],
  },
];

const otherProjects = [
  {
    name: "Design Portfolio",
    description:
      "A personal website to hold house all of my projects and experience.",
    techStack: ["React", "Tailwind CSS", "Firebase"],
    links: [
      { github: "https://github.com/jakewebbdev/dev-portfolio" },
      { external: "https://jakewebb.dev" },
    ],
  },
  {
    name: "Bruno CLI - A C++ project management tool",
    description:
      "A tool to help developers and teams maintain a consistent project structure for a medium size C++ application.",
    techStack: ["Open CLI", "VS Code"],
    links: [{ github: "https://github.com/Project-Bruno/bruno-cli" }],
  },
  {
    name: "What you don't learn with a CS Degree",
    description:
      "A running idea for a blog that discusses and introduces developer tools and software principles not discussed in a standard CS degree.",
    techStack: [],
    links: [],
  },
  {
    name: "More coming soon!",
    description: "Checkout my github to see if I'm working on anything new!",
    techStack: [],
    links: [{ github: "https://github.com/jakewebbdev/" }],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen page">
      <div className="pt-20 md:container md:mx-auto px-4 md:px-6 pb-2">
        <div className="flex justify-between border-b-2 border-smokey pb-2">
          <h1 className="text-xl md:text-5xl font-semibold text-utorange">
            Experience
          </h1>
        </div>
        <div>
          <h2 className="text-3xl text-gray-100 mt-4 text-center align-middle">
            Featured Projects
          </h2>
          <ul className="lg:px-20">
            {featuredProjects.map((project) => {
              return (
                <li
                  className="grid grid-cols-1 xl:grid-cols-12 grid-rows-1 items-center gap-4 bg-gray-600 my-8 py-4 px-4 rounded-lg shadow-xl"
                  key={project.name}
                >
                  <div className="xl:col-start-7 xl:col-end-13 xl:row-start-1 xl:row-end-1 text-right relative">
                    <div>
                      <p className="text-utorange text-lg mb-4">
                        Featured Project
                      </p>
                      <h3 className="text-gray-100 text-xl mb-8">
                        {project.name}
                      </h3>
                      <div className="bg-utorange relative rounded py-4 px-6 z-8 text-center mb-4 shadow-xl text-gray-800">
                        <p>{project.description}</p>
                      </div>
                      <ul className="2xl:flex 2xl:flex-row grid grid-cols-2 space-x-4 relative justify-end mb-4">
                        {project.techstack.map((tech) => {
                          return (
                            <li className="text-gray-300" key={tech}>
                              {tech}
                            </li>
                          );
                        })}
                      </ul>
                      <ul className="flex flex-row space-x-4 relative justify-end mb-4 items-center">
                        {project.links.map((link) => {
                          if (link.github) {
                            return (
                              <li
                                className="text-gray-300 hover:text-utorange transition duration-500 ease-in-out transform"
                                key={link.github}
                              >
                                <Link to={link.github} target="_blank">
                                  <Github />
                                </Link>
                              </li>
                            );
                          }
                          if (link.external) {
                            console.log(link.external);
                            return (
                              <li>
                                <Link to={link.external} target="_blank">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="text-gray-300 hover:text-utorange transition duration-500 ease-in-out transform h-8 w-8"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </li>
                            );
                          } else {
                            return <li></li>;
                          }
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="xl:col-start-1 xl:col-end-8 row-start-1 row-end-1 ">
                    <Link to={project.path} className="w-full h-auto z-1">
                      <img
                        src={project.image}
                        alt=""
                        className="h-auto w-full rounded"
                      />
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mb-8 lg:px-20">
          <h2 className="text-3xl text-gray-100 mt-4 mb-8 text-center align-middle">
            Other Projects
          </h2>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4">
            {otherProjects.map((project, index) => {
              return (
                <div className="bg-gray-700 rounded-lg py-4 px-4 h-80 relative transition duration-300 ease-in-out transform hover:-translate-y-2">
                  <div className="h-10">
                    <h1 className="text-gray-100 text-xl text-center align-top cursor-default">
                      {project.name}
                    </h1>
                  </div>

                  <div className="text-lg text-gray-400 text-center mt-4 mb-8 h-28 cursor-default">
                    <p>{project.description}</p>
                  </div>
                  <ul className="flex flex-row space-x-4 relative justify-end mb-4 text-gray-500">
                    {project.techStack.map((tech) => {
                      return <li>{tech}</li>;
                    })}
                  </ul>
                  <ul className="flex flex-row space-x-4 relative justify-end mb-4 items-center">
                    {project.links.map((link) => {
                      if (link.github) {
                        return (
                          <li
                            className="text-gray-300 hover:text-utorange transition duration-500 ease-in-out transform"
                            key={link.github}
                          >
                            <Link to="">
                              <Github />
                            </Link>
                          </li>
                        );
                      }
                      if (link.external) {
                        console.log(link.external);
                        return (
                          <li>
                            <Link to={link.external}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="text-gray-300 h-8 w-8 hover:text-utorange transition duration-500 ease-in-out transform"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </Link>
                          </li>
                        );
                      } else {
                        return <li></li>;
                      }
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
