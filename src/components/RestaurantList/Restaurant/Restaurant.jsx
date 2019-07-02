import React, { Component } from "react";
import { Card, Col, Row, Container } from 'react-bootstrap';
import Link from 'react-router-dom/Link';
import StarRatingComponent from 'react-star-rating-component';

import './Restaurant.css';
// import { userInfo } from "os";

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
    
  }
    render() {
      return (
        <>
          <Link className="links" to={"/restaurant/" + this.props.info.id}>
            <Container className="container">
              <Row>
                
                <Col sm xs={12} md lg={2} className="margin-img">
                  <Card.Img variant="top" src={this.props.info.image} className="images" />
                </Col>
                <Col sm xs={12} md lg={10}> 
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
                          {this.props.info.reviews.map((review) =>
                            <cite title="Source Title"> {this.props.info.reviews[0].review}
                            </cite>
                          )} <br />
                          {this.props.info.reviews.map((review) =>
                            <cite title="Source Title"> {this.props.info.reviews[0].user.name}
                            </cite>
                          )}
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
