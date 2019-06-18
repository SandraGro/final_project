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
        <Navbar bg="light" variant="light">
          <Link className="links" to="/" >
            <img src="/assets/logo-01.png" alt="let's eat" />
          </Link>
          <Nav className="justify-content-end nav-flex">
            {
              this.state.categories.map((category) =>
                <Link className="links" to={"/" + category['path']} >
                  <Nav.Link href={"/" + category['path']} className="padd-right" >{category['title']}</Nav.Link>
                </Link>
              )
            }
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <i class="fas fa-search"></i>
          </Form>
          <Login />
          <SignUp />
        </Navbar>
      </>
    );
  }
}

export default Header;
