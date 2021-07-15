import Login from "../components/login/login";

const LoginPage = ({ isActive, handleIsActive, setAuth, setUser }) => {
    return (
        <Login
            isActive={isActive}
            handleIsActive={handleIsActive}
            setAuth={setAuth}
            setUser={setUser}
        />
    );
};

export default LoginPage;
