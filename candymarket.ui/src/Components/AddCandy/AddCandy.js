import React from 'react';
import addCandy from '../../helper/data/addCandy';

const tempCandyObj = {
  name: '',
  type: '',
  flavor: '',
  owner: '',
}

const tempCandyObjEmpty = {
  name: '',
  type: '',
  flavor: '',
  owner: '',
}

class AddCandy extends React.Component {

  state = {
    newCandy: tempCandyObj,
    respFromdbNewCandy: {}
  }

  updateStateValues = (e) => {
    const inputFieldName = e.target.name
    const inputFieldValue = e.target.value;
    tempCandyObj[inputFieldName] = inputFieldValue;
    this.setState({ newCandy: tempCandyObj });
  }

  addNewCandyToDB = () => {

    const { newCandy } = this.state;

    addCandy.addCandy(newCandy)
      .then((response) => {
        const newCandyAddedToDb = response.config.data;
        this.setState({ respFromdbNewCandy: JSON.parse(newCandyAddedToDb) });
        this.props.getData();
        this.setState({ newCandy: tempCandyObjEmpty });
        this.clearForm();
        this.displayNewCandyAdded();
      })
      .catch(err => console.error(err));
  }

  displayNewCandyAdded = () => {
    const candy = this.state.respFromdbNewCandy
    // show new candy added
    console.error(candy)
  }

  clearForm = () => {
    document.getElementById("new-candy-form").reset();
  }

  render() {
    return (
      <div>
        <form id="new-candy-form" onChange={this.updateStateValues}>
          <h5>New Candy: </h5>
          <div>
            <label>Name</label>
            <input type="text" id="candy-name" name="name" />
          </div>
          <div>
            <label>Type</label>
            <input type="text" id="candy-type" name="type" />
          </div>
          <div>
            <label>Flavor</label>
            <input type="text" id="candy-flavor" name="flavor" />
          </div>
          <div>
            <label>Owner's Name</label>
            <input type="text" id="candy-owner" name="owner" />
          </div>
        </form>
        <div>
          <button className="btn btn-primary" onClick={this.addNewCandyToDB} >Add a New Candy</button>
        </div>
      </div>
    );
  }
}

export default AddCandy;