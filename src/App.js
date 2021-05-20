import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import styles from "./app.module.css";

import Home from "./views/Home";
import Navbar from "./views/Navbar";
import About from "./views/About";
import Resume from "./views/Resume";

function App() {
  const w = window.innerWidth;
  const h = window.innerHeight;

  return (
    <div className="App">
      <Router>
        <div className={styles.parentdiv}>
          <div>
            <Navbar />
          </div>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
