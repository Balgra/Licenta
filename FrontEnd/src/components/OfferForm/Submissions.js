import Display from "./Display";

const Submissions = ({ submissions }) => {
	return (
		<div>
			{submissions.map((submission, index) => (
				<Display key={index} data={submission} />
			))}
		</div>
	);
};

export default Submissions;