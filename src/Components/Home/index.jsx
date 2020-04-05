import React from "react";
import Featured from "../Home/Featured/index";
import MatchesHome from "./Matches/index";

const Home = () => {
  return (
    <div className="bck_blue">
      <Featured />
      <MatchesHome />
    </div>
  );
};

export default Home;
