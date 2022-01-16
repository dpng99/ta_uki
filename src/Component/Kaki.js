import React from 'react'
import {Container, Image} from 'react-bootstrap'
import Tokopedia from  '../Images/tokopedia.png'
import Instagram from '../Images/instagram2.png'
const Kaki = () => {
    return (
      <footer className='footer d-flex border-top mt-3 d-grid'>
          <Container className='align-items-start'>
              <Image className='img-fluid' src={Tokopedia} style={{ height: '100px' }}/>
              <Image className='img-fluid' src={Instagram} style={{ height: '100px' }}/>
          </Container>
      </footer>
    )
}

export default Kaki
