import React from 'react';
import addCandy from '../../helper/data/addCandy';

import './AddCandy.scss'

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
    respFromdbNewCandy: {},
    displayingForm: false
  }

  updateStateValues = (e) => {
    const inputFieldName = e.target.name
    const inputFieldValue = e.target.value;
    tempCandyObj[inputFieldName] = inputFieldValue;
    this.setState({ newCandy: tempCandyObj });
  }

  addNewCandyToDB = (e) => {
    e.preventDefault();
    const { newCandy } = this.state;

    addCandy.addCandy(newCandy)
      .then((response) => {
        const newCandyAddedToDb = response.config.data;
        this.setState({ respFromdbNewCandy: JSON.parse(newCandyAddedToDb) });
        this.props.getData();
        this.setState({ newCandy: tempCandyObjEmpty });
        this.clearForm();
        this.displayNewCandyAdded();
        this.setState({ displayingForm: false });
      })
      .catch(err => console.error(err));
  }

  displayNewCandyAdded = () => {
    const candy = this.state.respFromdbNewCandy
    // show new candy added
    console.error(candy.name)
  }

  clearForm = () => {
    document.getElementById("new-candy-form").reset();
  }

  toggleForm = () => {
    this.setState({ displayingForm: !this.state.displayingForm });
  }
  render() {
    const { displayingForm } = this.state;
    return (
      <div className="addCandy">
        {
          (displayingForm) ? (
            <form id="new-candy-form" onChange={this.updateStateValues} onSubmit={this.addNewCandyToDB}>
              <h5>New Candy: </h5>
              <div className="input-fields">
                <div>
                  <label>Name</label>
                  <input type="text" id="candy-name" name="name" required />
                </div>
                <div>
                  <label>Type</label>
                  <input type="text" id="candy-type" name="type" required />
                </div>
                <div>
                  <label>Flavor</label>
                  <input type="text" id="candy-flavor" name="flavor" required />
                </div>
                <div>
                  <label>Owner's Name</label>
                  <input type="text" id="candy-owner" name="owner" required />
                </div>
              </div>
              <div>
                <button type="submit" className="btn btn-dark" >Add</button>
                <button className="btn btn-danger ml-1" onClick={this.toggleForm}>Cancel</button>
              </div>
            </form>
          )
            : (
              <div>
                <button className="btn btn-dark" onClick={this.toggleForm}>Add New Candy</button>
              </div>
            )
        }
      </div>
    );
  }
}

export default AddCandy;