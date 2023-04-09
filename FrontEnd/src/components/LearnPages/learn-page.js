import React from 'react';
import './learn-page.css';
//BEM Block method modifiers ->>css methodology ( to write css easy)
const Learn = () => {
	return (
		<div className="app__wrapper app__background">
			<div className="app__wrapper_info section__padding">
				<h1 className="headteacher__cormorant">Learn with Us</h1>
				<p className="app_color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet mi eu libero posuere facilisis. Integer posuere tellus eu sem scelerisque faucibus. Etiam nec fermentum nisl, eget commodo enim. Aliquam consectetur sit amet elit quis ultricies.</p>
			</div>
			<div className="app__wrapper_img">
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/dQw4w9WgXcQ"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</div>
			
			<div className="app__wrapper">
				<div className="app__wrapper_img app__wrapper_img-reverse">
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/dQw4w9WgXcQ"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</div>
				<div className="app__wrapper_info section__padding">
					<h1 className="headteacher__cormorant">More Learning</h1>
					<p className="app_color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet mi eu
						libero posuere facilisis. Integer posuere tellus eu sem scelerisque faucibus. Etiam nec fermentum nisl,
						eget commodo enim. Aliquam consectetur sit amet elit quis ultricies.</p>
				</div>
			</div>
		</div>
	
	);
};

export default Learn;