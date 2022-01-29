import React from 'react'
import { Container, Button, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './Nav'
import Kaki from './Kaki'
import AboutBg from '../Images/logo2.jpg'
const HomePage = ({imaging}) => {

    return (
        <>
       <Navigation/>
        <Container fluid className='d-grid justify-content-center align-items-center'>
        <Container fluid className='align-items-center mt-4 justify-content-center d-flex'> 
        <Image src={AboutBg} className='img-fluid w-50 h-25'/>
        </Container>
           <h1 className='text-center text'>Quick Link</h1>
           <Container className='align-items-center justify-content-center d-grid'>
               {Object.keys(imaging).map((item) =>
           <Button href={imaging[item].path} className="btn-outline-light btn-dark m-2 shadow">{imaging[item].nama}</Button>
           )}
           </Container>
        </Container>
        <Kaki/>
        </>
    )
}

export default HomePage
