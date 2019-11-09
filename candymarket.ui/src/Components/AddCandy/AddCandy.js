import React from 'react';
import addCandy from '../../helper/data/addCandy';

class AddCandy extends React.Component {

    addNewCandy = () => {
        const testObj = {
            name: "anotherone", 
            type: "testtype",
            flavor: "testflavor",
            owner: "testName",
            isDonate: false
        }

        addCandy.addCandy(testObj);
    }
    render() {
        return (
            <div>
                <button onClick={this.addNewCandy}>Add a New Candy</button>
            </div>
        );
    }
}

export default AddCandy;