import React from 'react';
import './Background.css';
import video1 from '../../assets/videos/video1.mp4';
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else {
    switch (heroCount) {
      case 0:
        return <img src={image1} className="background fade-in" alt="Background 1" />;
      case 1:
        return <img src={image2} className="background fade-in" alt="Background 2" />;
      case 2:
        return <img src={image3} className="background fade-in" alt="Background 3" />;
      default:
        return null;
    }
  }
}

export default Background;


