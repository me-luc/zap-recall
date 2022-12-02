import Question from "./Question";
import { QuestionsBox } from "./questions-styles";

export default function Questions({ questions }) {
	return (
		<QuestionsBox>
			{questions.map((item, index) => (
				<Question
					index={index}
					question={item.question}
					answer={item.answer}
				/>
			))}
		</QuestionsBox>
	);
}
