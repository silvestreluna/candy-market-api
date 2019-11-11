import React from 'react';
import Candies from './Components/Candies/Candies'
import AddCandy from './Components/AddCandy/AddCandy'
import getCandies from './helper/data/getCandies';
import dltData from './helper/data/deleteCandy';

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

  deleteCandy = (candyId) => {
    dltData.deleteCandyById(candyId)
      .then(() => {
        this.getData();
      })
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Candy Market</h1>
          <Candies allCandies={this.state.allCandies}
          deleteCandy={this.deleteCandy} />
        </div>

        <div>
          <AddCandy getData={this.getData} />
        </div>
      </div>
    );
  }
}


export default App;
