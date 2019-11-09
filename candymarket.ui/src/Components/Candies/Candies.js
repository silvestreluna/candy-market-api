import React from 'react';
import getCandies from '../../helper/data/getCandies';

import './Candies.scss'

class Candies extends React.Component {
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
        const { allCandies } = this.state;

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