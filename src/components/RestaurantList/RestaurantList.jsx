import React, { Component } from "react";
import './RestaurantList.css'
import Title from './Title'
import { getData } from '../../utils/api';
import Restaurant from './Restaurant'


class RestaurantList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: []
        }
        this.getRestaurants = this.getRestaurants.bind(this);
    }

    getRestaurants() {
        let path = "restaurants/" + this.props.match.params.category
        // path = "search?q=loqueseaa"
        getData(path).then(restaurants => this.setState({ restaurants }))
    }

    componentDidMount() {
        this.getRestaurants();
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.category !== prevProps.match.params.category){
            this.getRestaurants()
        }
    }

    render() {
        return (
            <>
                <Title titulo={this.props.match.params.category} />
                {this.state.restaurants.map((restaurant) =>
                    <Restaurant key={restaurant.id} info={restaurant} category={this.props.match.params.category} />
                )}
            </>
        );
    }
}

export default RestaurantList;
