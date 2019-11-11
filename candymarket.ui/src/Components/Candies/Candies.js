import React from 'react';
import Candy from '../Candy/Candy'

import './Candies.scss'

class Candies extends React.Component {
  render() {
    const { allCandies } = this.props;
    const displayCandies = allCandies.map(candy => <Candy key={candy.id} candy={candy} deleteCandy={this.props.deleteCandy}/>);
    return (
      <div className="Candies">
        <h3>All Candies:</h3>
        <table className="table table-borderless table-light">
          <thead>
            <tr>
              <th scope="col">Candy Name</th>
              <th scope="col">Candy Type</th>
              <th scope="col">Candy Flavor</th>
              <th scope="col">Candy Owner</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {displayCandies}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Candies;