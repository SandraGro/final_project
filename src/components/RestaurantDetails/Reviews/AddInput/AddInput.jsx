import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
import './AddInput.css';
class AddInput extends Component {
  render() {
    return (
      <>
        <br />
        <div className="review-form">
          <Form.Control size="sm" type="text" placeholder="Write a Review" className="input-review" />
          <Button variant="outline-success" size="sm">Post </Button>
        </div>
      </>
    );
  }
}

export default AddInput;
