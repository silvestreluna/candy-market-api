import React from 'react';
import getCandies from '../helper/data/getCandies';

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

        const displayCandies = allCandies.map(candy => <div>{candy.name}</div>);

        return (
            <div>
                { displayCandies }
            </div>
        );
    }
}

export default Candies;