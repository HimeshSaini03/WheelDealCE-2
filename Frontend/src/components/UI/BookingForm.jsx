import React from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = ({ bookingInfo, handleInputChange }) => {
  const submitHandler = (event) => {
    event.preventDefault();
    // The form should not handle submission directly
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          value={bookingInfo.firstName}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          value={bookingInfo.lastName}
          onChange={handleInputChange}
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={bookingInfo.email}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          required
          value={bookingInfo.phoneNumber}
          onChange={handleInputChange}
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="text"
          name="fromAddress"
          placeholder="From Address"
          required
          value={bookingInfo.fromAddress}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="text"
          name="toAddress"
          placeholder="To Address"
          required
          value={bookingInfo.toAddress}
          onChange={handleInputChange}
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select
          name="persons"
          required
          value={bookingInfo.persons}
          onChange={handleInputChange}
        >
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select
          name="luggage"
          required
          value={bookingInfo.luggage}
          onChange={handleInputChange}
        >
          <option value="1 luggage">1 luggage</option>
          <option value="2 luggage">2 luggage</option>
          <option value="3 luggage">3 luggage</option>
          <option value="4 luggage">4 luggage</option>
          <option value="5+ luggage">5+ luggage</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="date"
          name="journeyDate"
          placeholder="Journey Date"
          required
          value={bookingInfo.journeyDate}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          name="journeyTime"
          placeholder="Journey Time"
          className="time__picker"
          required
          value={bookingInfo.journeyTime}
          onChange={handleInputChange}
        />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          name="notes"
          className="textarea"
          placeholder="Write"
          value={bookingInfo.notes}
          onChange={handleInputChange}
        ></textarea>
      </FormGroup>
    </Form>
  );
};

export default BookingForm;
