// src/components/ProjectModal.js
import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, index }) => (
  <div className="modal fade" id={`projectModal${index}`} tabIndex="-1" role="dialog">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{project.name}</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <img src={project.image} alt={project.name} className="img-fluid" />
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectModal;
