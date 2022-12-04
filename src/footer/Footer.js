import { StyledFooter, StyledText } from "./footer-styles";

export default function Footer({ totalQuestions, finishedQuestions }) {
	return (
		<StyledFooter>
			<StyledText>
				{finishedQuestions}/{totalQuestions} CONCLUÍDOS
			</StyledText>
		</StyledFooter>
	);
}
