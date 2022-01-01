import React from 'react'
import {Container, Image} from 'react-bootstrap'
import Tokopedia from  '../Images/tokopedia.png'
import Instagram from '../Images/instagram2.png'
const Kaki = () => {
    return (
      <Container fluid className=' footer d-flex border-top'>
          <Container className='align-items-start'>
              <Image className='img-fluid w-25 ' src={Tokopedia}/>
          </Container>
          <Container className='align-items-end'>
              <Image className='img-fluid w-25' src={Instagram}/>
          </Container>
      </Container>
    )
}

export default Kaki
