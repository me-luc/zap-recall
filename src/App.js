import styled from "styled-components";
import Header from "./header/Header";
import Questions from "./questions/Questions";
import Footer from "./footer/Footer";

import "./assets/css/reset.css";

function App() {
	return (
		<StyledApp>
			<Header />
			<Questions />
			<Footer />
		</StyledApp>
	);
}

export default App;

const StyledApp = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #fb6b6b;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
