import React from 'react'
import { Container, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './Nav'
import Kaki from './Kaki'
const HomePage = ({imaging}) => {

    return (
        <>

       <Navigation/>
        <Container fluid='xxl'style={{ display: 'grid', height: '100%', width: '100%' }}> 
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
