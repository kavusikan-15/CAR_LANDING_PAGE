import React, { useEffect, useState } from 'react';
import Background from './Components/Background/Background'; 
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Explore from './Components/Explore/Explore'; // Corrected import path
import './App.css';
import './Components/Explore/Explore.css'; // Make sure the CSS file path is correct

const App = () => {
  const heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => count === 2 ? 0 : count + 1);
    }, 4000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="App">
      <div className="hero-section">
        <Background playStatus={playStatus} heroCount={heroCount} />
        <Navbar />
        <Hero
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}
        />
      </div>
      
      <div className="explore-section" id="explore">
        <Explore />
      </div>
    </div>
  );
}

export default App;
