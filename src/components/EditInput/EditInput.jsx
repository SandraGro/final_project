import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import { userIsLoggedIn } from '../../utils/login';
import {patchData} from '../../utils/api';
import './EditInput.css';


class editInput extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      error: false,
      review: this.props.review,
      editedText: this.props.review.review,
      editedRating: this.props.review.rating
    }

    this.onSetReview = this.onSetReview.bind(this);
    this.onSetRating = this.onSetRating.bind(this);
    this.editReview = this.editReview.bind(this);
  }
  editReview(event) {
    let request = {
      review: this.state.editedText,
      rating: this.state.editedRating
    }
    patchData('review', this.props.review.id, request).then(() => {
      window.location.reload();
    }).catch(err => {
      this.setState({ error: "Something went wrong, make sure your review is not empty and try again." });
    });
    event.preventDefault();
  }

  onSetReview(event){
    this.setState({
        editedText: event.target.value
    })
  }

  onSetRating(newRating, old, name){
    this.setState({
      editedRating: newRating
    })
  }

  render() {
    return (
      <>
        <br />
        <div className="review-form">
          <form onSubmit={this.editReview}>
            {userIsLoggedIn()
              ? <>
                <Form.Control size="sm" type="text" value={this.state.editedText} className="input-review" name="review" onChange={this.onSetReview} />
                <Button variant="outline-success" size="sm" type="submit">Post </Button>
                <StarRatingComponent className="rating"
                  name="editRating"
                  starCount={5}
                  value={this.state.editedRating}
                  editing={true}
                  onStarClick={this.onSetRating}
                />
                <div><small className="text-danger" style={this.state.error ? {} : { display: 'none' }}>{this.state.error}</small></div>
              </>
              : <></>
            }
          </form>
        </div>
      </>
    );
  }
}

export default editInput;
