import React from 'react'
import { Container, Card, Image, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './Nav'
import Kaki from './Kaki'
const ProductPage = ({dataIsi}) => {

    return (
        <>
    <Navigation/>
      <Container>
          <Card className='p-3 border-2'>
              {dataIsi ?
              <>
              <Container className='container-fluid d-flex'>
                  <Container className='align-items-start'>
                  <h1 className='fw-bold'>{dataIsi.nama}</h1>
                  <Image className='img-fluid border border-2 w-50' src={dataIsi.sumber} />
                  <p className='text-start fs-4 fw-bold'>{dataIsi.price}</p>
                  </Container>
                  <Container className='align-items-center mt-4'>
                      <h3>Description</h3>
                      <p className='text-left fs-5'>{dataIsi.text}</p>
                      <p className='text-left fs-5'>{dataIsi.berat}</p>
                      <p className='text-left fs-5'>{dataIsi.descripction_product}</p>
                      <Button href={dataIsi.link} className='btn btn-success'>Link To Product</Button>
                  </Container>
              </Container>
              </>
              : null}
          </Card>
      </Container>
      <Kaki/>
      </>
    )
}

export default ProductPage
