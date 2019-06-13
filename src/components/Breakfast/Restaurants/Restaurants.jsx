import React, { Component } from "react";
import { Card, Col, Row, Container } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

import './Restaurants.css';

class Restaurants extends Component {
  render() {
    return (
      <>
      <Container className="container">
        <Row>
          <Col sm={2} className="margin-img">
            <Card.Img variant="top" src="/assets/breakfast3.jpg" className="images" />
          </Col>
          <Col sm={10}>
            <Card className="card">
              <Card.Header className="card-header"><h5>Nombre del Restaurante</h5>
                <div>
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={4.5}
                    editing={false}
                  />
                </div>
                <small>
                  {' '}
                  Dirección Calle falsa #123 .{' '}
                </small>
              </Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <footer className="blockquote-footer">
                    Aquí va la última reseña blah blah blah <br />
                    <cite title="Source Title">Autor</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
      <hr />
      <br />
      </>
    );
  }
}

export default Restaurants;
