import React, { useEffect, useState } from 'react';
import './App.css';
import RoseAnimation from './RoseAnimation';
import PhotoWall from './PhotoWall';
import bestpart from './bestpart.mp3';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (!isPlaying) {
      document.body.addEventListener('click', () => {
        console.log(isPlaying);
        playAudio();
        setIsPlaying(true);
      });
    }
  }, [isPlaying]);

  const playAudio = () => {
    const audio = new Audio(bestpart);  // Make sure the path is correct
    audio.play();
  };

  return (
    <div className="App">
      <PhotoWall />
      <RoseAnimation />
    </div>
  );
}

export default App;
