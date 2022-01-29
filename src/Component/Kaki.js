import React from 'react'
import {Container, Image} from 'react-bootstrap'
import Tokopedia from  '../Images/tokopediaNew.png'
import Instagram from '../Images/instagram.png'
const Kaki = () => {
    return (
      <footer className='footer d-flex border-top mt-3 d-grid'>
          <Container className='align-items-start'>
              <Image className='img-fluid m-2' src={Tokopedia} style={{ height: '25px' }}/>
              <a href='https://www.instagram.com/kana_kurniateknik/'>
              <Image className='img-fluid m-2' src={Instagram} style={{ height: '25px' }} />
              </a>
          </Container>
      </footer>
    )
}

export default Kaki
