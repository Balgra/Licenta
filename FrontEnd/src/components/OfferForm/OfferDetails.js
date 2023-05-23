import React, { useState } from "react";

const OfferDetails = ({ offer, handleModifyTiers }) => {
	const { transaction } = offer;
	const [tierOne, setTierOne] = useState(transaction.tierOne);
	const [tierTwo, setTierTwo] = useState(transaction.tierTwo);
	const [tierThree, setTierThree] = useState(transaction.tierThree);
	const [tierFour, setTierFour] = useState(transaction.tierFour);
	const [isSaving, setIsSaving] = useState(false);
	
	const handleSaveTiers = () => {
		// Perform saving logic here
		
		// Simulating a delay for demonstration purposes
		setIsSaving(true);
		setTimeout(() => {
			// Save the modified tiers or perform any necessary actions
			console.log("Modified Tiers:", {
				tierOne,
				tierTwo,
				tierThree,
				tierFour,
			});
			
			setIsSaving(false);
			handleModifyTiers(); // Close the popup after saving
		}, 2000); // 2 seconds delay
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
			<button onClick={handleSaveTiers} disabled={isSaving}>
				{isSaving ? "Saving..." : "Save Tiers"}
			</button>
			<button onClick={handleModifyTiers}>Go Back</button>
		</div>
	);
};

export default OfferDetails;
