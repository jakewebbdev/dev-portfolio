import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import { useState, useEffect } from "react";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Landing from "./pages/landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Portfolio from "./pages/portfolio";
import Bodyfarm from "./pages/bodyfarm";
import Teamhealth from "./pages/teamhealth";
import Coming from "./pages/comingsoon";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./pageTransitions/slideTansition.scss";

const Main = withRouter(({ location }) => {
  const getPathDepth = (location) => {
    let pathArr = location.pathname.split("/");
    pathArr = pathArr.filter((n) => n !== "");
    return pathArr.length;
  };
  const [prevDepth, setPrevDepth] = useState(getPathDepth(location));
  const currentKey = location.pathname.split("/") || "/";
  useEffect(() => {
    setPrevDepth({ prevDepth: getPathDepth(location) });
  }, [location]);

  return (
    <TransitionGroup component="div" className="bg-gray-800">
      {location.pathname !== "/" && <Navbar />}
      <CSSTransition
        key={currentKey}
        timeout={800}
        classNames="pageSlider"
        mountOnEnter={false}
        unmountOnExit={true}
      >
        <div
          className={getPathDepth(location) - prevDepth >= 0 ? "left" : "right"}
        >
          <Switch location={location}>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about-me" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects/portfolio" component={Portfolio} />
            <Route exact path="/projects/bodyfarm" component={Bodyfarm} />
            <Route exact path="/projects/teamhealth" component={Teamhealth} />
            <Route exact path="/projects/coming-soon" component={Coming} />
          </Switch>
        </div>
      </CSSTransition>
      {location.pathname !== "/" && <Footer />}
    </TransitionGroup>
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
