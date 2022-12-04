import { StyledQuestion, Title } from "./questions-styles";
import playButton from "../assets/img/seta_play.png";
import errorImg from "../assets/img/icone_erro.png";
import correctImg from "../assets/img/icone_certo.png";
import almostImg from "../assets/img/icone_quase.png";

export default function ScreenQuestionNumber({
	index,
	setCardState,
	cardState,
	status,
}) {
	function handleClick() {
		if (cardState === 1) {
			setCardState(cardState + 1);
		}
	}
	const imgArr = [playButton, errorImg, almostImg, correctImg];
	return (
		<StyledQuestion status={status}>
			<Title>
				{"QUESTION"} {index}
			</Title>
			<img src={imgArr[status]} alt="play button" onClick={handleClick} />
		</StyledQuestion>
	);
}
