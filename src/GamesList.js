import React from 'react';
import PropTypes from 'prop-types';

export default function GamesList({games}) {
    const noGames = (
        <p>There are no games in your collection yet :( </p>
    );
    const gamesList = (<p>Your games</p>);
    return (
        <div>
            {games.length === 0 ? noGames : gamesList}
        </div>
    )
}

GamesList.propTypes = {
    games: PropTypes.array.isRequired
}
