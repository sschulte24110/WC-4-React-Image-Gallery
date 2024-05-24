import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function GalleryItem ({photo}) {
 return (
  <Col>
    <Card key={photo.id}>
      <Card.Img src={photo.url} style={{ width: '200px', height: 'auto' }} />
      <Card.Body>
        <Card.Title>{photo.title}</Card.Title>
        <Card.Text>{photo.discription}</Card.Text>
        <Card.Text>{photo.likes} Likes</Card.Text>
      </Card.Body>
    </Card>
  </Col>
 )
};