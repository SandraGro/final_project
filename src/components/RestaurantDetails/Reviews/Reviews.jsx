import React, { Component } from "react";
import { Card } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import './Reviews.css'


class Reviews extends Component {
  render() {
    return (
      <>
        {
          this.props.info.map((review) => {
            return (
              <>
                <Card className="card">
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <footer className="blockquote-footer">
                        {review.review}
                        <br />
                        <cite title="Source Title">{review.author}</cite>
                        <span className="rate">
                          <StarRatingComponent
                            name="rate1"
                            starCount={5}
                            value={review.rating}
                            editing={false}
                          />
                        </span>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Card>
                <hr />
              </>
            )
          })
        }
      </>
    );
  }
}

export default Reviews;

