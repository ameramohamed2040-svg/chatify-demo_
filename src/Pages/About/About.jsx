import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/staff')
      .then((res) => {
        if (!res.ok) throw new Error("Staff key not found in db.json");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setStaff(data);
        }
      })
      .catch((err) => console.log("Fetch error:", err));
  }, []);

  return (
    <div className="about-page-new">
      <header className="about-header">
        <h1>ABOUT</h1>
        <p className="subtitle">ALL ABOUT THE HUB</p>
      </header>

      <section className="staff-section">
        <div className="staff-label">• STAFF •</div>
        <div className="staff-grid">
          {/* حماية الـ map: لو الـ staff مصفوفة وفيها داتا اعرضها، غير كدة اظهر Loading */}
          {Array.isArray(staff) && staff.length > 0 ? (
            staff.map((member) => (
              <div key={member.id} className="staff-card">
                <div className="image-container">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="card-info">
                  <h3>{member.name}</h3>
                  <span className="member-role">{member.role}</span>
                  <p className="member-bio">{member.bio}</p>
                  <div className="skills-section">
                    <h4>Skills:</h4>
                    <ul>
                      {member.skills && member.skills.map((skill, i) => (
                        <li key={i}>-{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading staff data...</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default About;