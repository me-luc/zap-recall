import Header from "./header/Header";
import Questions from "./questions/Questions";
import Footer from "./footer/Footer";
import { useState } from "react";

import questions from "./questions";
import GlobalStyle from "./globalStyles";

function App() {
	const totalQuestions = questions.length;
	const [finishedQuestions, setFinishedQuestions] = useState(0);
	return (
		<>
			<GlobalStyle />
			<Header />
			<Questions
				questions={questions}
				finishedQuestions={finishedQuestions}
				setFinishedQuestions={setFinishedQuestions}
			/>
			<Footer
				totalQuestions={totalQuestions}
				finishedQuestions={finishedQuestions}
			/>
		</>
	);
}

export default App;
