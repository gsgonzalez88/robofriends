import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox.jsx';
import { robots } from './robots';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: robots,
      searchField: ''
    };
  };

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value});
        
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox
          searchChange={this.onSearchChange}
          searchField={this.state.searchField}
        />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
