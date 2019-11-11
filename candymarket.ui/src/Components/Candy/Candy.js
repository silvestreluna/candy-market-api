import React from 'react';

class Candy extends React.Component {
  getCandyId = () => {
    const candyId = this.props.candy.id;
    this.props.deleteCandy(candyId);
  }

  render() {
    const { candy } = this.props;
    return (
      <tr>
        <td>{candy.name}</td>
        <td>{candy.type}</td>
        <td>{candy.flavor}</td>
        <td>{candy.owner}</td>
        <td>
          <button className="btn btn-danger" onClick={this.getCandyId}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default Candy;