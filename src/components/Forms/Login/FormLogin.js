//Import components
import { Form } from "../../shared/Form";
import { Input } from "../../shared/Input";
import { Button } from "../../shared/Button";
import { FormTitle } from "../FormTitle";
//Import custom hook
import useFormValidate from "../../../hooks/useFormValidate";

export const FormLogin = () => {
	const { data, handleChange, handleSubmnit } = useFormValidate();

	return (
		<Form gradient onSubmit={(e) => handleSubmnit(e)}>
			<FormTitle ligth>Iniciar sesión</FormTitle>
			<Input
				value={data.email}
				onChange={(e) => handleChange(e)}
				ligth
				name="email"
				type="email"
				placeholder="Correo"
			/>
			<Input
				value={data.password}
				onChange={(e) => handleChange(e)}
				ligth
				name="password"
				type="password"
				placeholder="Contraseña"
			/>
			<Button type="submit">Iniciar Sesión</Button>
		</Form>
	);
};
