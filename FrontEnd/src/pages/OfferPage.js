import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import "../components/OfferForm/Offers.css";
import OfferDetails from "../components/OfferForm/OfferDetails";

const OfferPage = () => {
	const { id } = useParams();
	const [offer, setOffer] = useState(null);
	
	const [selectedOffer, setSelectedOffer] = useState(null);
	const [showOfferDetails, setShowOfferDetails] = useState(false); // Track whether to show offer details or not
	
	useEffect(() => {
		const fetchOffer = async () => {
			try {
				const token = localStorage.getItem('token');
				const response = await fetch(`https://localhost:7239/api/offers/${id}`, {
					method: 'GET',
						headers: {
						'Content-Type': 'application/json',
							"Authorization": `Bearer ${token}`
					}});
				if (!response.ok) {
					throw new Error('Failed to fetch offer');
				}
				const data = await response.json();
				setOffer(data);
			} catch (error) {
				console.error('Error fetching offer:', error);
			}
		};
		
		fetchOffer();
	}, [id]);
	
	if (!offer) {
		return <div>Loading...</div>;
	}

	const handleModifyTiers = () => {
		setSelectedOffer(null); // Reset the selected offer
		setShowOfferDetails(false); // Hide the offer details
	};
	
	const handleOfferClick = (offer) => {
		
		setSelectedOffer(offer);
		setShowOfferDetails(true); // Show the offer details
	};
	
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
	
	return (
		<div className="offers-container">
				<h1>Offer Page</h1>
				<div className="offer-details"
					 onClick={() => handleOfferClick(offer)}
				>
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
					<OfferStatus status={offer.transaction.tierOne} tier="One" />
					<OfferStatus status={offer.transaction.tierTwo} tier="Two" />
					<OfferStatus status={offer.transaction.tierThree} tier="Three" />
					<OfferStatus status={offer.transaction.tierFour} tier="Four" />
				</div>
			{showOfferDetails && (
				<div className="offer-popup">
					<OfferDetails offer={selectedOffer} handleModifyTiers={handleModifyTiers} />
				</div>
			)}
		</div>
	);
};

export default OfferPage;