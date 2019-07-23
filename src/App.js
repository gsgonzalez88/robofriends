import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
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
}

export default App;
