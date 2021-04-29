import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Sell from "./pages/Sell";
import NoMatch from "./pages/NoMatch";

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
          <Route exact path={["/sell"]}>
            <Sell />
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
