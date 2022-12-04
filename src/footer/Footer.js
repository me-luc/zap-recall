import { StyledFooter, StyledText } from "./footer-styles";

export default function Footer({ totalQuestions, finishedQuestions }) {
	return (
		<StyledFooter>
			<StyledText data-test="footer">
				{finishedQuestions}/{totalQuestions} CONCLUÍDOS
			</StyledText>
		</StyledFooter>
	);
}
