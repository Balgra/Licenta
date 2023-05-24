import React, { useState } from "react";
import { Button, Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";

const OfferDetails = ({ offer, handleModifyTiers }) => {
	const { transaction } = offer;
	const [tierOne, setTierOne] = useState(transaction.tierOne);
	const [tierTwo, setTierTwo] = useState(transaction.tierTwo);
	const [tierThree, setTierThree] = useState(transaction.tierThree);
	const [tierFour, setTierFour] = useState(transaction.tierFour);
	const [isSaving, setIsSaving] = useState(false);
	
	const payload = {
		id: offer.id,
		tierOne: tierOne,
		tierTwo: tierTwo,
		tierThree: tierThree,
		tierFour: tierFour
	};
	
	const handleSaveTiers = async () => {
		
		// Perform saving logic here
		 await fetch('https://localhost:7239/api/offers/transaction', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload)
		});

		 window.location.reload();
		 
		// Simulating a delay for demonstration purposes
		setIsSaving(true);
		setTimeout(() => {
			// Save the modified tiers or perform any necessary actions
			
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
					<MenuItem value={true}  >Taken</MenuItem>
					<MenuItem value={false} disabled={tierOne === true}>Empty</MenuItem>
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
					<MenuItem value={true}  >Taken</MenuItem>
					<MenuItem value={false} disabled={tierTwo === true}>Empty</MenuItem>
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
					<MenuItem value={true}  >Taken</MenuItem>
					<MenuItem value={false} disabled={tierThree === true}>Empty</MenuItem>
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
					<MenuItem value={true}  >Taken</MenuItem>
					<MenuItem value={false} disabled={tierFour === true}>Empty</MenuItem>
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
