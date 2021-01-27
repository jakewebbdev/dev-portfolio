const Navbar = () => {
  return (
    <nav className="w-full fixed bg-lightgray">
      <div className="container mx-auto py-6">
        <div className="flex justify-between px-4">
          <div>Logo</div>
          <div className="space-x-6">
            <a
              href="#about"
              className="text-xl uppercase font-bold font-mono text-black hover:text-lightbrown focus:outline-none"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-xl uppercase font-bold font-mono text-black hover:text-lightbrown focus:outline-none"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-xl uppercase font-bold font-mono text-black hover:text-lightbrown focus:outline-none"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
