import React, { Component } from "react";
import { Card, CardDeck } from 'react-bootstrap';
import Link from 'react-router-dom/Link';
import { getData } from '../../../utils/api';
import './SelectorHome.css';

class SelectorHome extends Component {
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
        <div className="padd">
          <p className="title">What are you craving?</p>
          <CardDeck>
            {
              this.state.categories.map((category) => {
                return <Card>
                  <Link className="links" to={'/restaurants/'+ category['path']} >
                    <Card.Img variant="top" src={category['image']} />
                    <Card.Footer>
                      <Card.Title className="category">{category['title']}</Card.Title>
                    </Card.Footer>
                  </Link>
                </Card>
              })
            }
          </CardDeck>
        </div>
      </>
    );
  }
}

export default SelectorHome;
