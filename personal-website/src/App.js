import "./App.css";
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";

function App() {
  const [smallHeader, setSmallHeader] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setSmallHeader(window.pageYOffset > 200);
        console.log(window.pageYOffset);
      });
    }
  }, []);

  return (
    <div className="App">
      <Route exact path="/">
        <Header smallHeader={smallHeader} />
        <AboutMe smallHeader={smallHeader} />
        <Projects />
        <ContactMe />
      </Route>
      <div id="footer-box" />
    </div>
  );
}

export default App;
