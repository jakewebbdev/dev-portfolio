import smilingTux from "../images/side-smiling-tux.jpg";
import i0 from "../images/image0.jpeg";
import i1 from "../images/image1.jpeg";
import i2 from "../images/image2.jpeg";
import { Link } from "react-router-dom";
import { CarouselProvider, Slide, Slider, Image } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const About = () => {
  return (
    <section id="about" className="min-h-screen w-full">
      <div className="pt-20 md:container md:mx-auto text-white px-4 md:px-6 pb-2">
        <div className="flex justify-between border-b-2 border-smokey pb-2">
          <h1 className="text-3xl font-semibold text-utorange">About Me</h1>
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
        <div className="pt-6 lg:grid lg:grid-cols-2 flex flex-col-reverse">
          <div className="w-full flex justify-center items-center p-6 text-white">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={4}
              step={1}
              className="w-3/4 h-auto"
              infinite
              isPlaying
              interval="4000"
              hasMasterSpinner
            >
              <Slider>
                <Slide index={0}>
                  <Image src={smilingTux} />
                </Slide>
                <Slide index={1}>
                  <Image src={i0} />
                </Slide>
                <Slide index={2}>
                  <Image src={i1} />
                </Slide>
                <Slide index={3}>
                  <Image src={i2} />
                </Slide>
              </Slider>
            </CarouselProvider>
          </div>
          <div className="p-6 text-lg space-y-4">
            <p className="">
              Hello! My name is Tyler Webb, but I like to go by Jake. I am
              currently a 22 year old Computer Science student at the University
              of Tennessee, Knoxville. I will be graduating in May 2021, with a
              Bachelor of Science in Computer Science.
            </p>
            <p className="">
              Along with that, I am an aspiring software engineer looking for a
              full stack or frontend developer role. I have a background in full
              stack development from my current internship and an additional
              position working with the University's Forensic Anthropology
              Center.
            </p>
            <p className="">
              Following my experience in full stack development, I have also
              obtained experience working with machine learning, primarily with
              TensorFlow, numerical analysis, systems programming, python
              scripting, and cyber security.
            </p>
            <p>
              For more details on my fullstack development journey, I have
              worked with and built applications using ReactJS and AngularJS for
              my frontend frameworks. I have used mainly used tailwindcss and
              vanilla css for styling. I have worked with NodeJS/Express for my
              backend framework. I have worked with MongoDB and PostgreSQL for
              my database.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
