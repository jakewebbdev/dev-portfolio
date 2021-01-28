import "./App.css";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Landing from "./pages/landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-lightgray">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
