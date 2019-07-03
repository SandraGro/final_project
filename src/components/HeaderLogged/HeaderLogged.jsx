import React, { Component } from "react";
import { Form, Nav, Navbar, FormControl, Image, DropdownButton, Dropdown} from 'react-bootstrap';
import Link from 'react-router-dom/Link';
import { getData } from '../../utils/api';
import './HeaderLogged.css';
import { logoutUser, getUserDetails } from '../../utils/login';
// import '../Header/Header.css';

class HeaderLogged extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      userDetails: "",
    }
    this.getCategories = this.getCategories.bind(this);
  }

  getCategories() {
    getData("categories").then(categories => this.setState({ categories }))
  }

  componentDidMount() {
    let userDetails = getUserDetails();
    this.setState({userDetails})
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
                <FormControl type="text" name="q" placeholder="Search" className="inputSearch mr-sm-2" />
                <i className=" searchIcon fas fa-search"></i>
              </Form>
            </div>
          </Navbar.Collapse>
          <Image className="sizeImg imgUser" src={'https://i.pravatar.cc/50?u='+ this.state.userDetails.id}  alt="" rounded />
          <DropdownButton id="dropdown-basic-button" title={this.state.userDetails.name}>
            <Dropdown.Item onClick={logoutUser}>Log out</Dropdown.Item>
          </DropdownButton>

        </Navbar>
      </>
    );
  }
}

export default HeaderLogged;
