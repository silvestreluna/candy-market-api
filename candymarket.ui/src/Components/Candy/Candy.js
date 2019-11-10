import React from 'react';

class Candy extends React.Component {
  render() {
    const { candy } = this.props;
    return (
      <tr>
        <td>{candy.name}</td>
        <td>{candy.type}</td>
        <td>{candy.flavor}</td>
        <td>{candy.owner}</td>
      </tr>
    );
  }
}

export default Candy;