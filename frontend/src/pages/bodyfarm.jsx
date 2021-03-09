const Bodyfarm = () => {
  return (
    <section className="min-h-screen w-full">
      <div className="pt-20 md:container md:mx-auto px-4 md:px-6 pb-2">
        <div className="flex justify-between border-b-2 border-smokey pb-2">
          <h1 className="text-xl md:text-3xl font-semibold text-utorange">
            UTK Bodyfarm Project
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-white pt-2 pb-4 px-4 my-4 w-9/12 flex flex-col space-y-2">
            <h1 className="text-utorange md:text-4xl text-lg text-semibold self-center pb-2 underline">
              Overview
            </h1>
            <p className="leading-relaxed">
              This project began as a school project that eventually spanned
              into multiple iterations spanning over a years time. It eventually
              evolved into a part time position for me where I developed an
              optimized web application for the Forensic Anthropology center to
              use in production. This project is currently under closed source
              and authenticated due to the sensitive information that is stored
              within it.
            </p>
          </div>
          <div className="md:grid md:grid-cols-3 md:gap-4 space-y-4 md:space-y-0">
            <div className="text-white flex flex-col px-4 py-2">
              <h1 className="text-utorange md:text-2xl text-lg text-semibold self-center pb-2 underline">
                Motivation
              </h1>
              <p className="leading-relaxed">
                The driving force behind this project was the Forensic
                Anthropology Center's need for a web based application that was
                more secure and optimized than their current data storage. This
                lead them to seeking a capable computer science student to build
                them a web application exactly to their specifications.
              </p>
            </div>
            <div className="text-white border-l-2 border-white flex flex-col px-4 py-2">
              <h1 className="text-utorange text-lg md:text-2xl text-semibold self-center pb-2 underline">
                Background
              </h1>
              <p className="leading-relaxed">
                The Forensic Anthropology Center's current database layout uses
                Microsoft Access in a volatile unmanaged way. On top of this,
                there was very little security protecting the data stored
                inside. On top of this, there was no way for them to access this
                outside of the schools network, meaning that they were unable to
                access the information from home or another location around the
                world.
              </p>
            </div>
            <div className="text-white border-l-2 border-white flex flex-col px-4 py-2">
              <h1 className="text-utorange text-lg md:text-2xl text-semibold self-center pb-2 underline">
                Technology Stack
              </h1>
              <p className="leading-relaxed">
                This was a full stack build, therefore I had to compile a list
                of technologies to use on the frontend and backend. For the
                frontend I chose to use ReactJS in conjunction with TailwindCSS
                for the styling. On top of this, I also used several packages to
                help aid in development, with the notable ones being
                react-hook-forms and react-table. As for the backend
                technologies I used PostgreSQL for data storage and NestJS for
                the backend web server and API. NestJS is an angular like
                backend framework designed to have a consistent file structure
                and biased API handling.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-white pt-2 pb-4 px-4 my-4 w-9/12 flex flex-col space-y-2">
            <h1 className="text-utorange md:text-2xl text-lg text-semibold self-center pb-2 underline">
              What I learned
            </h1>
            <p className="leading-relaxed">
              This project was my first major project outside of the standard
              school projects. With this being the case, I learned many things.
              Some of the most notable things being Application Architecture,
              Project Management, and Client Relations. On top of these, I also
              learned what I was like to work with a budget in mind. As for
              technologies I learned, this was my first real dive into
              Javascript, so I had to start out learning the language, as well
              as, learn the entire ecosystem surrounding web development. I also
              had to learn what it meant and how to deploy an application,
              especially an optimized production version that would be used on a
              daily basis.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center hidden">
          <div className="text-white pt-2 pb-4 px-4 my-4 w-9/12 flex flex-col space-y-2">
            <h1 className="text-utorange md:text-4xl text-lg text-semibold self-center pb-2 underline">
              Images
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bodyfarm;
