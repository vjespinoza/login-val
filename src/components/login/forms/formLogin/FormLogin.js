import { useEffect } from "react";
//Import components
import { Form } from "../../../shared/Form";
import { Input } from "../../../shared/Input";
import { Button } from "../../../shared/Button";
import { FormTitle } from "../FormTitle";
import { FormFooter } from "../FormFooter";
import { InputLabel } from "../../../shared/InputLabel";
import { InputIcon } from "../../../shared/InputIcon";
import { InputGroup } from "../../../shared/InputGroup";
//Import custom hook
import useFormValidate from "../../../../hooks/useFormValidate";

export const FormLogin = ({
    isActive,
    handleIsActive,
    isValidated,
    setIsValidated,
    showPassword,
    handleShowPassword,
    auth,
    setAuth,
}) => {
    const { data, handleChange, handleSubmnit, handleClick } = useFormValidate({
        isValidated,
        setIsValidated,
        auth,
        setAuth,
    });

    // useEffect(() => {
    //     setTimeout(() => {
    //         if (auth) {
    //             setAuth(true);
    //             setUser(data.email);
    //         }
    //     }, 1000);
    // });

    return (
        <Form isActive={isActive} gradient onSubmit={(e) => handleSubmnit(e)}>
            <FormTitle ligth>Iniciar sesión</FormTitle>
            <InputGroup>
                <Input
                    value={data.email}
                    onChange={(e) => handleChange(e)}
                    ligth
                    name="email"
                    type="email"
                    placeholder="Correo"
                />
                <InputLabel ligth>Email</InputLabel>
            </InputGroup>
            <InputGroup>
                <Input
                    value={data.password}
                    onChange={(e) => handleChange(e)}
                    ligth
                    name="password"
                    type={showPassword.loginPassword ? "text" : "password"}
                    placeholder="Contraseña"
                />
                <InputLabel ligth>Contraseña</InputLabel>
                <InputIcon ligth onClick={(e) => handleShowPassword(e)}>
                    {showPassword.loginPassword ? (
                        <span
                            data-pwd="login-password"
                            className="material-icons"
                        >
                            visibility_off
                        </span>
                    ) : (
                        <span
                            data-pwd="login-password"
                            className="material-icons"
                        >
                            visibility
                        </span>
                    )}
                </InputIcon>
            </InputGroup>
            <Button
                data-btn="login"
                onClick={(e) => handleClick(e)}
                type="submit"
            >
                Iniciar Sesión
            </Button>
            <FormFooter ligth>
                <p>
                    Aún no tienes una cuenta? Completa tu registro{" "}
                    <span onClick={() => handleIsActive()}>aquí</span>.
                </p>
            </FormFooter>
        </Form>
    );
};
