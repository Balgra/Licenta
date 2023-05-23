import React, { useState, useEffect } from "react";

const Offers = () => {
	const [offers, setOffers] = useState([]);
	
	const fetchOffers = async () => {
		try {
			const response = await fetch("https://localhost:7239/api/offers", {
				method: "GET",
				headers: {
					'Content-Type': 'application/json',
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
		return date.toLocaleString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
		});
	};
	
	return (
		<div>
			{offers.map((offer) => (
				<div key={offer.id}>
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
					<hr />
				</div>
			))}
		</div>
	);
};

export default Offers;