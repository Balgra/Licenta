import React from 'react';
import './Navbar.css';
//BEM Block method modifiers ->>css methodology ( to write css easy)
const Navbar = () => {
	return (
		<nav className="app__navbar">
			<ul className="app__navbar-links">
				<li className="p__opensans"><a href="/">Home</a></li>
				{/*p_opensans e din App.css*/}
				<li className="p__opensans"><a href="/company">Company</a></li>
				<li className="p__opensans"><a href="/profile">Profile</a></li>
				<li className="p__opensans"><a href="/learning">Learning</a></li>
			</ul>
			<div className="app__navbar-login">
				<a href="/login" className="p__opensans">Log In / Registration</a>
			</div>
		</nav>
	);
};

export default Navbar;