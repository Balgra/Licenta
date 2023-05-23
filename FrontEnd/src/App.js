import './App.css';
import React, { useState } from 'react';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/loginPage";
import CompanyPage from "./pages/CompanyPage"
import ProfilePage from "./pages/ProfilePage"
import LearnPage from "./pages/LearnPage"
import OffersPage from "./pages/OffersPage"
import Navbar from "./components/Navbar/nav-bar"
import {BrowserRouter, Routes, Route,} from "react-router-dom";

const  App = () => {
    const [submissions, setSubmissions] = useState([]);
    
    const handleFormSubmit = (data) => {
        setSubmissions([...submissions, data]);
    };
    
  return (
      <>
        
        <BrowserRouter>
            <Navbar></Navbar>
          <Routes>
                  <Route path="/" element={<HomePage />}/>
                  <Route path="login" element={<LoginPage/>}/>
                  <Route path="company" element={<CompanyPage onSubmit={handleFormSubmit} submissions={submissions}/>}/>
                   <Route path="profile" element={<ProfilePage/>}/>
                   <Route path="offers" element={<OffersPage  />}/>
                   <Route path="learning" element={<LearnPage/>}/>
            }
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
