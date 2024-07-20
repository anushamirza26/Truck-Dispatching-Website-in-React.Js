// src/components/SkillsSection.js
import React, { useState } from 'react';
import './SkillsSection.css';

import ProjectModal from './ProjectModal';
import trucker from './trucker.jpg'
import dry from './Dry-Van-Shipping-Freight.jpg'
import fry from './7 Things to Know Before Your Shipping Container Delivery.jpeg'
import reef from './gettyimages-685007625-612x612-transformed.jpeg'
import shakal from './download-Rpc15RbUm-transformed.jpeg'

const projects = [
  {
    name: 'Dry Van',
    
    description: 'If you are looking for a truck dispatcher to manage your dry van freight, you’ve found the right truck dispatching company that can help you achieve a peace of mind through professional truck dispatching services. Reach out today. ',
    image: dry,
  },
  {
    name: 'Flatbed/Stepdeck',
  
    description:
      'If you are looking for a flatbed truck dispatcher to manage your flatbed or Conestoga freight, or step-deck, Truck Dispatch 360 has you covered. We offer professional truck dispatch services for serious truckers. Reach out to our freight dispatchers.',
    image: fry,
  },
  {
    name: 'Reefer ',
  
    description: 'If you are looking for a reefer truck dispatcher to manage your reefer freight, our truck dispatchers at Truck Dispatch 360 can help you achieve your goals. Reach out today to speak to one of our expert truck dispatchers. ',
    image: reef,
  },

  // Add more projects here
];

const SkillsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };
  return (

    <div>

 

   
  <section id="skills">
    <div className="video-wrapper1">

      
      <div className="video-description1">
        <h3>Best Trucking Dispatch Services For Trucking Companies</h3>
        <p>Cargo Captain’s seasoned dispatchers connect you directly with brokers, allowing you to concentrate on driving while we handle all necessary paperwork. Say goodbye to the hassle of follow-ups for lumper and detention pay. Our in-house team manages all administrative tasks, giving you peace of mind. You choose your preferred driving areas, and we fiercely negotiate for the highest-paying rates and quality routes. You’ll work directly with top shippers and brokers who pay you directly. Your dedicated dispatcher scours multiple load boards to secure the best dry freight, flatbed, and reefer loads. Cargo Captain ensures your trucks stay on the road, avoiding prolonged downtime.</p>
        <button class="call-button" onclick="makeCall()">Call Now</button>
      </div>
      <div className="video-container1">
        <img src={trucker}
        style={       {   width:"570px  ",
        height:"80%"}}

          
        />
      </div>
    </div>
    <div className='topo'><h3>Our Truck Dispatchers Specialize</h3></div>
    
    <div className="project1-list">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project1-card"
              onClick={() => openModal(project)}
              style={{
                margin: '2px',
                width: '320px',
                height: '450px',
              }}
            >
                          <div>
              <h4>{project.name}</h4>
              </div>
              <img
                src={project.image}
                alt={project.name}
                className="project1-image"
                style={{
                  width: '100%',
                  height: '90%',
                  objectFit: 'cover',
                  textAlign:'right'
                }}
              />
  
              

              <div className="project1-details">
                <h3>{project.name}</h3>

                <p>{project.description}</p>
               
              </div>
            </div>
          ))}
        </div>
        <div className="video-wrapper2">

      

<div className="video-container2">
  <img src={shakal}
  style={       {  
     width:"400px  ",
  height:"850px"}}
 
  />
  <button class="call-button" onclick="makeCall()">Call Now</button>
  </div>
  <div className="video-description2">
  <h3>Truck Dispatch Services: Your Dedicated Truck Dispatcher Does All The Heavy Lifting So You Can Stay Focused On Driving</h3>
  <p>Cargo Captain is a "Full Service" truck dispatching company that manages all the back-office tasks, enabling you to compete with larger fleets. While large carriers can afford to hire staff for these tasks, small carriers often find it unaffordable. That’s where Cargo Captain steps in to assist! Our straightforward process involves a dedicated dispatcher who works according to your preferences. We develop the optimal routes that fit your desired schedule, whether you prefer to be home every night, every other night, or once every two weeks. Our freight dispatchers collaborate with you to create a plan that meets your goals.
  <br />
  <br />
  <br />
<ol>
  <li>We Negotiate Hard For Best Paying Rates</li>
<li>We Communicate To Brokers</li>
<li>We Handle All Your Broker Setup Packets</li>
<li>We Handle Lumper/Detention</li>
<li>Dedicated Dispatcher</li>
<li>You Choose the Areas You Want to Drive</li>
<li>The Best Truck Dispatch Company on Your Side
</li>
</ol>

</p>
</div>
</div>

 
      </section>
    </div>
  );
};



export default SkillsSection;   