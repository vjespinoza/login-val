import { useState } from "react";
//Components
import { AppContainer } from "./components/AppContainer";
import Navbar from "./components/navbar/navbar";
//Pages
import Home from "./pages/home";
import LoginPage from "./pages/loginPage";
//Styles
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/globalStyles";
//React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Custom hook
import useFetch from "./hooks/useFetch";

function App() {
    const [isActive, setIsActive] = useState(false);
    const { GET_Data, POST_Data } = useFetch();

    const handleIsActive = () => {
        setIsActive((isActive) => !isActive);
    };

    // console.log(GET_Data);
    console.log(POST_Data);

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Router>
                    <Navbar />
                    <Switch>
                        <AppContainer>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/login">
                                <LoginPage
                                    isActive={isActive}
                                    handleIsActive={handleIsActive}
                                />
                            </Route>
                        </AppContainer>
                    </Switch>
                </Router>
            </ThemeProvider>
        </>
    );
}

export default App;
