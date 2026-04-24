import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Profile');

  return (
    <div className="profile-container">
      <aside className="profile-sidebar">
        <ul className="sidebar-menu">
          <li className={activeTab === 'Profile' ? 'active' : ''} onClick={() => setActiveTab('Profile')}>Profile</li>
          <li className={activeTab === 'Security' ? 'active' : ''} onClick={() => setActiveTab('Security')}>Security</li>
          <li className={activeTab === 'Privacy' ? 'active' : ''} onClick={() => setActiveTab('Privacy')}>Privacy</li>
          <li className={activeTab === 'Notifications' ? 'active' : ''} onClick={() => setActiveTab('Notifications')}>Notifications</li>
          <li className={activeTab === 'Payments' ? 'active' : ''} onClick={() => setActiveTab('Payments')}>Payment Methods</li>
          <li className="danger">Close Account</li>
          {/* زرار تسجيل الخروج */}
          <li className="logout-item" onClick={() => navigate('/login')}>
            🚪 Log Out
          </li>
        </ul>
      </aside>

      <main className="profile-main">
        <button className="home-back-btn" onClick={() => navigate("/")}>🏠 Home</button>
        
        <h2>{activeTab} Settings</h2>
        <hr />

        {/* محتوى الصفحة لملء الفراغ */}
        <div className="profile-content-scroll">
          <div className="profile-upload-section">
            <div className="avatar-wrapper">
               <img src="https://ui-avatars.com/api/?name=User&background=random" alt="Avatar" />
            </div>
            <div className="upload-info">
              <p className="upload-title">Your Profile Picture</p>
              <div className="upload-btns">
                <button className="btn-browse">Change Photo</button>
                <button className="btn-reset">Remove</button>
              </div>
            </div>
          </div>

          <form className="profile-form">
            <div className="form-row">
              <div className="form-group">
                <label>Display Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="example@mail.com" />
              </div>
            </div>

            <div className="form-group">
              <label>Professional Bio</label>
              <textarea rows="3" placeholder="Tell us about yourself..."></textarea>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Location</label>
                <input type="text" placeholder="Cairo, Egypt" />
              </div>
              <div className="form-group">
                <label>Timezone</label>
                <select>
                  <option>GMT +02:00 (Cairo)</option>
                  <option>GMT +00:00 (London)</option>
                </select>
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="save-btn">Save Changes</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Profile;