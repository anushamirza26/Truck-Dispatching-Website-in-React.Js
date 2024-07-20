// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navbar.css'; // Import the custom CSS file
import logo  from "./Untitled_design-removebg-preview.png" 

const NavigationBar = () => {
  return (
    <Navbar expand="lg" sticky="top" className="custom-navbar">
      <Container>
      <Navbar.Brand>
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle sticky="top" aria-controls="basic-navbar-nav" className="justify-content-end1" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav style={{backgroundColor:'white'}}>
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
  
            <LinkContainer to="/CarrierSetupForm">
              <Nav.Link>Carrier Setup</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/BlogPage">
              <Nav.Link>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/realcontact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;




