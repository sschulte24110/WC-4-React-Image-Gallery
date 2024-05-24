import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';


export default function GalleryList ({ gallery, fetchGallery }) {
  console.log(`Gallery List`);
  return (
    <>
    <h2>Scott's React Gallery</h2>
    {gallery.map((photo) => 
      <GalleryItem 
      key={photo.id}
      photo={photo}
      fetchGallery={fetchGallery}
      />
    )}
    </>
  )
};

