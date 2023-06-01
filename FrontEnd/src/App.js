import './App.css';
import React, { useState } from 'react';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/loginPage";
import CompanyPage from "./pages/CompanyPage"
//import ProfilePage from "./pages/ProfilePage"
import LearnPage from "./pages/LearnPage"
import OffersPage from "./pages/OffersPage"
import RegisterPage from "./pages/RegisterPage"
import InvestingHelper from "./pages/InvestingHelper";
import Navbar from "./components/Navbar/nav-bar"
import OfferPage from "./pages/OfferPage"
import {BrowserRouter, Routes, Route,} from "react-router-dom";

const  App = () => {
    const [submissions, setSubmissions] = useState([]);
    
    const handleFormSubmit = (data) => {
        setSubmissions([...submissions, data]);
    };
   // <Route path="profile" element={<ProfilePage/>}/>
  return (
      <>
        
        <BrowserRouter>
            <Navbar/>
          <Routes>
                  <Route path="/" element={<HomePage />}/>
                  <Route path="login" element={<LoginPage/>}/>
                  <Route path="offermaker" element={<CompanyPage onSubmit={handleFormSubmit} submissions={submissions}/>}/>
              <Route path="register" element={<RegisterPage/>}/>
                     <Route path="plan" element={<InvestingHelper/>}/>
              <Route path="/offer/:id" element={<OfferPage/>}/>
                   <Route path="offers" element={<OffersPage  />}/>
                   <Route path="learning" element={<LearnPage/>}/>
            }
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
