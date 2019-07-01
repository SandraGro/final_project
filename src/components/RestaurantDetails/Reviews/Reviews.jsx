import React, { Component } from "react";
import { Card, Button } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import { deleteData } from '../../../utils/api';
import EditInput from '../../EditInput/EditInput';
import { getUserDetails } from '../../../utils/login';

import './Reviews.css'


class Reviews extends Component {
  constructor(props) {
    super(props);
    this.deleteReview = this.deleteReview.bind(this);
    this.props = {
      info: [],
      userDetails: {},
      editing: 0
    }
  }

  componentDidMount() {
    let userDetails = getUserDetails();
    this.setState({ userDetails })
  }

  deleteReview(id) {
    deleteData('review', id).then(res => {
      window.location.reload();
    });
  }


  render() {
    return (
      <>
        {
          this.props.info.map((review) => {
            return (
              <>
                <Card className="card">
                  <Card.Body>
                    <img src={'https://i.pravatar.cc/50?id=' + review.user.id} alt={review.user.name}/>
                    <blockquote className="blockquote mb-0">
                      <footer className="blockquote-footer">
                        {review.review}
                        <br />
                        {
                          this.state.editing === review.id &&<EditInput review={review}/>
                        }
                        <cite title="Source Title">{review.user.name}</cite>
                        <span className="rate">
                          <StarRatingComponent
                            name="rate1"
                            starCount={5}
                            value={review.rating}
                            editing={false}
                          />
                        </span>
                        {this.state.userDetails.id === review.user.id
                          // eslint-disable-next-line
                          ? 
                            <div>
                            <Button onClick={() => this.deleteReview(review.id)} variant="light" size="sm">Delete</Button>
                            <Button onClick={() => this.setState({
                              editing: review.id
                            })} variant="light" size="sm">Edit</Button>

                            </div>
                         
                          : (<></>)
                        }
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Card>
                <hr />
              </>
            )
          })
        }
      </>
    );
  }
}

export default Reviews;

