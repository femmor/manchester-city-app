import React from "react";
import Featured from "../Home/Featured/index";
import MatchesHome from "./Matches/index";
import MeetPlayers from "./MeetPlayers/index";
import Promotion from "./Promotion/index";

const Home = () => {
  return (
    <div className="bck_blue">
      <Featured />
      <MatchesHome />
      <MeetPlayers />
      <Promotion />
    </div>
  );
};

export default Home;
