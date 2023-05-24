import React, { useState, useEffect } from "react";
import "./Offers.css";
import OfferDetails from "./OfferDetails";

const Offers = () => {
	const [offers, setOffers] = useState([]);
	const [selectedOffer, setSelectedOffer] = useState(null);
	const [showOfferDetails, setShowOfferDetails] = useState(false); // Track whether to show offer details or not
	
	const fetchOffers = async () => {
		try {
			const response = await fetch("https://localhost:7239/api/offers", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
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
	
	const OfferStatus = ({ status, tier }) => {
		return <p>Status Tier{tier}: {status ? "Taken" : "Empty"}</p>;
	};
	
	const handleModifyTiers = () => {
		setSelectedOffer(null); // Reset the selected offer
		setShowOfferDetails(false); // Hide the offer details
	};
	
	const handleOfferClick = (offer) => {
		setSelectedOffer(offer);
		setShowOfferDetails(true); // Show the offer details
	};
	
	return (
		<div className="offers-container">
			{offers.map((offer) => (
				<div
					className="offer-item"
					key={offer.id}
					onClick={() => handleOfferClick(offer)}
				>
					<p>AuthorName: {offer.authorName}</p>
					<p>CompanyEmail: {offer.company_Email}</p>
					<p>CompanyName: {offer.company_Name}</p>
					<p>Deadline: {formatDeadline(offer.deadline)}</p>
					<p>MarketSize: {offer.description.marketSize}</p>
					<p>BusinessModel: {offer.description.businessModel}</p>
					<p>Competitiveness: {offer.description.competitiveness}</p>
					<p>FinancialStatus: {offer.description.financialStatus}</p>
					<p>RiskFactors: {offer.description.riskFactors}</p>
					<p>CostTierOne: {offer.transaction.cost_TierOne}</p>
					<p>CostTierTwo: {offer.transaction.cost_TierTwo}</p>
					<p>CostTierThree: {offer.transaction.cost_TierThree}</p>
					<p>CostTierFour: {offer.transaction.cost_TierFour}</p>
					<OfferStatus status={offer.transaction.tierOne} tier="One" />
					<OfferStatus status={offer.transaction.tierTwo} tier="Two" />
					<OfferStatus status={offer.transaction.tierThree} tier="Three" />
					<OfferStatus status={offer.transaction.tierFour} tier="Four" />
					<hr />
				</div>
			))}
			{showOfferDetails && (
				<div className="offer-popup">
					<OfferDetails offer={selectedOffer} handleModifyTiers={handleModifyTiers} />
				</div>
			)}
		</div>
	);
};

export default Offers;