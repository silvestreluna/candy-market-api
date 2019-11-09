import React from 'react';
import Candies from './Components/Candies/Candies'
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
          <button className="btn btn-danger">Delete</button>
          <button>Add</button>
        </div>
      </div>
    );
  }
}


export default App;
