import React, { Component } from "react";
import './RestaurantList.css'
import Title from './Title'
import Restaurant from './Restaurant'


class RestaurantList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Restaurant : ['fonda lupita', 'juan el feo']
        }
    }
    render() {
        return (
            <>
            <Title titulo="Breakfast"/>
            {this.state.Restaurant.map((restaurant) =>
                <Restaurant key={restaurant} />
            )}
            </>
        );
    }
}

export default RestaurantList;
