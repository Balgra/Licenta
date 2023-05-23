

import React, { useState } from "react";

const OfferDetails = ({ offer, handleModifyTiers }) => {
	const { transaction } = offer;
	const [tierOne, setTierOne] = useState(transaction.tierOne);
	const [tierTwo, setTierTwo] = useState(transaction.tierTwo);
	const [tierThree, setTierThree] = useState(transaction.tierThree);
	const [tierFour, setTierFour] = useState(transaction.tierFour);
	
	const handleSaveTiers = () => {
		// Save the modified tiers or perform any necessary actions
		// For simplicity, this example just logs the modified tiers to the console
		console.log("Modified Tiers:", {
			tierOne,
			tierTwo,
			tierThree,
			tierFour
		});
	};
	
	return (
		<div className="offer-details">
			<h2>Offer Details</h2>
			<p>Author Name: {offer.authorName}</p>
			<p>
				StatusTierOne:{" "}
				<input
					type="text"
					value={tierOne}
					onChange={(e) => setTierOne(e.target.value)}
				/>
			</p>
			<p>
				StatusTierTwo:{" "}
				<input
					type="text"
					value={tierTwo}
					onChange={(e) => setTierTwo(e.target.value)}
				/>
			</p>
			<p>
				StatusTierThree:{" "}
				<input
					type="text"
					value={tierThree}
					onChange={(e) => setTierThree(e.target.value)}
				/>
			</p>
			<p>
				StatusTierFour:{" "}
				<input
					type="text"
					value={tierFour}
					onChange={(e) => setTierFour(e.target.value)}
				/>
			</p>
			<button onClick={handleSaveTiers}>Save Tiers</button>
			<button onClick={handleModifyTiers}>Go Back</button>
		</div>
	);
};

export default OfferDetails;
