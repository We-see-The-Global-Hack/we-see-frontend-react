import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import MainLayout from "./pages/MainLayout";
import Auth from "./pages/Auth";
import Listings from "./components/Listings";

function App() {
  return (
    <Switch>
      <Route path={["/sign-in", "/sign-up"]} component={Auth} />
      <Route path={"/listings"} component={Listings} />
      <Route path="/" component={MainLayout} />
    </Switch>
  );
}

export default App;
