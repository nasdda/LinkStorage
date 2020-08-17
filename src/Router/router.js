import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar/navbar";
import Home from "../components/pages/home/home";
import About from "../components/pages/about/about";
import Error from "../components/pages/error/error"
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <div style={{ marginTop: "45px" }}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route component={Error} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
