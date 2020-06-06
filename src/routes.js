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
import AdminMatches from "./Components/admin/matches"
import AddEditMatch from "./Components/admin/matches/AddEditMatch"
import AddEditPlayers from "./Components/admin/players/AddEditPlayers";
import AdminPlayers from "./Components/admin/players";

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
      <PrivateRoutes {...props} path="/admin_players/add_players" exact component={AddEditPlayers} />
        <PrivateRoutes {...props} path="/admin_players/edit_players/:id" exact component={AddEditPlayers} />
        <PrivateRoutes {...props} path="/admin_players" exact component={AdminPlayers} />
        <PrivateRoutes {...props} path="/admin_matches/add_match" exact component={AddEditMatch} />
        <PrivateRoutes {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch} />
        <PrivateRoutes {...props} path="/admin_matches" exact component={AdminMatches} />
        <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard} />
        <PublicRoutes {...props} restricted={true} path="/sign_in" exact component={SignIn} />
        <PublicRoutes {...props} restricted={false} path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
};

export default Routes;
