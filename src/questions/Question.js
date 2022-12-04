import { useState } from "react";
import ScreenShowAnswer from "./ScreenShowAnswer";
import ScreenAskQuestion from "./ScreenAskQuestion";
import ScreenQuestionNumber from "./ScreenQuestionNumber";

export default function Question({
	index,
	question,
	answer,
	finishedQuestions,
	setFinishedQuestions,
}) {
	const [cardState, setCardState] = useState(1);
	// 0-initial | 1-question | 2-answer | 3-question status
	const [status, setStatus] = useState(0);
	//1-Não lembrei | 2-Quase não lembrei | 3-Zap!

	switch (cardState) {
		case 1:
			return (
				<ScreenQuestionNumber
					index={index}
					status={status}
					cardState={cardState}
					setCardState={setCardState}
				/>
			);
		case 2:
			return (
				<ScreenAskQuestion
					question={question}
					cardState={cardState}
					setCardState={setCardState}
				/>
			);
		case 3:
			return (
				<ScreenShowAnswer
					answer={answer}
					cardState={cardState}
					setCardState={setCardState}
					setStatus={setStatus}
					finishedQuestions={finishedQuestions}
					setFinishedQuestions={setFinishedQuestions}
				/>
			);
		case 4:
			return (
				<ScreenQuestionNumber
					index={index}
					cardState={cardState}
					setCardState={setCardState}
					status={status}
				/>
			);
		default:
			return <ScreenQuestionNumber index={"DEFAULT"} />;
	}
}
