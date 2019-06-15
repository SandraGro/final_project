import React, { Component } from "react";
import './RestaurantDetails.css'
import { Col, Row} from 'react-bootstrap';
import Title from "../RestaurantList/Title";
import ImagesRestaurant from "./ImagesRestaurant";
import Location from './Location';
import Reviews from "./Reviews/";
import AddInput from "./Reviews/AddInput";
import Reservation from "../Reservation";

class RestaurantDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <>
        <Title titulo="Super Salads" />
        <Row>
          <Col xs={8} className="margin-img">
            <ImagesRestaurant />
            <AddInput/>
            <Reviews/>
            <Reviews/>

          </Col>
          <Col xs={4} className="margin-img">
            <Location/>
            <Reservation/>
          </Col>
        </Row>
      </>
    );
  }
}

export default RestaurantDetails;
