import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Stiling.css';

const Homepage = ({loggedIn}) => {
	const navigate = useNavigate();
	
	const handleNavigateLearning = () => {
		loggedIn ?  navigate('/learning') : navigate('/login')
		
	};
	
	const handleNavigateOfferMaker = () => {
		loggedIn ?  navigate('/offermaker') : navigate('/login')
	};
	
	const handleNavigateOffers = () => {
		loggedIn ? navigate('/offers') : navigate('/login')
	};
	
	return (
		<div>
			<div className="center bg-light-subtle">
				<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light-subtle">
					<div className="col-md-6 p-lg-5 mx-auto my-5">
						<h2 className="display-5 fw-bold text-dark">Welcome to BizBoost!</h2>
						<h4 className="fw-normal text-dark-50 mb-3">Invest in Start-ups in a smarter way</h4>
					</div>
					<div className="product-device shadow-sm d-none d-md-block" />
					<div className="product-device product-device-2 shadow-sm d-none d-md-block" />
				</div>
				
				<div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 ">
					<div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden bg-light-subtle">
						<div className="my-3 p-3 ">
							<h2 className="display-6 text-dark">If you are new to what it means to be an Entrepreneur or Investor, visit our learning page</h2>
						</div>
						<div
							className="shadow-sm mx-auto d-flex align-items-center justify-content-center container bg-light-subtle"
							style={{ width: '30%', height: '150px', borderRadius: '21px 21px 0 0' }}
						>
							<div className="vertical-center">
								<button className="btn btn-warning" onClick={handleNavigateLearning}>Learning Page</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="center bg-light-subtle">
				<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light-subtle">
					<div className="col-md-6 p-lg-5 mx-auto my-5">
						<h2 className="display-6 fw-bold text-dark">Ready for Boosting your Company to the next level?</h2>
						<h4 className="fw-normal text-dark-50 mb-3">Your partners in business are ready for you!</h4>
					</div>
					<div className="product-device shadow-sm d-none d-md-block" />
					<div className="product-device product-device-2 shadow-sm d-none d-md-block" />
				</div>
				
				<div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
					<div className="bg-light-subtle me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
						<div className="my-3 p-3 bg-light-subtle">
							<h2 className="display-6 text-dark">Head to our OfferMaker and complete our Form</h2>
						</div>
						<div
							className="bg-light-subtle shadow-sm mx-auto d-flex align-items-center justify-content-center container"
							style={{ width: '30%', height: '150px', borderRadius: '21px 21px 0 0' }}
						>
							<div className="vertical-center">
								<button className="btn btn-warning" onClick={handleNavigateOfferMaker}>OfferMaker</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="center bg-light-subtle">
				<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light-subtle">
					<div className="col-md-6 p-lg-5 mx-auto my-5">
						<h2 className="display-6 fw-bold text-dark">How about reviewing what others have in store for their Offers</h2>
					</div>
					<div className="product-device shadow-sm d-none d-md-block" />
					<div className="product-device product-device-2 shadow-sm d-none d-md-block" />
				</div>
				
				<div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
					<div className=" bg-light-subtle me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
						<div className="my-3 p-3 bg-light-subtle">
							<h2 className="display-6 text-dark">Done making your application see all the offers from your competitors.</h2>
							<br />
						</div>
						<div
							className="bg-light-subtle shadow-sm mx-auto d-flex align-items-center justify-content-center container"
							style={{ width: '50%', height: '150px', borderRadius: '21px 21px 0 0' }}
						>
							<div className="vertical-center">
								<button className="btn btn-warning" onClick={handleNavigateOffers}>Offers</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Homepage;