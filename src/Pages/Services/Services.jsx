import React, { useEffect, useState } from 'react';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]); // تأكدي إن البداية مصفوفة فاضية []
useEffect(() => {
  fetch('http://localhost:5000/services')
    .then((res) => {
      if (!res.ok) throw new Error("Check your db.json key name!");
      return res.json();
    })
    .then((data) => {
      // لو الداتا جات عبارة عن Object كبير، هناخد منه الـ services بس
      const finalData = Array.isArray(data) ? data : data.services;
      if (finalData) {
        setServices(finalData);
      }
    })
    .catch((err) => console.log("Fetch error:", err));
}, []);

  // الأيقونات
  const icons = [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
  ];

  return (
    <section className="services-page">
      <div className="container">
        <h2 className="section-title">Our Expert Services</h2>
        
        <div className="services-grid">
          {/* الحماية هنا: لو الـ services موجودة وفيها داتا اعمل map */}
          {services && services.length > 0 ? (
            services.map((service, index) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  {icons[index] || icons[0]}
                </div>
                <h3 className="service-name">{service.title}</h3>
                <p className="service-text">{service.description}</p>
              </div>
            ))
          ) : (
            <p>Loading services...</p> // رسالة تظهر لحد ما البيانات تيجي
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;