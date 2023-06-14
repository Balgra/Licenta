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
				<div
					className="offer-item card mb-4 bg-dark-subtle"
					key={offer.id}
					onClick={() => handleOfferClick(offer)}
				>
					<div className="card-body">
					<p>AuthorName: {offer.authorName}</p>
					<p>CompanyEmail: {offer.company_Email}</p>
					<p>CompanyName: {offer.company_Name}</p>
					<p>Deadline: {formatDeadline(offer.deadline)}</p>
					<p>MarketSize: {offer.description.marketSize}</p>
					<p>BusinessModel: {offer.description.businessModel}</p>
					<p>TargetAudience: {offer.description.targetAudience}</p>
					<p>MarketingStrategies: {offer.description.marketingStrategies}</p>
					<p>Description: {offer.description.descriptions}</p>
					<p>CostTierOne: {offer.transaction.cost_TierOne}</p>
					<p>CostTierTwo: {offer.transaction.cost_TierTwo}</p>
					<p>CostTierThree: {offer.transaction.cost_TierThree}</p>
					<p>CostTierFour: {offer.transaction.cost_TierFour}</p>
					<hr />
					</div>
				</div>
			))}
			
		</div>
	);
};

export default Offers;

