import React, { Component } from "react";
import { Card, Col, Row, Container } from 'react-bootstrap';
import Link from 'react-router-dom/Link';
import StarRatingComponent from 'react-star-rating-component';

import './Restaurant.css';

class Restaurant extends Component {
  render() {
    return (
      <>
        <Link className="links" to="/breakfast/superSalads">
          <Container className="container">
            <Row>
              <Col xs={2} className="margin-img">
                <Card.Img variant="top" src={this.props.info.image} className="images" />
              </Col>
              <Col xs={10}>
                <Card className="card">
                  <Card.Header className="card-header"><h5>{this.props.info.name}</h5>
                    <div>
                      <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={this.props.info.rating}
                        editing={false}
                      />
                    </div>
                    <small>
                    {this.props.info.address}
                    </small>
                  </Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <footer className="blockquote-footer">
                      {this.props.info.last_review['review']} <br />
                        <cite title="Source Title"> {this.props.info.last_review['author']}</cite>
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
