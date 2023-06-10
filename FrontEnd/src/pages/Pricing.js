import React, {useCallback, useEffect, useState} from "react";
import './Pricing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Pricing = ({offer}) => {
	
	const { transaction } = offer;
	const [tierOne, setTierOne] = useState(transaction.tierOne);
	const [tierTwo, setTierTwo] = useState(transaction.tierTwo);
	const [tierThree, setTierThree] = useState(transaction.tierThree);
	const [tierFour, setTierFour] = useState(transaction.tierFour);
	
	
	const handleSaveTiers = useCallback(async (payloads) => {
		
		// Perform saving logic here
		const token = localStorage.getItem('token');
		await fetch('https://localhost:7239/api/offers/transaction', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				"Authorization": `Bearer ${token}`
			},
			body: JSON.stringify(payloads)
		});
		
	}, []);
	
	useEffect(() => {
		const payload = {
			id: offer.id,
			tierOne: tierOne,
			tierTwo: tierTwo,
			tierThree: tierThree,
			tierFour: tierFour
		};
		
		handleSaveTiers(payload);
	}, [offer.id, tierOne, tierTwo, tierThree, tierFour, handleSaveTiers]);
	
 const	TransactionOne = () =>
	{
		setTierOne(true);
	}
const	TransactionTwo = () =>
	{
		setTierTwo(true);
	}
const	TransactionThree = () =>
	{
		setTierThree(true)
	}
const	TransactionFour = () =>
	{
		setTierFour(true);
	}
	
	
	return (
		<div className="component app__header">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-sm-6">
						<div className="card mb-5 mb-lg-0">
							<div className="card-body">
								<h5 className="card-title text-muted text-uppercase text-center">Basic</h5>
								<h6 className="card-price text-center">$9<span className="period">/month</span></h6>
								<h6 className="card-price text-center">{offer.transaction.cost_TierOne} $<span className="period">/month</span></h6>
								<hr />
								<ul className="fa-ul">
									<li><span className="fa-li"><i className="fas fa-check"/></span>Single User</li>
									<li><span className="fa-li"><i className="fas fa-check"/></span>5GB Storage</li>
									<li><span className="fa-li"><i className="fas fa-check"/></span>Unlimited Public Projects</li>
									<li><span className="fa-li"><i className="fas fa-check"/></span>Community Access</li>
									<li className="text-muted"><span className="fa-li"><i className="fas fa-times"/></span>Unlimited Private Projects</li>
									<li className="text-muted"><span className="fa-li"><i className="fas fa-times"/></span>Dedicated Phone Support</li>
									<li className="text-muted"><span className="fa-li"><i className="fas fa-times"/></span>Free Subdomain</li>
									<li className="text-muted"><span className="fa-li"><i className="fas fa-times"/></span>Monthly Status Reports</li>
								</ul>
								<button
									onClick={TransactionOne}
									className="btn btn-block btn-primary"
									disabled={tierOne} // Disable the button if tierOne is true
								> Acquire TierOne
								</button>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6">
						<div className="card mb-5 mb-lg-0">
							<div className="card-body">
								<h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
								<h6 className="card-price text-center">$290<span className="period">/month</span></h6>
								<h6 className="card-price text-center">$290<span className="period">/month</span></h6>
								<hr />
								<ul className="fa-ul">
									<li><span className="fa-li"><i className="fas fa-check"/></span>5 Users</li>
									<li><span className="fa-li"><i className="fas fa-check"/></span>50GB Storage</li>
									<li><span className="fa-li"><i className="fas fa-check"/></span>Unlimited Public Projects</li>
									<li><span className="fa-li"><i className="fas fa-check"/></span>Community Access</li>
									<li><span className="fa-li"><i className="fas fa-check"/></span>Unlimited Private Projects</li>
									<li><span className="fa-li"><i className="fas fa-check"/></span>Dedicated Phone Support</li>
									<li><span className="fa-li"><i className="fas fa-check"/></span>Free Subdomain</li>
									<li className="text-muted"><span className="fa-li"><i className="fas fa-times"/></span>Monthly Status Reports</li>
								</ul>
								<button onClick={TransactionTwo} className="btn btn-block btn-primary" disabled={tierTwo}>Acquire TierTwo</button>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6">
						<div className="card mb-5 mb-lg-0">
							<div className="card-body">
								<h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
								<h6 className="card-price text-center">$49<span className="period">/month</span></h6>
								<h6 className="card-price text-center">$49<span className="period">/month</span></h6>
								<hr />
								<ul className="fa-ul">
									<li><span className="fa-li"><i className="fas fa-check"/></span>Unlimited Users</li>
									<li><span className="fa-li"><i className="fas fa-check"/></span>150GB Storage</li>
									<li><span className="fa-li"><i className="fas fa-check"/></span>Unlimited Public Projects</li>
									<li><span className="fa-li"><i className="fas fa-check"/></span>Community Access</li>
									<li><span className="fa-li"><i className="fas fa-check"/></span>Unlimited Private Projects</li>
									<li><span className="fa-li"><i className="fas fa-check"/></span>Dedicated Phone Support</li>
									<li><span className="fa-li"><i className="fas fa-check"/></span>Unlimited Free Subdomains</li>
									<li><span className="fa-li"><i className="fas fa-check"/></span>Monthly Status Reports</li>
								</ul>
								<button onClick={TransactionThree} disabled={tierThree} className="btn btn-block btn-primary">Acquire TierThree</button>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6">
						<div className="card mb-5 mb-lg-0">
							<div className="card-body">
								<h5 className="card-title text-muted text-uppercase text-center">Premium</h5>
								<h6 className="card-price text-center">$99<span className="period">/month</span></h6>
								<h6 className="card-price text-center">$99<span className="period">/month</span></h6>
								<hr />
								<ul className="fa-ul">
									<li><span className="fa-li"><i className="fas fa-check"/></span>Unlimited Users</li>
									<li><span className="fa-li"><i className="fas fa-check"/></span>500GB Storage</li>
									<li><span className="fa-li"><i className="fas fa-check"/></span>Unlimited Public Projects</li>
									<li><span className="fa-li"><i className="fas fa-check"/></span>Community Access</li>
									<li><span className="fa-li"><i className="fas fa-check"/></span>Unlimited Private Projects</li>
									<li><span className="fa-li"><i className="fas fa-check"/></span>Dedicated Phone Support</li>
									<li><span className="fa-li"><i className="fas fa-check"/></span>Unlimited Free Subdomains</li>
									<li><span className="fa-li"><i className="fas fa-check"/></span>Monthly Status Reports</li>
								</ul>
								<button onClick={TransactionFour} className="btn btn-block btn-primary" disabled={tierFour}>Acquire TierFour</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Pricing;