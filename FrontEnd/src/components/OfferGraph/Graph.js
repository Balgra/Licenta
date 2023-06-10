import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Graphs.css';

import Chart from 'chart.js/auto';

const Graphs = ({ offer }) => {
	useEffect(() => {
		const ctx = document.getElementById('myChart');
		const myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: [
					'Risk Factor',
					'Company Value',
					'Monthly Income',
					'Monthly Spendings',
					'Value of Debt',
					'Value of Loans',
					
				],
				datasets: [
					{
						data: [
							offer.description.riskFactors,
							offer.financial.companyValue,
							offer.financial.monthlyIncome,
							offer.financial.monthlySpendings,
							offer.financial.valueOfDebt,
							offer.financial.valueOfLoans,
						],
						lineTension: 0,
						backgroundColor: 'transparent',
						borderColor: '#007bff',
						borderWidth: 5,
						pointBackgroundColor: '#007bff'
					}
				]
			},
			options: {
				plugins: {
					legend: {
						display: false
					},
					tooltip: {
						boxPadding: 3
					}
				}
			}
		});
		// Cleanup chart instance on component unmount
		return () => {
			myChart.destroy();
		};
		
	}, [offer.description.riskFactors, offer.financial.companyValue, offer.financial.monthlyIncome, offer.financial.monthlySpendings, offer.financial.valueOfDebt, offer.financial.valueOfLoans,]);
	
	return (
		<div className="d-flex justify-content-center align-items-center h-100">
			<div className="col-md-6 ms-sm-auto col-lg-10 px-md-4 mx-auto">
				<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
					<h1 className="h2">Dashboard</h1>
				</div>
				
				<canvas className="my-4 w-100" id="myChart" width="1000" height="400" />
			</div>
		</div>
	);
};

export default Graphs;