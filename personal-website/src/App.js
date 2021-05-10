import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Header />
        <AboutMe />
        <Projects />
        <ContactMe />
      </Route>
      <div id="footer-box" />
    </div>
  );
}

export default App;
