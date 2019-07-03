import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import StarRatingComponent from 'react-star-rating-component';
import './Location.css';

class Location extends Component {
  constructor() {
    super()
    this.state = {
      center: {
        lat: 20.657457,
        lng: -103.397552
      },
      zoom: 17
    }
  }
  render() {
    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBG43kiQGWcUW431q9ExwLxc7IVM97i9Co' }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >

        </GoogleMapReact>
        <div>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={this.props.rating}
            editing={false}
          />
        </div>
        <div className="address">
        <small>
          {this.props.address}
        </small>
        </div>
      </div>
    );
  }
}

export default Location;
