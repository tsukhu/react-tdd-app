import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './components/Button';
import CommentFeed from './containers/CommentFeed';
import './App.css';
const comments = [
  {
    author: 'Ian Wilson',
    text: 'A boats a boat but a mystery box could be anything.'
  },
  {
    author: 'Max Powers Jr',
    text: 'Krypton sucks.'
  },
  {
    author: 'Kent Beck',
    text: 'Red, Green, Refactor.'
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Button text="Press" />
        </div>
        <CommentFeed comments={comments} />
      </div>
    );
  }
}

export default App;
