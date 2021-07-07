import { Form } from "../../shared/Form";
import { Input } from "../../shared/Input";
import { Button } from "../../shared/Button";
import { FormTitle } from "../FormTitle";

export const FormSignup = () => {
	return (
		<Form>
			<FormTitle>Registrarse</FormTitle>
			<Input primary type="text" placeholder="Nombre" />
			<Input primary type="email" placeholder="Correo" />
			<Input primary type="password" placeholder="Contraseña" />
			<Input primary type="password" placeholder="Confirmar contraseña" />
			<Button primary type="submit">
				Registrarse
			</Button>
		</Form>
	);
};
