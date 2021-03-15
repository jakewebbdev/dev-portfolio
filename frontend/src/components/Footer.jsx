import {
  Github,
  Linkedin,
  ReactJs,
  Tailwindcss,
  Firebase,
} from "@icons-pack/react-simple-icons";

const Footer = () => {
  return (
    <div className="w-full bg-utorange text-gray-800">
      <div className="md:container md:mx-auto px-4 md:px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="self-center flex space-x-4">
            <a href="https://www.linkedin.com/in/jakewebbdev/">
              <Linkedin />
            </a>
            <a href="https://github.com/jakewebbdev">
              <Github />
            </a>
          </div>
          <div className="self-center flex flex-col items-center justify-center space-y-4">
            <h1 className="border-b-2 border-gray-800">Built using</h1>
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
    </div>
  );
};

export default Footer;
