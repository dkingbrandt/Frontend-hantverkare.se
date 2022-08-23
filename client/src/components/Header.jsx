import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "../css/header.css"

function Header() {
  return (
      <div className='appContainer'>
      <Navbar expand="lg">
      <Container container-xxl>
        <Navbar.Brand className="logo" href="/">hantverkare.se</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            <Nav.Link className='navlink' href="/">Hem</Nav.Link>
            <Nav.Link className='navlink' href="Categories">Sätt in</Nav.Link>
            <Nav.Link className='navlink' href="Adds">Annonser</Nav.Link>
          </Nav>
          <Form className="d-flex btn_main">
            <Form.Control
              type="search"
              placeholder="Sök"
              className="me-2"
              aria-label="Search"
            />
            <Button href="/AddInfo" variant="dark">Logga in</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  ) 
}

export default Header;