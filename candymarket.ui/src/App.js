import React from 'react';
import Candies from './Components/Candies'
import './App.css';

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <h1>Candy Market</h1>
        <Candies />
      </div>
    );
  }
}


export default App;
