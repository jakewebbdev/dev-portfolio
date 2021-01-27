import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="bg-cream">
      <Navbar />
      <div>
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
