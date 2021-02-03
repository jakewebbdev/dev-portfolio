const Projects = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-20 md:container md:mx-auto px-4 md:px-6">
        <div className="flex justify-between border-b-2 border-smokey pb-2">
          <h1 className="text-xl md:text-3xl font-semibold text-utorange">
            Projects
          </h1>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-4 pt-6">
          <div className="bg-white">
            <h1>Bodyfarm Placeholder</h1>
          </div>
          <div className="bg-white">
            <h1>TeamHealth Placeholder</h1>
          </div>
          <div className="bg-white">
            <h1>Portfolio Site Placeholder</h1>
          </div>
          <div className="bg-white">
            <h1>W.I.P. Bruno CLI</h1>
          </div>
          <div className="bg-white">
            <h1>W.I.P. Jenkins Clone</h1>
          </div>
          <div className="bg-white">
            <h1>W.I.P. Backend Engineering Projects</h1>
          </div>
          <div className="bg-white">
            <h1>Coming Soon!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
