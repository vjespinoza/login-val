import { useState, useEffect } from "react";
//Inport validation utility
import { validate } from "../utils/validate";
import { createModal } from "../utils/createModal";

const useFormValidate = () => {
	const [data, setData] = useState({
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

	useEffect(() => {
		if (Object.values(error).length > 0) {
			createModal(error, data);
			// setError({});
		}
	}, [error]);

	return { data, error, handleChange, handleSubmnit };
};

export default useFormValidate;
