//Import components
import { Form } from "../../shared/Form";
import { Input } from "../../shared/Input";
import { Button } from "../../shared/Button";
import { FormTitle } from "../FormTitle";
import { FormFooter } from "../FormFooter";
//Import custom hook
import useFormValidate from "../../../hooks/useFormValidate";

export const FormLogin = ({ handleIsActive }) => {
	const { data, handleChange, handleSubmnit, handleClick } = useFormValidate();

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
			<Button data-btn="login" onClick={(e) => handleClick(e)} type="submit">
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
