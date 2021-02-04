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
import Portfolio from "./pages/portfolio";
import Bodyfarm from "./pages/bodyfarm";
import Teamhealth from "./pages/teamhealth";
import Coming from "./pages/comingsoon";

const Main = withRouter(({ location }) => {
  return (
    <div className="bg-black">
      {location.pathname !== "/" && <Navbar />}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about-me" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects/portfolio" component={Portfolio} />
        <Route exact path="/projects/bodyfarm" component={Bodyfarm} />
        <Route exact path="/projects/teamhealth" component={Teamhealth} />
        <Route exact path="/projects/coming-soon" component={Coming} />
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
