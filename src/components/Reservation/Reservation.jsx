import React, { Component } from "react";
import './Reservation.css'
import { Card, Row, Col} from 'react-bootstrap';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import 'rc-time-picker/assets/index.css';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import ModalReservation from "../ModalReservation/ModalReservation";



class Reservation extends Component {
  render() {
    return (
      <>
        <div className="reservation">

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Header>
                <Card.Title>
                  <i class="far fa-calendar-alt calendar fa-lg" ></i> Reservations
                </Card.Title>
              </Card.Header>
            </Card.Body>
            <Row>
              <Col lg={12}>
                <DayPickerInput classNames={{container:"dayContainer"}} inputProps={{className:"dayPicker"}} onDayChange={day => console.log(day)} />
              </Col>
            </Row>
            <Row>
            <Col lg={6}>

              <TimePicker
                showSecond={false}
                defaultValue={moment().hour(0).minute(0)}
                format={'h:mm a'}
                use12Hours
                inputReadOnly />
            </Col>
            <Col lg={6}>
              <input className="numberInput" type="number" placeholder="2 people" />

            </Col>
             </Row>

            <ModalReservation />
          </Card>

        </div>
      </>
    );


  }
}

export default Reservation;

