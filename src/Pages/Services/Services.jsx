import React from 'react';
import './Services.css';

const Services = () => {
  // 1. البيانات الثابتة (نفس اللي في الصورة)
  const myServices = [
    {
      id: 1,
      title: "Web Development",
      desc: "بناء مواقع احترافية باستخدام أحدث التقنيات مثل React و Node.js.",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    },
    {
      id: 2,
      title: "UI/UX Design",
      desc: "تصميم واجهات مستخدم جذابة وسهلة الاستخدام تضمن أفضل تجربة للمستخدم.",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
    },
    {
      id: 3,
      title: "Digital Marketing",
      desc: "خطط تسويقية مبتكرة لزيادة وصولك لجمهورك المستهدف وتحقيق أهدافك.",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
    },
    {
      id: 4,
      title: "Mobile App Development",
      desc: "تطوير تطبيقات موبايل ذكية تعمل على أنظمة Android و iOS بكفاءة عالية.",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
    }
  ];

  return (
    <section className="services-page">
      <div className="container">
        <h2 className="section-title">Our Expert Services</h2>
        <div className="services-grid">
          {myServices.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-name">{service.title}</h3>
              <p className="service-text">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;