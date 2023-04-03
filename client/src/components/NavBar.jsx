import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import { FaShoppingBasket ,FaRegHeart, FaUserAlt } from 'react-icons/fa';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const NavBar = () => {
  return (
    <><Navbar fixed="bottom" id='navbar' expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src={logo} width={40} alt='logo'></img> My Reading Corner</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>

          <OverlayTrigger
              key={'top'}
              placement={'top'}
              overlay={
                <Tooltip id={`tooltip-top`}>
                  Wishlist
                </Tooltip>
              }
            ><Nav.Link href="#link" ><FaRegHeart id='navicons'/></Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger
              key={'top'}
              placement={'top'}
              overlay={
                <Tooltip id={`tooltip-top`}>
                  Login
                </Tooltip>
              }
            ><Nav.Link href="/login" ><FaUserAlt id='navicons' /></Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger
              key={'top'}
              placement={'top'}
              overlay={
                <Tooltip id={`tooltip-top`}>
                  Shopping Cart
                </Tooltip>
              }
            ><Nav.Link href="#link" ><FaShoppingBasket id='navicons'/></Nav.Link>
            </OverlayTrigger>
            




          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></>
  )
}

export default NavBar