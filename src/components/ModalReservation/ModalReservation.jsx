import React, { Component } from "react";
import { Button, Modal } from 'react-bootstrap';
import './ModalReservation.css'


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

        <Modal dialogClassName="modalReservation" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header className="headerRervation" closeButton>
            <Modal.Title className="textTitle">Reservation</Modal.Title>
          
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
