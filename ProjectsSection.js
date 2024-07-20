import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import './ProjectsSection.css';
import p1 from './2.jpeg';
import image2 from './1.jpeg';
import image5 from './3.jpeg';
import image4 from './4.jpeg';
import image3 from './stars (2).png';
import ReactPlayer from 'react-player';

const projects = [
  {
    name: 'Emily Morgan ',
    Address: 'Los  Angeles,California',
    description: 'This truck dispatching company impressed with its exceptional service, characterized by prompt responses, efficient coordination, and a high level of professionalism. Their attention to detail and commitment to timely deliveries , making them a standout choice for businesses seeking reliable logistics support. ',
    image: image4,
  },
  {
    name: 'Danny Welback',
    Address: 'Houstan,Texas',
    description:
      'Clients lauded this dispatching company for its unwavering dependability. With dispatchers available around the clock, including weekends and holidays, they consistently delivered on their promises. Their competitive pricing added further value, cementing their reputation as a reliable partner in the industry.',
    image: image5,
  },
  {
    name: 'Wilbur Austin ',
    Address: 'Miami,Florida',
    description: 'Businesses found solace in the tailored solutions provided by this dispatching company. Their proactive approach and in-depth understanding of client requirements translated into cost-effective logistics strategies. Whether it was accommodating specific needs or offering personalized advice. ',
    image: p1,
  },
  {
    name: 'Alex Miller',
    Address: 'Brooklyn,New York',
    description:
      'Clients were impressed by the unmatched dedication displayed by this dispatching company. From the initial contact to the final delivery. Regular updates, special request accommodations, and a genuine concern for the success of their clients shipments set them apart as an exceptional logistics partner.',
    image: image2,
  },
  // Add more projects here
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };
  function makeCall() {
    window.location.href = "tel:+1234567890";
};
  return (
    
    <div>

      <section id="projects">

        <div className="project-list">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => openModal(project)}
              style={{
                margin: '2px',
                width: '250px',
                height: '390px',
              }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
                style={{
                  width: '100%',
                  height: '140px',
                  objectFit: 'cover',
                }}
              />
              <div>
              <h4>{project.name}</h4>
              </div>
              <div>
              <p>{project.Address}</p>
              </div>
              <img
                src={image3}
                alt={project.name}
                className="project-image"
                style={{
                  width: '80%',
                  height: '7%',
                  objectFit: 'cover',
                }}/>

              <div className="project-details">
                <h3>{project.name}</h3>
                <div>
              <p>{project.Address}</p>
              </div>
                <img
                src={image3}
                alt={project.name}
                className="project-image"
                style={{
                  width: '50%',
                  height: '7%',
                  objectFit: 'cover',
                }}/>
                <p>{project.description}</p>
                <button onClick={() => openModal(project)}>Read More</button>
              </div>
            </div>
          ))}
        </div>
        {selectedProject && (
          <div className="modal-backdrop" onClick={closeModal}>
            <ProjectModal project={selectedProject} />
          </div>
        )}
    <div className="video-wrapper">
      <div className="video-container">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=gIia5pLAm68"
          controls={true}
          
            className='r4'
        />
           <button class="call-button" onclick="makeCall()">Call Now</button>
      </div>
      
      <div className="video-description">
        <h3>Independent Truck Dispatch Services For Owner Operators</h3>
        <p>Cargo Captain is a premier truck dispatch company catering to owner-operators and small trucking firms. We specialize in securing lucrative freight loads at optimal rates, ensuring consistent weekly assignments to keep you busy on the road. With a seasoned team of over 25 truck dispatchers boasting nine years of industry experience, we possess comprehensive knowledge of routes and logistics. Recognizing the challenges of trucking, our dedicated dispatchers tirelessly negotiate the best rates on your behalf, ensuring you receive fair compensation for every mile traveled. From managing truck paperwork to liaising with brokers, we handle the administrative tasks, allowing you to focus on growing your business. At Cargo Captain, we prioritize building long-term partnerships, understanding that your success directly impacts ours. Experience the full potential of your earnings with our comprehensive dispatch services. Start maximizing your profitability with Cargo Captain today!</p>
      </div>
    </div>
    <div class="container2">
  <h2>Truck Dispacting Service</h2>
</div>
      </section>
    </div>
  );
};

export default ProjectsSection;
