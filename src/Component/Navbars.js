import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faUserPlus, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux'
function Navbars() {
  const cartdata=useSelector((state)=>state.handleCart)
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className='position-sticky top-0 z-2'>
        <Container>
          <Navbar.Brand>E-Mart</Navbar.Brand>
          <Nav className="m-auto">
           <Nav.Link> <NavLink to="/" style={{textDecoration:'none', color:'black'}}>Home</NavLink></Nav.Link>
           <Nav.Link><NavLink to="/products" style={{textDecoration:'none', color:'black'}}>Product</NavLink></Nav.Link>
           <Nav.Link><NavLink to="/" style={{textDecoration:'none', color:'black'}}>About</NavLink></Nav.Link>
           <Nav.Link><NavLink to="/" style={{textDecoration:'none', color:'black'}}>Contact</NavLink></Nav.Link>
          </Nav>
          
          <Nav>
            <ButtonGroup size='sm'>
              <Button variant='secondary'><Nav.Link className='mr-auto' href="#login">
              <FontAwesomeIcon icon={faRightToBracket} /> Login</Nav.Link></Button>
              <Button variant='secondary'><Nav.Link className='mr-auto' href="#singup">
              <FontAwesomeIcon icon={faUserPlus}/> Sign-Up</Nav.Link></Button>
              <Button variant='secondary'><Nav.Link className='mr-auto' href="#cart">
              <FontAwesomeIcon icon={faCartPlus} /> Cart ({cartdata.length})</Nav.Link></Button>
            </ButtonGroup>
          </Nav>
          
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;