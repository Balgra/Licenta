

import React, { useState } from "react";

const OfferDetails = ({ offer, handleModifyTiers }) => {
	const { transaction } = offer;
	const [tierOne, setTierOne] = useState(transaction.cost_TierOne);
	const [tierTwo, setTierTwo] = useState(transaction.cost_TierTwo);
	const [tierThree, setTierThree] = useState(transaction.cost_TierThree);
	const [tierFour, setTierFour] = useState(transaction.cost_TierFour);
	
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
				CostTierOne:{" "}
				<input
					type="text"
					value={tierOne}
					onChange={(e) => setTierOne(e.target.value)}
				/>
			</p>
			<p>
				CostTierTwo:{" "}
				<input
					type="text"
					value={tierTwo}
					onChange={(e) => setTierTwo(e.target.value)}
				/>
			</p>
			<p>
				CostTierThree:{" "}
				<input
					type="text"
					value={tierThree}
					onChange={(e) => setTierThree(e.target.value)}
				/>
			</p>
			<p>
				CostTierFour:{" "}
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

/*<div className="offer-details">
			<h2>Offer Details</h2>
			<OfferTiers tierOne={offer.transaction.cost_TierOne} tierTwo={offer.transaction.cost_TierTwo}
			tierThree={offer.transaction.cost_TierThree} tierFour={offer.transaction.cost_TierFour}/>
			<button onClick={handleModifyTiers}>Modify Tiers</button>
		</div>*/