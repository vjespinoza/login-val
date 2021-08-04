import { useState, useEffect } from "react";
//Components
import { AppContainer } from "./components/AppContainer";
import Navbar from "./components/navbar/navbar";
//Pages
import Home from "./pages/home";
import LoginPage from "./pages/loginPage";
import Store from "./pages/store";
import Cart from "./pages/cart";
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
    const [isValidated, setIsValidated] = useState({
        loginForm: false,
        signupForm: false,
    });
    const [auth, setAuth] = useState({
        token: sessionStorage.ACCESS_TOKEN
            ? JSON.parse(sessionStorage.ACCESS_TOKEN)
            : "",
        user: sessionStorage.USER ? JSON.parse(sessionStorage.USER) : "",
    });
    const [cart, setCart] = useState(
        sessionStorage.CART ? JSON.parse(sessionStorage.CART) : []
    );

    useEffect(() => {
        sessionStorage.setItem("ACCESS_TOKEN", JSON.stringify(auth.token));
        sessionStorage.setItem("USER", JSON.stringify(auth.user));
        sessionStorage.setItem("CART", JSON.stringify(cart));
    }, [auth, cart]);

    const handleIsActive = () => {
        setIsActive((isActive) => !isActive);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Router>
                    <Navbar auth={auth} setAuth={setAuth} setCart={setCart} />
                    <Switch>
                        <AppContainer>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/login">
                                {auth.token ? (
                                    <Redirect to="/store" />
                                ) : (
                                    <LoginPage
                                        isActive={isActive}
                                        handleIsActive={handleIsActive}
                                        isValidated={isValidated}
                                        setIsValidated={setIsValidated}
                                        auth={auth}
                                        setAuth={setAuth}
                                    />
                                )}
                            </Route>
                            <Route path="/store">
                                {!auth.token ? (
                                    <Redirect to="/" />
                                ) : (
                                    <Store cart={cart} setCart={setCart} />
                                )}
                            </Route>
                            <Route path="/cart">
                                {!auth.token ? (
                                    <Redirect to="/" />
                                ) : (
                                    <Cart cart={cart} setCart={setCart} />
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
