const Portfolio = () => {
  return (
    <section className="min-h-screen w-full">
      <div className="pt-20 md:container md:mx-auto px-4 md:px-6 pb-2">
        <div className="flex justify-between border-b-2 border-smokey pb-2">
          <h1 className="text-xl md:text-3xl font-semibold text-utorange">
            UTK Bodyfarm Project
          </h1>
        </div>
        <div className="text-white border-white border-2 rounded flex py-2 my-4 flex-col">
          <h1 className="text-utorange md:text-2xl text-lg text-semibold self-center pb-2">
            Overview
          </h1>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-4 space-y-4 md:space-y-0">
          <div className="text-white border-2 border-white flex flex-col px-2 py-2 rounded">
            <h1 className="text-utorange md:text-2xl text-lg text-semibold self-center pb-2">
              Motivation
            </h1>
            <p className="leading-8">
              The motivation behind this project was to develop a central place
              to store all of my projects. This comes with the dual benefit of
              keeping me organized as far as what I am working on, and having a
              place for potential employers to see what I have worked on.
            </p>
          </div>
          <div className="text-white border-2 border-white flex flex-col px-2 py-2 rounded">
            <h1 className="text-utorange text-lg md:text-2xl text-semibold self-center pb-2">
              Background
            </h1>
          </div>
          <div className="text-white border-2 border-white flex flex-col px-2 py-2 rounded">
            <h1 className="text-utorange text-lg md:text-2xl text-semibold self-center pb-2">
              Technology Stack
            </h1>
          </div>
        </div>
        <div>Images</div>
      </div>
    </section>
  );
};

export default Portfolio;
