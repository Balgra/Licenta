import React from 'react';
import './learn-page.css';

const Learn = () => {
	return (
		<div className="learn-container bg-light">
			<div className="app__wrapper_info section__padding bg-light">
				<h1 className="headteacher__cormorant text-black text-center">Welcome to BizBoost Learning Page</h1>
				<h5 className=" text-black">
					This page is meant for you. Do you want to make great businesses, or invest in the next big company? Here is your place to learn how to do it.
				</h5>
			</div>
			
			<div className="app__wrapper bg-light">
				<div className="app__wrapper_videos section__padding bg-light">
					<div className="row">
						<div className="col-md-6 mb-4">
							<iframe className="responsive-iframe" src="https://www.youtube.com/embed/gNRGkMeITVU"
									frameBorder="0"
									title="YouTube Video Player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen/>
						</div>
						<div className="col-md-6 mb-4">
							<iframe
								className="responsive-iframe"
								src="https://www.youtube.com/embed/07oBBPR61kA"
								title="YouTube Video Player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
						<div className="col-md-6 mb-4">
							<iframe
								className="responsive-iframe"
								src="https://www.youtube.com/embed/GwyzBt5V9Jc"
								title="YouTube Video Player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
						<div className="col-md-6 mb-4">
							<iframe
								className="responsive-iframe"
								src="https://www.youtube.com/embed/8X0KIQniCj0"
								title="YouTube Video Player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
					</div>
				</div>
			</div>
			
			<div className="app__wrapper_info section__padding bg-light">
				<h1 className="headteacher__cormorant text-black bg-light">How about learning how to build your own business</h1>
				<h5 className=" text-black">
					Here are some videos you can start with:
				</h5>
			</div>
			
			<div className="app__wrapper bg-light">
				<div className="app__wrapper_videos section__padding bg-light">
					<div className="row">
						<div className="col-md-6 mb-4">
							<iframe className="responsive-iframe" src="https://www.youtube.com/embed/DAvGB6UWbQ4"
									frameBorder="0"
									title="YouTube Video Player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen/>
						</div>
						<div className="col-md-6 mb-4">
							<iframe
								className="responsive-iframe"
								src="https://www.youtube.com/embed/9-D4n9-7UA0"
								title="YouTube Video Player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
						<div className="col-md-6 mb-4">
							<iframe
								className="responsive-iframe"
								src="https://www.youtube.com/embed/IAaTnl1B5Yg"
								title="YouTube Video Player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
						<div className="col-md-6 mb-4">
							<iframe
								className="responsive-iframe"
								src="https://www.youtube.com/embed/SknQnpXjw4o"
								title="YouTube Video Player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="d-flex align-items-center justify-content-center bg-light">
				<div className="text-center">
					<div className="d-flex">
						<ul className="list-group  list-group-lg me-3 border border-dark">
							<li className="list-group-item border border-dark"><strong>Books about investing</strong></li>
							<li className="list-group-item border border-dark">"The Intelligent Investor" by Benjamin Graham</li>
							<li className="list-group-item border border-dark">"Common Stocks and Uncommon Profits" by Philip Fisher</li>
							<li className="list-group-item border border-dark">"A Random Walk Down Wall Street" by Burton Malkiel:</li>
							<li className="list-group-item border border-dark">"The Little Book of Common Sense Investing"  by John C. Bogle</li>
							<li className="list-group-item border border-dark">"Thinking, Fast and Slow" by Daniel Kahneman</li>
						</ul>
						<ul className="list-group list-group-lg ms-3">
							<li className="list-group-item border border-dark"><strong>Books about making a business</strong></li>
							<li className="list-group-item border border-dark">"The Lean Startup" by Eric Ries</li>
							<li className="list-group-item border border-dark">"The E-Myth Revisited" by Michael E. Gerber</li>
							<li className="list-group-item border border-dark">"Zero to One" by Peter Thiel</li>
							<li className="list-group-item border border-dark">"The Innovator's Dilemma" by Clayton M. Christensen</li>
							<li className="list-group-item border border-dark">"Start with Why" by Simon Sinek</li>
						</ul>
					</div>
				</div>
			</div>
			<br/>
		    <br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
		</div>
	);
};

export default Learn;