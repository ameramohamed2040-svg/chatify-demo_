import React from 'react';
import { useNavigate } from 'react-router-dom';
import computersImg from '../../assets/images/computers.png'; 
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* قسم الـ Hero الأساسي */}
      <section className="hero">
        <div className="container hero-container">
          
          {/* الجزء الأيسر: النصوص والأزرار */}
          <div className="hero-content">
            <h1 className="hero-main-title">Software<br />Development</h1>
            <p className="hero-subtitle">We make clean softwares!</p>
            <p className="hero-description">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat 
              volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.
            </p>
            <button className="sign-up-btn" onClick={() => navigate('/Portfolio')}>
              Portfolio
            </button>
          </div>

          {/* الجزء الأيمن: الصورة */}
          <div className="hero-image-wrapper">
            {/* الدائرة الصفراء الخلفية هنعملها بالـ CSS */}
            <div className="yellow-circle-bg"></div>
            <img src={computersImg} alt="Software Development Screens" />
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;