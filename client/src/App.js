import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Sell from "./pages/Sell";
import Buy from "./pages/Buy";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";
import Detail from "./pages/Detail";

import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path={["/carsforsell"]}>
            <Sell />
          </Route>
          <Route exact path={["/carsinmarket"]}>
            <Buy />
          </Route>
          <Route exact path={["/carsinmarket/:id"]}>
            <Detail />
          </Route>
          <Route exact path={["/about"]}>
            <About />
          </Route>
          <Route exact path={["/contact"]}>
            <Contact />
          </Route>
          <Route exact path={["/Signin"]}>
            <Signin />
          </Route>
          <Route exact path={["/Signup"]}>
            <Signup />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
