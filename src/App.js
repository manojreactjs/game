import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './Quiz';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
 <h2>Welcome to maths game</h2>
      <h3>Hey this game is very interesting</h3>
      <h3>This is very good requirement</h3>
           <h5>Nice to learn this subject</h5>
      <h3>Requirement changed</h3>
      <h5>Hey this is manoj</h5>
      <h2>Welcome to this great world nothing to make changes</h2>
      <h5>Dont worry about the changes you made<h5>
<h3>let bring changes in testing in eclipse</h3>
<p>Join the slack community to stay in touch</p>
<p>It is very difficult to work on this requirement</p>
      <a href="https://happy-learning.herokuapp.com/ " target="_blank">
      <img alt="Join Slack" height="40" width="139" src="http://i.imgur.com/0Lne5Vr.png"/></a>
        </div>
        <Quiz />
      </div>
    );
  }
}

export default App;
