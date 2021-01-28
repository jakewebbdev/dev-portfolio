import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Landing from "./pages/landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Main = withRouter(({ location }) => {
  return (
    <div className="bg-lightgray">
      {location.pathname !== "/" && <Navbar />}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      {location.pathname !== "/" && <Footer />}
    </div>
  );
});

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
