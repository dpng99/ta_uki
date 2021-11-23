import React from 'react'
import { Container, Card, Row, Col, Image } from 'react-bootstrap'
import Kucing from '../Images/kucing.jpg'
import Banner from '../Images/banner.jpg'
import Banner2 from '../Images/bannerwd.jpg'
const HomePage = () => {
    return (
        <Container fluid='xxl' className='justify-content-center align-items-center ' style={{ display: 'grid' }}> 
        <Image src={Banner2} fluid/>
            <Container fluid='xxl' >
                <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card fluid='lg'>
                            <Card.Body>
                            <Card.Img src={Kucing} />
                                <Card.Title>
                                    Gambar Kucing
                                </Card.Title>
                                <Card.Text>Ini adalah kucing langka yah</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                </Row>
            </Container>
        </Container>
    )
}

export default HomePage
