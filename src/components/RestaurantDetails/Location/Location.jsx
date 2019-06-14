import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';

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
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBG43kiQGWcUW431q9ExwLxc7IVM97i9Co' }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >

        </GoogleMapReact>
      </div>
    );
  }
}

export default Location;
