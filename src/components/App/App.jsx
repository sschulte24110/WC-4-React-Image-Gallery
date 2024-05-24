import GalleryList from "../GalleryList/GalleryList";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
        <GalleryList gallery={gallery} setGallery={setGallery} fetchGallery={fetchGallery}/>
        
        {/* <img src="images/goat_small.jpg"/>
        <img src="images/gus.jpg" alt="Gus"/> */}
      </div>
    );
}

export default App;
