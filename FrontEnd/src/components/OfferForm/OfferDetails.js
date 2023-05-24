import React, { useState } from "react";
import { Button, Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";

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
			<div className="offer-details-row">
			<FormControl>
				<InputLabel>Status Tier One</InputLabel>
				<Select
					value={tierOne}
					onChange={(e) => setTierOne(e.target.value)}
					style={{ minWidth: "120px" }}
					className="tier-select"
				>
					<MenuItem value={true}>Taken</MenuItem>
					<MenuItem value={false}>Empty</MenuItem>
				</Select>
			</FormControl>
			</div>
			<div className="offer-details-row">
			<FormControl>
				<InputLabel>Status Tier Two</InputLabel>
				<Select
					value={tierTwo}
					onChange={(e) => setTierTwo(e.target.value)}
					style={{ minWidth: "120px" }}
					className="tier-select"
				>
					<MenuItem value={true}>Taken</MenuItem>
					<MenuItem value={false}>Empty</MenuItem>
				</Select>
			</FormControl>
			</div>
			<div className="offer-details-row">
			<FormControl>
				<InputLabel>Status Tier Three</InputLabel>
				<Select
					value={tierThree}
					onChange={(e) => setTierThree(e.target.value)}
					style={{ minWidth: "120px" }}
					className="tier-select"
				>
					<MenuItem value={true}>Taken</MenuItem>
					<MenuItem value={false}>Empty</MenuItem>
				</Select>
			</FormControl>
			</div>
			<div className="offer-details-row">
			<FormControl>
				<InputLabel>Status Tier Four</InputLabel>
				<Select
					value={tierFour}
					onChange={(e) => setTierFour(e.target.value)}
					style={{ minWidth: "120px" }}
					className="tier-select"
				>
					<MenuItem value={true}>Taken</MenuItem>
					<MenuItem value={false}>Empty</MenuItem>
				</Select>
			</FormControl>
			</div>
			<Button variant="contained" color="primary" onClick={handleSaveTiers} disabled={isSaving}>
				{isSaving ? "Saving..." : "Save Tiers"}
			</Button>
			<Button variant="contained" onClick={handleModifyTiers}>
				Go Back
			</Button>
		</div>
	);
};

export default OfferDetails;
