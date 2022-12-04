import { StyledButtonModel, StyledShowAnswer, Title } from "./questions-styles";

export default function ScreenShowAnswer({
	answer,
	setStatus,
	setCardState,
	cardState,
	finishedQuestions,
	setFinishedQuestions,
}) {
	function handleClick(statusNumber) {
		try {
			setStatus(statusNumber);
			setCardState(cardState + 1);
			setFinishedQuestions(finishedQuestions + 1);
		} catch (error) {
			console.log("ERROR IN SHOWING ANSWER");
		}
	}
	return (
		<StyledShowAnswer data-test="flashcard">
			<Title data-test="flashcard-text">{answer}</Title>
			<div className="button-options">
				<StyledButton color={"#FF3030"}>
					<button onClick={() => handleClick(1)} data-test="no-btn">
						{" "}
						Não lembrei
					</button>
				</StyledButton>
				<StyledButton color={"#FF922E"}>
					<button
						onClick={() => handleClick(2)}
						data-test="partial-btn">
						Quase não lembrei
					</button>
				</StyledButton>
				<StyledButton color={"#2FBE34"}>
					<button onClick={() => handleClick(3)} data-test="zap-btn">
						{" "}
						Zap!
					</button>
				</StyledButton>
			</div>
		</StyledShowAnswer>
	);
}

function StyledButton({ children, color }) {
	return <StyledButtonModel color={color}>{children}</StyledButtonModel>;
}
