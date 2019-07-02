import React, { Component } from "react";
import { Button, Modal } from 'react-bootstrap';


class ModalReservation extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Find a table
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="textTitle">Approved reservation!</Modal.Title>
          
          </Modal.Header>
          <Modal.Body>The details of your reservation have been sent to your email</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Confirm Reservation
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}


export default ModalReservation;
