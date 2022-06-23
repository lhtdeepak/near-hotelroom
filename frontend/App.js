import 'regenerator-runtime/runtime'
import React from 'react'

import './assets/css/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row, Card } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Logo from './assets/img/hotel_logos_3.png';
import { login, logout } from './assets/js/near/utils'
import getConfig from './assets/js/near/config';
import Room from "./Components/addRoom"
import RoomList from './Components/roomList';
import Hotel from './assets/img/hotel.jpg';


const { networkId } = getConfig(process.env.NODE_ENV || "development")

export default function DeCash() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/"><img src={Logo} className="Logo-style" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav.Link href='/view-rooms' style={{ color: "red" }}>View Room List</Nav.Link>
            <Nav.Link style={{ color: "red" }} onClick={window.walletConnection.isSignedIn() ? logout : login}>{window.walletConnection.isSignedIn() ? window.accountId : "Login"}</Nav.Link>
            <Nav className="me-auto">
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {window.walletConnection.isSignedIn() ?
        (
          <Container >
            <Row className='hotel-img'>
              <Switch>
                <Route exact path="/"><Room /></Route>
                <Route exact path="/view-rooms"><RoomList /></Route>
              </Switch>
            </Row>
          </Container>

        )
        :
        (
          <div className="row">
            <div className="col-12 col-md-8 padding-0"><img src={Hotel} className="main-img" /></div>
            <div className="col-6 col-md-4 padding-0"><div className='hotel-div div-hotel'><p className='hotel-p'>Welcome to Hours Hotel Room</p>
              <p className='hotel-p'>Please Sign In</p></div></div>
          </div>
        )
      }

    </Router>
  );
}
