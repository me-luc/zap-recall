import styled from "styled-components";
import playButton from "../assets/img/seta_play.png";

export default function Question({ index, question }) {
	return (
		<StyledQuestion>
			<Title>
				QUESTION {index} - {question}
			</Title>
			<img src={playButton} alt="play button" />
		</StyledQuestion>
	);
}

const StyledQuestion = styled.div`
	width: 300px;
	height: 65px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;

	box-sizing: border-box;
	padding: 25px;

	background: #ffffff;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
	border-radius: 5px;

	img {
		cursor: pointer;
		width: 20px;
		height: 23px;
		margin-left: 15px;
	}

	@media (min-width: 700px) {
		width: 40vw;
	}
`;

const Title = styled.p`
	font-family: "Recursive";
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;

	color: #333333;
`;
