import React from 'react';
import { Box, Typography } from '@mui/material';
import {useNavigate} from "react-router-dom";

const Homepage = () => {
	
	const navigate = useNavigate();
	
	const handleNavigateLearning = () => {
		navigate('/learning');
	};
	
	const handleNavigateOfferMaker = () => {
		navigate('/offermaker');
	};
	
	const handleNavigateOffers = () => {
		navigate('/offers');
	};
	
	return (
		<div>
			<Box
				bgcolor="#303030"
				height="30vh"
				display="flex"
				justifyContent="space-between"
				alignItems="center"
			>
				<Typography marginRight="500px" marginLeft="500px" bgcolor="#FFA500" variant="h4">
					Welcome to BizBoost!
					<br/>
					Your partners in business are ready for you!
				</Typography>
				<Typography marginRight="500px" marginLeft="500px" bgcolor="#FFA500" variant="body1">
					If you are new to what it means to be an Entrepreneur, visit our learning page
					<br/>
					<button onClick={handleNavigateLearning}>Go to Learning</button>
				</Typography>
			</Box>
			
			<Box
				bgcolor="#404040"
				height="34vh"
				display="flex"
				justifyContent="space-between"
				alignItems="center"
			>
				<Typography marginRight="500px" marginLeft="500px" bgcolor="#FFA500" variant="body1">
					<button onClick={handleNavigateOfferMaker}>Go to OfferMaker</button>
				</Typography>
				<Typography marginRight="500px" marginLeft="500px" bgcolor="#FFA500" variant="h4">
					Ready for Boosting your Company to the next level?
					Head to our OfferMaker and complete our Form.
				</Typography>
			</Box>
			
			<Box
				bgcolor="#505050"
				height="30vh"
				display="flex"
				justifyContent="space-between"
				alignItems="center"
			>
				<Typography marginRight="500px" marginLeft="500px" bgcolor="#FFA500" variant="h4">
					Done making your application see all the offers from your competitors.
				</Typography>
				<Typography marginRight="500px" marginLeft="500px" bgcolor="#FFA500" variant="body1">
					<button onClick={handleNavigateOffers}>Go to Offers</button>
				</Typography>
			</Box>
		</div>
	);
};

export default Homepage;