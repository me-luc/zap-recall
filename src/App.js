import styled from "styled-components";
import Header from "./header/Header";
import Questions from "./questions/Questions";
import Footer from "./footer/Footer";

import questions from "./questions";

import "./assets/css/reset.css";
import GlobalStyle from "./globalStyles";

function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Questions questions={questions} />
			<Footer />
		</>
	);
}

export default App;
