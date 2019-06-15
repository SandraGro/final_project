import React, { Component } from "react";
import { Card } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import './Reviews.css'


class Reviews extends Component {
  render() {
    return (
      <>
        <Card className="card">
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <footer className="blockquote-footer">
                Aquí va la reseña blah blah blah reseña blah blah blah reseña blah blah blah reseña blah blah blah reseña blah blah blah <br />
                <cite title="Source Title">Autor de la reseña</cite>
                <span className="rate">
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={4.5}
                    editing={false}
                  />
                </span>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
        <hr/>
      </>
    );
  }
}

export default Reviews;

