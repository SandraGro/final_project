import React, { Component } from "react";
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import Location from '../Location/Location';

class ImagesRestaurant extends Component {
  render() {
    return (
      <>
        <Row>
          <Col xs={8} className="margin-img">
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
          </Col>
          <Col xs={4}>    
            <Location/>
          </Col>
        </Row>
      </>

    );
  }
}

export default ImagesRestaurant;
