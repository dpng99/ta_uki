import React from 'react'
import { Container, Navbar, Image, Nav } from 'react-bootstrap'
import ImageLogo from '../Images/logo2.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
const Navigation = () => {
    return (
        <Navbar className='align-items-center justify-content-center d-grid border-bottom'>
            <Container className='align-items-center justify-content-center flex'>        
            <Navbar.Brand href='/'>
             <Image className='border border-2 border-dark' style={{ width: '200px', height: '100px' }}src={ImageLogo}/>
            </Navbar.Brand>
            </Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse className="justify-content-center align-items-center d-flex">
            <Nav className="me-auto d-flex align-items-center justify-content-center">
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/support">Support Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
