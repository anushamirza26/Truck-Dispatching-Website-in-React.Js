// src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';
import ImageSlider1 from './details';
import p1 from './cc articles.jpg'; // Import your images from the appropriate location
import p2 from './readmore pg 1.jpg';
import truck from './TRUCK BLUE.png'
import wall from './truckk123.png';
import Slider from 'react-slick';
import ReadMorePage from './ReadMorePage'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';
import ScrollIndicator from './ScrollIndicator';
import truck2 from './DOLLAR BLUE.png'
import truck3 from './TICK.png' 

const images = [
  p1,
  p2,
  wall,
  // Add more image paths here
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds
    
  };
  
  return (
    <div className="image-slider">
    <div className="image-slider1">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index}`} className="slide-image" />
            <div className="text-overlay">
              <h1>Cargo Captains</h1>
            </div>
          </div>
        ))}
      </Slider>
      </div>
       <div style={{backgroundColor:' #f1eeee',paddingBottom:'100px'}}>
      <h2 className="slider-title">Truck Dispatch Company</h2>
      <div className="icon-container">
        <img src={truck} alt="Icon 1" />
        <img src={truck2} alt="Icon 2" />
        <img src={truck3} alt="Icon 3" />
      </div>
      <div className="container1">
        <h3>30,000+</h3>
        <h3>$8,000+</h3>
        <h3>$2.80+</h3>
      </div>
      <div className="container1">
        <p>Loads Booked</p>
        <p>Weekly Revenue</p>
        <p>Per Mile</p>
      </div>
       
       </div>


<div class="container4">
  <h2>JOIN THE BEST DISPATCH COMPANY IN USA</h2>
</div>


      <ProjectsSection />
      <SkillsSection />
      <ImageSlider1/>
      <ReadMorePage/>
      <ContactSection />
      <ScrollIndicator />
    </div>
  );
};

export default ImageSlider;
