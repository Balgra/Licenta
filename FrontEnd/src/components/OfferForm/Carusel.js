import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle';

const Carusel = () =>{
	
	
	return (
		<div id="carouselExampleFade" className="carousel slide carousel-fade caru">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						src="https://via.placeholder.com/800x400?text=Placeholder+Image+1"
						className="d-block w-100"
						alt="First slide"
					/>
				</div>
				
				<div className="carousel-item">
					<img
						src="https://via.placeholder.com/800x400?text=Placeholder+Image+2"
						className="d-block w-100"
						alt="Second slide"
					/>
				</div>
				<div className="carousel-item">
					<img
						src="https://via.placeholder.com/800x400?text=Placeholder+Image+3"
						className="d-block w-100"
						alt="Third slide"
					/>
				</div>
				<div className="carousel-item ">
					<img
						src="https://via.placeholder.com/800x400?text=Placeholder+Image+4"
						className="d-block w-100"
						alt="ForthSlide slide"
					/>
				</div>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleFade"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"/>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleFade"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"/>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
	
}

export default Carusel;