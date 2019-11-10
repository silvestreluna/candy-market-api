import React from 'react';
import Candies from './Components/Candies/Candies'
import AddCandy from './Components/AddCandy/AddCandy'
import getCandies from './helper/data/getCandies';

import './App.css';

class App extends React.Component {
  state = {
    allCandies: []
  }

  getData = () => {
    getCandies.getAllCandies()
      .then((resp) => {
        const allCandies = resp.data
        this.setState({ allCandies });
      })
      .catch();
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Candy Market</h1>
          <Candies allCandies={this.state.allCandies} />
        </div>

        <div>
          <AddCandy getData={this.getData} />
        </div>
      </div>
    );
  }
}


export default App;
