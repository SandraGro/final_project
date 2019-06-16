import React, { Component } from "react";
import { Form, Nav, Navbar, FormControl } from 'react-bootstrap';
import Link from 'react-router-dom/Link';
import Login from '../Login';
import './Header.css';
import SignUp from "../SignUp/SignUp";

class Header extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Link className="links" to ="/" >
        <img src="/assets/logo-01.png" alt="let's eat" />
        </Link>
        <Nav className="justify-content-end nav-flex">
          <Link className="links" to ="/breakfast" >
          <Nav.Link href="#home" className="padd-right" >Breakfast</Nav.Link>
          </Link>
          <Link className="links" to ="/lunch" >
          <Nav.Link href="#features" className="padd-right">Lunch</Nav.Link>
          </Link>
          <Link className="links" to ="/dinner" >
          <Nav.Link href="#pricing" className="padd-right">Dinner</Nav.Link>
          </Link>
          <Link className="links" to ="/dessert" >
          <Nav.Link href="#pricing" className="padd-right">Desserts</Nav.Link>
          </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        <Login/>
        <SignUp/>
      </Navbar>);
  }
}

export default Header;
