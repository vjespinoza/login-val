import Login from "../components/login/login";

const LoginPage = ({
    isActive,
    handleIsActive,
    isValidated,
    setIsValidated,
    auth,
    setAuth,
}) => {
    return (
        <Login
            isActive={isActive}
            handleIsActive={handleIsActive}
            isValidated={isValidated}
            setIsValidated={setIsValidated}
            auth={auth}
            setAuth={setAuth}
        />
    );
};

export default LoginPage;
