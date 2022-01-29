import React from 'react'
import {Container, Card, Image} from 'react-bootstrap'
import Img1 from '../Images/aboutus4.jpeg'
import Img2 from '../Images/aboutus2.jpeg'
import Img3 from '../Images/aboutus3.jpeg'
import Kaki from './Kaki'
import Navigation from './Nav'
const SupportUs = () => {
    return (
        <>
        <Navigation/>
        <Container>
            <Container fluid className="d-flex border-2 border p-0 m-3">
              <Container className='align-self-start m-0'>
                <Image  src={Img1} className='img-fluid ' />
                </Container>
                <Container className='p-5 justify-content-center align-items-center'>
                <Card.Text className='text-wrap'>Dalam perancangan promosi ini, penulis menggunakan poster sebagai salah satu dari strategi Attention. Poster ini bertujuan untuk memikat target audiens dengan cara menampilkan 2 kanvas yang berbahan dasar LDPE yang berbentuk landscape dan  potret, dengan caption “signature wave” dan di beri tahun pembuatan di sebelah kanan bawah 2022.</Card.Text>
                </Container>
            </Container>
            <Container fluid className="d-flex border-2 border p-0 m-3">
            <Container className='p-5 justify-content-center align-items-center align-self-start'>
                <Card.Text className='text-wrap'>Dalam perancangan promosi ini, penulis menggunakan strataegi poster interaktif digital yang diaplikaskan pada media sosial Instagram feed seta Instagram Story. Konten dalam rancangan poster ini adalah advergame, yaitu agar target audiens menebak produk yang telah di hasilkan oleh PT. Kurnia Teknik, yaitu Coaster, Coaster dalam Bahasa Indonesia tatakan gelas.</Card.Text>
            </Container>
            <Container className='align-self-end m-0 p-0'>
             <Image  src={Img2} className='img-fluid ' />
             </Container>
            </Container>
            <Container fluid className="d-flex border-2 border p-0 m-3">
              <Container className='align-self-start m-0'>
                <Image  src={Img3} className='img-fluid ' />
                </Container>
                <Container className='p-5 justify-content-center align-items-center'>
                <Card.Text className='text-wrap'>Dalam Perancangan promosi ini, penulis juga memberi saran perancangan poster untuk promosi produk. Dalam promosi ini penulis mempromosikan Basic Stool, Basic Stool merupakan sebuah kursi yang dihasilkan oleh PT. Kurnia Teknik. Karena menurut data yang diperoleh dari owner, produk yang akan digunakan dan banyak dipesen oleh audiens adalah Bacis Stool (kursi). Serta visualisasi berupa digital imaging dari PT. Kurnia Teknik Basic Stool.</Card.Text>
                </Container>
            </Container>
        </Container>
        <Kaki/>
        </>
    )
}

export default SupportUs
