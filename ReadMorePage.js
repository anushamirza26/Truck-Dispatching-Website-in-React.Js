import React from 'react';
import './ReadMorePage.css'

import  trok from './trok.jpeg'
import ter from './SEMI TRUCK PICS WITH TANKER, FLATBED, STEPDECK AND RGN TRAILERS.jpeg'
import pfp1 from './pfp1.jpg'
import pfp2 from './pfp2.jpg'
import pfp3 from './pfp3.png' 
const testimonials = [
    {
      name: 'Janet Morris',
      text: 'Definitely would recommend Cargo Captians services for semi-truck dispatching! I had Cargo Captians recommended to me by a friend and I’m glad I gave them a call.',
      rating: 5,
      image: pfp1
    },
    {
      name: 'Willie Brown',
      text: 'This is the best trucking dispatch company out there! Ramil and his team did an amazing job with dispatching high paying freight!! I drive on weekdays and I always have loads ready for me Monday!',
      rating: 5,
      image: pfp2
    },
    {
      name: 'Sean Fisher',
      text: 'Cargo Captians are best truck dispatchers I’ve worked with in the last 5 years. Their dispatching services is top-notch offering best loads on a consistent basis. Very nice and easy to work with. Wonderful freight dispatch service. Would recommend them.',
      rating: 5,
      image: pfp3
    }
  ];


function ReadMorePage() {
  
  return (
    <section id="rmp">
    <div>
        <div className="video-wrapper3">

      


  <div className="video-description3">
  <h3>Getting Started With Cargo Captain’s</h3>
  <p>Cargo Captain's setup process is straightforward. Once you're ready to join us, we'll send you a link to a carrier application. After we receive the paperwork, you'll be introduced to your personal dispatcher and can start immediately. We pride ourselves on being an experienced and reliable dispatch company with strong relationships with our carriers, ensuring a smooth onboarding process.
    <br />
  <br />
  <br />
<ol>
  <li>Signed Truck Dispatch Service Agreement</li>
<li>General Power of Attorney</li>
<li>Copy of Your MC Authority Letter</li>
<li>Copy of the Insurance Certificate</li>
<li>Driver’s Contact Info</li>
<li>Copy of W-9 Form</li>

</ol>

</p>
<button class="call-button" onclick="makeCall()">Call Now</button>
</div>
<div className="video-container3">
  <img  src={trok} 

style={{height:'600px'}}
    
  />
  </div>
</div>
       
<div className="video-wrapper4" style={{marginTop:'250px'}}>
      <div className="video-container4">
      <img  src={ter}
 
  />
  <button class="call-button" onclick="makeCall()">Call Now</button>
      </div>
    
      <div className="video-description4">
        <h3>Step Deck Dispatch Services</h3>
        <p>Streamline your operations with Cargo Captain's step deck dispatch services. Our experienced dispatchers connect you with reputable brokers, maximizing driving time and minimizing downtime. We handle all paperwork and administrative tasks, including lumper fees and detention pay. Your personal dispatcher secures the best loads in advance. Choose Cargo Captain to keep your fleet moving and profitable, ensuring your trucks are never idle.</p>
        </div>
    </div>
    <div className="content-container">
      <h2>Benefits Of Hiring A Truck Dispatcher</h2>
      <p>Outsourcing <strong>Truck Dispatch Services</strong> offer many benefits to owner-operators in addition to finding high-paying loads.</p>

      <div className="benefit">
        <h4>#1 – Truck Dispatch Services is more than just finding freight loads</h4>
        <p>It's obvious that <strong>truck dispatcher</strong> finds loads for carriers, but they also offer other services that can benefit your operation as a whole.</p>
        <ul>
          <li><p><strong>Motor Carrier Compliance:</strong>Our truck dispatchers will ensure that you maintain proper motor carrier compliance so that you can stay out of trouble and continue earning a living.</p></li>
          <li><p><strong>Customer Care:</strong> Our dispatchers will not only help find high paying loads, we will also help you manage relationships with shippers, establish service expectations with brokers and tackle any complex issues that may arise.</p></li>
          <li><p><strong>Manage Unexpected Delays:</strong> As a truck dispatch company, we are responsible in helping you address unexpected delays caused by weather, traffic and other issues while you're on the road.</p></li>
        </ul>
        <p>Dispatch services have incentives to ensure that the entire process from load booking, to negotiating, and transporting goes as smooth.</p>
     

     
        <h4>#2 – Outsourcing Dispatching Services Saves Time</h4>
        <p>As an owner operator, you may start out booking loads yourself using load boards. This may work well for a while, but once you start accepting loads, you won’t have enough time to spend on load boards. You’re also missing out on opportunities to make more money on higher-paying loads.</p>
        <p>That’s where a <strong>dispatching company</strong> can help. Our dispatcher will give you more time to focus on working on your business and less time searching for loads.</p>
        <p>The main cause of failure for most beginner owner-operators is due to lack of finding consistent loads to keep their business moving. Time is money.</p>
      
        <h4>#3 – Truck Dispatchers Work For You</h4>
        <p>As <strong>truck dispatchers</strong> providing freight dispatching services, we take a percentage of your rate. This gives us the incentive to negotiate high rates on your behalf. The more money you make, the more money we make.</p>
      </div>
    </div>
    
    <div className="testimonials-container">
      <h1>Why Our Truck Dispatchers Are The Best</h1>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <div className="rating">
              {Array(testimonial.rating).fill().map((_, i) => (
                <span key={i}>&#9733;</span>
              ))}
            </div>
            <p>{testimonial.text}</p>
            <div className="author">
              <img src={testimonial.image} alt="Logo" style={{height:'40px',width:'40px'}}/>
              <p>{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div style={{height:'50px'}}></div>
      </div>
      </section>
  );
}

export default ReadMorePage;