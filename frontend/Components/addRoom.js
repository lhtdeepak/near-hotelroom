import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { utils } from 'near-api-js';
import { Row, Col, Card, Button, Form } from "react-bootstrap"

const Room = (props) => {
  const memoField = useRef("");
  const nearField = useRef("");
  const roomField = useRef("");
  const priceField = useRef("");
  const addressField = useRef("");
  const recipientField = useRef("");
  const roomnoField = useRef("");


  const [buttonState, changeButtonState] = useState(false);



  const submitButton = async () => {
    changeButtonState(true);

    let isThereText = memoField.current.value.match("[A-Za-z0-9]");

    console.log(recipientField.current.value);
    console.log(memoField.current.value);
    console.log(nearField.current.value);
    console.log(roomField.current.value);
    console.log(priceField.current.value);
    console.log(addressField.current.value);
    console.log(roomnoField.current.value);

    if (isThereText === null) {
      alert(
        "Please Fill Details"
      );
    } else {
      console.log("Details");


      await window.contract.addDetails({
        reciver: recipientField.current.value,
        memo: memoField.current.value,
        hours: nearField.current.value,
        room: roomField.current.value,
        price: priceField.current.value,
        address: addressField.current.value,
        roomno: roomnoField.current.value,
      });


      await window.contract.ConfirmRoomNumber({
        account: recipientField.current.value,
        roomnumber: roomnoField.current.value
        ,
      });

      alert("Room Booked");
    }
    changeButtonState(false);
  };

  return (
    <div>
      <Card style={{ marginTop: "3vh", backgroundColor: "transparent", border: "none" }}>
        <Card.Body>
          <Card.Title className='fc-red'>Room Allotment</Card.Title>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className='fc-red'>ID</Form.Label>
                <Form.Control ref={recipientField} placeholder="examples.testnet"></Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className='fc-red'>Room Type* </Form.Label>
                <Form.Control ref={roomField} placeholder="Enter Room type"></Form.Control>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                <Form.Label className='fc-red'>Hours/Day* </Form.Label>
                <Form.Control ref={nearField} placeholder="Enter Hours or Day"></Form.Control>
              </Form.Group>

              <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
                <Form.Label className='fc-red'>Price* </Form.Label>
                <Form.Control ref={priceField} placeholder="Enter Price"></Form.Control>
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
                <Form.Label className='fc-red'>Room No* </Form.Label>
                <Form.Control ref={roomnoField} placeholder="Enter Room No."></Form.Control>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label className='fc-red'>Address* </Form.Label>
              <Form.Control ref={addressField} placeholder="Enter Address"></Form.Control>
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label className='fc-red'>Message*</Form.Label>
                <Form.Control ref={memoField} placeholder="Write Message" as="textarea" rows={5}></Form.Control>
              </Form.Group>
            </Row>
          </Form>
          <div className='btn-submit'>
            <Button disabled={buttonState}
              onClick={submitButton} variant="primary" style={{ marginTop: "3vh", backgroundColor: "red", border: "red" }}>Book Room</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

Room.propTypes = {

};

export default Room;