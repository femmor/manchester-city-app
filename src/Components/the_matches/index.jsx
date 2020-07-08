import React, { Component } from 'react';

import { firebaseMatches} from "../../firebase"
import { firebaseLooper, reverseArray } from "../ui/misc"
import LeagueTable from "./table"
import MatchesList from "./matches_list"


class TheMatches extends Component {

    state = {
        loading: true,
        matches: [],
        filterMatches: [],
        playedFilter: "All",
        resultFilter: "All"
    }

    componentDidMount() {
      firebaseMatches.once("value")
      .then(snapshot => {
          const matches = firebaseLooper(snapshot)
          this.setState({
              loading: false,
              matches: reverseArray(matches),
              filterMatches: reverseArray(matches)
          })
      })
    }

    showPlayed = (played) => {
        const list = this.state.matches.filter(match => {
            return match.final === played
        })
        this.setState({
            filterMatches: played === "All" ? this.state.matches : list,
            playedFilter: played,
            resultFilter: "All"
        }) 
    }

    showResult = (result) => {
        const list = this.state.matches.filter(match => {
            return match.result === result
        })
        this.setState({
            filterMatches: result === "All" ? this.state.matches : list,
            playedFilter: "All",
            resultFilter: result
        }) 
    }
    

    render() {
        const state = this.state
        return (
            <div className="the_matches_container">
                <div className="the_matches_wrapper">
                    <div className="left">
                        <div className="match_filters">
                            {/* Boxes */}
                            {/* Show Match Filter */}
                            <div className="match_filters_box">
                                <div className="tag">
                                    Show Match
                                </div>
                                <div className="cont">
                                    <div className={`option ${state.playedFilter === "All" ? "active" : ""}`} onClick={() => this.showPlayed("All")}>
                                        All
                                    </div>
                                    <div className={`option ${state.playedFilter === "Yes" ? "active" : ""}`} onClick={() => this.showPlayed("Yes")}>
                                        Played
                                    </div>
                                    <div className={`option ${state.playedFilter === "No" ? "active" : ""}`} onClick={() => this.showPlayed("No")}>
                                        Not Played
                                    </div>
                                </div>
                            </div>
                           
                           {/* Show Result Filter */}
                           <div className="match_filters_box">
                                <div className="tag">
                                    Game Result
                                </div>
                                <div className="cont">
                                    <div className={`option ${state.resultFilter === "All" ? "active" : ""}`} onClick={() => this.showResult("All")}>
                                        All
                                    </div>
                                    <div className={`option ${state.resultFilter === "W" ? "active" : ""}`} onClick={() => this.showResult("W")}>
                                        Win
                                    </div>
                                    <div className={`option ${state.resultFilter === "L" ? "active" : ""}`} onClick={() => this.showResult("L")}>
                                        Lose
                                    </div>
                                    <div className={`option ${state.resultFilter === "D" ? "active" : ""}`} onClick={() => this.showResult("D")}>
                                        Draw
                                    </div>
                                </div>
                            </div>
                        </div>
                        <MatchesList matches={state.filterMatches}/>
                    </div>
                    <div className="right">
                        <LeagueTable />
                    </div>
                </div>
            </div>
        );
    }
}

export default TheMatches;
