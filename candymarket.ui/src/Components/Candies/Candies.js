import React from 'react';

import './Candies.scss'

class Candies extends React.Component {
  render() {
    const { allCandies } = this.props;
    const displayCandies = allCandies.map(candy => <div key={candy.id}>{candy.name}</div>);
    return (
      <div className="Candies">
        <h3>All Candies:</h3>
        {displayCandies}
      </div>
    );
  }
}

export default Candies;