import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import bannerPic from '../../assets/library.jpg'
import Carousel from 'react-bootstrap/Carousel';
import NavBar from '../NavBar'
import Cards from "./Cards";
const Home = () => {
  return (
    <>

      <div id="banner">
      
        <Carousel variant="light" id="slidebanner">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bannerPic}
          width={300}
          height={300}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bannerPic}
          width={300}
          height={300}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bannerPic}
          width={300}
          height={300}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div class="col-md-12 text-center">
    <Button variant="warning"  style={{marginTop:8}} > Best Sellers</Button>
        </div>
        
      </div>
      <div id="search">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search book by title or authors"
            aria-label="Search book by title or authors"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
          <Dropdown >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Genre      </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </InputGroup>
      </div>

      <h3 style={{ marginLeft: 50, marginTop: 20 }}>English Books </h3>
      <div id="engbooks">
        <Cards></Cards>
      </div>
      <h3 style={{ marginLeft: 50, marginTop: 20 }}>French Books </h3>
      <div id="frbooks">
        <Cards></Cards>
      </div>

      <NavBar></NavBar>

    </>
  )
}

export default Home