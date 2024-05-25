import Card from 'react-bootstrap/Card';
import './ToggleImage.css';

export default function ToggleImage({ photo, showPhoto, handleChangePhoto }) {
  
  return (
    <>
      <Card.Text className='toggle-wrapper'>
        {showPhoto ? (
          <Card.Img
            onClick={() => handleChangePhoto()}
            className='image'
            src={photo.url}
            style={{ width: '200px', height: 'auto' }}
          />
        ) : (
          <Card.Text
            onClick={() => handleChangePhoto()}
            className='description'
          >
            {photo.description}
          </Card.Text>
        )}
      </Card.Text>
    </>
  );
}
