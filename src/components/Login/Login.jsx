import React, { Component } from "react";
import { Form, Button, Modal } from 'react-bootstrap';
import { postData } from '../../utils/api';
import './Login.css';



class Login extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.sendForm = this.sendForm.bind(this);

    this.state = {
      error: false,
      show: false,
    };
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
    postData('login', object).then((output) => {
      localStorage.setItem('userToken', output.token);
      this.handleClose();
      window.location.reload();
    }).catch(err => {
      this.setState({ error: "Incorrect user or password." });
    });
    event.preventDefault();
  }


  render() {
    return (
      <>
        <Button variant="primary" className="login-button" onClick={this.handleShow}>
          LogIn
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="title-logIn">Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.sendForm}>
              <Form.Text className="text-danger" style={this.state.error ? {} : { display: 'none' }}>{this.state.error}</Form.Text>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
    </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />
              </Form.Group>
              
              <Button variant="secondary" type="submit">
                Log In
  </Button>
            </form>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
        </Modal>
      </>
    );
  }
}


export default Login;
