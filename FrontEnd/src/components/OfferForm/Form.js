/*import React, { useState} from 'react';
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

export default Form;*/

import React, { useState } from 'react';
import './Form.css';

const FormStep1 = ({
					   onNext,
					   onChange,
					   authorName,
					   company_Name,
					   company_Email,
					   deadline,
					   costTierOne,
					   costTierTwo,
					   cost_TierThree,
					   cost_TierFour,
				   }) => (
	<>
		<h3  className="text-dark">Step 1: Basic Information</h3>
		<label className="form-label text-dark">
			Author Name:
			<input
				className="form-control border border-3 border-dark"
				type="text"
				value={authorName}
				onChange={(e) => onChange('authorName', e.target.value)}
			/>
		</label>
		<label className="form-label text-dark">
			Company Name:
			<input
				className="form-control border border-3 border-dark"
				type="text"
				value={company_Name}
				onChange={(e) => onChange('company_Name', e.target.value)}
			/>
		</label>
		<label className="form-label text-dark">
			Company Email:
			<input
				className="form-control border border-3 border-dark"
				type="email"
				value={company_Email}
				onChange={(e) => onChange('company_Email', e.target.value)}
			/>
		</label>
		<label className="form-label text-dark">
			Deadline:
			<input
				className="form-control border border-3 border-dark"
				type="date"
				value={deadline}
				onChange={(e) => onChange('deadline', e.target.value)}
			/>
		</label>
		<label className="form-label text-dark">
			Cost Tier One:
			<input
				className="form-control border border-3 border-dark"
				type="text"
				value={costTierOne}
				onChange={(e) => onChange('costTierOne', parseInt(e.target.value))}
			/>
		</label>
		<label className="form-label text-dark">
			Cost Tier Two:
			<input
				className="form-control border border-3 border-dark"
				type="text"
				value={costTierTwo}
				onChange={(e) => onChange('costTierTwo', parseInt(e.target.value))}
			/>
		</label>
		<label className="form-label text-dark">
			Cost Tier Three:
			<input
				className="form-control border border-3 border-dark"
				type="text"
				value={cost_TierThree}
				onChange={(e) => onChange('cost_TierThree', parseInt(e.target.value))}
			/>
		</label>
		<label className="form-label text-dark">
			Cost Tier Four:
			<input
				className="form-control border border-3 border-dark"
				type="text"
				value={cost_TierFour}
				onChange={(e) => onChange('cost_TierFour', parseInt(e.target.value))}
			/>
		</label>
		<br/>
		<button type="button" className="form-button" onClick={onNext}>
			Next
		</button>
		<br/>
	</>
);

const FormStep2 = ({
					   onNext,
					   onPrevious,
					   onChange,
					   marketSize,
					   businessModel,
					   descriptions,
					   targetAudience,
					   marketingStrategies,
				   }) => (
	<>
		<h3  className="text-dark">Step 2: Business Information</h3>
		<label className="form-label text-dark">
			Market Size:
			<select
				className="form-control border border-3 border-dark"
				value={marketSize}
				onChange={(e) => onChange('marketSize', e.target.value)}
			>
				<option value="">Select Market Size</option>
				<option value="Top Down">Top Down</option>
				<option value="Bottom-Up">Bottom-Up</option>
			</select>
		</label>
		<label className="form-label text-dark">
			Business Model:
			<select
				className="form-control border border-3 border-dark"
				value={businessModel}
				onChange={(e) => onChange('businessModel', e.target.value)}
			>
				<option value="">Select Business Model</option>
				<option value="Subscription">Subscription</option>
				<option value="Affiliate">Affiliate</option>
				<option value="E-commerce">E-commerce</option>
				<option value="Freemium">Freemium</option>
			</select>
		</label>
		<label className="form-label text-dark">
			Descriptions:
			<textarea
				className="form-control border border-3 border-dark"
				value={descriptions}
				onChange={(e) => onChange('descriptions', e.target.value)}
			/>
		</label>
		<label className="form-label text-dark">
			Target Audience:
			<select
				className="form-control border border-3 border-dark"
				value={targetAudience}
				onChange={(e) => onChange('targetAudience', e.target.value)}
			>
				<option value="">Select Target Audience</option>
				<option value="Readers">Readers</option>
				<option value="Businesses">Businesses</option>
				<option value="Influencers">Influencers</option>
				<option value="Adults">Adults</option>
				<option value="Children">Children</option>
				<option value="Elderly">Elderly</option>
			</select>
		</label>
		<label className="form-label text-dark">
			Marketing Strategies:
			<textarea
				className="form-control border border-3 border-dark"
				value={marketingStrategies}
				onChange={(e) => onChange('marketingStrategies', e.target.value)}
			/>
		</label>
		<br/>
		<button type="button" className="form-button" onClick={onPrevious}>
			Previous
		</button>
		<br/>
		<button type="button" className="form-button" onClick={onNext}>
			Next
		</button>
		<br/>
	</>
);

const FormStep3 = ({
					   onSubmit,
					   onNext,
					   onPrevious,
					   onChange,
					   companyValue,
					   monthlySpendings,
					   monthlyIncome,
					   valueOfDebt,
					   valueOfLoans,
					   yearsOnMarket,
					   methodOfValuation,
				   }) => (
	<>
		<h3  className="text-dark">Step 3: Financial Information</h3>
		<label className="form-label text-dark">
			Company Value:
			<input
				className="form-control border border-3 border-dark"
				type="text"
				value={companyValue}
				onChange={(e) => onChange('companyValue', e.target.value)}
			/>
		</label>
		<label className="form-label text-dark">
			Monthly Spendings:
			<input
				className="form-control border border-3 border-dark"
				type="text"
				value={monthlySpendings}
				onChange={(e) => onChange('monthlySpendings', e.target.value)}
			/>
		</label>
		<label className="form-label text-dark">
			Monthly Income:
			<input
				className="form-control border border-3 border-dark"
				type="text"
				value={monthlyIncome}
				onChange={(e) => onChange('monthlyIncome', parseInt(e.target.value))}
			/>
		</label>
		<label className="form-label text-dark">
			Value of Debt:
			<input
				className="form-control border border-3 border-dark"
				type="text"
				value={valueOfDebt}
				onChange={(e) => onChange('valueOfDebt', parseInt(e.target.value))}
			/>
		</label>
		<label className="form-label text-dark">
			Value of Loans:
			<input
				className="form-control border border-3 border-dark"
				type="text"
				value={valueOfLoans}
				onChange={(e) => onChange('valueOfLoans', parseInt(e.target.value))}
			/>
		</label>
		<label className="form-label text-dark">
			Years on Market:
			<input
				className="form-control border border-3 border-dark"
				type="text"
				value={yearsOnMarket}
				onChange={(e) => onChange('yearsOnMarket', parseInt(e.target.value))}
			/>
		</label>
		<label className="form-label text-dark">
			Method of Valuation:
			<select
				className="form-control border border-3 border-dark"
				value={methodOfValuation}
				onChange={(e) => onChange('methodOfValuation', e.target.value)}
			>
				<option value="">Select Method of Valuation</option>
				<option value="Asset-Based">Asset-Based</option>
				<option value="Market-Based">Market-Based</option>
				<option value="Income-Based">Income-Based</option>
			</select>
		</label>
		<br/>
		<button type="button" className="form-button" onClick={onPrevious}>
			Previous
		</button>
		<br/>
		<button type="button" className="form-button" onClick={onNext}>
			Next
		</button>
		<br/>
	</>
);


const FormStep4 = ({
					   onSubmit,
					   onPrevious,
					   onChange,
					   embraceDigitalTransformation,
					   enhanceCustomerExperience,
					   leverageBigDataAndAnalytics,
					   adoptAgileMethodologies,
					   embraceEmergingTechnologies,
					   investInEmployeeDevelopment,
				   }) => (
	<>
		<h3 className="text-dark">Step 4: Technology Information</h3>
		<label className="form-label text-dark">
			Embrace Digital Transformation:
			<select
				className="form-control border border-3 border-dark"
				value={embraceDigitalTransformation.toString()}
				onChange={(e) =>
					onChange('embraceDigitalTransformation', e.target.value === 'true')
				}
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
		</label>
		<label className="form-label text-dark">
			Enhance Customer Experience:
			<select
				className="form-control border border-3 border-dark"
				value={enhanceCustomerExperience.toString()}
				onChange={(e) =>
					onChange('enhanceCustomerExperience', e.target.value === 'true')
				}
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
		</label>
		<label className="form-label text-dark">
			Leverage Big Data and Analytics:
			<select
				className="form-control border border-3 border-dark"
				value={leverageBigDataAndAnalytics.toString()}
				onChange={(e) =>
					onChange('leverageBigDataAndAnalytics', e.target.value === 'true')
				}
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
		</label>
		<label className="form-label text-dark">
			Adopt Agile Methodologies:
			<select
				className="form-control border border-3 border-dark"
				value={adoptAgileMethodologies.toString()}
				onChange={(e) =>
					onChange('adoptAgileMethodologies', e.target.value === 'true')
				}
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
		</label>
		<label className="form-label text-dark">
			Embrace Emerging Technologies:
			<select
				className="form-control border border-3 border-dark"
				value={embraceEmergingTechnologies.toString()}
				onChange={(e) =>
					onChange('embraceEmergingTechnologies', e.target.value === 'true')
				}
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
		</label>
		<label className="form-label text-dark">
			Invest in Employee Development:
			<select
				className="form-control border border-3 border-dark"
				value={investInEmployeeDevelopment.toString()}
				onChange={(e) =>
					onChange('investInEmployeeDevelopment', e.target.value === 'true')
				}
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
		</label>
		<br/>
		<button type="button" className="form-button" onClick={onPrevious}>
			Previous
		</button>
		<br/>
		<button type="submit" className="form-button">
			Submit
		</button>
		<br/>
	</>
);

const Form = () => {
	const [step, setStep] = useState(1);
	
	
	const [formData, setFormData] = useState({
		authorName: '',
		company_Name: '',
		company_Email: '',
		deadline: '',
		costTierOne: 0,
		costTierTwo: 0,
		cost_TierThree: 0,
		cost_TierFour: 0,
		marketSize: '',
		businessModel: '',
		descriptions: '',
		targetAudience : '',
		marketingStrategies : '',
		companyValue : 0,
		monthlySpendings: 0,
		monthlyIncome: 0,
		valueOfDebt: 0,
		valueOfLoans: 0,
		yearsOnMarket: 0,
		methodOfValuation: '',
		embraceDigitalTransformation: true,
		enhanceCustomerExperience: true,
		leverageBigDataAndAnalytics: true,
		adoptAgileMethodologies: true,
		embraceEmergingTechnologies: true,
		investInEmployeeDevelopment: true,
	});
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		
		
		try {
			const token = localStorage.getItem('token');
			const response = await fetch('https://localhost:7239/api/offers', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					"Authorization": `Bearer ${token}`
				},
				body: JSON.stringify(formData),
			});
			
			if (response.ok) {
				const offer = await response.json();
				console.log(offer);
			} else {
				console.error('Error:', response.statusText);
			}
		} catch (error) {
			console.error('Error:', error.message);
		}
	};
	
	const handleInputChange = (field, value) => {
		setFormData((prevData) => ({ ...prevData, [field]: value }));
	};
	
	const handleNext = () => {
		setStep((prevStep) => prevStep + 1);
	};
	
	const handlePrevious = () => {
		setStep((prevStep) => prevStep - 1);
	};
	
	
	return (
		<form className="form bg-light-subtle"  onSubmit={handleSubmit}>
			{step === 1 && (
				<FormStep1
					onNext={handleNext}
					onChange={handleInputChange}
					authorName={formData.authorName}
					company_Name={formData.company_Name}
					company_Email={formData.company_Email}
					deadline={formData.deadline}
					costTierOne={formData.costTierOne}
					costTierTwo={formData.costTierTwo}
					cost_TierThree={formData.cost_TierThree}
					cost_TierFour={formData.cost_TierFour}
				/>
			)}
			{step === 2 && (
				<FormStep2
					onNext={handleNext}
					onPrevious={handlePrevious}
					onChange={handleInputChange}
					marketSize={formData.marketSize}
					businessModel={formData.businessModel}
					descriptions={formData.descriptions}
					targetAudience={formData.targetAudience}
					marketingStrategies = {formData.marketingStrategies}
				/>
			)}
			{step === 3 && (
				<FormStep3
					onNext={handleNext}
					onPrevious={handlePrevious}
					onChange={handleInputChange}
					companyValue = {formData.companyValue}
					monthlySpendings = {formData.monthlySpendings}
					monthlyIncome = {formData.monthlyIncome}
					valueOfDebt = {formData.valueOfDebt}
					valueOfLoans = {formData.valueOfLoans}
					yearsOnMarket = {formData.yearsOnMarket}
					methodOfValuation = {formData.methodOfValuation}
				/>
			)}
			{step === 4 && (
				<FormStep4
					onSubmit={handleSubmit}
					onPrevious={handlePrevious}
					onChange={handleInputChange}
					embraceDigitalTransformation = {formData.embraceDigitalTransformation}
					enhanceCustomerExperience = {formData.enhanceCustomerExperience}
					leverageBigDataAndAnalytics = {formData.leverageBigDataAndAnalytics}
					adoptAgileMethodologies = {formData.adoptAgileMethodologies}
					embraceEmergingTechnologies = {formData.embraceEmergingTechnologies}
					investInEmployeeDevelopment = {formData.investInEmployeeDevelopment}
				/>
			)}
		</form>
	);
};

export default Form;