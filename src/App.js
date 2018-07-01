import React, { Component } from 'react';
import Paragraph from './Paragraph';
import HelloWorld from './HelloWorld';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let names=['John','Mark','Eddie'];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       
        <Paragraph someContent="paragraph component" someNumbers="1"/>
        <Paragraph someContent="paragraph component" someNumbers="2"/>
        {
          names.map((n,i)=><HelloWorld fullName={n} key={i}/>)
        }
      </div>
    );
  }
}

export default App;

