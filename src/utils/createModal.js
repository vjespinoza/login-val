//Import sweet alert
import swal from "sweetalert";

export const createModal = (errors, data) => {
	let list = Object.values(errors);
	let text = "";

	console.log(Object.values(data));

	if (errors) {
		for (let item of list) {
			text += `* ${item}.\n`;
		}
		swal({
			title: "Algo salió mal!",
			text: text,
			icon: "error",
		});
	} else {
		alert(111);
	}

	// console.log(Object.values(errors).length);
	// console.log(errors.length);
	if (Object.values(data)[1] !== "") {
		swal({
			title: "Bienvenido!",
			text: "Registro creado exitosamente",
			icon: "success",
		});
	}
};
