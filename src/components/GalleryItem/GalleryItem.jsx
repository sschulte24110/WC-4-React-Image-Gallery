import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function GalleryItem ({photo, fetchGallery}) {
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
 
  return (
  <Col>
    <Card key={photo.id}>
      <Card.Img src={photo.url} style={{ width: '200px', height: 'auto' }} />
      <Card.Body>
        <Card.Title>{photo.title}</Card.Title>
        <Card.Text>{photo.discription}</Card.Text>
        <Card.Text>{photo.likes} Likes</Card.Text>
        <Card.Text>
          <Button onClick={() => addLike(photo.id)} >👍🏼</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
 )
};