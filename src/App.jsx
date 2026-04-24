
import { Routes, Route , useLocation } from 'react-router-dom';
import React, { useState } from 'react'; 
import Navbar from './Components/Navbar/Navbar'; 
import Home from './Pages/Home/Home';          
import Login from './Components/login/Login';        
import Profile from './Pages/Profile/Profile';  
import Portfolio from './Pages/Portfolio/Portfolio';
import ProjectDetails from './Pages/ProjectDetils/ProjectDetils';
import Services from './Pages/Services/Services';
import About from './Pages/About/About';

function App() {

  // الحالة: هل المستخدم مسجل دخول؟ (True أو False)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  return (
    <>
  
{location.pathname !== "/login" && location.pathname !== "/profile" && <Navbar isLoggedIn={isLoggedIn} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      <Route path="/portfolio/:projectId" element={<ProjectDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/Profile" element={<Profile setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </>

  );
}

export default App;