import React from "react";
import Layout from "./Hoc/Layout";
import { Switch, Route } from "react-router-dom";

// Components
import Home from "./Components/Home/index";

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <Route exact component={Home} path="/" />
      </Switch>
    </Layout>
  );
};

export default Routes;
