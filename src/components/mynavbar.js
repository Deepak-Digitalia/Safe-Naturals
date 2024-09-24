import React from 'react';


import './navbar.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaSearch } from 'react-icons/fa'; // Import the search icon




function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar-safe">
 
   
   
      <Container>
        
      <Navbar.Brand href="#home">
      <img className='nav_logo' src={require('../img/Logo.png')} alt="Logo" style={{ height: '50px', marginLeft: '20px', marginRight: '50px' }} />
     </Navbar.Brand>
    

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
          <Nav className="me-auto">
          <Form inline="true">
        <Row className='int_row'>
        <Col xs="auto">
  
          </Col>
          <Col className='int_icon_wrapper' xs="auto">
          <FaSearch className='int_icon' style={{ height: '20px', width: '20px' }} />
            <Form.Control
              type="text"
              placeholder="  Search of Products "
              className="int_nav mr-sm-2"
            />
           
          </Col>
         
        </Row>
      </Form>
       <div className=' d-lg-flex justify-content-evenly  nav-lnk_con'>
            <Nav.Link href="/">Home</Nav.Link>
          
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">About Us </Nav.Link>
            <Nav.Link href="#link">Contact Us </Nav.Link>
         <Button className='login_btn'>
            Login
         </Button>
</div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
