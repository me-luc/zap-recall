import Question from "./Question";
import { QuestionsBox } from "./questions-styles";

export default function Questions({
	questions,
	finishedQuestions,
	setFinishedQuestions,
}) {
	return (
		<QuestionsBox>
			{questions.map((item, index) => (
				<Question
					index={index + 1}
					question={item.question}
					answer={item.answer}
					finishedQuestions={finishedQuestions}
					setFinishedQuestions={setFinishedQuestions}
				/>
			))}
		</QuestionsBox>
	);
}
