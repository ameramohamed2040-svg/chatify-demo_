import React from 'react';
import './About.css';

const About = () => {
  // بيانات الموظفين مع تفاصيل أكتر
  const staffData = [
    {
      id: 1,
      name: "JASON STROTHER",
      role: "LOS OCHO - LEAD DEVELOPER",
      bio: "خبير في بناء الأنظمة السحابية المعقدة وتطوير واجهات المستخدم. يعمل جيسون على ابتكار حلول برمجية ذكية تساعد الشركات على النمو وتسهيل تجربة المستخدم اليومية من خلال تقنيات React المتطورة.",
      skills: ["Cloud Architecture", "React Expert", "Node.js"],
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "SAM HARRY",
      role: "LOS OCHO - CREATIVE DIRECTOR",
      bio: "مصمم مبدع يهتم بأدق التفاصيل البصرية. سام يمتلك خبرة تزيد عن 10 سنوات في تصميم الهويات البصرية وواجهات التطبيقات التي تجمع بين الجمال والوظيفة العملية، مما يجعل التعامل مع التكنولوجيا تجربة ممتعة.",
      skills: ["Visual Design", "Branding", "UI/UX Strategy"],
      image: "https://randomuser.me/api/portraits/men/33.jpg"
    },
    {
      id: 3,
      name: "AMIRA MOHAMED",
      role: "DEV POTTER - FRONTEND ENGINEER",
      bio: "مهندسة واجهات أمامية متخصصة في تحويل التصاميم الصعبة إلى واقع ملموس. تركز أميرة على كتابة كود نظيف وقابل للتطوير، وتهتم جداً بأن يكون الموقع سريعاً ومتوافقاً مع كافة أنواع الشاشات والموبايلات.",
      skills: ["Frontend Dev", "Responsive Design", "JavaScript"],
      image: "https://randomuser.me/api/portraits/women/44.jpg" // تقدري تحطي صورتك هنا
    }
  ];

  return (
    <div className="about-page-new">
      <header className="about-header">
        <h1 className="main-title">ABOUT</h1>
        <p className="subtitle">ALL ABOUT THE HUB</p>
      </header>

      <section className="staff-section">
        <div className="staff-label">• STAFF •</div>
        <div className="staff-grid">
          {staffData.map((member) => (
            <div key={member.id} className="staff-card">
              <div className="image-wrapper">
                <img src={member.image} alt={member.name} className="staff-img" />
              </div>
              <div className="card-content">
                <h3 className="member-name">{member.name}</h3>
                <span className="member-role">{member.role}</span>
                <p className="member-bio">{member.bio}</p>
                <div className="skills-box">
                  <strong>Skills:</strong>
                  <ul>
                    {member.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;