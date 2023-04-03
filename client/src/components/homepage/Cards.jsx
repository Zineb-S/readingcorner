import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import Carousel from 'react-bootstrap/Carousel';
import book2 from "../../assets/books2.jpeg"
import cover from "../../assets/cover.jpg"
import library from "../../assets/library.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "swiper/css";
import "swiper/css/pagination";
import { FaShoppingCart } from 'react-icons/fa';
const Cards = () => {
    return (
        <>
     
        
       
        
        <Swiper
            slidesPerView={6}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide><Card className='cards'>
                <Card.Img variant="top" src={cover} style={{ marginTop:10}} />
                <Card.Text>Fiction</Card.Text>
                <Card.Title>Milk and Honey</Card.Title> 
                <Card.Text>150.00 Dhs<Button id='purchasebtn' variant="warning" style={{ marginLeft:10 , marginBottom:10}} > <FaShoppingCart /></Button></Card.Text>
                    
            </Card></SwiperSlide>
            <SwiperSlide><Card className='cards'>
                <Card.Img variant="top" src={cover} style={{ marginTop:10}}/>
                <Card.Text>Fiction</Card.Text>
                <Card.Title>Milk and Honey</Card.Title> 
                <Card.Text>150.00 Dhs<Button id='purchasebtn' variant="warning" style={{ marginLeft:10 , marginBottom:10}}  > <FaShoppingCart /></Button></Card.Text>
            </Card></SwiperSlide>
            <SwiperSlide><Card className='cards'>
                <Card.Img variant="top" src={cover} style={{ marginTop:10}} />
                <Card.Text>Fiction</Card.Text>
                <Card.Title>Milk and Honey</Card.Title> 
                <Card.Text>150.00 Dhs<Button id='purchasebtn' variant="warning" style={{ marginLeft:10 , marginBottom:10}}  > <FaShoppingCart /></Button></Card.Text>
            </Card></SwiperSlide>
            <SwiperSlide><Card className='cards'>
                <Card.Img variant="top" src={cover} style={{ marginTop:10}} />
                <Card.Text>Fiction</Card.Text>
                <Card.Title>Milk and Honey</Card.Title> 
                <Card.Text>150.00 Dhs<Button id='purchasebtn' variant="warning" style={{ marginLeft:10 , marginBottom:10}}  > <FaShoppingCart /></Button></Card.Text>
            </Card></SwiperSlide>
            <SwiperSlide><Card className='cards'>
                <Card.Img variant="top" src={cover} style={{ marginTop:10}} />
                <Card.Text>Fiction</Card.Text>
                <Card.Title>Milk and Honey</Card.Title> 
                <Card.Text>150.00 Dhs<Button id='purchasebtn' variant="warning" style={{ marginLeft:10 , marginBottom:10}}  > <FaShoppingCart /></Button></Card.Text>
            </Card></SwiperSlide>
            <SwiperSlide><Card className='cards'>
                <Card.Img variant="top" src={cover} style={{ marginTop:10}} />
                <Card.Text>Fiction</Card.Text>
                <Card.Title>Milk and Honey</Card.Title> 
                <Card.Text>150.00 Dhs<Button id='purchasebtn' variant="warning" style={{ marginLeft:10 , marginBottom:10}}  > <FaShoppingCart /></Button></Card.Text>
            </Card></SwiperSlide>
            <SwiperSlide><Card className='cards'>
                <Card.Img variant="top" src={cover} style={{ marginTop:10}} />
                <Card.Text>Fiction</Card.Text>
                <Card.Title>Milk and Honey</Card.Title> 
                <Card.Text>150.00 Dhs<Button id='purchasebtn' variant="warning" style={{ marginLeft:10 , marginBottom:10}}  > <FaShoppingCart /></Button></Card.Text>
            </Card></SwiperSlide>
            <SwiperSlide><Card className='cards'>
                <Card.Img variant="top" src={cover} style={{ marginTop:10}} />
                <Card.Text>Fiction</Card.Text>
                <Card.Title>Milk and Honey</Card.Title> 
                <Card.Text>150.00 Dhs<Button id='purchasebtn' variant="warning" style={{ marginLeft:10 , marginBottom:10}}  > <FaShoppingCart /></Button></Card.Text>
            </Card></SwiperSlide>
        </Swiper></>

    )
}

export default Cards