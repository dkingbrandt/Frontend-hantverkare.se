import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './../css/Adds.css'
function FormPopUp() {
  return (
<Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control placeholder='Skriv något...' as="textarea" rows={3} />
      </Form.Group>
      <button className='formBtn'>
        chatt
      </button>
      <button className='formBtn'>
        skicka
      </button>
    </Form>
  );
}

 
  


export default FormPopUp