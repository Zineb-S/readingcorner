import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import { FaShoppingBasket ,FaRegHeart, FaUserAlt } from 'react-icons/fa';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Button, Modal, ModalBody, ModalHeader, ModalTitle, NavDropdown } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
const NavBar = () => {
  const [show,setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <ModalTitle>Shopping Cart</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <h1>Modal Body</h1>
        </ModalBody>
      </Modal>
   
        <Navbar key={'sm'} bg="light" expand={false} fixed='bottom' id='navbar' className="mb-3">
          <Container fluid>
          <Navbar.Brand href="/"><img src={logo} width={40} alt='logo'></img> My Reading Corner</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'sm'}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${'sm'}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${'sm'}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'sm'}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#link" ><Button variant='light'><FaRegHeart id='navicons'/> WishList </Button></Nav.Link>
                <Nav.Link href="/login" ><Button variant='light'><FaUserAlt id='navicons' /> Login </Button></Nav.Link>
                <Nav.Link href="#" ><Button variant='light' onClick={handleShow}><FaShoppingBasket id='navicons'/> 0 Items </Button></Nav.Link>
                 
                 
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      
   </>
  )
}

export default NavBar