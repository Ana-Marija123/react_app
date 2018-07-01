import React, { Component } from 'react';
import Paragraph from './Paragraph';
import HelloWorld from './HelloWorld';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let names=['Ana','Kika','Eleni'];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       
        <Paragraph someContent="other component" someNumbers="01234"/>
        <Paragraph someContent="other comp" someNumbers="56789"/>
        {
          names.map((n,i)=><HelloWorld fullName={n} key={i}/>)
        }
      </div>
    );
  }
}

export default App;

