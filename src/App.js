import React, { useEffect, useState } from 'react';
import './App.css';
import RoseAnimation from './RoseAnimation';
import PhotoWall from './PhotoWall';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (!isPlaying) {
      document.body.addEventListener('click', () => {
        console.log(isPlaying);
        // playAudio();
        setIsPlaying(true);
      });
    }
  }, [isPlaying]);

  return (
    <div className="App">
      <PhotoWall />
      <RoseAnimation />
    </div>
  );
}

export default App;
