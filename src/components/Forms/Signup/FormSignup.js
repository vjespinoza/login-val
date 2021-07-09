import { Form } from "../../shared/Form";
import { Input } from "../../shared/Input";
import { Button } from "../../shared/Button";
import { FormTitle } from "../FormTitle";
//Import custom hook
import useFormValidate from "../../../hooks/useFormValidate";

export const FormSignup = () => {
	const { data, handleChange, handleSubmnit, handleClick } = useFormValidate();

	return (
		<Form onSubmit={(e) => handleSubmnit(e)}>
			<FormTitle>Registrarse</FormTitle>
			<Input
				value={data.name}
				name="name"
				onChange={(e) => handleChange(e)}
				primary
				type="text"
				placeholder="Nombre"
			/>
			<Input
				value={data.email}
				name="email"
				onChange={(e) => handleChange(e)}
				primary
				type="email"
				placeholder="Correo"
			/>
			<Input
				value={data.password}
				name="password"
				onChange={(e) => handleChange(e)}
				primary
				type="password"
				placeholder="Contraseña"
			/>
			<Input
				value={data.password2}
				name="password2"
				onChange={(e) => handleChange(e)}
				primary
				type="password"
				placeholder="Confirmar contraseña"
			/>
			<Button data-btn="signup" onClick={(e) => handleClick(e)} primary type="submit">
				Registrarse
			</Button>
		</Form>
	);
};
