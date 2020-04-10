import React from "react";
import Layout from "./Hoc/Layout";
import { Switch, Route } from "react-router-dom";

// Components
import Home from "./Components/Home";
import SignIn from "./Components/signin";

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route component={SignIn} path="/sign_in" />
      </Switch>
    </Layout>
  );
};

export default Routes;
