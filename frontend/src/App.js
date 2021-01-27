import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Landing from "./pages/landing";

function App() {
  return (
    <div className="bg-lightgray">
      <Landing />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
