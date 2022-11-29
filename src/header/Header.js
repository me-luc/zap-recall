import logo from "../assets/img/logo.png";
import { StyledHeader } from "./header-styles";

export default function Header() {
	return (
		<StyledHeader>
			<img src={logo} alt="" />
			<h1>Zap Recall</h1>
		</StyledHeader>
	);
}
