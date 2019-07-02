import React, { Component } from "react";
import { Card, Button, Col, Row } from 'react-bootstrap';
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
                    <Row>
                       <Col xs={2}>
                        <img src={'https://i.pravatar.cc/50?u=' + review.user.id} alt={review.user.name} />
                        <br/>
                        <cite title="Source Title">{review.user.name}</cite>
                      </Col>
                      <Col xs={8}>
                      {this.state.editing !== review.id && (<blockquote className="blockquote-footer">
                          {review.review}
                        </blockquote>)}
                          <div>
                           {this.state.editing !== review.id && (<span className="rate">
                              <StarRatingComponent
                                name="rate1"
                                starCount={5}
                                value={review.rating}
                                editing={false}
                              />
                            </span>)}
                            {
                              this.state.editing === review.id && <EditInput review={review} />
                            }

                            {this.state.userDetails.id === review.user.id
                              // eslint-disable-next-line
                              ?
                              <div>
                                <Button onClick={() => this.deleteReview(review.id)} variant="light" size="sm" className="delete-Btn">Delete</Button>
                                <Button onClick={() => this.setState({
                                  editing: review.id
                                })} variant="light" size="sm">Edit</Button>

                              </div>

                              : (<></>)
                            }
                          </div>
                      </Col>
                    </Row>
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

