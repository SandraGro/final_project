import React, { Component } from "react";
import {Form, Button, Nav, Navbar, FormControl} from 'react-bootstrap';
import './Header.css';

class Header extends Component {
  render() {
    return(
    <Navbar bg="light" variant="light">
    <img src= "/assets/logo-01.png" alt="let's eat" />
      <Nav className="justify-content-end nav-flex">
        <Nav.Link href="#home">Breakfast</Nav.Link>
        <Nav.Link href="#features">Lunch</Nav.Link>
        <Nav.Link href="#pricing">Dinner</Nav.Link>
        <Nav.Link href="#pricing">Desserts</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Log in</Button>
      </Form>
    </Navbar>);
  }
}

export default Header;
