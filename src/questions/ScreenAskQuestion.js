import { StyledAskQuestion, Title } from "./questions-styles";
import turnAround from "../assets/img/seta_virar.png";

export default function ScreenAskQuestion({
	question,
	setCardState,
	cardState,
}) {
	function handleClick() {
		try {
			setCardState(cardState + 1);
		} catch (error) {
			console.log("ERROR IN ASKING QUESTION");
		}
	}
	return (
		<StyledAskQuestion>
			<Title>{question}</Title>
			<img
				src={turnAround}
				alt="turn around button"
				onClick={handleClick}
			/>
		</StyledAskQuestion>
	);
}
