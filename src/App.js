import React, { Component } from 'react';
import {Link, NavLink, Route} from 'react-router-dom';
import GamesPage from './GamesPage';
import GameForm from './GameForm';
class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
            <NavLink exact className="item" activeClassName="active" to="/">Home</NavLink>
            <NavLink exact className="item" activeClassName="active" to="/games">Games</NavLink>
            <NavLink exact className="item" activeClassName="active" to="/games/new">Add New Game</NavLink>
        </div>

        <Route exact path="/games/new" component={GameForm} />
        <Route exact path="/games" component={GamesPage} />

      </div>
    );
  }
}

export default App;
