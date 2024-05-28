import Card from 'react-bootstrap/Card';
import './ToggleImage.css';
import { useState } from 'react';

export default function ToggleImage({ photo }) {
  const [showPhoto, setShowPhoto] = useState(false);
  
  return (
    <>
      <Card.Text
        onClick={() => setShowPhoto(!showPhoto)}
        data-testid='toggle'
        className='image-wrapper'
      >
        {showPhoto ? (
          <Card.Text data-testid='description' className='description'>
            {photo.description}
          </Card.Text>
        ) : (
          <Card.Img src={photo.url} className='image' />
        )}
      </Card.Text>
    </>
  );
}
