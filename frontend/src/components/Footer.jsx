import {
  Github,
  Linkedin,
  ReactJs,
  Tailwindcss,
  Firebase,
} from "@icons-pack/react-simple-icons";

const Footer = () => {
  return (
    <div className="w-full bg-utorange mt-4 flex content-center py-6">
      <div className="container mx-auto flex justify-between flex-col md:flex-row space-y-6 md:space-y-0">
        <div className="self-center flex space-x-4">
          <a href="https://www.linkedin.com/in/jakewebbdev/">
            <Linkedin />
          </a>
          <a href="https://github.com/jakewebbdev">
            <Github />
          </a>
        </div>
        <div className="self-center flex flex-col items-center justify-center space-y-4">
          <h1 className="border-b-2 border-black">Built using</h1>
          <div className="flex space-x-2">
            <a href="https://reactjs.org/">
              <ReactJs />
            </a>
            <a href="https://tailwindcss.com/">
              <Tailwindcss />
            </a>
            <a href="https://firebase.google.com/">
              <Firebase />
            </a>
          </div>
        </div>
        <div className="self-center flex flex-col">
          <h1 className="text-center md:text-right">(865) 255-7770</h1>
          <h1>jakewebbdev@gmail.com</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
