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
        playerFilter: "All",
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
            playerFilter: played,
            resultFilter: "All"
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
                            <div className="match_filters_box">
                                <div className="tag">
                                    Show Match
                                </div>
                                <div className="cont">
                                    <div className={`option`} onClick={() => this.showPlayed("All")}>
                                        All
                                    </div>
                                    <div className={`option`} onClick={() => this.showPlayed("Yes")}>
                                        Played
                                    </div>
                                    <div className={`option`} onClick={() => this.showPlayed("No")}>
                                        Not Played
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
