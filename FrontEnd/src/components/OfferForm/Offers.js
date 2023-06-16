import React, { useState, useEffect } from "react";
import "./Offers.css";
import {useNavigate} from "react-router-dom";
//import OfferDetails from "./OfferDetails";

const Offers = () => {
	const [offers, setOffers] = useState([]);

	
	const navigate = useNavigate();
	
	const fetchOffers = async () => {
		try {
			const token = localStorage.getItem('token');
			const response = await fetch("https://localhost:7239/api/offers", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`
				},
			});
			const data = await response.text();
			
			const offersList = JSON.parse(data);
			setOffers(offersList);
		} catch (error) {
			console.error("Error fetching offers:", error);
		}
	};
	
	useEffect(() => {
		fetchOffers();
	}, []);
	
	const formatDeadline = (deadline) => {
		const date = new Date(deadline);
		return date.toLocaleString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			second: "numeric",
		});
	};
	
	
	
	const handleOfferClick = (offer) => {
		navigate(`/offer/${offer.id}`);
	};
	
	return (
		<div className="offers-container">
			{offers.map((offer) => (
				<div className="col-lg-3 col-sm-6">
					<div className="card mb-5 mb-lg-4 m-lg-3" >
							<div
								className="card bg-dark-subtle"
								
							>
								<div className="card-body " >
									<h5 className="card-title text-muted text-uppercase text-center">{offer.company_Name}</h5>
									<h6 className="card-price text-center"><span className="period"><strong>Business Model : </strong>{offer.description.businessModel}</span></h6>
									<ul className="fa-ul">
										<li><span className="fa-li"><i className="fas fa-user"></i></span><strong>AuthorName:</strong> {offer.authorName}</li>
										<li><span className="fa-li"><i className="fas fa-envelope"></i></span><strong>CompanyEmail:</strong> {offer.company_Email}</li>
										<li><span className="fa-li"><i className="fas fa-building"></i></span><strong>CompanyName:</strong> {offer.company_Name}</li>
										<li><span className="fa-li"><i className="fas fa-calendar-alt"></i></span><strong>Deadline:</strong> {formatDeadline(offer.deadline)}</li>
										<li><span className="fa-li"><i className="fas fa-chart-pie"></i></span><strong>MarketSize:</strong> {offer.description.marketSize}</li>
										<li><span className="fa-li"><i className="fas fa-cogs"></i></span><strong>BusinessModel:</strong> {offer.description.businessModel}</li>
										<li><span className="fa-li"><i className="fas fa-bullseye"></i></span><strong>TargetAudience:</strong> {offer.description.targetAudience}</li>
										<li><span className="fa-li"><i className="fas fa-bullhorn"></i></span><strong>MarketingStrategies:</strong> {offer.description.marketingStrategies}</li>
										<li><span className="fa-li"><i className="fas fa-file-alt"></i></span><strong>Description:</strong> {offer.description.descriptions}</li>
									</ul>
									<hr />
									<div className="d-flex justify-content-center">
										<button
											className="btn btn-primary"
											onClick={() => handleOfferClick(offer)}
										>
											Head to Offer
										</button>
									</div>
								</div>
								
							</div>
					
					</div>
				
				</div>
			))}
			
		</div>
	);
};

export default Offers;

