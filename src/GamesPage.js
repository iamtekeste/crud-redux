import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import GamesList from './GamesList';
import {fetchGames} from './actions/fetchGames';

class GamesPage extends Component {

    componentDidMount() {
        this.props.fetchGames();
    }

    render() {
        return(
            <div className="games-page">
                <h1>Games List</h1>
                <GamesList games={this.props.games}/>
            </div>
        )
    }
}

GamesPage.propTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired
};

const blah = (state) => {
    return {
        games: state.games
    }
}

export default connect(blah, {fetchGames})(GamesPage)
