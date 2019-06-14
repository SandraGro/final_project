import React, { Component } from "react";
import './RestaurantDetails.css'
import Title from "../RestaurantList/Title";
import ImagesRestaurant from "./ImagesRestaurant/ImagesRestaurant";

class RestaurantDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <>
        <Title titulo="Super Salads"/>
        <ImagesRestaurant/>
      </>
    );
  }
}

export default RestaurantDetails;
