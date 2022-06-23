import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import { InMemorySigner } from 'near-api-js';
import {Container,Row,Card} from "react-bootstrap"

const RoomList = (props) => {
const [room, changeRoom] = useState([

]);
useEffect(()=>{
const getInfo = async() =>{
  let userMemos = await window.contract.getDetails({
    user:window.accountId,
  })
  changeRoom(userMemos)
}
getInfo();
},[])

    return (
        <Container>
          {room.map((el,i)=>{
            return (
              <Row style={{margin:"3vh"}} key={i} className="d-flex justify-content-center">
                <Card>
                  <Card.Title>
                    Room Booked
                  </Card.Title>
                  <Card.Body>{el}</Card.Body>
                </Card>
              </Row>
            )
          })}
        </Container>
    );
};

RoomList.propTypes = {
    
};

export default RoomList;