import React, { Component } from "react";
import { Form, Button, Modal } from 'react-bootstrap';
import { postData } from '../../utils/api';
import './SignUp.css';

class SignUp extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSuccessShow = this.handleSuccessShow.bind(this);
    this.handleSuccessClose = this.handleSuccessClose.bind(this)
    this.sendForm = this.sendForm.bind(this);

    this.state = {
      show: false,
      error: false,
      showSuccess: false
    };
  }
  handleSuccessClose() {
    this.setState({ showSuccess: false });
  }

  handleSuccessShow() {
    this.setState({ showSuccess: true });
  }


  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  sendForm(event) {
    this.setState({ error: false })
    // se convierte formulario en json
    const formData = new FormData(event.target);
    var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });

    postData('register', object).then((output) => {
      localStorage.setItem('userToken', output.token);
      this.handleClose();
      this.handleSuccessShow();
      //todo: Login
    }).catch(err => {
      this.setState({ error: "User already exists." });
    });

    event.preventDefault();
  }

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          SignUp
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="title-logIn">Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Text className="text-danger" style={this.state.error ? {} : { display: 'none' }}>{this.state.error}</Form.Text>
            <form onSubmit={this.sendForm}>
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                name='name'
              />
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
    </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' />
              </Form.Group>

              <Button variant="secondary" type="submit">
                Sign Up
  </Button>
            </form>
          </Modal.Body>

        </Modal>
        <Modal show={this.state.showSuccess} onHide={this.handleSuccessClose}>
          <Modal.Header closeButton>
            <Modal.Title>Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your account has been successfuly created!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleSuccessClose}>
              OK
            </Button>

          </Modal.Footer>
        </Modal>
      </>
    );
  }
}


export default SignUp;
