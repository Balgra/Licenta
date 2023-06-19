import React from 'react';
import './Navbar.css';
import {Logout} from "../Auth/Auth";
//BEM Block method modifiers ->>css methodology ( to write css easy)
const Navbar = ({loggedIn, setLoggedIn}) => {
	
	const handleLogout = () =>{
		Logout();
		setLoggedIn(false);
	}
	
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand text-white" href="/">BizBoost</a>
				<div className="collapse navbar-collapse justify-content-center" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link text-white" href="/offermaker">OfferMaker</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="/learning">Learning</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="/offers" tabIndex="-1">Offers</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="/plan" tabIndex="-1">Investing-Plan</a>
						</li>
					</ul>
				</div>
				<div className="app__navbar-login">
					{loggedIn ?
						<ul className="navbar-nav">
							<li className="nav-item"><a href="/" onClick={handleLogout} className="p__opensans">Log Out</a></li>
						</ul>
						:
						<ul className="navbar-nav">
							<li className="nav-item"><a href="/login" className="p__opensans">Log In</a></li>
						</ul>}
				</div>
			</div>
		</nav>
	);
};
///<li className="p__opensans"><a href="/profile">Profile</a></li>
export default Navbar;