import React from 'react'
import { Container, Card, Row, Col, Image } from 'react-bootstrap'
import Kucing from '../Images/kucing.jpg'
import Banner from '../Images/banner.jpg'
import Banner2 from '../Images/bannerwd.jpg'
const HomePage = () => {

    return (
        <Container fluid='xxl'style={{ display: 'grid', height: '100%', width: '100%' }}> 
        <Image src={Banner2} fluid style={{ height: '200px', width: '100%' }}/>
           
                <Row xs={1} md={2} xl={4} xxl={4} className="g-4" style={{ marginTop:'10px' }}>
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card fluid>
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
    )
}

export default HomePage
