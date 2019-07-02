import React, { Component } from "react";
import { Form, Button} from 'react-bootstrap';
import { userIsLoggedIn, getUserDetails } from '../../../../utils/login';
import StarRatingComponent from 'react-star-rating-component';
import { postData } from '../../../../utils/api';
import './AddInput.css';

class AddInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.submitReview = this.submitReview.bind(this);

    this.state = {
      error: false
    }
  }

  submitReview(event) {
    // se convierte formulario en json
    const formData = new FormData(event.target);
    var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });

    let userDetails = getUserDetails()

    object['restaurantId'] = this.props.restaurantId;
    object['userId'] = userDetails.id
    console.log(userDetails);

    postData('review', object).then(() => {
      //ToDo: Vaciar campo de review
      window.location.reload();
    }).catch(err => {
      this.setState({ error: "Make sure your review and rating are not empty and try again." });
    });
    event.preventDefault();
  }

  render() {
    return (
      <>
        <br />
        <div className="review-form">
          <form onSubmit={this.submitReview}>
            {userIsLoggedIn()
              ? <>

                <Form.Control size="sm" type="text" placeholder="Write a Review" className="input-review" name="review" />
                <Button variant="outline-success" size="sm" type="submit">Post </Button>
                <StarRatingComponent className="rating"
                  name="rating"
                  starCount={5}
                  editing={true}
                />
                <div><small className="text-danger" style={this.state.error ? {} : { display: 'none' }}>{this.state.error}</small></div>
              </>
              : <><Form.Control readOnly="readOnly" size="sm" type="text" placeholder="Sign in to post your review" className="input-review" />
                <Button disabled variant="outline-success" size="sm">Post </Button></>
            }
          </form>
        </div>
      </>
    );
  }
}

export default AddInput;
