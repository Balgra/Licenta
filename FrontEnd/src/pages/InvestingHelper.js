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
		<div className="bg-light-subtle">
			<br/>
			<div className="d-flex mr-5 justify-content-start">
				<button onClick={fetchOffer}>Get Offer</button>
			</div>
		<div>
			{offer ? (
					<div className="d-flex justify-content-center">
				<div className="col-lg-3 col-sm-6">
					<div className="card mb-5 mb-lg-4 m-lg-3">
						<div className="card bg-dark-subtle">
							<div className="card-body">
								<h5 className="card-title text-muted text-uppercase text-center">{offer.company_Name}</h5>
								<h6 className="card-price text-center"><strong>Business Model:</strong> {offer.description.businessModel}</h6>
								<h6 className="card-price text-center">{offer.transaction.cost_TierOne} $<span className="period">/month</span></h6>
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
					</div>
			) : (
				<div className="bg-light-subtle">
					<p className="text-dark">No offers available</p>
					<br/>
				</div>
			)}
		</div>
			
			<div>
				<br/>
				<br/>
				<div className="container">
					<div className="row justify-content-center">
							<div className="text-center">
								<h2 className="text-dark">Investing Requirements</h2>
							</div>
							<form className="form bg-light-subtle">
								<div className="mb-3">
									<label htmlFor="businessModel" className="form-label text-dark">Business Model:
										<select
											className="form-control border border-3 border-dark"
											id="businessModel"
											name="businessModel"
											value={requiermentRequest.businessModel}
											onChange={handleInputChange}
										><option value="">Select Business Model</option>
											<option value="Subscription">Subscription</option>
											<option value="Affiliate">Affiliate</option>
											<option value="E-commerce">E-commerce</option>
											<option value="Freemium">Freemium</option></select>
									</label>
								</div>
								<div className="mb-3">
									<label htmlFor="targetAudience" className="form-label text-dark">Target Audience:</label>
									<select
										className="form-control border border-3 border-dark"
										id="targetAudience"
										name="targetAudience"
										value={requiermentRequest.targetAudience}
										onChange={handleInputChange}
									><option value="">Select Target Audience</option>
										<option value="Readers">Readers</option>
										<option value="Businesses">Businesses</option>
										<option value="Influencers">Influencers</option>
										<option value="Adults">Adults</option>
										<option value="Children">Children</option>
										<option value="Elderly">Elderly</option></select>
								</div>
								<div className="mb-3">
									<label htmlFor="riskFactor" className="form-label text-dark">Risk Factor:</label>
									<input
										type="number"
										className="form-control border border-3 border-dark"
										id="riskFactor"
										name="riskFactor"
										value={requiermentRequest.riskFactor}
										onChange={handleInputChange}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="monthlyIncome" className="form-label text-dark">Monthly Income:</label>
									<input
										type="number"
										className="form-control border border-3 border-dark"
										id="monthlyIncome"
										name="monthlyIncome"
										value={requiermentRequest.monthlyIncome}
										onChange={handleInputChange}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="monthlySpendings" className="form-label text-dark">Monthly Spendings:</label>
									<input
										type="number"
										className="form-control border border-3 border-dark"
										id="monthlySpendings"
										name="monthlySpendings"
										value={requiermentRequest.monthlySpendings}
										onChange={handleInputChange}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="companyValue" className="form-label text-dark">Company Value:</label>
									<input
										type="number"
										className="form-control border border-3 border-dark"
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
					<div className="bg-light-subtle">
					<p className="text-dark">No offers fit the searching criteria</p>
					<br/>
					</div>
				)}
				
			</div>
		</div>
	);
};

export default InvestingHelper;