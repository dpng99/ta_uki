import React from 'react'
import { Container, Navbar, Image, Nav,NavDropdown } from 'react-bootstrap'
import ImageLogo from '../Images/logo.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css'
const Navigation = () => {
    return (
        <Navbar className='align-items-center justify-content-center d-grid'>
            <Container className='align-items-center justify-content-center flex'>        
            <Navbar.Brand>
             <Image style={{ width: '200px', height: '100px' }}src={ImageLogo}/>
            </Navbar.Brand>
            </Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse className="justify-content-center align-items-center d-flex">
            <Nav className="me-auto">
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="/edit">Data Lokasi Portable APP</NavDropdown.Item>
                <NavDropdown.Item href="/adddata">Add New Data</NavDropdown.Item>
                <NavDropdown.Item href="/history">Monitoring EWS APP</NavDropdown.Item>
                <NavDropdown.Item href="/monitoring">Monitoring Portable APP</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="me-auto">
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="/edit">Data Lokasi Portable APP</NavDropdown.Item>
                <NavDropdown.Item href="/adddata">Add New Data</NavDropdown.Item>
                <NavDropdown.Item href="/history">Monitoring EWS APP</NavDropdown.Item>
                <NavDropdown.Item href="/monitoring">Monitoring Portable APP</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="me-auto">
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="/edit">Data Lokasi Portable APP</NavDropdown.Item>
                <NavDropdown.Item href="/adddata">Add New Data</NavDropdown.Item>
                <NavDropdown.Item href="/history">Monitoring EWS APP</NavDropdown.Item>
                <NavDropdown.Item href="/monitoring">Monitoring Portable APP</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="me-auto">
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="/edit">Data Lokasi Portable APP</NavDropdown.Item>
                <NavDropdown.Item href="/adddata">Add New Data</NavDropdown.Item>
                <NavDropdown.Item href="/history">Monitoring EWS APP</NavDropdown.Item>
                <NavDropdown.Item href="/monitoring">Monitoring Portable APP</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="me-auto">
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="/edit">Data Lokasi Portable APP</NavDropdown.Item>
                <NavDropdown.Item href="/adddata">Add New Data</NavDropdown.Item>
                <NavDropdown.Item href="/history">Monitoring EWS APP</NavDropdown.Item>
                <NavDropdown.Item href="/monitoring">Monitoring Portable APP</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
