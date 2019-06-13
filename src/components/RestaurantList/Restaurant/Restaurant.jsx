import React, { Component } from "react";
import { Card, Col, Row, Container } from 'react-bootstrap';
import Link from 'react-router-dom/Link';
import StarRatingComponent from 'react-star-rating-component';

import './Restaurant.css';

class Restaurant extends Component {
  render() {
    return (
      <>
        <Link className="links" to="/home" >
          <Container className="container">
            <Row>
              <Col xs={2} className="margin-img">
                <Card.Img variant="top" src="/assets/breakfast3.jpg" className="images" />
              </Col>
              <Col xs={10}>
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
        </Link>
        <hr />
        <br />
      </>
    );
  }
}

export default Restaurant;
