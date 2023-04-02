import './App.css';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/loginPage";
import TransactionPage from "./pages/TransactionPage";
import CompanyPage from "./pages/CompanyPage"
import ProfilePage from "./pages/ProfilePage"
import LearnPage from "./pages/LearnPage"
import Navbar from "./components/Navbar/nav-bar"
import {BrowserRouter, Routes, Route,} from "react-router-dom";

function App() {
  return (
      <>
          <Navbar></Navbar>
        <BrowserRouter>
          <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="login" element={<LoginPage/>}/>
                  <Route path="transaction" element={<TransactionPage/>}/>
                  <Route path="company" element={<CompanyPage/>}/>
                   <Route path="profile" element={<ProfilePage/>}/>
                   <Route path="learning" element={<LearnPage/>}/>
            }
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
