import React, { Component } from "react";
import './RestaurantList.css'
import Title from './Title'
import Link from 'react-router-dom/Link';
import Restaurant from './Restaurant'


class RestaurantList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Restaurant: ['fonda lupita', 'juan el feo']
        }
    }
    render() {
        return (
            <>
                <Link className="links" to="/" >
                    <Title titulo="Breakfast" />
                    {this.state.Restaurant.map((restaurant) =>
                        <Restaurant key={restaurant} />
                    )}
                </Link>
            </>
        );
    }
}

export default RestaurantList;
