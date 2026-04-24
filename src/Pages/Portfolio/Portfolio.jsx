import React from 'react';
import { useNavigate } from 'react-router-dom';
import dbData from '../../db.json'; 
import './Portfolio.css';

const Portfolio = () => {
  const navigate = useNavigate();

  // الوصول لقائمة المشاريع من داخل الكائن dbData
  const projects = dbData.projects;

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Our Masterpieces</h1>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {/* الجزء الخاص بالصورة والـ Overlay */}
            <div className="image-wrapper">
              <img src={project.image} alt={project.title} />
              
              <div className="overlay">
                {/* هنا التفصيلة المهمة: الزرار بيفتح صفحة التفاصيل بناء على الـ ID */}
                <button onClick={() => navigate(`/portfolio/${project.id}`)}>
                  Show Details
                </button>
              </div>
            </div>

            {/* نصوص الكارت الخارجية */}
            <div className="content">
              <h3>{project.title}</h3>
              <p>{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;