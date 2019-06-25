import React, { Component } from "react";
import { Form, Nav, Navbar, FormControl } from 'react-bootstrap';
import Link from 'react-router-dom/Link';
import Login from '../Login';
import { getData } from '../../utils/api';
import SignUp from "../SignUp/SignUp";
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
    this.getCategories = this.getCategories.bind(this);
  }

  getCategories() {
    getData("categories").then(categories => this.setState({ categories }))
  }

  componentDidMount() {
    this.getCategories();
  }

  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Link className="links" to="/" >
            <img src="/assets/logo-01.png" alt="let's eat" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end nav-flex">
              {
                this.state.categories.map((category) =>
                  <Link className="links" to={"/restaurants/" + category['path']} >
                    <Nav.Link href={"/restaurants/" + category['path']} className="padd-right" >{category['title']}</Nav.Link>
                  </Link>
                )
              }
            </Nav>
            <div>
            <Form inline action="/search">
              <FormControl type="text" name="q" placeholder="Search" className="mr-sm-2" />
              <i className="fas fa-search"></i>
            </Form>
            </div>
            <Login />
            <SignUp />
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
