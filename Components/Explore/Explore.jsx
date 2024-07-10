import React from 'react';
import './Explore.css';

const Explore = () => {
  return (
    <div className="explore-container">
      <h1 className="explore-title">Explore the Nissan GT-R R35</h1>
      <div className="explore-content">
        <div className="card">
          <img className="card-img" src="performance.jpg" alt="Performance" />
          <div className="card-body">
            <h3>Performance</h3>
            <p>The Nissan GT-R R35 is a masterpiece of engineering, embodying the perfect blend of speed, power, and precision...</p>
          </div>
        </div>
        <div className="card">
          <img className="card-img" src="design.jpg" alt="Design" />
          <div className="card-body">
            <h3>Design</h3>
            <p>Every detail of the GT-R’s design is crafted with performance in mind. The aerodynamic body features a low, wide stance...</p>
          </div>
        </div>
        <div className="card">
          <img className="card-img" src="technology.jpg" alt="Technology" />
          <div className="card-body">
            <h3>Technology</h3>
            <p>The Nissan GT-R R35 is equipped with cutting-edge technology to elevate your driving experience. The state-of-the-art infotainment system...</p>
          </div>
        </div>
        <div className="card">
          <img className="card-img" src="heritage.jpg" alt="Heritage" />
          <div className="card-body">
            <h3>Heritage</h3>
            <p>The GT-R R35 is the latest iteration in a long line of legendary sports cars. The GT-R nameplate has been synonymous with high performance and racing success...</p>
          </div>
        </div>
        <div className="card">
          <img className="card-img" src="experience.jpg" alt="Experience" />
          <div className="card-body">
            <h3>Experience the Thrill</h3>
            <p>Driving the Nissan GT-R R35 is more than just a journey; it’s an experience that awakens your senses and stirs your soul...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
