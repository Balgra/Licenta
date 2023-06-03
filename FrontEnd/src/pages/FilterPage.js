import "../components/OfferForm/Offers.css";
import React, { useState } from "react";

const FilterPage = () => {
	const [offerreq, setOfferreq] = useState(null);
	
	const initialRequiermentRequest = {
		businessModel: '',
		targetAudience: '',
		riskFactor: 0,
		monthlyIncome: 0,
		monthlySpendings: 0,
		companyValue: 0,
		marketingStrategies: ''
	};
	
	const [requiermentRequest, setRequiermentRequest] = useState(initialRequiermentRequest);
	
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setRequiermentRequest((prevReq) => ({
			...prevReq,
			[name]: value
		}));
	};
	
	const fetchOfferReq = async () => {
		try {
			const token = localStorage.getItem('token');
			const queryParams = new URLSearchParams({
				businessModel: requiermentRequest.businessModel,
				targetAudience: requiermentRequest.targetAudience,
				RiskFactor: requiermentRequest.riskFactor,
				MonthlyIncome: requiermentRequest.monthlyIncome,
				MonthlySpendings: requiermentRequest.monthlySpendings,
				CompanyValue: requiermentRequest.companyValue,
				MarketingStrategies: requiermentRequest.marketingStrategies
			});
			const response = await fetch(`https://localhost:7239/api/offers/requierments?${queryParams}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`
				},
			});
			
			if (response.ok) {
				const data = await response.json();
				setOfferreq(data);
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
				<div>
					<label>Business Model:</label>
					<input type="text" name="businessModel" value={requiermentRequest.businessModel} onChange={handleInputChange} />
					
					<label>Target Audience:</label>
					<input type="text" name="targetAudience" value={requiermentRequest.targetAudience} onChange={handleInputChange} />
					
					<label>Risk Factor:</label>
					<input type="integer" name="riskFactor" value={requiermentRequest.riskFactor} onChange={handleInputChange} />
					
					<label>Monthly Income:</label>
					<input type="integer" name="monthlyIncome" value={requiermentRequest.monthlyIncome} onChange={handleInputChange} />
					
					<label>Monthly Spendings:</label>
					<input type="integer" name="monthlySpendings" value={requiermentRequest.monthlySpendings} onChange={handleInputChange} />
					
					<label>Company Value:</label>
					<input type="integer" name="companyValue" value={requiermentRequest.companyValue} onChange={handleInputChange} />
					
					<label>Marketing Strategies:</label>
					<input type="text" name="marketingStrategies" value={requiermentRequest.marketingStrategies} onChange={handleInputChange} />
					
					{/* Add more input fields for other properties of RequiermentRequest */}
					
					<button onClick={fetchOfferReq}>Get Offer</button>
				</div>
				{offerreq ? (
					<div>
						<p>AuthorName: {offer.authorName}</p>
						<p>CompanyEmail: {offer.company_Email}</p>
						<p>CompanyName: {offer.company_Name}</p>
						<p>Deadline: {formatDeadline(offer.deadline)}</p>
						<p>MarketSize: {offer.description.marketSize}</p>
						<p>BusinessModel: {offer.description.businessModel}</p>
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
	</div>
	);
};

export default FilterPage;