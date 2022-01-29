import React from 'react'
import {Card, Container, Image, Button, Row, Col} from 'react-bootstrap'
import Kaki from './Kaki'
import Navigation from './Nav'
const Shop = ({isinya}) => {
    return (
        <>
        <Navigation/>
       <Container fluid className='align-items-center justify-content-center'>
           <Container fluid>
               <Image/>
               <h1 className='text-center'>Shop</h1>
           </Container>
           <Container fluid className='align-items-center justify-content-center d-flex'>
               <Row xs={1} md={2} xl={3} >
               {isinya ? isinya.map((data, index) => 
               <Col >
               <Card className=' m-2' key={index}>
                   <Card.Img variant='top' className='img-fluid h-50 w-50 align-self-center' src={data.sumber}/>
                   <Card.Body>
                       <Card.Title>{data.nama}</Card.Title>
                       <Card.Text>{data.text}</Card.Text>
                       <Button variant="primary" href={data.path}>Go to Product</Button>
                   </Card.Body>
               </Card>
               </Col>
            ) : null}
               </Row>
           </Container>
       </Container>
       <Kaki/>
       </>
    )
}

export default Shop
