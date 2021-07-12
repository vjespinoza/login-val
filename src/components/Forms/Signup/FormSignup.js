import { Form } from "../../shared/Form";
import { Input } from "../../shared/Input";
import { Button } from "../../shared/Button";
import { FormTitle } from "../FormTitle";
import { FormFooter } from "../FormFooter";
import { InputLabel } from "../../shared/InputLabel";
import { InputIcon } from "../../shared/InputIcon";
import { InputGroup } from "../../shared/InputGroup";

//Import custom hook
import useFormValidate from "../../../hooks/useFormValidate";

export const FormSignup = ({ handleIsActive, isActive, showPassword, handleShowPassword }) => {
	const { data, handleChange, handleSubmnit, handleClick } = useFormValidate();

	return (
		<Form isActive={isActive} onSubmit={(e) => handleSubmnit(e)}>
			<FormTitle>Registrarse</FormTitle>
			<InputGroup>
				<Input
					value={data.name}
					name="name"
					onChange={(e) => handleChange(e)}
					primary
					type="text"
					placeholder="Nombre"
				/>
				<InputLabel>Nombre</InputLabel>
			</InputGroup>
			<InputGroup>
				<Input
					value={data.email}
					name="email"
					onChange={(e) => handleChange(e)}
					primary
					type="email"
					placeholder="Correo"
				/>
				<InputLabel>Correo Electrónico</InputLabel>
			</InputGroup>
			<InputGroup>
				<Input
					value={data.password}
					name="password"
					onChange={(e) => handleChange(e)}
					primary
					type={showPassword.newPassword ? "text" : "password"}
					placeholder="Contraseña"
				/>
				<InputLabel>Contraseña</InputLabel>
				<InputIcon onClick={(e) => handleShowPassword(e)}>
					{showPassword.newPassword ? (
						<span data-pwd="new-password" className="material-icons">
							visibility_off
						</span>
					) : (
						<span data-pwd="new-password" className="material-icons">
							visibility
						</span>
					)}
				</InputIcon>
			</InputGroup>
			<InputGroup>
				<Input
					value={data.password2}
					name="password2"
					onChange={(e) => handleChange(e)}
					primary
					type={showPassword.confirmPassword ? "text" : "password"}
					placeholder="Confirmar contraseña"
				/>
				<InputLabel>Confirmar Contraseña</InputLabel>
				<InputIcon onClick={(e) => handleShowPassword(e)}>
					{showPassword.confirmPassword ? (
						<span data-pwd="confirm-password" className="material-icons">
							visibility_off
						</span>
					) : (
						<span data-pwd="confirm-password" className="material-icons">
							visibility
						</span>
					)}
				</InputIcon>
			</InputGroup>
			<Button data-btn="signup" onClick={(e) => handleClick(e)} primary type="submit">
				Registrarse
			</Button>
			<FormFooter>
				<p>
					Ya tienes una cuenta? Inicia sesión{" "}
					<span onClick={() => handleIsActive()}>aquí</span>.
				</p>
			</FormFooter>
		</Form>
	);
};
