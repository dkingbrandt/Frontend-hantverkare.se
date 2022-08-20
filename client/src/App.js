
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Adds from "./components/Adds";
import AddInfo from "./components/AddInfo"
import Footer from "./components/Footer";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './css/App.css'

function App() {
  return (
    <div className='appContainer'>
      <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand className="logo" href="/">hantverkare.se</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            <Nav.Link href="/">Hem</Nav.Link>
            <Nav.Link href="Categories">Sätt in annons</Nav.Link>
            <Nav.Link href="Adds">Mina annonser</Nav.Link>
          </Nav>
          <Form className="d-flex btn_main">
            <Form.Control
              type="search"
              placeholder="Sök"
              className="me-4"
              aria-label="Search"
            />
            <Button href="/AddInfo" variant="dark">Logga in</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories"element={<Categories />} />
        <Route path="/Adds" element={<Adds />} /> 
        <Route path="/AddInfo" element={<AddInfo />} /> 
      </Routes>
    <Footer/>
    </div>
  )
}

export default App;
