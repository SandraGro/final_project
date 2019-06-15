import React, { Component } from "react";
import { Card, CardGroup } from 'react-bootstrap';
import './ImagesRestaurant.css'


class ImagesRestaurant extends Component {
  render() {
    return (
      <>
        <br />
        <div className="images-rest">
          <CardGroup>
            <Card>
              <Card.Img variant="top" src="/assets/breakfast3.jpg" />
            </Card>
            <Card>
              <Card.Img variant="top" src="/assets/breakfast3.jpg" />
            </Card>
            <Card>
              <Card.Img variant="top" src="/assets/breakfast3.jpg" />
            </Card>
          </CardGroup>
        </div>
      </>

    );
  }
}

export default ImagesRestaurant;
