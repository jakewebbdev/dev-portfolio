const Navbar = () => {
  return (
    <nav className="bg-gray-900 py-4 px-4">
      <div className="flex justify-between items-center">
        <div></div>
        <div className="space-x-6">
          <a
            href="#about"
            className="uppercase text-white font-bold antialiased text-lg hover:text-armybrown"
          >
            About
          </a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
