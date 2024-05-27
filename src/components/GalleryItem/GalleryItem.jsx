import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ToggleImage from '../ToggleImage/ToggleImage';
import './GalleryItem.css';
import { useState } from 'react';
import axios from 'axios';

export default function GalleryItem ({photo, fetchGallery}) {
  const [showPhoto, setShowPhoto] = useState(true);

  const addLike = (itemID) => {
  axios({
    method: 'PUT', 
    url: `/api/gallery/like/${itemID}`,
  }).then(() => {
    fetchGallery();
    console.log(photo);
  }).catch((error) => {
     console.log(`Error updating item: `, error);
  })
 }

 const handleChangePhoto = () => {
  setShowPhoto((description) => {
    return !description;
  });
 }
 
 const deletePhoto = (itemID) => {
  if (confirm('Are you sure you want to delete this photo?') === false) {
    return;
  } 
  axios({
    method: 'DELETE', 
    url: `/api/gallery/${itemID}`,
  })
    .then(() => {
    fetchGallery();
  })
    .catch((error) => {
      console.log(('error DELETing:', error));
    })
 }
 
  return (
  <Col>
    <Card className="photo-card" style={{ width: '250px', margin: '30px' }} key={photo.id}>
      <Card.Body>
      <ToggleImage showPhoto={showPhoto} handleChangePhoto={handleChangePhoto} photo={photo} data-testid="toggle" />
        <Card.Text>{photo.title}</Card.Text>
        <Card.Text>{photo.likes} Likes</Card.Text>
        <Card.Text>
          <Button variant='light' onClick={() => addLike(photo.id)} data-testid="like" >👍🏼</Button>
          <Button variant='danger' onClick={() => deletePhoto(photo.id)}>Delete</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
 )
};