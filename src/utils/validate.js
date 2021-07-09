export const validate = (data) => {
	const errors = {};

	const nameVal = /^[a-z ,.'-]+$/gi;
	const emailVal = /\S+@\S+\.\S+/g;

	//Validates empty name input field
	if (!data.name) {
		errors.name = "Debes ingresar tu nombre";
		//Prevents name inputs with number or special chars
	} else if (!nameVal.test(data.name)) {
		errors.name = "Tu nombre no debe contener números o caracteres especiales";
	}

	//Validates empty email input field
	if (!data.email) {
		errors.email = "Debes ingresar una dirección de correo eletrónico";
		//Checks valid email address
	} else if (!emailVal.test(data.email)) {
		errors.email = "La dirección de correo eletrónico no es valida";
	}

	//Validates empty password input field
	if (!data.password) {
		errors.password = "Debes ingresar una contraseña";
	} else if (data.password.length < 6) {
		//Checks if password has 6 chars minimum
		errors.password = "La contraseña debe contener más de 6 caracteres";
	}

	//Validates empty password input field
	if (!data.password2) {
		errors.password2 = "Debes confirmar la contraseña";
	} else if (data.password !== data.password2) {
		//Checks if password2 has 6 chars minimum
		errors.password2 = "Las contraseñas no coinciden";
	}

	return errors;
};
