import React from 'react';
import './Component.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Component = () => {
	
	
 const	getsomething = () =>
	{
		console.log("SDF");
	}
	
	return (
		<div className="component">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="card mb-5 mb-lg-0">
							<div className="card-body">
								<h5 className="card-title text-muted text-uppercase text-center">Basic</h5>
								<h6 className="card-price text-center">$9<span className="period">/month</span></h6>
								<hr />
								<ul className="fa-ul">
									<li><span className="fa-li"><i className="fas fa-check"></i></span>Single User</li>
									<li><span className="fa-li"><i className="fas fa-check"></i></span>5GB Storage</li>
									<li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
									<li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
									<li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited Private Projects</li>
									<li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Dedicated Phone Support</li>
									<li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain</li>
									<li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status Reports</li>
								</ul>
								<button onClick={getsomething} className="btn btn-block btn-primary text-uppercase">Button</button>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="card mb-5 mb-lg-0">
							<div className="card-body">
								<h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
								<h6 className="card-price text-center">$290<span className="period">/month</span></h6>
								<hr />
								<ul className="fa-ul">
									<li><span className="fa-li"><i className="fas fa-check"></i></span>5 Users</li>
									<li><span className="fa-li"><i className="fas fa-check"></i></span>50GB Storage</li>
									<li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
									<li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
									<li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
									<li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
									<li><span className="fa-li"><i className="fas fa-check"></i></span>Free Subdomain</li>
									<li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status Reports</li>
								</ul>
								<button onClick={getsomething} className="btn btn-block btn-primary text-uppercase">Button</button>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
								<h6 className="card-price text-center">$49<span className="period">/month</span></h6>
								<hr />
								<ul className="fa-ul">
									<li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Users</li>
									<li><span className="fa-li"><i className="fas fa-check"></i></span>150GB Storage</li>
									<li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
									<li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
									<li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
									<li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
									<li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Free Subdomains</li>
									<li><span className="fa-li"><i className="fas fa-check"></i></span>Monthly Status Reports</li>
								</ul>
								<button onClick={getsomething} className="btn btn-block btn-primary text-uppercase">Button</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Component;