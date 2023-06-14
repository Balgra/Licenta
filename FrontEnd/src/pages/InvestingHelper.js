import "../components/OfferForm/Offers.css";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

const InvestingHelper = ({loggedIn}) => {
	const [offer, setOffer] = useState(null);
	const [offerreq, setOfferreq] = useState(null);
	const navigate = useNavigate();
	
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
	
	if (!loggedIn) {
		navigate('/login');
		return null; // Return null or any placeholder while redirecting
	}
	
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
	
	const handleOfferClick = (offer) => {
		navigate(`/offer/${offer.id}`);
	};
	
	return (
		<div className="bg-dark">
			<br/>
			<button onClick={fetchOffer}>Get Offer</button>
		<div>
			{offer ? (
				<div className="row justify-content-center"
					 onClick={() => handleOfferClick(offer)}>
					<div className="col-md-6">
						<div className="border p-4 text-white">
							<h4>Offer Details</h4>
							<p><strong>Author Name:</strong> {offer.authorName}</p>
							<p><strong>Company Email:</strong> {offer.company_Email}</p>
							<p><strong>Company Name:</strong> {offer.company_Name}</p>
							<p><strong>Deadline:</strong> {formatDeadline(offer.deadline)}</p>
							<p><strong>Market Size:</strong> {offer.description.marketSize}</p>
							<p><strong>Business Model:</strong> {offer.description.businessModel}</p>
							<p><strong>Risk Factors:</strong> {offer.description.riskFactors}</p>
							<p><strong>Cost Tier One:</strong> {offer.transaction.cost_TierOne}</p>
							<p><strong>Cost Tier Two:</strong> {offer.transaction.cost_TierTwo}</p>
							<p><strong>Cost Tier Three:</strong> {offer.transaction.cost_TierThree}</p>
							<p><strong>Cost Tier Four:</strong> {offer.transaction.cost_TierFour}</p>
							<OfferStatus status={offer.transaction.tierOne} tier="One" />
							<OfferStatus status={offer.transaction.tierTwo} tier="Two" />
							<OfferStatus status={offer.transaction.tierThree} tier="Three" />
							<OfferStatus status={offer.transaction.tierFour} tier="Four" />
						</div>
						<hr />
					</div>
				</div>
			) : (
				<div className="bg-dark">
					<p className="text-white">No offers available</p>
					<br/>
				</div>
			)}
		</div>
			
			<div>
				<br/>
				<br/>
				
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-6">
							<h2 className="text-white">Investing Requirements</h2>
							<form>
								<div className="mb-3">
									<label htmlFor="businessModel" className="form-label text-white">Business Model:</label>
									<input
										type="text"
										className="form-control"
										id="businessModel"
										name="businessModel"
										value={requiermentRequest.businessModel}
										onChange={handleInputChange}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="targetAudience" className="form-label text-white">Target Audience:</label>
									<input
										type="text"
										className="form-control"
										id="targetAudience"
										name="targetAudience"
										value={requiermentRequest.targetAudience}
										onChange={handleInputChange}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="riskFactor" className="form-label text-white">Risk Factor:</label>
									<input
										type="number"
										className="form-control"
										id="riskFactor"
										name="riskFactor"
										value={requiermentRequest.riskFactor}
										onChange={handleInputChange}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="monthlyIncome" className="form-label text-white">Monthly Income:</label>
									<input
										type="number"
										className="form-control"
										id="monthlyIncome"
										name="monthlyIncome"
										value={requiermentRequest.monthlyIncome}
										onChange={handleInputChange}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="monthlySpendings" className="form-label text-white">Monthly Spendings:</label>
									<input
										type="number"
										className="form-control"
										id="monthlySpendings"
										name="monthlySpendings"
										value={requiermentRequest.monthlySpendings}
										onChange={handleInputChange}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="companyValue" className="form-label text-white">Company Value:</label>
									<input
										type="number"
										className="form-control"
										id="companyValue"
										name="companyValue"
										value={requiermentRequest.companyValue}
										onChange={handleInputChange}
									/>
								</div>
								<div className="text-center">
									<button type="button" className="btn btn-primary" onClick={fetchOfferReq}>Get Offer</button>
								</div>
							   <br/>
							</form>
						</div>
					</div>
				</div>
				{offerreq && offerreq.length > 0 ? (
					offerreq.map((offer, index) => (
						<div key={index}>
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
					))
				) : (
					<div className="bg-dark">
					<p className="text-white">No offers fit the searching criteria</p>
					<br/>
					</div>
				)}
				
			</div>
		</div>
	);
};

export default InvestingHelper;