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
		maxmonthlyIncome: 0,
		maxmonthlySpendings: 0,
		maxcompanyValue: 0,
	};
	
	const [requiermentRequest, setRequiermentRequest] = useState(initialRequiermentRequest);
	
	if (!loggedIn) {
		navigate('/login');
		return null;
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
				maxMonthlyIncome: requiermentRequest.maxmonthlyIncome,
				maxMonthlySpendings: requiermentRequest.maxmonthlySpendings,
				maxCompanyValue: requiermentRequest.maxcompanyValue,
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
	
	
	const handleOfferClick = (offer) => {
		navigate(`/offer/${offer.id}`);
	};
	
	return (
		<div className="bg-light-subtle">
			<br/>
			<div className="d-flex justify-content-center">
				<button onClick={fetchOffer}>Get Offer of the week</button>
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
				</div>
			)}
		</div>
			
			<div>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<div className="container">
					<div className="row justify-content-center">
							<div className="text-center">
								<h2 className="text-dark">Investing Requirements</h2>
							</div>
							<form className="row form bg-light-subtle">
								<div className="mb-3">
									<label htmlFor="businessModel" className="form-label text-dark">Business Model:</label>
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
									<label htmlFor="riskFactor" className="form-label text-dark">Minimum Risk Factor:</label>
									<input
										type="text"
										className="form-control border border-3 border-dark"
										id="riskFactor"
										name="riskFactor"
										value={requiermentRequest.riskFactor}
										onChange={handleInputChange}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="monthlyIncome" className="form-label text-dark">Minimum Monthly Income:</label>
									<input
										type="text"
										className="form-control border border-3 border-dark"
										id="monthlyIncome"
										name="monthlyIncome"
										value={requiermentRequest.monthlyIncome}
										onChange={handleInputChange}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="monthlySpendings" className="form-label text-dark">Minimum Monthly Spendings:</label>
									<input
										type="text"
										className="form-control border border-3 border-dark"
										id="monthlySpendings"
										name="monthlySpendings"
										value={requiermentRequest.monthlySpendings}
										onChange={handleInputChange}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="companyValue" className="form-label text-dark">Minimum Company Value:</label>
									<input
										type="text"
										className="form-control border border-3 border-dark"
										id="companyValue"
										name="companyValue"
										value={requiermentRequest.companyValue}
										onChange={handleInputChange}
									/>
								</div>
								
								<div className="mb-3">
									<label htmlFor="monthlyIncome" className="form-label text-dark">Maximum Monthly Income:</label>
									<input
										type="text"
										className="form-control border border-3 border-dark"
										id="maxmonthlyIncome"
										name="maxmonthlyIncome"
										value={requiermentRequest.maxmonthlyIncome}
										onChange={handleInputChange}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="monthlySpendings" className="form-label text-dark">Maximum Monthly Spendings:</label>
									<input
										type="text"
										className="form-control border border-3 border-dark"
										id="maxmonthlySpendings"
										name="maxmonthlySpendings"
										value={requiermentRequest.maxmonthlySpendings}
										onChange={handleInputChange}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="companyValue" className="form-label text-dark">Maximum Company Value:</label>
									<input
										type="text"
										className="form-control border border-3 border-dark"
										id="maxcompanyValue"
										name="maxcompanyValue"
										value={requiermentRequest.maxcompanyValue}
										onChange={handleInputChange}
									/>
								</div>
								
								<div className="text-center">
									<button type="button" className="btn btn-primary" onClick={fetchOfferReq}>Get Offer</button>
								</div>
							   <br/>
								<br/>
								<br/>
								<br/>
								<br/>
								<br/>
							</form>
						
						
					</div>
				</div>
				<div className="offers-container">
				{offerreq && offerreq.length > 0 ? (
					offerreq.map((offer) => (
						<div className="col-lg-3 col-sm-6">
							<div className="card mb-5 mb-lg-4 m-lg-3" >
								<div
									className="card bg-dark-subtle">
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
					))
				) : (
					<br/>
				)}
				</div>
				
			</div>
			<br/>
			<br/>
			<br/>
		</div>
		
	);
};

export default InvestingHelper;