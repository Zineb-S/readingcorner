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
    <div className="col-md-12 text-center" >
    <Button variant="warning" href="/bestsellers" style={{marginTop:-3}} > Best Sellers</Button>
    <Dropdown style={{display:'inline-grid'}}>
            <Dropdown.Toggle variant="dark" id="dropdown-basic" >
              Genre      </Dropdown.Toggle>

            <Dropdown.Menu>
              
              <Dropdown.Item href="#/action-3">Classic</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Crime</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Fantasy</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Fiction</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Romance</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        
      </div>
      <div id="search" >
        <InputGroup className="mb-3" >
          <Form.Control 
            placeholder="Search book by title or author"
            aria-label="Search book by title or author"
            aria-describedby="basic-addon2"
            
          />
          <InputGroup.Text id="basic-addon2" >Search</InputGroup.Text>
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