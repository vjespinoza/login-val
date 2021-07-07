//Components
import { AppContainer } from "./components/AppContainer";
import { FormsContainer } from "./components/Forms/FormsContainer";
import { FormLogin } from "./components/Forms/Login/FormLogin";
import { FormSignup } from "./components/Forms/Signup/FormSignup";

//Styles
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyles } from "./globalStyles";

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<AppContainer>
					<FormsContainer>
						<FormSignup />
						<FormLogin />
					</FormsContainer>
				</AppContainer>
			</ThemeProvider>
		</>
	);
}

export default App;
