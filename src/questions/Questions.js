import Question from "./Question";

export default function Questions({ questions }) {
	return (
		<div>
			<Question index={"1"} />
			{questions.map((item, index) => (
				<Question index={index} question={item.question} />
			))}
		</div>
	);
}
