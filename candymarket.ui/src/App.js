import React from 'react';
import Candies from './Components/Candies/Candies'
import AddCandy from './Components/AddCandy/AddCandy'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>Candy Market</h1>
          <Candies />
        </div>

        <div>
          <AddCandy />
        </div>
      </div>
    );
  }
}


export default App;
