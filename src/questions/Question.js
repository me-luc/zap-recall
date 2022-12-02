import { useState } from "react";
import playButton from "../assets/img/seta_play.png";
import turnAround from "../assets/img/seta_virar.png";

import {
	StyledButton,
	Title,
	StyledQuestion,
	StyledAskQuestion,
	StyledShowAnswer,
} from "./questions-styles";

export default function Question({ index, question, answer }) {
	const [cardState, setCardState] = useState(0);
	// 0-initial | 1-question | 2-answer | 3-question status
	const [status, setStatus] = useState("");
	//1-Não lembrei | 2-Quase não lembrei | 3-Zap!

	switch (cardState) {
		case 0:
			return (
				<QuestionNumber
					cardState={cardState}
					setCardState={setCardState}
				/>
			);
		case 1:
			return (
				<AskQuestion
					question={question}
					cardState={cardState}
					setCardState={setCardState}
				/>
			);
		case 2:
			return (
				<ShowAnswer
					answer={answer}
					cardState={cardState}
					setCardState={setCardState}
					setStatus={setStatus}
				/>
			);
		case 3:
			return (
				<QuestionNumber
					status={status}
					cardState={cardState}
					setCardState={setCardState}
				/>
			);
		default:
			return <QuestionNumber>Erro ao renderizar</QuestionNumber>;
	}
}

function QuestionNumber({ index, setCardState, cardState }) {
	return (
		<StyledQuestion>
			<Title>QUESTION {index}</Title>
			<img
				src={playButton}
				alt="play button"
				onClick={() => setCardState(cardState + 1)}
			/>
		</StyledQuestion>
	);
}

function AskQuestion({ question, setCardState, cardState }) {
	return (
		<StyledAskQuestion>
			<Title>{question}</Title>
			<img
				src={turnAround}
				alt="turn around button"
				onClick={() => setCardState(cardState + 1)}
			/>
		</StyledAskQuestion>
	);
}

function ShowAnswer({ answer, setStatus, setCardState, cardState }) {
	return (
		<StyledShowAnswer>
			<Title>{answer}</Title>
			<div className="button-options">
				<Button color={"#FF3030"} onClick={""}>
					Não lembrei
				</Button>
				<Button color={"#FF922E"} onClick={setStatus(2)}>
					Quase não lembrei
				</Button>
				<Button color={"#2FBE34"} onClick={setStatus(3)}>
					Zap!
				</Button>
			</div>
		</StyledShowAnswer>
	);
}

function Button({ children, color }) {
	return <StyledButton color={color}>{children}</StyledButton>;
}
