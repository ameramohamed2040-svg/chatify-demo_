
import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((users) => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          setIsLoggedIn(true); 
          navigate("/"); 
        } else {
          alert("Wrong email or password!");
        }
      })
      .catch(err => {
        alert("Server is not running on port 5000");
      });
  };

  return (
    <div className="main-login-container">
      <div className="login-form-box">
        <h1 className="login-title">Login</h1>
        
        <form onSubmit={handleLogin} className="login-form-content">
          <div className="form-input-wrapper">
            <label className="input-label">Email</label>
            <input
              type="email"
              placeholder="test@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="styled-input"
              required 
            />
          </div>

          <div className="form-input-wrapper">
            <label className="input-label">Password</label>
            <input
              type="password"
              placeholder="...."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="styled-input"
              required
            />
          </div>

          <button type="submit" className="primary-login-btn">
            Log In
          </button>
        </form>

        <div className="social-login-buttons">
 <button 
    type="button" 
    className="social-btn" 
    onClick={() => window.open("https://www.google.com", "_blank")}
  >
    <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="google" width="20" />
    Log in with Google
  </button>
  
  {/* زرار فيسبوك */}
  <button 
    type="button" 
    className="social-btn" 
    onClick={() => window.open("https://www.facebook.com", "_blank")}
  >
    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="facebook" width="20" />
    Log in with Facebook
  </button>
</div>
      </div>
    </div>
  );
}

export default Login;