import { useState } from "react";

//Components
import { AppContainer } from "./components/AppContainer";
import { FormsContainer } from "./components/Forms/FormsContainer";
import { FormLogin } from "./components/Forms/Login/FormLogin";
import { FormSignup } from "./components/Forms/Signup/FormSignup";
import { BannerContainer, BannerImage } from "./components/Forms/FormBanner";
import svg1 from "./assets/svg/Login.svg";
import svg2 from "./assets/svg/Signup.svg";

//Styles
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyles } from "./globalStyles";

function App() {
	const [isActive, setIsActive] = useState(false);
	const [showPassword, setShowPassword] = useState({
		newPassword: false,
		confirmPassword: false,
		loginPassword: false,
	});

	const handleIsActive = () => {
		setIsActive((isActive) => !isActive);
	};

	const handleShowPassword = (e) => {
		const { pwd } = e.target.dataset;
		if (pwd === "new-password") {
			setShowPassword(
				!showPassword.newPassword
					? { ...showPassword, newPassword: true }
					: { ...showPassword, newPassword: false }
			);
		}
		if (pwd === "confirm-password") {
			setShowPassword(
				!showPassword.confirmPassword
					? { ...showPassword, confirmPassword: true }
					: { ...showPassword, confirmPassword: false }
			);
		}
		if (pwd === "login-password") {
			setShowPassword(
				!showPassword.loginPassword
					? { ...showPassword, loginPassword: true }
					: { ...showPassword, loginPassword: false }
			);
		}
	};

	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<AppContainer>
					<FormsContainer isActive={isActive}>
						<FormSignup
							isActive={!isActive}
							handleIsActive={handleIsActive}
							showPassword={showPassword}
							handleShowPassword={handleShowPassword}
						/>
						<BannerContainer isActive={isActive} rigth>
							<BannerImage src={svg1} />
						</BannerContainer>
						<FormLogin
							isActive={isActive}
							handleIsActive={handleIsActive}
							showPassword={showPassword}
							handleShowPassword={handleShowPassword}
						/>
						<BannerContainer isActive={!isActive}>
							<BannerImage src={svg2} />
						</BannerContainer>
					</FormsContainer>
				</AppContainer>
			</ThemeProvider>
		</>
	);
}

export default App;
