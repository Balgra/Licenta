import React from "react"

const Footer = () =>{
	
	
	return (
		<footer className="py-5">
			<div className="d-flex flex-column flex-sm-row justify-content-between">
				<div className="col-6 col-mr-2 col-md-1 mb-2">
				
				</div>
				
				<div className="col-6 col-md-1 mb-2">
					<h5>About BizBoost</h5>
					<ul className="nav flex-column">
						<li className="nav-item mb-2">Safety first
						</li>
						<li className="nav-item mb-2">Reliable
						</li>
						<li className="nav-item mb-2">Awsome comunity
						</li>
						<li className="nav-item mb-2">Knowledge driven
						</li>
					</ul>
				</div>
				<div className="col-6 col-md-1 mb-2">
				
				</div>
				<div className="col-6 col-md-1 mb-2">
					<ul className="nav flex-column">
						<li className="nav-item mb-2">Innovative solutions
						</li>
						<li className="nav-item mb-2">Customer satisfaction
						</li>
						<li className="nav-item mb-2">Collaborative partnerships
						</li>
						<li className="nav-item mb-2">Continuous improvement
						</li>
					</ul>
				</div>
				<div className="col-6 col-md-1 mb-2">
				
				</div>
				
				
				<div className="col">
				<div className="col-md-5 offset-md-1 mb-2">
					<form>
						<h5>Subscribe to our newsletter</h5>
						<p>Monthly digest of what's new and exciting from us.</p>
						<div className="d-flex flex-column flex-sm-row w-80 gap-1">
							<label htmlFor="newsletter1" className="visually-hidden">Email address</label>
							<input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
								<button className="btn btn-primary" type="button">Subscribe</button>
						</div>
					</form>
				</div>
					<br/>
					<br/>
					<br/>
					<div className="col-md-5 offset-md-1 mb-2">
						<div>
							<h5>Having any issue with your offers?</h5>
							<p>Write us an email at : supportBizBoost@bizboost.com</p>
						</div>
					</div>
				</div>
				
			</div>
			
		</footer>
	)
}

export default Footer;