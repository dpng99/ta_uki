import React from 'react'
import { Container, Image, Card } from 'react-bootstrap'
import AboutBg from '../Images/logo2.jpg'
import Kaki from './Kaki'
import Nav from './Nav'
const About = () => {
    return (
        <>
        <Nav/>
      <Container>
        <Container fluid className="align-items-center justify-content-center">
        <Container fluid className='align-items-center justify-content-center d-grid'>
                <h1 className='fs-3 text-center mb-3'>About Us</h1>
        </Container>
        <Container fluid className='align-items-center h-25 justify-content-center d-flex m-3'>
              <Image src={AboutBg}  className='img-fluid w-50 h-25'/>
        </Container>
              <Card.Text className='text-wrap text-center m-2'>Precous Plastik Bandung menyediakan beberapa produk dari hasil olahan sampah plastik</Card.Text>
              <Card.Text className='text-wrap text-center m-2'>dengan cara kamu membeli produk olahan sampah plastik sercara tidak langsung kamu melindungi alam dari bahaya sampah plastik</Card.Text>
        </Container>
      </Container>
      <Kaki/>
      </>
    )
}

export default About
