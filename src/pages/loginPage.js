import styled from "styled-components";
import Login from "../components/login/login";
import { AppContainer } from "../components/AppContainer";

const LoginPageContainer = styled(AppContainer)`
    height: 100vh;
    padding-top: 65px;
`;

const LoginPage = ({
    isActive,
    handleIsActive,
    isValidated,
    setIsValidated,
    auth,
    setAuth,
}) => {
    return (
        <LoginPageContainer>
            <Login
                isActive={isActive}
                handleIsActive={handleIsActive}
                isValidated={isValidated}
                setIsValidated={setIsValidated}
                auth={auth}
                setAuth={setAuth}
            />
        </LoginPageContainer>
    );
};

export default LoginPage;
