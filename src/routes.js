import React from "react";
import Layout from "./Hoc/Layout";
import { Switch, Route } from "react-router-dom";

// PrivateRoutes
import PrivateRoutes from "./Components/authRoutes/privateRoutes"
// PublicRoutes
import PublicRoutes from "./Components/authRoutes/publicRoutes"

// Components
import Home from "./Components/Home";
import SignIn from "./Components/signin";

// Admin Routes
import Dashboard from "./Components/admin/Dashboard";

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard} />
        <PublicRoutes {...props} restricted={true} path="/sign_in" exact component={SignIn} />
        <PublicRoutes {...props} restricted={false} path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
};

export default Routes;
