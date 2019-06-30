import React, { Component } from "react";
import './RestaurantDetails.css'
import { Col, Row } from 'react-bootstrap';
import Title from "../RestaurantList/Title";
// import ImagesRestaurant from "./ImagesRestaurant";
import Location from './Location';
import Reviews from "./Reviews/";
import AddInput from "./Reviews/AddInput";
import Reservation from "../Reservation";
import { getData } from '../../utils/api';


class RestaurantDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {
        images: [],
        reviews: []
      }
    }
    this.getRestaurantDetails = this.getRestaurantDetails.bind(this);
  }

  getRestaurantDetails() {
    let path = "restaurant/" + this.props.match.params.restaurantId
    getData(path).then(restaurant => this.setState({ restaurant }))
  }

  componentDidMount() {
    this.getRestaurantDetails();
  }
  render() {
    return (
      <>
        <Title titulo={this.state.restaurant.name} />
        <Row>
          <Col xs={8} className="margin-img">
            {/* <ImagesRestaurant imgs={this.state.restaurant.images} /> */}
            <AddInput restaurantId={this.state.restaurant.id} />
              <Reviews info={this.state.restaurant.reviews}/>
          </Col>
          <Col xs={4} className="margin-img">
            <Location address={this.state.restaurant.address} rating={this.state.restaurant.rating} />
            <Reservation />
          </Col>
        </Row>
      </>
    );
  }
}

export default RestaurantDetails;
