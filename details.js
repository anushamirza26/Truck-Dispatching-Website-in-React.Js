// src/components/ImageSlider.js
import React from 'react';
import './details.css';
import icon1 from './SIGN BLUE.png'; // Import your images from the appropriate location
import icon2 from './file blue.png';
import icon3 from './TRUCK BLUE.png';


const ImageSlider1 = () => {
 

  return (
    <section id='details'>
    <div>
    <div class='head1'>
    <h3>Truck Dispatch Services Pricing</h3>
    <p>
Cargo Captain offers NO contracts and charges a minimal percentage fee for loads we secure, ensuring one of the lowest service fees in the industry. Unlike others, we prioritize quality service.

Truck dispatch services help owner-operators manage load booking and back-office tasks. While some focus only on booking loads, Cargo Captain offers comprehensive services, including invoice management and detention requests.

Choose Cargo Captain for affordable, top-notch dispatch support.</p>
  </div>
          <div className="container7">
          <div className="ribbon">
              <span>POPULAR</span>
          </div>
          <div className='cloe'>
          <h1>Percentage Per Truck</h1>
          <h6>For 1+ Trucks</h6>
          </div>
          <div className='cli'>
          <p className="cta">CALL FOR PRICING</p>
          <ul>
              <li><i className="checkmark">&#10003;</i> Negotiate Best Rates</li>
              <hr/>
              <li><i className="checkmark">&#10003;</i> Carrier Packet Setup</li>
              <hr/>
              <li><i className="checkmark">&#10003;</i> Sign & Secure Rate Confirmation</li>
              <hr/>
              <li><i className="checkmark">&#10003;</i> Personal Dispatcher</li>
              <hr/>
              <li><i className="checkmark">&#10003;</i> TONU/Detention Assistance</li>
              <hr/>
          </ul>
          <button className="contact-button">404-987-8447</button>
          </div>
      </div>
      <div style={{marginTop:'50px'}}></div>
      <div className='r1'>
      
      <h3 className="slider-title">Getting Started Is Easy</h3>
      <div className="icon-container">
        <img src={icon1} alt="Icon 1" />
        <img src={icon2} alt="Icon 2" />
        <img src={icon3} alt="Icon 3" />
      </div>
      <div className="container10">
        <h3>Sign Agreement</h3>
        <h3>Send Us Your Docs </h3>
        <h3>Start Hauling Loads </h3>
      </div>
      <div className="container10">
        <p>Sign a quick service agreement</p>
        <p>MC Authority, W-9, and Insurance</p>
        <p>We begin dispatching immediately</p>
      </div>
      </div>

      </div>
      </section>
  );
};

export default ImageSlider1;
