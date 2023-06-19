import './App.css';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/loginPage";
import CompanyPage from "./pages/CompanyPage"
//import ProfilePage from "./pages/ProfilePage"
import React, { useState, useEffect } from "react";
import LearnPage from "./pages/LearnPage"
import OffersPage from "./pages/OffersPage"
import RegisterPage from "./pages/RegisterPage"
import InvestingHelper from "./pages/InvestingHelper";
import Navbar from "./components/Navbar/nav-bar"
import OfferPage from "./pages/OfferPage"
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {IsAuthenticated} from "./components/Auth/Auth"
import Footer from "./Footer/Footer";

const  App = () => {
    const [submissions, setSubmissions] = useState([]);
    
    const handleFormSubmit = (data) => {
        setSubmissions([...submissions, data]);
    };
    
    const [loggedIn, setLoggedIn] = useState(false);
    
    
    useEffect(() => {
        setLoggedIn(IsAuthenticated());
    }, []);
  return (
      <>
        
        <BrowserRouter>
            <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
          <Routes>
                  <Route path="/" element={<HomePage  loggedIn={loggedIn}/>}/>
                  <Route path="login" element={<LoginPage  setLoggedIn={setLoggedIn}/>}/>
                  <Route path="offermaker" element={<CompanyPage onSubmit={handleFormSubmit} submissions={submissions} loggedIn={loggedIn}/>}/>
                  <Route path="register" element={<RegisterPage/>}/>
                  <Route path="plan" element={<InvestingHelper loggedIn={loggedIn}/>}/>
                  <Route path="/offer/:id" element={<OfferPage loggedIn={loggedIn}/>}/>
                  <Route path="offers" element={<OffersPage loggedIn={loggedIn} />}/>
                  <Route path="learning" element={<LearnPage loggedIn={loggedIn}/>}/>
            }
          </Routes>
            <Footer/>
        </BrowserRouter>
      </>
  );
}

export default App;
