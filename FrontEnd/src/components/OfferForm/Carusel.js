import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle';

const Carusel = () => {
	
	return (
		<div id="carouselExampleFade" className="carousel slide carousel-fade caru">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						src="https://via.placeholder.com/900x400?text=Step One Helper"
						className="d-block w-100"
						alt="First slide"
					/>
					<div className="carousel-caption">
						<p className="text-white" style={{ fontSize: "2rem" }}>This is the description for Image 1.</p>
						<p className="text-white" style={{ fontSize: "2rem" }}>This is the description for Image 1.</p>
						<p className="text-white" style={{ fontSize: "2rem" }}>This is the description for Image 1.</p>
						<br/>
						
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						
						<p className="text-white" style={{ fontSize: "2rem" }}>This is the description for Image 1.</p>
						<p className="text-white" style={{ fontSize: "2rem" }}>This is the description for Image 1.</p>
					</div>
				</div>
				<div className="carousel-item">
					<img
						src="https://via.placeholder.com/900x400?text=Step Two Helper"
						className="d-block w-100"
						alt="Second slide"
					/>
					<div className="carousel-caption">
						<p className="text-white" style={{ fontSize: "2rem" }}>This is the description for Image 1.</p>
						<p className="text-white" style={{ fontSize: "2rem" }}>This is the description for Image 1.</p>
						<p className="text-white" style={{ fontSize: "2rem" }}>This is the description for Image 1.</p>
						<br/>
						
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						
						<p className="text-white" style={{ fontSize: "2rem" }}>This is the description for Image 1.</p>
						<p className="text-white" style={{ fontSize: "2rem" }}>This is the description for Image 1.</p>
					</div>
				</div>
				<div className="carousel-item">
					<img
						src="https://via.placeholder.com/900x400?text=Step Three Helper"
						className="d-block w-100"
						alt="Third slide"
					/>
					<div className="carousel-caption">
						<p className="text-white" style={{ fontSize: "2rem" }}>This is the description for Image 1.</p>
						<p className="text-white" style={{ fontSize: "2rem" }}>This is the description for Image 1.</p>
						<p className="text-white" style={{ fontSize: "2rem" }}>This is the description for Image 1.</p>
						<br/>
						
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						
						<p className="text-white" style={{ fontSize: "2rem" }}>This is the description for Image 1.</p>
						<p className="text-white" style={{ fontSize: "2rem" }}>This is the description for Image 1.</p>
					</div>
				</div>
				<div className="carousel-item">
					<img
						src="https://via.placeholder.com/900x400?text=Step Four Helper"
						className="d-block w-100"
						alt="Fourth slide"
					/>
					<div className="carousel-caption">
						<p className="text-white" style={{ fontSize: "2rem" }}>This is the description for Image 1.</p>
						<p className="text-white" style={{ fontSize: "2rem" }}>This is the description for Image 1.</p>
						<p className="text-white" style={{ fontSize: "2rem" }}>This is the description for Image 1.</p>
						<br/>
						
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						
						<p className="text-white" style={{ fontSize: "2rem" }}>This is the description for Image 1.</p>
						<p className="text-white" style={{ fontSize: "2rem" }}>This is the description for Image 1.</p>
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