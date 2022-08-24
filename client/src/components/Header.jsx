import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import React from 'react';
import "../css/header.css"
import '../css/Adds.css'



function Header() {

  const [registrera, setRegistrera] = useState(false);
  const [login, setLogin] = useState(false);


  const handlePopUp = (state) => {
    state(current => !current); //toggle
  }


  return (
    <div className='appContainer'>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand className="logo" href="/">hantverkare.se</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav>
              <Nav.Link className='navlink' href="/">Hem</Nav.Link>
              <Nav.Link className='navlink' href="Categories">Sätt in annons</Nav.Link>
              <Nav.Link className='navlink' href="Adds">Hitta Tjänster</Nav.Link>
            </Nav>
            <Form className="d-flex btn_main">
              <Form.Control
                type="search"
                placeholder="Sök"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="dark" onClick={() => {
                handlePopUp(setLogin);
              }}>Logga in</Button>
              <div className='blurr'
                style={{
                  opacity: login ? '1' : '0',
                  visibility: login ? 'visible' : 'hidden',
                  zIndex: login ? '2' : '-2',

                }}

              >
                <div className='popUp'>

                  <div>
                    <p className="popUp--close" onClick={() => {
                      handlePopUp(setLogin);
                    }}
                    >&times; </p>
                    <img className='popUp--img' ></img>
                    <h1 className='popUp--title'>hello2</h1>
                    <p className='popUp--description'>world2</p>
                  </div>





                </div>
              </div>


              <Button variant="dark" onClick={() => {
                handlePopUp(setRegistrera);


              }} >Registrera</Button>

              <div className='blurr'
                style={{
                  opacity: registrera ? '1' : '0',
                  visibility: registrera ? 'visible' : 'hidden',
                  zIndex: registrera ? '2' : '-2',

                }}

              >
                <div className='popUp'>

                  <div>
                    <p className="popUp--close" onClick={() => {
                      handlePopUp(setRegistrera);
                    }}>&times; </p>
                    <img className='popUp--img' ></img>
                    <h1 className='popUp--title'>hello</h1>
                    <p className='popUp--description'>world</p>
                  </div>





                </div>
              </div>

            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;