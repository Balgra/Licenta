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
		<nav className="app__navbar">
			<ul className="app__navbar-links">
				<li className="p__opensans"><a href="/">Home</a></li>
				<li className="p__opensans"><a href="/offermaker">OfferMaker</a></li>
				<li className="p__opensans"><a href="/learning">Learning</a></li>
				<li className="p__opensans"><a href="/offers">Offers</a></li>
				<li className="p__opensans"><a href="/plan">Investing-Plan</a></li>
			</ul>
			<div className="app__navbar-login">
				{loggedIn ?
					<ul className="app__navbar-links">
						 <li className="p__opensans"><a href="/" onClick={handleLogout} className="p__opensans">Log Out</a></li>
					</ul>
					:
					<ul className="app__navbar-links">
						<li className="p__opensans"><a href="/login" className="p__opensans">Log In</a></li>
					</ul>}
					</div>
		</nav>
	);
};
///<li className="p__opensans"><a href="/profile">Profile</a></li>
export default Navbar;