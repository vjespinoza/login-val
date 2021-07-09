//Import sweet alert
import swal from "sweetalert";

export const errorMessage = (errors) => {
	let list = Object.values(errors);
	let text = "";

	if (errors) {
		for (let item of list) {
			text += `* ${item}.\n`;
		}
		swal({
			title: "Algo salió mal!",
			text: text,
			icon: "error",
		});
	}
};

export const successMessage = (data) => {
	if (Object.values(data).every((item) => item !== "") && data.form === "signup") {
		swal({
			title: "Felicidades!",
			text: "Registro creado exitosamente",
			icon: "success",
		});
	}

	if (Object.values(data)[2] !== "" && Object.values(data)[3] !== "" && data.form === "login") {
		swal({
			title: "Bienvenido!",
			text: "Has ingresado a tu cuenta",
			icon: "success",
		});
	}
};
