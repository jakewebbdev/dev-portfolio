import { Link } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail("");
    setFirstName("");
    setLastName("");
    setMessage("");
  };

  return (
    <div className="min-h-screen">
      <div className="md:container md:mx-auto px-4 md:px-6 pt-20 pb-4 md:pb-0">
        <div className="flex justify-between border-b-2 border-smokey pb-2">
          <h1 className="text-xl md:text-3xl font-semibold text-utorange">
            Contact Me
          </h1>
          <Link
            className="underline hover:text-utorange focus:outline-none flex items-center text-white"
            to="/files/Resume.pdf"
            target="_blank"
            download
          >
            <span className="pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="white"
                className="h-6 w-6 hover:fill-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </span>
            <span>Download my Resume!</span>
          </Link>
        </div>
        <div className="flex justify-center pt-6">
          <form
            class="w-full max-w-lg bg-white px-6 py-6 rounded shadow-xl border-4 border-utorange"
            onSubmit={handleSubmit}
          >
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  class="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-utorange placeholder-gray-600"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:border-utorange placeholder-gray-600"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  E-mail
                </label>
                <input
                  class="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-utorange placeholder-gray-600"
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Message
                </label>
                <textarea
                  class="resize-none appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-utorange h-48 placeholder-gray-600"
                  id="message"
                  placeholder="Leave me a message!"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-1/3">
                <button
                  class="shadow bg-utorange hover:bg-uttorch focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded w-full"
                  type="button"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
