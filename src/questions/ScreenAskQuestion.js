import { StyledAskQuestion, Title } from "./questions-styles";
import turnAround from "../assets/img/seta_virar.png";

export default function ScreenAskQuestion({
	question,
	setCardState,
	cardState,
}) {
	function handleClick() {
		setCardState(cardState + 1);
	}
	return (
		<StyledAskQuestion data-test="flashcard">
			<Title data-test="flashcard-text">{question}</Title>
			<img
				src={turnAround}
				alt="turn around button"
				onClick={handleClick}
				data-test="turn-btn"
			/>
		</StyledAskQuestion>
	);
}
