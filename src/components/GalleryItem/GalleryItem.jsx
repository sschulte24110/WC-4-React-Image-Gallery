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
 
 
  return (
  <Col>
    <Card className="photo-card" style={{ width: '250px', margin: '30px' }} key={photo.id}>
      <Card.Body>
      <ToggleImage showPhoto={showPhoto} handleChangePhoto={handleChangePhoto} photo={photo} data-testid="toggle" />
        <Card.Title>{photo.title}</Card.Title>
        <Card.Text>{photo.likes} Likes</Card.Text>
        <Card.Text>
          <Button variant='success' onClick={() => addLike(photo.id)} data-testid="like" >👍🏼</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
 )
};