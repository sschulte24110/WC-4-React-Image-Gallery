import GalleryList from "../GalleryList/GalleryList";
import React, { useState, useEffect } from 'react';
// import Header from 'react-bootstrap';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import './App.css';

function App() {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    fetchGallery();
  }, []);
  
  const fetchGallery = () => {
    axios({
      method: 'GET', 
      url: '/api/gallery',
    }).then ((response) => {
      console.log(`response.data`, response.data);
      setGallery(response.data);
    }).catch((error) => {
      console.error(error);
    })
  }
  
  return (
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>
        <Container>

        <GalleryList gallery={gallery} setGallery={setGallery} fetchGallery={fetchGallery} data-testid="galleryList" />
        
        {/* <img src="images/goat_small.jpg"/>
        <img src="images/gus.jpg" alt="Gus"/> */}
        </Container>
      </div>
    );
}

export default App;
