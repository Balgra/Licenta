import {useNavigate, useParams} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import "../components/OfferForm/Offers.css";
//import OfferDetails from "../components/OfferForm/OfferDetails";
import Pricing from "./Pricing";
import Graphs from "../components/OfferGraph/Graph";

const OfferPage = ({loggedIn}) => {
	
	const { id } = useParams();
	
	const [offer, setOffer] = useState(null);
	
	const navigate = useNavigate();
	
	
	//const [selectedOffer, setSelectedOffer] = useState(null);
	//const [showOfferDetails, setShowOfferDetails] = useState(false); // Track whether to show offer details or not
	
	
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
	
	useEffect(() => {
		const buttons = document.querySelectorAll(".list-group-item");
		
		// Add event listener to each button
		buttons.forEach((button) => {
			button.addEventListener("click", handleButtonClick);
		});
		
		// Clean up the event listener
		return () => {
			buttons.forEach((button) => {
				button.removeEventListener("click", handleButtonClick);
			});
		};
	}, []);
	
	const handleButtonClick = (event) => {
		const list = event.target.closest(".list-group");
		list.classList.toggle("hide-list");
	};
	
	if (!offer) {
		return <div>Loading...</div>;
	}
	
	if (!loggedIn) {
		navigate('/login');
		return null; // Return null or any placeholder while redirecting
	}
	
	
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
	
	/*const OfferStatus = ({ status, tier }) => {
		return <p>Status Tier{tier}: {status ? "Taken" : "Empty"}</p>;
	};*/

	
	
	return (
		<div className="app__header bg-light-subtle">
			<br/>
			<div className="offers-container">
				<div className="row">
					<div className="col-md-4">
						<div className="list-group fixed-height md" id="list-tab" role="tablist">
							<button
								className="list-group-item list-group-item-action active"
								id="list-group-1-heading"
								data-bs-toggle="list"
								href="#list-group-1"
								role="tab"
								aria-controls="list-group-1"
							>
								Company Description
							</button>
						</div>
					</div>
					<div className="col-md-4">
						<div className="list-group fixed-height md" id="list-tab" role="tablist">
							<button
								className="list-group-item list-group-item-action"
								id="list-group-2-heading"
								data-bs-toggle="list"
								href="#list-group-2"
								role="tab"
								aria-controls="list-group-2"
							>
								Company Financial
							</button>
						</div>
					</div>
					<div className="col-md-4">
						<div className="list-group fixed-height md" id="list-tab" role="tablist">
							<button
								className="list-group-item list-group-item-action"
								id="list-group-3-heading"
								data-bs-toggle="list"
								href="#list-group-3"
								role="tab"
								aria-controls="list-group-3"
							>
								Company Technical Information
							</button>
						</div>
					</div>
					<div className="col-md-8">
						<div className="tab-content fixed-height" id="nav-tabContent">
							<div className="tab-pane fade show active" id="list-group-1" role="tabpanel" aria-labelledby="list-group-1-heading">
								<div className="mx-3 my-4">
									<ul className="list-group"  id="list-group-1">
										<li className="list-group-item">
											<strong>AuthorName:</strong> {offer.authorName}
										</li>
										<li className="list-group-item">
											<strong>CompanyEmail:</strong> {offer.company_Email}
										</li>
										<li className="list-group-item">
											<strong>CompanyName:</strong> {offer.company_Name}
										</li>
										<li className="list-group-item">
											<strong>Deadline:</strong> {formatDeadline(offer.deadline)}
										</li>
										<li className="list-group-item">
											<strong>MarketSize:</strong> {offer.description.marketSize}
										</li>
										<li className="list-group-item">
											<strong>BusinessModel:</strong> {offer.description.businessModel}
										</li>
										<li className="list-group-item">
											<strong>TargetAudience:</strong> {offer.description.targetAudience}
										</li>
										<li className="list-group-item">
											<strong>MarketingStrategies:</strong> {offer.description.marketingStrategies}
										</li>
										<li className="list-group-item">
											<strong>Description:</strong> {offer.description.descriptions}
										</li>
									</ul>
								</div>
							</div>
							<div className="tab-pane fade" id="list-group-2" role="tabpanel" aria-labelledby="list-group-2-heading">
								<div className="mx-3 my-4">
									<ul className="list-group"  id="list-group-2">
										<li className="list-group-item">
											<strong>Company Value:</strong> {offer.financial.companyValue}
										</li>
										<li className="list-group-item">
											<strong>Monthly Spendings:</strong> {offer.financial.monthlySpendings}
										</li>
										<li className="list-group-item">
											<strong>Monthly Income:</strong> {offer.financial.monthlyIncome}
										</li>
										<li className="list-group-item">
											<strong>Value of Debt:</strong> {offer.financial.valueOfDebt}
										</li>
										<li className="list-group-item">
											<strong>Value of Loans:</strong> {offer.financial.valueOfLoans}
										</li>
										<li className="list-group-item">
											<strong>Year on Market:</strong> {offer.financial.yearsOnMarket}
										</li>
										<li className="list-group-item">
											<strong>Method of Valuation:</strong> {offer.financial.methodOfValuation}
										</li>
									</ul>
								</div>
							</div>
							<div className="tab-pane fade" id="list-group-3" role="tabpanel" aria-labelledby="list-group-3-heading">
								<div className="mx-3 my-4">
									<ul className="list-group"  id="list-group-3">
										<li className="list-group-item">
											<strong>Embrace Digital Transformation:</strong>{" "}
											{offer.competitiveness.embraceDigitalTransformation ? "True" : "False"}
										</li>
										<li className="list-group-item">
											<strong>Enhance Customer Experience:</strong>{" "}
											{offer.competitiveness.enhanceCustomerExperience ? "True" : "False"}
										</li>
										<li className="list-group-item">
											<strong>Leverage Big Data and Analytics:</strong>{" "}
											{offer.competitiveness.leverageBigDataAndAnalytics ? "True" : "False"}
										</li>
										<li className="list-group-item">
											<strong>Adopt Agile Methodologies:</strong>{" "}
											{offer.competitiveness.adoptAgileMethodologies ? "True" : "False"}
										</li>
										<li className="list-group-item">
											<strong>Embrace Emerging Technologies:</strong>{" "}
											{offer.competitiveness.embraceEmergingTechnologies ? "True" : "False"}
										</li>
										<li className="list-group-item">
											<strong>Invest in Employee Development:</strong>{" "}
											{offer.competitiveness.investInEmployeeDevelopment ? "True" : "False"}
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br/>
			<br/>
			<br/>
			<Graphs offer={offer}/>
			<br/>
			<br/>
			<br/>
			<div className="pricing-container fixed-height">
				<Pricing offer={offer}/>
			</div>
		</div>
	);
};

export default OfferPage;