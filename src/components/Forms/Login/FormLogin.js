import { Form } from "../../shared/Form";
import { Input } from "../../shared/Input";
import { Button } from "../../shared/Button";
import { FormTitle } from "../FormTitle";

export const FormLogin = () => {
	return (
		<Form gradient>
			<FormTitle ligth>Iniciar sesión</FormTitle>
			<Input ligth type="email" placeholder="Correo" />
			<Input ligth type="password" placeholder="Contraseña" />
			<Button type="submit">Iniciar Sesión</Button>
		</Form>
	);
};
