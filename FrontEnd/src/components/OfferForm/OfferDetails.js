import React from "react";

const OfferDetails = ({handleModifyTiers}) => {
	
	return (
		<div className="offer-popup">
		<form className="row g-3">
			<div className="col-md-6">
				<label htmlFor="inputEmail4" className="form-label">Email</label>
				<input type="email" className="form-control border border-dark" id="inputEmail4"/>
			</div>
			<div className="col-md-6">
				<label htmlFor="inputPassword4" className="form-label">Card Number </label>
				<input type="password" className="form-control border border-dark" id="inputPassword4"/>
			</div>
			<div className="col-12">
				<label htmlFor="inputName" className="form-label">Name</label>
				<input type="text" className="form-control border border-dark" id="inputName" placeholder="Name"/>
			</div>
			<div className="col-12">
				<label htmlFor="inputDate" className="form-label">Date of Card Expiration</label>
				<input type="date" className="form-control border border-dark" id="inputDate" placeholder="1234 Main St"/>
			</div>
			<div className="col-md-6">
				<label htmlFor="inputCity" className="form-label">City</label>
				<input type="text" className="form-control border border-dark" id="inputCity"/>
			</div>
			<div className="col-md-4">
				<label htmlFor="inputState" className="form-label">State</label>
				<select id="inputState" className="form-select border border-dark">
					<option selected>Timisoara</option>
					<option>Bucharest</option>
				</select>
			</div>
			<div className="col-md-2">
				<label htmlFor="inputCvv" className="form-label">CVV</label>
				<input type="text" className="form-control border border-dark" id="inputCvv"/>
			</div>
			<div className="col-12">
				<div className="form-check">
					<input className="form-check-input border border-dark" type="checkbox" id="gridCheck"/>
						<label className="form-check-label " htmlFor="gridCheck">
							I understand the terms and conditions
						</label>
				</div>
			</div>
			<div className="col-12">
				<button type="submit" onClick={handleModifyTiers} className="btn btn-primary">Send Transaction</button>
			</div>
		</form>
		</div>
	);
};

export default OfferDetails;
