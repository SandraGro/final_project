import React, { Component } from "react";
import './Breakfast.css'
import Title from './Title'
import Restaurants from './Restaurants'


class Breakfast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Restaurants : ['fonda lupita', 'juan el feo']
        }
    }
    render() {
        return (
            <>
            <Title/>
            {this.state.Restaurants.map((restaurant) =>
                <Restaurants key={restaurant} />
            )}
            </>
        );
    }
}

export default Breakfast;
