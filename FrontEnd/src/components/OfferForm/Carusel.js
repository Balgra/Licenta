import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle';

const Carusel = () => {
	
	return (
		<div id="carouselExampleFade" className="carousel slide carousel-fade caru" data-bs-interval="false">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						src="https://via.placeholder.com/900x400?text=Step One Helper"
						className="d-block w-100"
						alt="First slide"
					/>
					<div className="carousel-caption">
						<p className="text-black" style={{ fontSize: "2rem" }}>Let's Boost your business!</p>
						<p className="text-black" style={{ fontSize: "2rem" }}>This is a helping guide for making your business</p>
						<p className="text-black" style={{ fontSize: "2rem" }}>In this step you have to set up your basic information</p>
						<br/>
						
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						
						<p className="text-black" style={{ fontSize: "2rem" }}>Here, you also provide the prices for the Tiers</p>
						<p className="text-black" style={{ fontSize: "2rem" }}>Each Tier represents a fraction of your company, and few additive options</p>
					</div>
				</div>
				<div className="carousel-item">
					<img
						src="https://via.placeholder.com/900x400?text=Step Two Helper"
						className="d-block w-100"
						alt="Second slide"
					/>
					<div className="carousel-caption">
						<p className="text-black" style={{ fontSize: "2rem" }}>BizBoost offers some examples for easing your task</p>
						<p className="text-black" style={{ fontSize: "2rem" }}>In case your business is not handles, send us an email</p>
						<br/>
						
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						
						<p className="text-black" style={{ fontSize: "2rem" }}>Provide a catchy description, you need Investors to boost your business</p>
						<p className="text-black" style={{ fontSize: "2rem" }}>What are the Marketing Strategies your company is using?</p>
					</div>
				</div>
				<div className="carousel-item">
					<img
						src="https://via.placeholder.com/900x400?text=Step Three Helper"
						className="d-block w-100"
						alt="Third slide"
					/>
					<div className="carousel-caption">
						<p className="text-black" style={{ fontSize: "2rem" }}>Here you need to talk some numbers</p>
						<p className="text-black" style={{ fontSize: "2rem" }}>Provide accurate values about your company</p>
						<br/>
						
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						
						<p className="text-black" style={{ fontSize: "2rem" }}>Each of the fields will be taken into account to calculate the company's risk factor</p>
						<p className="text-black" style={{ fontSize: "2rem" }}>Also, select the method used to evaluate the company</p>
					</div>
				</div>
				<div className="carousel-item">
					<img
						src="https://via.placeholder.com/900x400?text=Step Four Helper"
						className="d-block w-100"
						alt="Fourth slide"
					/>
					<div className="carousel-caption">
						<p className="text-black" style={{ fontSize: "1.7rem" }}>Lastly, we get to see how the company embraces technology</p>
						<p className="text-black" style={{ fontSize: "1.7rem" }}>Don't worry if the company hasn't had the chance to explore these options</p>
						<br/>
						
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						
						<p className="text-black" style={{ fontSize: "1.7rem" }}>Select the options that best fit your company</p>
						<p className="text-black" style={{ fontSize: "1.7rem" }}>Afterwards, the company can always come back and improve by adding those options as future improvements</p>
					</div>
				</div>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleFade"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true" />
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleFade"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
}

export default Carusel;