import styled from "styled-components";

export const StyledButtonModel = styled.div`
	button {
		width: 120px;
		min-width: 80px;
		height: 38px;

		background: ${(props) => props.color};
		border-radius: 5px;

		font-family: "Recursive";
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;

		color: #ffffff;

		@media (max-width: 1030px) {
			width: 80px;
		}
	}
`;

function handleStatus(status) {
	switch (status) {
		case 0:
			console.log("BLACK");
			return "#000";
		case 1:
			console.log("RED");
			return "#FF3030";
		case 2:
			console.log("ORANGE");
			return "#FF922E";
		case 3:
			console.log("GREEN");
			return "#2FBE34";
		default:
			return "#000";
	}
}

export const StyledQuestion = styled.div`
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
		${(props) => !props.status && "cursor: pointer;"}
		width: 20px;
		height: 23px;
		margin-left: 15px;
	}

	p {
		color: ${(props) => handleStatus(props.status)};
		${(props) => props.status && "text-decoration-line: line-through;"}
	}

	@media (min-width: 700px) {
		width: 40vw;
	}
`;

export const StyledShowAnswer = styled(StyledQuestion)`
	height: 140px;
	flex-direction: column;
	height: 130px;

	background: #ffffd5;

	button {
		cursor: pointer;
		margin: 5px;
	}

	.button-options {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
`;

export const Title = styled.p`
	font-family: "Recursive";
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;

	color: #333333;
`;

export const QuestionsBox = styled.div`
	height: 780px;
	overflow: hidden;
	overflow-y: scroll;

	margin-bottom: 40px;

	@media (max-height: 850px) {
		height: 520px;
		overflow-y: scroll;
	}
`;

export const StyledAskQuestion = styled(StyledQuestion)`
	display: block;

	height: 140px;
	width: auto;
	background: #ffffd5;

	img {
		float: right;
	}
`;
