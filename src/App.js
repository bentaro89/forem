import React, { useEffect } from 'react';
import './App.css';
import RoseAnimation from './RoseAnimation';
import PhotoWall from './PhotoWall';
import bestpart from './bestpart.mp3';

function App() {
  useEffect(() => {
    const audio = new Audio(bestpart);
    audio.play();
    console.log("Playing audio");
  }, []);

  return (
    <div className="App">
      <PhotoWall />

      <RoseAnimation />
    </div>
  );
}

export default App;
