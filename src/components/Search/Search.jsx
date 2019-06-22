import React, { Component } from "react";
import Restaurant from "../RestaurantList/Restaurant";
import Title from '../RestaurantList/Title/Title';
import Link from 'react-router-dom/Link';
import { getData } from '../../utils/api';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        restaurants: []
    }
    this.getRestaurants = this.getRestaurants.bind(this);
}

getRestaurants() {
    let path = "search?q=" + this.props.match.params.query
    // path = "search?q=loqueseaa"
    console.log(path);
    getData(path).then(restaurants => this.setState({ restaurants }))
}

componentDidMount() {
    this.getRestaurants();
    console.log(this.props.id);
}

componentDidUpdate(prevProps) {
    if(this.props.match.params.query !== prevProps.match.params.query){
        this.getRestaurants()
    }
}

render() {
    return (
        <>
            <Link className="links" to="/" >
                <Title titulo={this.props.match.params.query} />
                {this.state.restaurants.map((search) =>
                    <Restaurant key={search.id} info={search} query={this.props.match.params.query} />
                )}
            </Link>
            <Restaurant/>ghjkgjhkjgjk
        </>
    );
}
}

export default Search;
