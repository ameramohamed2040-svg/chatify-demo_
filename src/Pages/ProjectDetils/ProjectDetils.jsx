import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import dbData from '../../db.json'; 
import './ProjectDetils.css';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // بنبحث عن المشروع جوه قائمة الـ projects اللي في ملف الـ JSON
  const project = dbData.projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="details-container">
        <h2>Project not found!</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back to Projects
      </button>

      <div className="header-info">
        <span className="category-tag">{project.category}</span>
        <h1 className="details-title">{project.title}</h1>
      </div>

      <img className="main-project-img" src={project.image} alt={project.title} />

      <div className="project-description">
        <h3>About the Project</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;