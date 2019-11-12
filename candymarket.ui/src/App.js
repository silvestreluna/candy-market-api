import React from 'react';
import Candies from './Components/Candies/Candies'
import AddCandy from './Components/AddCandy/AddCandy'
import getCandies from './helper/data/getCandies';
import dltData from './helper/data/deleteCandy';

import './App.scss';

class App extends React.Component {
  state = {
    allCandies: [],
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
          <div className="header">
            <h1>Candy Market</h1>
            <div className="bck-img"></div>
          </div>

          <div className="new-candy-form">
            <AddCandy getData={this.getData} />
          </div>

          <Candies allCandies={this.state.allCandies}
            deleteCandy={this.deleteCandy} />
        </div>

      </div>
    );
  }
}


export default App;
