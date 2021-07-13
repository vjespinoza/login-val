import Login from "../components/login/login";

const LoginPage = ({ isActive, handleIsActive }) => {
    return <Login isActive={isActive} handleIsActive={handleIsActive} />;
};

export default LoginPage;
