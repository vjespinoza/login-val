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
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

function App() {
    const [isActive, setIsActive] = useState(false);
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState("");

    const handleIsActive = () => {
        setIsActive((isActive) => !isActive);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Router>
                    <Navbar />
                    <Switch>
                        <AppContainer>
                            <Route exact path="/">
                                {auth ? (
                                    <Redirect to="/home" />
                                ) : (
                                    <LoginPage
                                        isActive={isActive}
                                        handleIsActive={handleIsActive}
                                        setAuth={setAuth}
                                        setUser={setUser}
                                    />
                                )}
                            </Route>
                            <Route path="/home">
                                {!auth ? (
                                    <Redirect to="/" />
                                ) : (
                                    <Home user={user} />
                                )}
                            </Route>
                        </AppContainer>
                    </Switch>
                </Router>
            </ThemeProvider>
        </>
    );
}

export default App;
