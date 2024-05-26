import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';
import Row from 'react-bootstrap/Row';

export default function GalleryList({ gallery, fetchGallery }) {
  console.log(`Gallery List`);
  return (
    <>
      <Row xs='1' sm='2' md='3' lg='4'>
        {gallery.map((photo) => (
          <GalleryItem
            key={photo.id}
            photo={photo}
            gallery={gallery}
            fetchGallery={fetchGallery}
            data-testid='galleryItem'
          />
        ))}
      </Row>
    </>
  );
}
