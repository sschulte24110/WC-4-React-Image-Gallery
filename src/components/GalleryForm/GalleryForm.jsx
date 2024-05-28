import './GalleryForm.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function GalleryForm( {fetchGallery} ) {
  let [newUrl, setNewUrl] = useState('');
  let [newTitle, setNewTitle] = useState('');
  let [newDescription, setNewDescription] = useState('');
  
  const addPhoto = () => {
    axios.post(`/api/gallery`, { url: newUrl, title: newTitle, description: newDescription})
    .then((response) => {
      setNewUrl('');
      setNewTitle('');
      setNewDescription('');
      fetchGallery();
    }).catch((error) => {
      console.log(`Error from server:`, error);
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newUrl) {
      addPhoto();
    } else {
      alert(`Dont forget url!`)
    }
  };
  
  
  return(
    <>
    <Container fluid>
      <Form onSubmit={handleSubmit}> 
        <h2>Add New Photo</h2>
          <Form.Group className='mb-3' controlid='form-group-url'>
            <Form.Label>URL:</Form.Label>
            <Form.Control type='url' placeholder='Enter URL' value={newUrl} onChange={(event) => setNewUrl(event.target.value)} required />
          </Form.Group>
          <Form.Group className='mb-3' controlid='form-group-title'>
            <Form.Label>Title:</Form.Label>
            <Form.Control type='text' placeholder='Enter Photo Title' value={newTitle} onChange={(event) => setNewTitle(event.target.value)} required />
          </Form.Group>
          <Form.Group className='mb-3' controlid='form-group-description'>
            <Form.Label>Description:</Form.Label>
            <Form.Control type='text' placeholder='Enter Description' value={newDescription} onChange={(event) => setNewDescription(event.target.value)} required />
          </Form.Group>
          <Button variant='secondary' type='submit' className='form-button'>Submit</Button>
      </Form>

    </Container>
    
    </>
  )
}