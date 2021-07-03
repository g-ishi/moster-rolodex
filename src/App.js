import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    }

    // bindを使う場合の例
    // アロー関数を使う場合にはthisコンテキストのバインドは不要
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = e => {
    // 
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterdMonsters = monsters.filter(monsters => monsters.name.includes(searchField))
    return (
      <div className="App">
        <h1> monster rolodex </h1>
        <SearchBox
          placeholder="search text..."
          handleChange={this.handleChange}
        />
        <CardList monsters={filterdMonsters} />
      </div>
    );
  }
}

export default App;
