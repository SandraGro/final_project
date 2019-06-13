import React, { Component } from "react";
import { Form, Button, Nav, Navbar, FormControl } from 'react-bootstrap';
import Link from 'react-router-dom/Link';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Link className="links" to ="./home" >
        <img src="/assets/logo-01.png" alt="let's eat" />
        </Link>
        <Nav className="justify-content-end nav-flex">
          <Link className="links" to ="./breakfast" >
          <Nav.Link href="#home" className="padd-right" >Breakfast</Nav.Link>
          </Link>
          <Nav.Link href="#features" className="padd-right">Lunch</Nav.Link>
          <Nav.Link href="#pricing" className="padd-right">Dinner</Nav.Link>
          <Nav.Link href="#pricing" className="padd-right">Desserts</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Log in</Button>
        </Form>
      </Navbar>);
  }
}

export default Header;
