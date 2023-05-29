import "../components/OfferForm/Offers.css";
import React, { useState } from "react";
/*
const InvestingHelper = () => {
	const [offer, setOffers] = useState([]);
	
	const fetchOffers = async () => {
		try {
			const response = await fetch("https://localhost:7239/api/offers/plan", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			
			if (response.ok) {
				const data = await response.json();
				setOffers(data);
				console.log(data);
			} else {
				console.error("Error fetching offers:", response.statusText);
			}
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
	
	
	
	return (
		<div>
				<div
					className="offer-item"
					key={offer.id}
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
			)
		</div>
	);
};

export default  InvestingHelper;*/


const InvestingHelper = () => {
	const [offer, setOffer] = useState(null);
	
	const fetchOffer = async () => {
		try {
			const token = localStorage.getItem('token');
			const response = await fetch("https://localhost:7239/api/offers/plan", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`
				},
			});
			
			if (response.ok) {
				const data = await response.json();
				setOffer(data);
				console.log(data);
			} else {
				console.error("Error fetching offer:", response.statusText);
			}
		} catch (error) {
			console.error("Error fetching offer:", error);
		}
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
		<div>
			{offer ? (
				<div>
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
			) : (
				<p>No offer available</p>
			)}
			<button onClick={fetchOffer}>Get Offer</button>
		</div>
	);
};

export default InvestingHelper;