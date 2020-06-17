import React, { Component } from 'react';

class MatchesList extends Component {

    state = {
        matchesList: []
    }

    static getDerivedStateFromProps(props, state) {
        return state = {
            matchesList: props.matches
        }
    }

    render() {
        console.log(this.state.matchesList)
        return (
            <div>
                List
            </div>
        );
    }
}

export default MatchesList;
