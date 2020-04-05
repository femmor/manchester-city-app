import React, { Component } from "react";
import { firebaseMatches } from "../../../firebase";

class Blocks extends Component {
  state = {
    matches: [],
  };

  componentDidMount() {
    firebaseMatches
      .limitToLast(6)
      .once("value")
      .then((snapshot) => {
        console.log(snapshot.val());
      });
  }

  showMatches = () => <div></div>;

  render() {
    return (
      <div className="home_matches">{this.showMatches(this.state.matches)}</div>
    );
  }
}

export default Blocks;
