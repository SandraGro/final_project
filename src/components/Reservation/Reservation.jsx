import React, { Component } from "react";
import './Reservation.css'
import { Card } from 'react-bootstrap';
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
              <Card.Title> <i class="far fa-calendar-alt calendar fa-lg" ></i> Reservations</Card.Title>

            </Card.Body>
            <DayPickerInput className="dayPiker" onDayChange={day => console.log(day)} />

            <TimePicker
              showSecond={false}
              className="timePicker"
              defaultValue={moment().hour(0).minute(0)}
              format={'h:mm a'}
              use12Hours
              inputReadOnly />
            <input className="timePicker" type="number" />
            <ModalReservation />
          </Card>
        </div>
      </>
    );


  }
}

export default Reservation;

