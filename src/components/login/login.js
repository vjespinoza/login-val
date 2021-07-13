import { FormsContainer } from "../../components/login/forms/FormsContainer";
import { FormLogin } from "../../components/login/forms/formLogin/FormLogin";
import { FormSignup } from "../../components/login/forms/formSignup/FormSignup";
import {
    BannerContainer,
    BannerImage,
} from "../../components/login/forms/FormBanner";
import svg1 from "../../assets/svg/Login.svg";
import svg2 from "../../assets/svg/Signup.svg";
//Custom hook
import useShowPassword from "../../hooks/useShowPassword";

const Login = ({ isActive, handleIsActive }) => {
    const { showPassword, handleShowPassword } = useShowPassword();

    return (
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
    );
};

export default Login;
