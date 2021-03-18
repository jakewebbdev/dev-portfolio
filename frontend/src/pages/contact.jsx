import { Link } from "react-router-dom";
import { useState } from "react";
import { Axios, db } from "../firebase/firebaseConfig";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendEmail();
    e.target.reset();
    setEmail("");
    setFirstName("");
    setLastName("");
    setMessage("");
  };

  const sendEmail = async () => {
    await Axios.post(
      "https://us-central1-dev-portfolio-c38c4.cloudfunctions.net/submit",
      { email, firstName, lastName, message }
    )
      .then((res) => {
        db.collection("emails").add({
          firstName: firstName,
          lastName: lastName,
          email: email,
          message: message,
          time: new Date(),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen page ">
      <div className="md:container md:mx-auto px-4 md:px-6 pt-20 pb-4 md:pb-0">
        <div className="flex justify-between border-b-2 border-smokey ">
          <h1 className="text-xl md:text-5xl font-semibold text-utorange">
            Contact Me
          </h1>
          <Link
            className="underline hover:text-utorange focus:outline-none flex items-center text-white text-lg transition duration-500 ease-in-out"
            to="/files/TylerWebbResume.pdf"
            target="_blank"
            download
          >
            <span className="pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="white"
                className="h-6 w-6 stroke-current fill-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </span>
            <span>Download my Resume!</span>
          </Link>
        </div>
        <div className="flex pt-6 flex-col justify-center items-center">
          <form
            className="w-full max-w-lg bg-gray-100 px-6 py-6 rounded shadow-xl border-4 border-utorange"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-utorange placeholder-gray-600"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:border-utorange placeholder-gray-600"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-utorange placeholder-gray-600"
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Message
                </label>
                <textarea
                  className="resize-none appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-utorange h-48 placeholder-gray-600"
                  id="message"
                  placeholder="Leave me a message!"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button
                  className="antialiased shadow bg-utorange transition duration-500 ease-in-out transform hover:scale-105 focus:shadow-outline focus:outline-none text-gray-800 font-bold py-2 px-4 rounded w-full"
                  type="submit"
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
