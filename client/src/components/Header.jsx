import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  {useState} from 'react';
import React from 'react';
import "../css/header.css"



function Header() {
  
const [popUp, setPopUp] = useState(true);
  const handlePopUp = () =>{
    setPopUp(current => !current); //toggle
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
              <Button href="/AddInfo" variant="dark">Logga in</Button>
              <Button href="/AddInfo" variant="dark"   onClick={ ()=>{
            handlePopUp();
          }} >Registrera</Button>
              <div>
             <p class="popUp--close" onClick={handlePopUp} >&times; </p>
            <img className='popUp--img' ></img>
            <h1 className='popUp--title'></h1>
            <p className='popUp--description'></p>
            </div>

            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;