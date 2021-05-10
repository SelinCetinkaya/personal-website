import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Resume from "./components/Resume";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Header />
        <AboutMe />
        <Projects />
      </Route>
      <Route path="/resume">
        <Resume />
      </Route>
    </div>
  );
}

export default App;
