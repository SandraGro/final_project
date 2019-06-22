import React, { Component } from "react";
import Restaurant from "../RestaurantList/Restaurant";
import Title from '../RestaurantList/Title/Title';
import Link from 'react-router-dom/Link';
import { getData } from '../../utils/api';
import queryString from 'query-string'


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    }
    this.getRestaurants = this.getRestaurants.bind(this);
  }

  getRestaurants() {
    let path = "search/" + this.props.location.search;
    const values = queryString.parse(this.props.location.search)
    this.setState({
      title: values.q 
    })
    // path = "search?q=loqueseaa"
    getData(path).then(restaurants => this.setState({ restaurants }))
  }

  componentDidMount() {
    this.getRestaurants();
  }

  render() {
    return (
      <>
        <Link className="links" to="/" >
          <Title titulo={this.state.title} />
          {this.state.restaurants.map((restaurant) =>
            <Restaurant key={restaurant.id} info={restaurant} category={this.props.match.params.category} />
          )}
        </Link>
      </>
    );
  }
}

export default Search;
