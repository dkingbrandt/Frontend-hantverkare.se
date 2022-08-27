import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function FormPopUp() {
  return (
<Form>
      <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Ange epost</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Meddelande</Form.Label>
        <Form.Control as="textarea" placeholder='Skriv meddelande' rows={3} />
      </Form.Group>

      <Form.Group className='btn_form_container'>
      <button className='btn_form_chatt'>
        chatt
      </button>
      <button className='btn_form_send'>
        skicka
      </button>
      </Form.Group>
      
    </Form>
  );
}

 
  


export default FormPopUp