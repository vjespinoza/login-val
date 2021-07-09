import { useState, useEffect } from "react";
//Inport validation utility
import { validate } from "../utils/validate";
import { errorMessage, successMessage } from "../utils/createModal";

const useFormValidate = () => {
	const [data, setData] = useState({
		form: "",
		name: "",
		email: "",
		password: "",
		password2: "",
	});

	const [error, setError] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value,
		});
	};

	const handleSubmnit = (e) => {
		e.preventDefault();

		setError(validate(data));
	};

	const handleClick = (e) => {
		const { btn } = e.target.dataset;
		setData({
			...data,
			form: btn,
		});
	};

	useEffect(() => {
		if (Object.values(error).length !== 0) {
			errorMessage(error);
		} else {
			successMessage(data);
			setData({
				form: "",
				name: "",
				email: "",
				password: "",
				password2: "",
			});
		}
	}, [error]);

	return { data, error, handleChange, handleSubmnit, handleClick };
};

export default useFormValidate;
