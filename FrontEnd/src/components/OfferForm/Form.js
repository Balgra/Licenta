import React, { useState} from 'react';
import './Form.css';


const Form = ({ onSubmit }) => {
	const [authorName, setauthorName] = useState('');
	const [company_Email, setcompany_Email] = useState('');
	const [company_Name, setcompany_Name] = useState('');
	const [deadline, setdeadline] = useState('');
	const [costTierOne, setcostTierOne] = useState(0);
	const [costTierTwo, setcostTierTwo] = useState(0);
	const [cost_TierThree, setcost_TierThree] = useState(0);
	const [cost_TierFour, setcost_TierFour] = useState(0);
	const [marketSize, setmarketSize] = useState('');
	const [businessModel, setbusinessModel] = useState('');
	const [descriptions, setdescriptions] = useState('');
	const [targetAudience, settargetAudience] = useState('');
	const [marketingStrategies, setmarketingStrategies] = useState('');
	const [companyValue, setcompanyValue] = useState(0);
	const [monthlySpendings, setmonthlySpendings] = useState(0);
	const [monthlyIncome, setmonthlyIncome] = useState(0);
	const [valueOfDebt, setvalueOfDebt] = useState(0);
	const [valueOfLoans, setValueOfLoans] = useState(0);
	const [yearsOnMarket, setyeardOnMarket] = useState(0);
	const [methodOfValuation, setmethodOfValuation] = useState('');
	const [embraceDigitalTransformation, setembraceDigitalTransformation] = useState(true);
	const [enhanceCustomerExperience, setenhanceCustomerExperience] = useState(true);
	const [leverageBigDataAndAnalytics, setleverageBigDataAndAnalytics] = useState(true);
	const [adoptAgileMethodologies, setadoptAgileMethodologies] = useState(true);
	const [embraceEmergingTechnologies, setembraceEmergingTechnologies] = useState(true);
	const [investInEmployeeDevelopment, setinvestInEmployeeDevelopment] = useState(true);
	
	
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		
		const embraceDigitalTransformationValue = embraceDigitalTransformation === true;
		const enhanceCustomerExperienceValue = enhanceCustomerExperience === true;
		const leverageBigDataAndAnalyticsValue = leverageBigDataAndAnalytics === true;
		const adoptAgileMethodologiesValue = adoptAgileMethodologies === true;
		const embraceEmergingTechnologiesValue = embraceEmergingTechnologies === true;
		const investInEmployeeDevelopmentValue = investInEmployeeDevelopment === true;
		
		const offerData = {
			authorName,
			company_Name,
			company_Email,
			deadline,
			costTierOne,
			costTierTwo,
			cost_TierThree,
			cost_TierFour,
			marketSize,
			businessModel,
			descriptions,
			targetAudience,
			marketingStrategies,
			companyValue,
			monthlySpendings,
			monthlyIncome,
			valueOfDebt,
			valueOfLoans,
			yearsOnMarket,
			methodOfValuation,
			embraceDigitalTransformation: embraceDigitalTransformationValue,
			enhanceCustomerExperience: enhanceCustomerExperienceValue,
			leverageBigDataAndAnalytics: leverageBigDataAndAnalyticsValue,
			adoptAgileMethodologies: adoptAgileMethodologiesValue,
			embraceEmergingTechnologies: embraceEmergingTechnologiesValue,
			investInEmployeeDevelopment: investInEmployeeDevelopmentValue,
			
		};
		
		try {
			const token = localStorage.getItem('token');
			const response = await fetch('https://localhost:7239/api/offers', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					"Authorization": `Bearer ${token}`
				},
				body: JSON.stringify(offerData),
			});
			
			if (response.ok) {
				// Handle successful response
				const offer = await response.json();
				onSubmit(offer);
			} else {
				// Handle error response
				console.error('Error:', response.statusText);
			}
			setauthorName('');
			setcompany_Name('');
			setcompany_Email('');
			setdeadline('');
			setcostTierOne(0);
			setcostTierTwo(0);
			setcost_TierThree(0);
			setcost_TierFour(0);
			setmarketSize('');
			setbusinessModel('');
			setdescriptions('')
			settargetAudience('');
			setmarketingStrategies('');
			setcompanyValue(0);
			setmonthlySpendings(0);
			setmonthlyIncome(0);
			setvalueOfDebt(0);
			setValueOfLoans(0);
			setyeardOnMarket(0);
			setmethodOfValuation('');
			setembraceDigitalTransformation(true);
			setenhanceCustomerExperience(true);
			setleverageBigDataAndAnalytics(true);
			setadoptAgileMethodologies(true);
			setembraceEmergingTechnologies(true);
			setinvestInEmployeeDevelopment(true);
			
		} catch (error) {
			// Handle network error
			console.error('Error:', error.message);
		}
	};
		
	
	const formFields = [
		{ label: 'authorName', type: 'string', value: authorName, onChange: setauthorName },
		{ label: 'companyName', type: 'string', value: company_Name, onChange: setcompany_Name },
		{ label: 'companyEmail', type: 'string', value: company_Email, onChange: setcompany_Email },
		{ label: 'Deadline', type: 'date', value: deadline, onChange: setdeadline },
		{ label: 'CostTierOne', type: 'integer', value: costTierOne, onChange: setcostTierOne },
		{ label: 'CostTierTwo', type: 'integer', value: costTierTwo, onChange: setcostTierTwo },
		{ label: 'CostTierThree', type: 'integer', value: cost_TierThree, onChange: setcost_TierThree },
		{ label: 'CostTierFour', type: 'integer', value: cost_TierFour, onChange: setcost_TierFour },
		{ label: 'MarketSize', type: 'string', value: marketSize, onChange: setmarketSize },
		{ label: 'BusinessModel', type: 'string', value: businessModel, onChange: setbusinessModel },
		{ label: 'Description', type: 'string', value: descriptions, onChange: setdescriptions },
		{ label: 'Target Audience', type: 'string', value: targetAudience, onChange: settargetAudience },
		{ label: 'Marketing Strategies', type: 'string', value: marketingStrategies, onChange: setmarketingStrategies },
		{ label: 'Company Value', type: 'integer', value: companyValue, onChange: setcompanyValue },
		{ label: 'Monthly Spendings', type: 'integer', value: monthlySpendings, onChange: setmonthlySpendings },
		{ label: 'Monthly Income', type: 'integer', value: monthlyIncome, onChange: setmonthlyIncome },
		{ label: 'Value of Debt', type: 'integer', value: valueOfDebt, onChange: setvalueOfDebt },
		{ label: 'Value of Loans', type: 'integer', value: valueOfLoans, onChange: setValueOfLoans },
		{ label: 'Years On Market', type: 'integer', value: yearsOnMarket, onChange: setyeardOnMarket },
		{ label: 'Method of Valuation', type: 'string', value: methodOfValuation, onChange: setmethodOfValuation },
		{ label: 'Embrace Digital Transformation', type: 'bool', value: embraceDigitalTransformation, onChange: setembraceDigitalTransformation },
		{ label: 'Enhance Customer Experience', type: 'bool', value: enhanceCustomerExperience, onChange: setenhanceCustomerExperience },
		{ label: 'Leverage Big Data and Analytics', type: 'bool', value: leverageBigDataAndAnalytics, onChange: setleverageBigDataAndAnalytics },
		{ label: 'Adopting Agile Methodologies', type: 'bool', value: adoptAgileMethodologies, onChange: setadoptAgileMethodologies },
		{ label: 'Embrace Emerging Technologies', type: 'bool', value: embraceEmergingTechnologies, onChange: setembraceEmergingTechnologies },
		{ label: 'Invest In Employee Development', type: 'bool', value: investInEmployeeDevelopment, onChange: setinvestInEmployeeDevelopment },
		
	];
	return (
		<>

			
		<form onSubmit={handleSubmit} className="form">
			{formFields.map((field) => (
				<label key={field.label} className="form-label">
					{field.label}:
					{field.type === 'bool' ? (
						<select
							className="form-control"
							type={field.type} value={field.value} onChange={(e) => field.onChange(e.target.value)}
						>
							<option value={true}>True</option>
							<option value={false}>False</option>
						</select>
					) : (
						<input
							className="form-control"
							type={field.type} value={field.value} onChange={(e) => field.onChange(e.target.value)}
						/>
					)}
				</label>
			))}
			<br />
			<button type="submit" className="form-button">
				Submit
			</button>
		</form>
		
		</>
	);
};

export default Form;